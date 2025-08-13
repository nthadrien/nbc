import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$ServicesHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesHeader;
  const {
    currentPage = "services",
    hText = "Services Pages",
    bgClass = "hero3"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="page-hero-sm"${addAttribute(`${bgClass} p-5 d-flex flex-column justify-content-center align-items-center`, "class")}> <div class="container text-center"> <h2 class="fw-bold display-4">${currentPage}</h2> <p class="lead">${hText}</p> </div> </header>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/headers/servicesHeader.astro", void 0);

export { $$ServicesHeader as $ };
