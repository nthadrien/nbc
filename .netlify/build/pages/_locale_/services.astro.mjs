import { a as createAstro, c as createComponent, d as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$Layout, l as languages, u as useTranslations } from '../../chunks/Layout_kr5rve1c.mjs';
import { $ as $$Services } from '../../chunks/services_EMMuM0LX.mjs';
import { $ as $$ServicesHeader } from '../../chunks/servicesHeader_DRnJHCZO.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const getStaticPaths = () => {
  return Object.keys(languages).map((locale) => ({
    params: { locale }
  }));
};
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServicesHeader", $$ServicesHeader, { "currentPage": "Services", "hText": t("services.our") })} ${renderComponent($$result2, "Services", $$Services, {})} ` })}`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/services/index.astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/services/index.astro";
const $$url = "/[locale]/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
