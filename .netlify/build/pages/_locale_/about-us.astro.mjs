import { a as createAstro, c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, u as useTranslations, $ as $$Layout, l as languages } from '../../chunks/Layout_BDRXeEiN.mjs';
import 'clsx';
import { g as getCollection } from '../../chunks/_astro_content_DkcjdUKO.mjs';
import { $ as $$Steps } from '../../chunks/steps_CMLEqWQI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$5 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$AboutHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AboutHeader;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section id="page-hero" class="py-5 hero3 d-flex justify-content-center align-items-center"> <div class="container row px-3"> <div class="col-md-8"> <h1 class="display-5 fw-bold"> ${t("about.desc")} </h1> </div> <div></div></div></section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/headers/aboutHeader.astro", void 0);

const $$Astro$4 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { item, lang = "en" } = Astro2.props;
  const redirectTo = `/nbc/${item.data.pp.src}`;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <img style="height: 220px;object-position: 0px 0px;" class="img-fluid object-fit-cover w-100"${addAttribute(item.data.pp.alt, "alt")}${addAttribute(redirectTo, "src")}> <div class="p-3"> <span class="d-block fs-6 fw-bold text-capitalize">${item.data.name}</span> ${item.data.role[lang]} </div> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/cards/teamCard.astro", void 0);

const $$Astro$3 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Team;
  const members = await getCollection("members");
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section id="team" class="bg-body-tertiary container-fluid d-flex flex-column gap-3 justify-content-center align-items-center py-5"> <div class="container row g-2"> <div class="col-lg-5"> <div class="ms-lg-5 mb-5"> <span class="text-info">${t("team.def")}</span> <h2 class="display-6 fw-bold mb-3 mb-xl-5">${t("team.meet")}</h2> <p class="lead">${t("team.desc")}</p> </div> </div> <div class="col-lg-7 row g-1"> ${members.map((member, index) => renderTemplate`<div data-iobs="n/a"${addAttribute(index / 1.2 + "s", "data-iobs-transition")} class="col-6 col-lg-4"> ${renderComponent($$result, "TeamCard", $$TeamCard, { "item": member, "lang": locale })} </div>`)} </div> </div> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/team.astro", void 0);

const $$Astro$2 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Faq;
  const faqTypes = ["one", "two", "three", "four"];
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="container-fluid d-flex flex-column gap-3 justify-content-center align-items-center py-5"> <aside class="col-12 col-lg-8 col-xxl-7 text-center"> <span class="text-info">F.A.Q</span> <h3 class="display-6 fw-bold">${t("faq.def")}</h3> </aside> <aside class="container row justify-content-center p-lg-3"> <section class="col-md-9 accordion accordion-flush" id="Technical-accordion"> ${faqTypes.map((item) => renderTemplate`<div class="accordion-item border-0 mb-3"> <div data-iobs="down" data-iobs-transition="1s" class="accordion-item"> <h4 class="accordion-header"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${addAttribute("#panelsStayOpen-collapseOne" + item, "data-bs-target")} aria-expanded="true"${addAttribute("panelsStayOpen-collapseOne" + item, "aria-controls")}> <i class="bi bi-question-circle-fill me-3 text-primary"></i> ${t(`faq.question-${item}`)} </button> </h4> <div${addAttribute("panelsStayOpen-collapseOne" + item, "id")} class="accordion-collapse collapse"> <div class="accordion-body"> ${t(`faq.answer-${item}`)} </div> </div> </div> </div>`)} </section> </aside> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/faq.astro", void 0);

const $$TestimonyCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="d-flex gap-2 p-1"> <img style="height:4rem;width:4rem;" class="rounded-circle btn btn-lg btn-primary object-fit-fill" src="/public/favicon.svg" alt=""> <aside> <i class="bi bi-quote fs-3 fw-bolder text-primary"></i> <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quisquam illum magnam ipsam quibusdam? 
            Molestias laborum quo fugit.
</p> <p> <strong>Client Name</strong> <br>
Graphic Designer at Company / firm
</p> </aside> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/cards/testimonyCard.astro", void 0);

const $$Astro$1 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$ClientReview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientReview;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section id="clients" class="container-fluid d-flex flex-column gap-3 justify-content-center align-items-center py-5"> <div class="col-12 col-lg-8 col-xxl-7 text-center"> <h3 class="display-6 fw-bold">${t("test.client")}</h3> <p class="lead text-primary">${t("test.desc")}</p> </div> </section> <section id="carouselClientsReviews" class="carousel slide p-3" data-bs-ride="carousel"> <div class="carousel-inner"> <aside class="carousel-item active"> <div class="d-flex gap-2 overflow-x-auto hide-scroll-bar"> ${[1, 2, 3].map((testi) => renderTemplate`<div style="min-width: 290px;" class="col"> ${renderComponent($$result, "TestimonyCard", $$TestimonyCard, {})} </div>`)} </div> </aside> <aside class="carousel-item"> <div class="d-flex gap-2 overflow-x-auto hide-scroll-bar"> ${[1, 2, 3].map((testi) => renderTemplate`<div style="min-width: 290px;" class="col"> ${renderComponent($$result, "TestimonyCard", $$TestimonyCard, {})} </div>`)} </div> </aside> <aside class="carousel-item"> <div class="d-flex gap-2 overflow-x-auto hide-scroll-bar"> ${[1, 2, 3].map((testi) => renderTemplate`<div style="min-width: 290px;" class="col"> ${renderComponent($$result, "TestimonyCard", $$TestimonyCard, {})} </div>`)} </div> </aside> </div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselClientsReviews" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> nn
</button> <button class="carousel-control-next" type="button" data-bs-target="#carouselClientsReviews" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> bb
</button> <div class="carousel-indicators"> <button class="border border-2 active" type="button" data-bs-target="#carouselClientsReviews" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button class="border border-2" type="button" data-bs-target="#carouselClientsReviews" data-bs-slide-to="1" aria-label="Slide 2"></button> <button class="border border-2" type="button" data-bs-target="#carouselClientsReviews" data-bs-slide-to="2" aria-label="Slide 3"></button> </div> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/clientReview.astro", void 0);

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const getStaticPaths = () => {
  return Object.keys(languages).map((locale) => ({
    params: { locale }
  }));
};
const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  const buztypes = ["one", "two", "three", "four"];
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutHeader", $$AboutHeader, {})} ${maybeRenderHead()}<section class="py-5"> <div class="container row gx-4 align-items-center mx-auto"> <aside class="d-none d-md-block col-md-6"> <img data-iobs="none" width="100%" class="object-fit-cover rounded-3" src="/nbc/imgs/hero3.avif"> </aside> <aside class="col-md-6"> <div data-iobs="left" data-iobs-transition="1s" class="ms-md-2 ms-lg-5 mt-5 mt-md-0"> <span class="text-primary">${t("nav.who")}</span> <h2 class="display-5 fw-bold">${t("nav.about")}</h2> <p class="lead">${t("about.story")}</p> <p>${t("about.story1")}.</p> <!-- <a class="btn btn-primary" href="#testimonials">{t('read')}</a> --> <a class="icon-link icon-link-hover text-capitalize fw-semibold" href="#testimonials"> ${t("read")} <i class="bi bi-arrow-right ms-2"></i> </a> </div> </aside> </div> </section> <section id="#vision" class="py-5"> <div class="container row justify-content-between mx-auto"> <div class="col-md-6"> <h2 class="display-6 fw-bold"> <!-- We provide expert advice for all size businesses. <br/> --> ${t("about.vision.catch")}</h2> <p class="mt-3">${t("about.vision")}</p> </div> <ul class="col-md-6 list-unstyled row g-3"> ${buztypes.map((item) => renderTemplate`<li class="col-sm-6"> <button class="nav-link text-start fw-bold text-info fs-6" type="button" data-bs-toggle="collapse"${addAttribute(`#collapse${item}-vision`, "data-bs-target")} aria-expanded="false" aria-controls="collapse-vision"> <i class="bi bi-check-square"></i> ${t(`about.biz.${item}`)} </button> <div class="collapse collapse-vertical ps-4 border-start border-info"${addAttribute(`collapse${item}-vision`, "id")}> ${t(`about.biz.${item}.decs`)} </div> </li>`)} </ul> </div> </section> ${renderComponent($$result2, "Steps", $$Steps, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "ClientReview", $$ClientReview, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ` })}`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/about-us.astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/about-us.astro";
const $$url = "/[locale]/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
