import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$BlogHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  const {
    currentPage = "services",
    hText = "Services Pages",
    bgClass = "hero3"
  } = Astro2.props;
  return renderTemplate`<!-- <header style="min-height: 280px;" class="hero3 p-5 d-flex flex-column justify-content-center align-items-center">

    <h1 class="fw-bolder">Blog</h1>
    <p class="lead">Get the lastest on Business, Financial and Accounting topics.</p>

</header> -->${maybeRenderHead()}<header id="page-hero-sm"${addAttribute(`${bgClass} p-5 d-flex flex-column justify-content-center align-items-center`, "class")}> <div class="container text-center text-capitalize"> <h1 class="fw-bold display-4">${currentPage}</h1> <p class="lead">${hText}</p> </div> </header>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/headers/blogHeader.astro", void 0);

export { $$BlogHeader as $ };
