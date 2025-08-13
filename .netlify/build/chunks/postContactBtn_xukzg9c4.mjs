import { C as CONTENT_LAYER_TYPE, d as defineCollection, b as reference } from './_astro_content_CDBseT-m.mjs';
import { existsSync, promises } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import yaml from 'js-yaml';
import { A as AstroError, F as FileGlobNotSupported, e as FileParserNotFound, a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CzyFbPgW.mjs';
import path, { relative } from 'node:path';
import '@astrojs/markdown-remark';
import { slug } from 'github-slugger';
import { bold, green } from 'kleur/colors';
import 'xxhash-wasm';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { slash } from '@astrojs/internal-helpers/path';
import 'common-ancestor-path';
import './index_DfOMS8cV.mjs';
import pLimit from 'p-limit';
import picomatch from 'picomatch';
import { glob as glob$1 } from 'tinyglobby';
import 'clsx';
import { g as getLangFromUrl } from './Layout_kr5rve1c.mjs';

const isWindows = typeof process !== "undefined" && process.platform === "win32";
function normalizePath(id) {
  return path.posix.normalize(isWindows ? slash(id) : id);
}

function generateIdDefault({ entry, base, data }) {
  if (data.slug) {
    return data.slug;
  }
  const entryURL = new URL(encodeURI(entry), base);
  const { slug } = getContentEntryIdAndSlug({
    entry: entryURL,
    contentDir: base,
    collection: ""
  });
  return slug;
}
function checkPrefix(pattern, prefix) {
  if (Array.isArray(pattern)) {
    return pattern.some((p) => p.startsWith(prefix));
  }
  return pattern.startsWith(prefix);
}
function glob(globOptions) {
  if (checkPrefix(globOptions.pattern, "../")) {
    throw new Error(
      "Glob patterns cannot start with `../`. Set the `base` option to a parent directory instead."
    );
  }
  if (checkPrefix(globOptions.pattern, "/")) {
    throw new Error(
      "Glob patterns cannot start with `/`. Set the `base` option to a parent directory or use a relative path instead."
    );
  }
  const generateId = globOptions?.generateId ?? generateIdDefault;
  const fileToIdMap = /* @__PURE__ */ new Map();
  return {
    name: "glob-loader",
    load: async ({ config, logger, watcher, parseData, store, generateDigest, entryTypes }) => {
      const renderFunctionByContentType = /* @__PURE__ */ new WeakMap();
      const untouchedEntries = new Set(store.keys());
      const isLegacy = globOptions._legacy;
      const emulateLegacyCollections = !config.legacy.collections;
      async function syncData(entry, base, entryType, oldId) {
        if (!entryType) {
          logger.warn(`No entry type found for ${entry}`);
          return;
        }
        const fileUrl = new URL(encodeURI(entry), base);
        const contents = await promises.readFile(fileUrl, "utf-8").catch((err) => {
          logger.error(`Error reading ${entry}: ${err.message}`);
          return;
        });
        if (!contents && contents !== "") {
          logger.warn(`No contents found for ${entry}`);
          return;
        }
        const { body, data } = await entryType.getEntryInfo({
          contents,
          fileUrl
        });
        const id = generateId({ entry, base, data });
        if (oldId && oldId !== id) {
          store.delete(oldId);
        }
        let legacyId;
        if (isLegacy) {
          const entryURL = new URL(encodeURI(entry), base);
          const legacyOptions = getContentEntryIdAndSlug({
            entry: entryURL,
            contentDir: base,
            collection: ""
          });
          legacyId = legacyOptions.id;
        }
        untouchedEntries.delete(id);
        const existingEntry = store.get(id);
        const digest = generateDigest(contents);
        const filePath2 = fileURLToPath(fileUrl);
        if (existingEntry && existingEntry.digest === digest && existingEntry.filePath) {
          if (existingEntry.deferredRender) {
            store.addModuleImport(existingEntry.filePath);
          }
          if (existingEntry.assetImports?.length) {
            store.addAssetImports(existingEntry.assetImports, existingEntry.filePath);
          }
          fileToIdMap.set(filePath2, id);
          return;
        }
        const relativePath2 = posixRelative(fileURLToPath(config.root), filePath2);
        const parsedData = await parseData({
          id,
          data,
          filePath: filePath2
        });
        if (entryType.getRenderFunction) {
          if (isLegacy && data.layout) {
            logger.error(
              `The Markdown "layout" field is not supported in content collections in Astro 5. Ignoring layout for ${JSON.stringify(entry)}. Enable "legacy.collections" if you need to use the layout field.`
            );
          }
          let render = renderFunctionByContentType.get(entryType);
          if (!render) {
            render = await entryType.getRenderFunction(config);
            renderFunctionByContentType.set(entryType, render);
          }
          let rendered = void 0;
          try {
            rendered = await render?.({
              id,
              data,
              body,
              filePath: filePath2,
              digest
            });
          } catch (error) {
            logger.error(`Error rendering ${entry}: ${error.message}`);
          }
          store.set({
            id,
            data: parsedData,
            body,
            filePath: relativePath2,
            digest,
            rendered,
            assetImports: rendered?.metadata?.imagePaths,
            legacyId
          });
        } else if ("contentModuleTypes" in entryType) {
          store.set({
            id,
            data: parsedData,
            body,
            filePath: relativePath2,
            digest,
            deferredRender: true,
            legacyId
          });
        } else {
          store.set({ id, data: parsedData, body, filePath: relativePath2, digest, legacyId });
        }
        fileToIdMap.set(filePath2, id);
      }
      const baseDir = globOptions.base ? new URL(globOptions.base, config.root) : config.root;
      if (!baseDir.pathname.endsWith("/")) {
        baseDir.pathname = `${baseDir.pathname}/`;
      }
      const filePath = fileURLToPath(baseDir);
      const relativePath = relative(fileURLToPath(config.root), filePath);
      const exists = existsSync(baseDir);
      if (!exists) {
        logger.warn(`The base directory "${fileURLToPath(baseDir)}" does not exist.`);
      }
      const files = await glob$1(globOptions.pattern, {
        cwd: fileURLToPath(baseDir),
        expandDirectories: false
      });
      if (exists && files.length === 0) {
        logger.warn(
          `No files found matching "${globOptions.pattern}" in directory "${relativePath}"`
        );
        return;
      }
      function configForFile(file) {
        const ext = file.split(".").at(-1);
        if (!ext) {
          logger.warn(`No extension found for ${file}`);
          return;
        }
        return entryTypes.get(`.${ext}`);
      }
      const limit = pLimit(10);
      const skippedFiles = [];
      const contentDir = new URL("content/", config.srcDir);
      function isInContentDir(file) {
        const fileUrl = new URL(file, baseDir);
        return fileUrl.href.startsWith(contentDir.href);
      }
      const configFiles = new Set(
        ["config.js", "config.ts", "config.mjs"].map((file) => new URL(file, contentDir).href)
      );
      function isConfigFile(file) {
        const fileUrl = new URL(file, baseDir);
        return configFiles.has(fileUrl.href);
      }
      await Promise.all(
        files.map((entry) => {
          if (isConfigFile(entry)) {
            return;
          }
          if (!emulateLegacyCollections && isInContentDir(entry)) {
            skippedFiles.push(entry);
            return;
          }
          return limit(async () => {
            const entryType = configForFile(entry);
            await syncData(entry, baseDir, entryType);
          });
        })
      );
      const skipCount = skippedFiles.length;
      if (skipCount > 0) {
        const patternList = Array.isArray(globOptions.pattern) ? globOptions.pattern.join(", ") : globOptions.pattern;
        logger.warn(
          `The glob() loader cannot be used for files in ${bold("src/content")} when legacy mode is enabled.`
        );
        if (skipCount > 10) {
          logger.warn(
            `Skipped ${green(skippedFiles.length)} files that matched ${green(patternList)}.`
          );
        } else {
          logger.warn(`Skipped the following files that matched ${green(patternList)}:`);
          skippedFiles.forEach((file) => logger.warn(`\u2022 ${green(file)}`));
        }
      }
      untouchedEntries.forEach((id) => store.delete(id));
      if (!watcher) {
        return;
      }
      watcher.add(filePath);
      const matchesGlob = (entry) => !entry.startsWith("../") && picomatch.isMatch(entry, globOptions.pattern);
      const basePath = fileURLToPath(baseDir);
      async function onChange(changedPath) {
        const entry = posixRelative(basePath, changedPath);
        if (!matchesGlob(entry)) {
          return;
        }
        const entryType = configForFile(changedPath);
        const baseUrl = pathToFileURL(basePath);
        const oldId = fileToIdMap.get(changedPath);
        await syncData(entry, baseUrl, entryType, oldId);
        logger.info(`Reloaded data from ${green(entry)}`);
      }
      watcher.on("change", onChange);
      watcher.on("add", onChange);
      watcher.on("unlink", async (deletedPath) => {
        const entry = posixRelative(basePath, deletedPath);
        if (!matchesGlob(entry)) {
          return;
        }
        const id = fileToIdMap.get(deletedPath);
        if (id) {
          store.delete(id);
          fileToIdMap.delete(deletedPath);
        }
      });
    }
  };
}

const entryTypeSchema = z$1.object({
  id: z$1.string({
    invalid_type_error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  })
}).passthrough();
z$1.union([
  z$1.array(entryTypeSchema),
  z$1.record(
    z$1.string(),
    z$1.object({
      id: z$1.string({
        invalid_type_error: "Content entry `id` must be a string"
      }).optional()
    }).passthrough()
  )
]);
const collectionConfigParser = z$1.union([
  z$1.object({
    type: z$1.literal("content").optional().default("content"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal("data"),
    schema: z$1.any().optional()
  }),
  z$1.object({
    type: z$1.literal(CONTENT_LAYER_TYPE),
    schema: z$1.any().optional(),
    loader: z$1.union([
      z$1.function(),
      z$1.object({
        name: z$1.string(),
        load: z$1.function(
          z$1.tuple(
            [
              z$1.object({
                collection: z$1.string(),
                store: z$1.any(),
                meta: z$1.any(),
                logger: z$1.any(),
                config: z$1.any(),
                entryTypes: z$1.any(),
                parseData: z$1.any(),
                renderMarkdown: z$1.any(),
                generateDigest: z$1.function(z$1.tuple([z$1.any()], z$1.string())),
                watcher: z$1.any().optional(),
                refreshContextData: z$1.record(z$1.unknown()).optional()
              })
            ],
            z$1.unknown()
          )
        ),
        schema: z$1.any().optional(),
        render: z$1.function(z$1.tuple([z$1.any()], z$1.unknown())).optional()
      })
    ]),
    /** deprecated */
    _legacy: z$1.boolean().optional()
  })
]);
z$1.object({
  collections: z$1.record(collectionConfigParser)
});
function getContentEntryIdAndSlug({
  entry,
  contentDir,
  collection
}) {
  const relativePath = getRelativeEntryPath(entry, collection, contentDir);
  const withoutFileExt = relativePath.replace(new RegExp(path.extname(relativePath) + "$"), "");
  const rawSlugSegments = withoutFileExt.split(path.sep);
  const slug$1 = rawSlugSegments.map((segment) => slug(segment)).join("/").replace(/\/index$/, "");
  const res = {
    id: normalizePath(relativePath),
    slug: slug$1
  };
  return res;
}
function getRelativeEntryPath(entry, collection, contentDir) {
  const relativeToContent = path.relative(fileURLToPath(contentDir), fileURLToPath(entry));
  const relativeToCollection = path.relative(collection, relativeToContent);
  return relativeToCollection;
}
function posixifyPath(filePath) {
  return filePath.split(path.sep).join("/");
}
function posixRelative(from, to) {
  return posixifyPath(path.relative(from, to));
}

function file(fileName, options) {
  if (fileName.includes("*")) {
    throw new AstroError(FileGlobNotSupported);
  }
  let parse = null;
  const ext = fileName.split(".").at(-1);
  if (ext === "json") {
    parse = JSON.parse;
  } else if (ext === "yml" || ext === "yaml") {
    parse = (text) => yaml.load(text, {
      filename: fileName
    });
  }
  if (parse === null) {
    throw new AstroError({
      ...FileParserNotFound,
      message: FileParserNotFound.message(fileName)
    });
  }
  async function syncData(filePath, { logger, parseData, store, config }) {
    let data;
    try {
      const contents = await promises.readFile(filePath, "utf-8");
      data = parse(contents);
    } catch (error) {
      logger.error(`Error reading data from ${fileName}`);
      logger.debug(error.message);
      return;
    }
    const normalizedFilePath = posixRelative(fileURLToPath(config.root), filePath);
    if (Array.isArray(data)) {
      if (data.length === 0) {
        logger.warn(`No items found in ${fileName}`);
      }
      logger.debug(`Found ${data.length} item array in ${fileName}`);
      store.clear();
      for (const rawItem of data) {
        const id = (rawItem.id ?? rawItem.slug)?.toString();
        if (!id) {
          logger.error(`Item in ${fileName} is missing an id or slug field.`);
          continue;
        }
        const parsedData = await parseData({ id, data: rawItem, filePath });
        store.set({ id, data: parsedData, filePath: normalizedFilePath });
      }
    } else if (typeof data === "object") {
      const entries = Object.entries(data);
      logger.debug(`Found object with ${entries.length} entries in ${fileName}`);
      store.clear();
      for (const [id, rawItem] of entries) {
        const parsedData = await parseData({ id, data: rawItem, filePath });
        store.set({ id, data: parsedData, filePath: normalizedFilePath });
      }
    } else {
      logger.error(`Invalid data in ${fileName}. Must be an array or object.`);
    }
  }
  return {
    name: "file-loader",
    load: async (context) => {
      const { config, logger, watcher } = context;
      logger.debug(`Loading data from ${fileName}`);
      const url = new URL(fileName, config.root);
      if (!existsSync(url)) {
        logger.error(`File not found: ${fileName}`);
        return;
      }
      const filePath = fileURLToPath(url);
      await syncData(filePath, context);
      watcher?.add(filePath);
      watcher?.on("change", async (changedPath) => {
        if (changedPath === filePath) {
          logger.info(`Reloading data from ${fileName}`);
          await syncData(filePath, context);
        }
      });
    }
  };
}

const postTags = ["event", "project", "blog", "business", "tax", "accounting"];
defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/data/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(180),
    authors: z.array(reference("members")),
    publishedDate: z.coerce.date(),
    featuredImg: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference("blog"))
  })
});
defineCollection({
  loader: file("src/data/members.json"),
  schema: z.object({
    name: z.string(),
    role: z.object({
      en: z.string(),
      fr: z.string()
    }),
    pp: z.object({
      src: z.string(),
      alt: z.string()
    })
  })
});
defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/data/services" }),
  schema: z.object({
    title: z.string(),
    author: reference("members"),
    description: z.string(),
    date: z.date(),
    icon: z.string()
  })
});
defineCollection({
  loader: file("src/data/testimonials.json"),
  schema: z.object({
    id: z.string(),
    msg: z.string(),
    pic: z.string(),
    client: z.string(),
    profession: z.string(),
    company: z.string()
  })
});
defineCollection({
  loader: file("src/data/comments.json"),
  schema: z.object({
    id: z.string(),
    comment: z.string(),
    pseudo: z.string(),
    emails: z.string(),
    post: z.string(),
    day: z.coerce.date(),
    replies: z.array(reference("comment"))
  })
});
defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/data/terms&conditions" }),
  schema: z.object({
    lang: z.string(),
    updated: z.coerce.date()
  })
});

const $$Astro$1 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$CategoryTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoryTags;
  const locale = getLangFromUrl(Astro2.url);
  const { tags, currentTag } = Astro2.props;
  const redirectTo = `/nbc/${locale}/blog`;
  return renderTemplate`${maybeRenderHead()}<h4 class="my-3">Categories</h4> <div class="nav gap-2 mb-4"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`${redirectTo}/${tag}/1`, "href")}${addAttribute(`btn btn-sm btn-outline-secondary ${currentTag == tag ? "active" : ""}`, "class")}> ${tag} </a>`)} </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/forms/categoryTags.astro", void 0);

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { data, size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="container mx-auto nav justify-content-center gap-2 p-3"> ${data.first ? renderTemplate`<a${addAttribute(data.first, "href")}>First</a>` : null} ${data.prev ? renderTemplate`<a${addAttribute(data.prev, "href")}>Previous</a>` : null} <a${addAttribute(data.current, "href")} class="btn btn-primary active">${data.current.slice(-1)}</a> ${data.next ? renderTemplate`<a${addAttribute(data.next, "href")}>Next</a>` : null} ${data.last ? renderTemplate`<a${addAttribute(data.last, "href")}>Last</a>` : null} ${size} </nav>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/utils/pagination.astro", void 0);

const $$PostContactBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-3 hero3 text-white text-center my-3"> <h4>Build the Business of your dream with sure odds</h4> <p class="mb-4">We are trusted for providing detailed data analytics on real time</p> <button data-bs-toggle="modal" data-bs-target="#contactUs" class="btn btn-primary">
Contact Us
</button> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/forms/postContactBtn.astro", void 0);

export { $$CategoryTags as $, $$PostContactBtn as a, $$Pagination as b, postTags as p };
