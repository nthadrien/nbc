import { a as createAstro, c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations } from './Layout_BDRXeEiN.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactUs;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<section id="contact-us" class="container-fluid d-flex flex-column gap-3 justify-content-center align-items-center py-5 rounded-3 text-bg-primary bg-gradient"> <aside class="col-md-6"> <span>${t("contact.ready")}</span> <h5 class="display-6 fw-bold mb-3"> ${t("contact.today")} </h5> <button data-bs-toggle="modal" data-bs-target="#contactUs" class="btn btn-dark">${t("nav.contact")}</button> </aside> </section>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/contactUs.astro", void 0);

export { $$ContactUs as $ };
