import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="container mx-auto min-vh-100 p-3 nav flex-column justify-content-center align-items-center"> <span>404</span> <h2 class="display-4 fw-bold text-primary">Page Not Found</h2> <p class="lead mb-4">
Sorry we couldn't find the page you are looking for
</p> <section style="max-width: 768px;" class="nav justify-content-between align-items-between w-100 py-5"> <a class="text-primary fw-semibold" href="/nbc/"> <i class="bi bi-arrow-left me-2"></i>
back home
</a> <button onclick="window.history.back()" class="btn">
Go back / Retour
</button> </section> </main>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/pages/404.astro", void 0);

const $$file = "D:/Personal Dev Projects/important/nti-consulting/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
