import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { r as renderEntry, c as getEntry, g as getCollection } from '../../../chunks/_astro_content_BzyKczLG.mjs';
import { g as getLangFromUrl, $ as $$Layout, l as languages, u as useTranslations } from '../../../chunks/Layout_B2cSL3LT.mjs';
import { $ as $$ServicesHeader } from '../../../chunks/servicesHeader_CqdNrSyr.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.app");
const getStaticPaths = async () => {
  const locales = Object.keys(languages);
  const services = await getCollection("services");
  const allpages = [];
  for (const locale of locales) {
    for (const service of services) {
      allpages.push({
        params: { locale, id: service.data.title },
        props: { service }
      });
    }
  }
  return allpages;
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { service } = Astro2.props;
  const { Content, remarkPluginFrontmatter, headings } = await renderEntry(service);
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  const expert = await getEntry(service.data.author);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": service.data.title, "desc": service.data.description, "data-astro-cid-cfkxtkry": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ServicesHeader", $$ServicesHeader, { "hText": service.data.description, "currentPage": service.data.title, "data-astro-cid-cfkxtkry": true })} ${maybeRenderHead()}<div class="container mx-auto nav flex-column flex-lg-row py-5 px-3 position-relative" data-astro-cid-cfkxtkry> <nav class="col-lg-4 order-0 order-lg-2" data-astro-cid-cfkxtkry> <div class="sticky-top" data-astro-cid-cfkxtkry> <h4 data-astro-cid-cfkxtkry>${t("t.content")}</h4> <ul class="border-start border-3 border-primary mb-3" data-astro-cid-cfkxtkry> ${headings.map((head) => renderTemplate`<li${addAttribute(head.depth > 2 ? `ms-${head.depth - 1}` : ``, "class")} data-astro-cid-cfkxtkry> <a${addAttribute(`#${head.slug}`, "href")} data-astro-cid-cfkxtkry>${head.text} </a> </li>`)} </ul> </div> </nav> <main id="content" class="col-lg-8" data-astro-cid-cfkxtkry> <p data-astro-cid-cfkxtkry>Expert : ${expert.data.name}, ${expert.data.role[locale]} <span class="vr mx-3" data-astro-cid-cfkxtkry></span> ${remarkPluginFrontmatter.minutesRead} </p> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-cfkxtkry": true })} </main> <section class="col-9 order-4 pt-3" data-astro-cid-cfkxtkry> <a data-iobs="right"${addAttribute(`/nbc/${service.id.slice(0, 2)}/services`, "href")} class="btn btn-outline-primary" data-astro-cid-cfkxtkry> <i class="bi bi-arrow-left" data-astro-cid-cfkxtkry></i> services
</a> </section> </div> ` })} `;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/services/[id].astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/services/[id].astro";
const $$url = "/[locale]/services/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
