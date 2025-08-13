import { a as createAstro, c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent } from '../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, u as useTranslations, $ as $$Layout, l as languages } from '../chunks/Layout_kr5rve1c.mjs';
import { $ as $$ContactUs } from '../chunks/contactUs_DzMPLby2.mjs';
import 'clsx';
import { $ as $$Services } from '../chunks/services_EMMuM0LX.mjs';
import { $ as $$Steps } from '../chunks/steps_DjKouZgi.mjs';
import { $ as $$BlogCard } from '../chunks/blogCard_BRUSBgdk.mjs';
import { g as getCollection } from '../chunks/_astro_content_CDBseT-m.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const featList = ["one", "two", "three"];
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section id="why" class="py-5"> <div class="container row mx-auto"> <div class="col-md-6"> <img alt="" class="img-fluid w-100 h-100 object-fit-contain rounded-2" src="/nbc/imgs/hero6.avif"> </div> <div class="col-md-6"> <span>${t("feat.why")}</span> <h2 class="display-6 fw-bold">${t("feat.desc")}</h2> <ul class="list-unstyled"> ${featList.map((feature) => renderTemplate`<li class=" d-flex gap-3 mb-2"> <i class="fs-4 bi bi-check-circle-fill text-info"></i> <div> <strong class="text-info">${t(`feat.${feature}`)}</strong> <br> ${t(`feat.${feature}.desc`)} </div> </li>`)} </ul> <a href="/nbc/fr/about-us#clients" class=""> ${t("test.client")} <i class="bi bi-arrow-right"></i> </a> </div> </div> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/features.astro", void 0);

const $$Astro$2 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$HomeHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeHeader;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<header id="page-hero" class="hero1 py-5 hero3 d-flex justify-content-center align-items-center"> <section class="container nav align-items-center px-3"> <div class="col-lg-8 my-4 d-flex flex-column "> <h1 class="display-5 fw-bold mb-4"> ${t("home.desc")}</h1> <div class="nav gap-2 align-items-center"> <a class="btn btn-lg btn-primary" href="#services">${t("services.our")}</a> <a class="btn btn-lg btn-outline-light" href="#why">${t("feat.why")}</a> </div> </div> </section> </header>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/headers/homeHeader.astro", void 0);

const $$Astro$1 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Statistics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Statistics;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section class="py-5"> <div style="max-width: 768px;" data-iobs="down" data-iobs-transition="1s" class="container mx-auto text-center"> <h2 class="display-5 fw-bold mb-2">${t("stats.title")}</h2> <p>${t("stats.desc")}</p> </div> </section> <section style="max-width: 768px;" class="container-sm"> <div class="row row-cols-2 row-cols-lg-4  bg-body text-center display-5"> <div class="col p-3 border-end"> <span class="fw-bold fs-2 text-primary" data-iobs-value="1" data-iobs-final="53">0</span> +
<br>${t("stats.client")}: </div> <div class="col p-3"> <span class="fw-bold fs-2 text-primary" data-iobs-value="1" data-iobs-final="5">0</span> +
<p>${t("stats.years")}</p> </div> <div class="col p-3 text-bg-primary border-end"> <span class="fw-bold fs-2" data-iobs-value="1" data-iobs-final="3">0</span> +
<br>Experts
</div> <div class="col p-3"> <span class="fw-bold fs-2 text-primary" data-iobs-value="1" data-iobs-final="200">0</span> +
<br> ${t("stats.folw")} </div> </div> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/statistics.astro", void 0);

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$LatestPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestPost;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  const posts = await getCollection("posts", (post) => post.id.startsWith(locale + "/"));
  return renderTemplate`${maybeRenderHead()}<section class="container-fluid d-flex flex-column gap-3 justify-content-center align-items-center py-5 bg-body-tertiary"> <aside class="col-12 col-lg-8 col-xxl-7 text-center"> <span class="text-muted">${t("posts")}</span> <h3 class="display-6 fw-bold">${t("post.new")}</h3> <p class="lead">${t("post.desc")}</p> </aside> <aside class="container mx-auto d-flex justify-content-md-center gap-2 overflow-x-auto"> ${posts.slice(0, 3).map((item) => renderTemplate`<div style="min-width: 250px;max-width: 280px;" class="flex-shrink-0"> ${renderComponent($$result, "BlogCard", $$BlogCard, { "post": item })} </div>`)} </aside> <a class="btn btn-primary"${addAttribute(`${locale}/blog/1`, "href")}>${t("read")}</a> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/latestPost.astro", void 0);

const getStaticPaths = () => {
  return Object.keys(languages).map((locale) => ({
    params: { locale }
  }));
};
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeHeader", $$HomeHeader, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Statistics", $$Statistics, {})} ${renderComponent($$result2, "Steps", $$Steps, {})} ${renderComponent($$result2, "LatestPost", $$LatestPost, {})} ${renderComponent($$result2, "ContactUs", $$ContactUs, {})} ` })}`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/index.astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/index.astro";
const $$url = "/[locale]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
