import { a as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations } from './Layout_BDRXeEiN.mjs';
import { r as renderEntry } from './_astro_content_DkcjdUKO.mjs';

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  const { post } = Astro2.props;
  const { remarkPluginFrontmatter } = await renderEntry(post);
  return renderTemplate`${maybeRenderHead()}<div class="position-relative"> <div class="position-absolute start-0 top-0 nav gap-2 p-3"> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/nbc/${locale}/blog/${tag}`, "href")} class="btn btn-sm btn-primary"> ${tag} </a>`)} </div> <img style="height: 220px; width:100%;"${addAttribute(post.data.featuredImg.url, "alt")} class="bg-dark-subtle"${addAttribute(`/nbc/${post.data.featuredImg.url}`, "src")}> <div class="p-1"> <div class="nav justify-content-between align-items-center text-black-50"> <small>${new Date(post.data.publishedDate).toDateString()}</small> <small>${remarkPluginFrontmatter.minutesRead}</small> </div> <h4 style="line-clamp: 2;max-height: 2.5em;" class="fw-bold overflow-hidden">${post.data.title}</h4> <p>${post.data.description}</p> <a class="icon-link icon-link-hover text-capitalize"${addAttribute(`/nbc/${locale}/blog/${post.data.title}`, "href")}> ${t("read")} <i class="bi bi-arrow-right ms-2 mb-1 small"></i> </a> </div> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/cards/blogCard.astro", void 0);

export { $$BlogCard as $ };
