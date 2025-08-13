import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_CDBseT-m.mjs';
import { g as getLangFromUrl, $ as $$Layout, u as useTranslations } from '../../chunks/Layout_kr5rve1c.mjs';
import { $ as $$BlogHeader } from '../../chunks/blogHeader_C8XS_j4t.mjs';
import { $ as $$ContactUs } from '../../chunks/contactUs_DzMPLby2.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const getStaticPaths = async () => {
  const subPages = await getCollection("terms");
  return subPages.map((page) => ({
    params: { locale: page.data.lang, slug: page.id },
    props: { page }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { page } = Astro2.props;
  const { Content, remarkPluginFrontmatter, headings } = await renderEntry(page);
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "hText": page.id.replaceAll("-", " "), "currentPage": "" })} ${maybeRenderHead()}<div class="container-xl mx-auto nav flex-column flex-lg-row py-5 px-3 position-relative"> <nav class="col-lg-4 d-none d-lg-block"> <div class="sticky-top p-2 p-lg-3"> <h4>${t("t.content")}</h4> <ul class="list-unstyled mb-3 border-top"> ${headings.map((head) => renderTemplate`<li${addAttribute("mb-3 " + (head.depth > 2 ? `ps-${head.depth}` : ``), "class")}> <a${addAttribute(`#${head.slug}`, "href")}>${head.text}</a> </li>`)} </ul> </div> </nav> <main id="content" class="col-lg-8"> <p><span class="vr mx-3"></span> ${remarkPluginFrontmatter.minutesRead} </p> ${renderComponent($$result2, "Content", Content, {})} </main> </div> ${renderComponent($$result2, "ContactUs", $$ContactUs, {})} ` })} `;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/[slug].astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/[slug].astro";
const $$url = "/[locale]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
