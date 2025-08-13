import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$Layout, l as languages, u as useTranslations } from '../../../chunks/Layout_BDRXeEiN.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_DkcjdUKO.mjs';
import { $ as $$CategoryTags, p as postTags, a as $$PostContactBtn, b as $$Pagination } from '../../../chunks/postContactBtn_gp0oCSem.mjs';
import { $ as $$BlogCard } from '../../../chunks/blogCard_Oa5qKU-R.mjs';
import { $ as $$BlogHeader } from '../../../chunks/blogHeader_C8XS_j4t.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const getStaticPaths = async ({ paginate }) => {
  const locales = Object.keys(languages);
  const allPosts = await getCollection("posts");
  return locales.flatMap((locale) => {
    const filteredPosts = allPosts.filter((post) => post.id.includes(locale + "/"));
    return paginate(filteredPosts, {
      params: { locale },
      pageSize: 18
    });
  });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const { pageSize } = Astro2.params;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "currentPage": "Blog", "hText": t("post.desc") })} ${maybeRenderHead()}<main class="py-5 container-xxl"> <section class="nav gap-3"> <aside class="col-12 col-md-4 col-xl-3 p-3 bg-body-tertiary"> ${renderComponent($$result2, "CategoryTags", $$CategoryTags, { "tags": postTags })} ${renderComponent($$result2, "PostContactBtn", $$PostContactBtn, {})} </aside> <aside class="col-12 col-md-8 col-xl-9 row g-3 flex-order-2"> ${page.data.map((item) => renderTemplate`<div class="col-6 col-lg-4"> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": item })} </div>`)} ${renderComponent($$result2, "Pagination", $$Pagination, { "data": page.url, "size": pageSize })} </aside> </section> </main> ` })}`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[page].astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[page].astro";
const $$url = "/[locale]/blog/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
