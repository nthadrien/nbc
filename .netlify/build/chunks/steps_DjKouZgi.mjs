import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations } from './Layout_kr5rve1c.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Steps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Steps;
  const stepTypes = ["one", "two", "three"];
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section class="py-5 hero2"> <div class="container row text-center justify-content-center mb-4 mx-auto"> <div class="col-12 col-lg-10 col-xl-8 text-center text-white"> <p class="mb-0 fw-light">${t("steps")}</p> <h2>${locale == "en" ? "How It Works" : "Comment \xE7a marche"}</h2> <p class="lead mb-4">${t("steps.desc")}</p> </div> <div class="row justify-content-center pt-5"> <div class="col-lg-9 row"> ${stepTypes.map((item, index) => renderTemplate`<div data-iobs="down"${addAttribute((index + 1) / 2 + "s", "data-iobs-transition")} class="col-lg-4"> <div class="rounded text-center p-3 bg-body text-bg-body  mb-5 mb-lg-0"> <div class="d-flex rounded-circle mx-auto align-items-center justify-content-center fs-3 fw-bold text-bg-primary border border-white border-4" style="width: 4rem; height:4rem; margin-top:-3.5rem;"> ${index + 1} </div> <h5>${t(`step.${item}`)}</h5> <p>${t(`step.${item}.desc`)}</p> </div> </div>`)} </div> </div> </div> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/steps.astro", void 0);

export { $$Steps as $ };
