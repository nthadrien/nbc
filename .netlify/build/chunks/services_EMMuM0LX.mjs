import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from './astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_CDBseT-m.mjs';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations } from './Layout_kr5rve1c.mjs';

const $$Astro$1 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service } = Astro2.props;
  const locale = getLangFromUrl(Astro2.url);
  const redirectTo = `/nbc/${locale}/services/${service.data.title}`;
  return renderTemplate`${maybeRenderHead()}<div data-iobs="down" class="border bg-secondary-subtle h-100 p-3 rounded-2"> <i${addAttribute(`fs-2 mb-3 ${service.data.icon} text-center text-secondary`, "class")}></i> <div class="my-3"> <h4 class="p">${service.data.title}</h4> <p class="mt-3 mb-0">${service.data.description}</p> </div> <a${addAttribute(redirectTo, "href")} class="fw-semibold nav-link">
Read more <i class="bi bi-arrow-right"></i> </a> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/cards/serviceCard.astro", void 0);

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  const services = await getCollection("services", ({ id }) => {
    return id.includes(locale + "/");
  });
  return renderTemplate`${maybeRenderHead()}<section id="services" class="container-fluid d-flex flex-column gap-3 justify-content-center align-items-center py-5 bg-body-tertiary"> <aside class="col-12 col-lg-8 col-xxl-7 text-center"> <span class="text-info">${t("services.our")}</span> <h3 class="display-6 fw-bold">Services</h3> <p class="lead">${t("services.desc")}</p> </aside> <div class="container row g-3 g-lg-3"> ${services.map((item) => renderTemplate`<div class="col-sm-6 col-md-4 col-lg-3 position-relative"> ${renderComponent($$result, "ServiceCard", $$ServiceCard, { "service": item })} </div>`)} </div> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/services.astro", void 0);

export { $$Services as $ };
