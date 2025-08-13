import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { r as renderEntry, a as getEntries, g as getCollection } from '../../../chunks/_astro_content_BzyKczLG.mjs';
import { g as getLangFromUrl, $ as $$Layout, l as languages, u as useTranslations } from '../../../chunks/Layout_B2cSL3LT.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.app");
const getStaticPaths = async () => {
  const locales = Object.keys(languages);
  const posts = await getCollection("posts");
  const allpages = [];
  for (const locale of locales) {
    for (const post of posts) {
      allpages.push({
        params: { locale, id: post.data.title },
        props: { post }
      });
    }
  }
  return allpages;
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content, remarkPluginFrontmatter, headings } = await renderEntry(post);
  await getEntries(post.data.authors);
  const loc = getLangFromUrl(Astro2.url);
  const t = useTranslations(loc);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "desc": post.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header style="min-height: 280px;" class="hero3 p-5 d-flex flex-column justify-content-center align-items-center"> <h1>${post.data.tags}</h1> <p class="text-primary lead"> ${post.data.description} </p> </header> <div class="container mx-auto row g-3 py-5 px-3 position-relative"> <aside class="col-lg-9"> <p> ${remarkPluginFrontmatter.minutesRead} <span class="vr mx-3"></span> </p> <nav class="col-12 d-block d-lg-none"> <h4>Content</h4> <ul class=""> ${headings.map((head) => renderTemplate`<li${addAttribute(head.depth > 2 ? `ms-${head.depth - 1}` : ``, "class")}> <a${addAttribute(`#${head.slug}`, "href")}>${head.text} </a> </li>`)} </ul> </nav> <main class="lh-lg py-3 border-top"> ${renderComponent($$result2, "Content", Content, {})} </main> </aside> <nav style="top:2rem;" class="d-none d-lg-block col-lg-3"> <div class="sticky-lg-top"> <h4>Content</h4> ${headings.map((head) => renderTemplate`<li${addAttribute(head.depth > 2 ? `ms-${head.depth - 1}` : ``, "class")}> <a${addAttribute(`#${head.slug}`, "href")}>${head.text} </a> </li>`)} </div> </nav> <div> <h3>${t("comm")}</h3> </div> <section class="col-9"> <button data-iobs="right" onclick="window.history.back()" class="p-2 btn btn-primary"> ${t("backto")} ${post.data.tags[0]} </button> </section> <section>
Certains Project lies a ce service ? :
</section> </div> ` })}`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[id].astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[id].astro";
const $$url = "/[locale]/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
