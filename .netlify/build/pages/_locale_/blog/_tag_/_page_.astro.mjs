import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../../chunks/_astro_content_DkcjdUKO.mjs';
import { $ as $$BlogCard } from '../../../../chunks/blogCard_Oa5qKU-R.mjs';
import { $ as $$BlogHeader } from '../../../../chunks/blogHeader_C8XS_j4t.mjs';
import { g as getLangFromUrl, $ as $$Layout, l as languages, u as useTranslations } from '../../../../chunks/Layout_BDRXeEiN.mjs';
import { p as postTags, $ as $$CategoryTags, a as $$PostContactBtn, b as $$Pagination } from '../../../../chunks/postContactBtn_gp0oCSem.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const getStaticPaths = async ({ paginate }) => {
  const pageSize = 18;
  const locales = Object.keys(languages);
  const allPosts = await getCollection("posts");
  return locales.flatMap((locale) => {
    const selectedPosts = allPosts.filter((item) => item.id.includes(locale + "/"));
    return postTags.flatMap((tag) => {
      const filteredPosts = selectedPosts.filter((item) => item.data.tags.includes(tag));
      return paginate(filteredPosts, {
        params: { locale, tag },
        pageSize
      });
    });
  });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const { pageSize, tag } = Astro2.params;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "currentPage": tag, "hText": t("post.new") })} ${maybeRenderHead()}<main class="py-5 container-xxl"> <section class="nav gap-3"> <aside class="col-md-4 col-xl-3"> ${renderComponent($$result2, "CategoryTags", $$CategoryTags, { "currentTag": tag, "tags": postTags })} ${renderComponent($$result2, "PostContactBtn", $$PostContactBtn, {})} </aside> <aside class="col-md-8 col-xl-9 row g-3 flex-order-2"> <h4 class="col-12 col-lg-12 text-capitalize">${tag} Posts </h4> ${page.data.map((item) => renderTemplate`<div class="col-12 col-md-6 col-xl-4"> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": item })} </div>`)} </aside> ${renderComponent($$result2, "Pagination", $$Pagination, { "data": page.url, "size": pageSize })} </section> </main> ` })}`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[tag]/[page].astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[tag]/[page].astro";
const $$url = "/[locale]/blog/[tag]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
