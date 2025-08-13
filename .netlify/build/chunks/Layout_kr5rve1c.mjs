import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, a as createAstro, d as renderComponent, f as renderScript, g as renderHead, h as renderSlot } from './astro/server_CzyFbPgW.mjs';
import 'kleur/colors';
/* empty css                          */
import { g as getCollection } from './_astro_content_CDBseT-m.mjs';
import 'clsx';

const languages = {
  en: "English",
  fr: "Français"
};
const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.contact": "Contact Us",
    "nav.news": "News",
    "nav.who": "Who we are?",
    "read": "read more",
    "see": "see more",
    "talk": "Take The First Step.",
    "t.content": "Table Of Content",
    "backto": "Back to",
    "comm": "Comments",
    // pages
    "home.desc": "Transform your ideas into successful projects, from conception to impact.",
    "services.our": "our services",
    "services.desc": "We offer an integrated approach to ensure your project is not only well designed, but also well financed and managed for maximum impact.",
    "steps": "Steps",
    "steps.desc": "Do the first step and we will do the most difficult tasks to get the results you need:",
    "step.one": "Reach out",
    "step.one.desc": "This step is an opportunity to ensure that your budget and what you wish to achieve can meet the expected results.",
    "step.two": "Service Proposal & Information",
    "step.two.desc": "Then we formalize an agreement, clearly defining expectations for both parties and costs.",
    "step.three": "Execution & Delivery",
    "step.three.desc": "Once the work is completed, we will provide the agreed-upon results, along with accurate an explanation of the outcomes.",
    "about.desc": "We deliver and provide Efficient Solutions for Your Financial Management Needs",
    "about.story": "Nti Business consulting is a Cameroonian company Founded by passionate experts, our firm was born with a clear mission: to transform our clients' visions into tangible successes. ",
    "about.story1": "We found that many ambitious projects lacked the necessary support, whether at the planning, financing or evaluation level. This is why we have combined our skills to create a complete and integrated solution.",
    "about.vision": "We have helped many organizations realize their goals, providing them with the tools and expertise they need to thrive.",
    "about.vision.catch": "Our services are designed for a wide range of organizations.",
    "about.biz.one": "NGO or Association",
    "about.biz.one.decs": "You are an NGO or association seeking to finance a social or humanitarian project and need help with fundraising and monitoring & evaluation.",
    "about.biz.two": "Startup or Growing company",
    "about.biz.two.decs": "You are a growing company preparing an expansion project and needs a feasibility study and rigorous project management.",
    "about.biz.three": "Individual (Entrepreneur)",
    "about.biz.three.decs": "You are an individual entrepreneur with an innovative idea who needs a strategic plan to attract investors and monitoring to ensure the success of your project.",
    "about.biz.four": "Public institution",
    "about.biz.four.decs": "You are a public institution launching a program and looking for a partner for monitoring and evaluating its impact.",
    "faq.def": "Frequently Asked Questions",
    "faq.question-one": "Qu'est-ce que le fundraising ?",
    "faq.answer-one": "Le fundraising, ou levée de fonds, est le processus de sollicitation de dons, de subventions ou d'investissements auprès de particuliers, d'entreprises, de fondations ou d'institutions pour financer un projet ou une organisation.",
    "faq.question-two": "Comment menez-vous une étude de projet ?",
    "faq.answer-two": "Nous réalisons une analyse approfondie qui inclut l'étude de faisabilité, l'évaluation des risques, la planification stratégique et la définition des objectifs pour assurer que votre projet est viable et bien structuré avant son lancement.",
    "faq.question-three": "Quelle est l'importance du suivi et de l'évaluation (S&E) ?",
    "faq.answer-three": "Le S&E est crucial pour mesurer la performance et l'impact de votre projet. Il permet de s'assurer que les objectifs sont atteints, d'identifier les points d'amélioration et de prendre des décisions éclairées pour l'avenir.",
    "faq.question-four": "Est-ce que vos services s'appliquent à tous les secteurs d'activité ?",
    "faq.answer-four": "Oui, nos services sont flexibles et peuvent être adaptés à divers secteurs, qu'il s'agisse de l'éducation, de la santé, de la technologie, de l'environnement ou du développement communautaire.",
    "team.def": "Our Team",
    "team.meet": "Meet the Team",
    "team.desc": "We are a team of dynamic and experienced professionals, united by a passion and commitment to provide quality, personalized and tailor-made solutions.",
    "test.client": "Customer Testimonials",
    "test.desc": "Here's what our customers say about us",
    "feat.why": "Why Choose Us?",
    "feat.desc": "Trusted Partnership, Proven Results",
    "feat.one": "Complete Expertise",
    "feat.one.desc": "An experienced team covering all phases of the project life cycle.",
    "feat.two": "Tailored Approach",
    "feat.two.desc": "Solutions tailored to your specific needs, whatever the size or nature of your organization.",
    "feat.three": "Measurable Results",
    "feat.three.desc": "A commitment to delivering tangible results and real impact.",
    "contact.ready": "Willing to start or evaluate a business?",
    "contact.today": "Contact us today to discuss your needs and find out how we can help you achieve your goals.",
    "contact.hr": "Working hours: Monday - Friday from 08:00am - 7:00pm",
    "slogan": "We transform our clients' visions into tangible successes.",
    "stats.title": "structure your projects with strategic planning",
    "stats.desc": "Be confident that your efforts are paying off. Our monitoring and evaluation tools provide you with clear data and relevant analyzes to measure the effectiveness of your project",
    "stats.client": "Statisfied customers",
    "stats.years": "Years of experience",
    "stats.folw": "Projets Followed",
    "posts": "posts",
    "post.new": "Latest Updates",
    "post.desc": "Get the lastest on Business, Financial and Accounting topics.",
    "terms": "Terms and Conditions",
    "privacy": "Privacy Policy"
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.contact": "Contactez Nous",
    "nav.news": "Actualités",
    "nav.who": "Qui nous sommes?",
    "read": "Lire plus",
    "see": "Voir plus",
    "talk": "Faites Le Premier Pas",
    "t.content": "Table Des Matières",
    "backto": "Revenir sur la page",
    "comm": "Comentaires",
    // pages
    "home.desc": "Transformer vos idées en projets réussis, de la conception à l'impact.",
    "services.our": "Nos Services",
    "services.desc": "Nous offrons une approche intégrée pour vous assurer que votre projet est non seulement bien conçu, mais aussi bien financé et géré pour un impact maximal.",
    "steps": "Étapes",
    "steps.desc": "Faites la première étape et nous effectuerons les tâches les plus difficiles pour obtenir les résultats dont vous avez besoin :",
    "step.one": "Nous Contactez",
    "step.one.desc": "Cette étape est l'occasion de vous assurer que votre budget et ce que vous souhaitez réaliser peuvent répondre aux résultats attendus.",
    "step.two": "Proposition de service et informations",
    "step.two.desc": "Ensuite, nous formalisons un accord, définissant clairement les attentes des deux parties et les coûts.",
    "step.three": "Exécution & Livraison",
    "step.three.desc": "Une fois le travail terminé, nous fournirons les résultats convenus, ainsi qu'une explication précise des résultats.",
    "about.desc": "Nous livrons et fournissons des solutions efficaces pour vos besoins de gestion financière",
    "about.story": "Nti Business consulting est une entreprise camerounaise fondée par des experts passionnés, notre cabinet est né avec une mission claire : transformer les visions de nos clients en réussites tangibles.",
    "about.story1": "Nous avons constaté que de nombreux projets ambitieux manquaient du soutien nécessaire, que ce soit au niveau de la planification, du financement ou de l'évaluation. C'est pourquoi nous avons uni nos compétences pour créer une solution complète et intégrée.",
    "about.vision": "Au fils des annees nous avons aidé de nombreuses organisations à concrétiser leurs objectifs, en leur fournissant les outils et l'expertise dont elles ont besoin pour prospérer.",
    "about.vision.catch": "Nos services sont conçus pour une large gamme d'organisations.",
    "about.biz.one": "ONG ou Association",
    "about.biz.one.decs": "Vous êtes une ONG ou une association cherchant à financer un projet social ou humanitaire et avez besoin d'aide pour la collecte de fonds et le suivi-évaluation.",
    "about.biz.two": "Startup ou Entreprise en croissance",
    "about.biz.two.decs": "Vous êtes une entreprise en pleine croissance préparant un projet d'expansion et avez besoin d'une étude de faisabilité et d'une gestion de projet rigoureuse.",
    "about.biz.three": "Entrepreneur individuel",
    "about.biz.three.decs": "Vous êtes un entrepreneur individuel avec une idée innovante qui a besoin d'un plan stratégique pour attirer les investisseurs et d'un suivi pour assurer le succès de votre projet.",
    "about.biz.four": "Institution Publique",
    "about.biz.four.decs": "Vous êtes une institution publique lançant un programme et recherchez un partenaire pour suivre et évaluer son impact.",
    "faq.def": "Foire aux Questions",
    "faq.question-one": "Qu'est-ce que le fundraising ?",
    "faq.answer-one": "Le fundraising, ou levée de fonds, est le processus de sollicitation de dons, de subventions ou d'investissements auprès de particuliers, d'entreprises, de fondations ou d'institutions pour financer un projet ou une organisation.",
    "faq.question-two": "Comment menez-vous une étude de projet ?",
    "faq.answer-two": "Nous réalisons une analyse approfondie qui inclut l'étude de faisabilité, l'évaluation des risques, la planification stratégique et la définition des objectifs pour assurer que votre projet est viable et bien structuré avant son lancement.",
    "faq.question-three": "Quelle est l'importance du suivi et de l'évaluation (S&E) ?",
    "faq.answer-three": "Le S&E est crucial pour mesurer la performance et l'impact de votre projet. Il permet de s'assurer que les objectifs sont atteints, d'identifier les points d'amélioration et de prendre des décisions éclairées pour l'avenir.",
    "faq.question-four": "Est-ce que vos services s'appliquent à tous les secteurs d'activité ?",
    "faq.answer-four": "Oui, nos services sont flexibles et peuvent être adaptés à divers secteurs, qu'il s'agisse de l'éducation, de la santé, de la technologie, de l'environnement ou du développement communautaire.",
    "team.def": "Notre Équipe",
    "team.meet": "Rencontrez l'Équipe",
    "team.desc": "Nous sommes une équipe de professionnels dynamiques et expérimentés, unis par une passion et un engagement de fournir des accompagnement de qualité, personnalisé et des solutions sur mesure.",
    "test.client": "Témoignages de Clients",
    "test.desc": "Voici ce que nos clients disent de nous",
    "feat.why": "Pourquoi Nous Choisir ?",
    "feat.desc": "Partenariat de confiance, résultats garantis.",
    "feat.one": "Expertise Complète",
    "feat.one.desc": "Une équipe expérimentée couvrant toutes les phases du cycle de vie d'un projet.",
    "feat.two": "Approche Sur Mesure",
    "feat.two.desc": "Des solutions adaptées à vos besoins spécifiques, quelle que soit la taille ou la nature de votre organisation.",
    "feat.three": "Résultats mesurables",
    "feat.three.desc": " Un engagement à fournir des résultats tangibles et un impact réel.",
    "contact.ready": "Envie de démarrer ou évaluer un Projet?",
    "contact.today": "Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.",
    "contact.hr": "Horaires de travail : du lundi au vendredi de 8h00 à 19h00",
    "slogan": "Nous transformons les visions de nos clients en succès tangibles.",
    "stats.title": "Structurez vos projet avec une planification stratégique",
    "stats.desc": "Ayez l'assurance que vos efforts portent leurs fruits. Nos outils de suivi et d'évaluation vous fournissent des données claires et des analyses pertinentes pour mesurer l'efficacité de votre projet",
    "stats.client": "Clients satisfaits",
    "stats.years": "Années d'expérience",
    "stats.folw": "Projets suivi",
    "posts": "Postes",
    "post.new": "Nouveauté",
    "post.desc": "Nos Derniers Articles de Blog",
    "terms": "Termes et Conditions",
    "privacy": "Politique de confidentialité"
  }
};

function getLangFromUrl(url) {
  const lang = url.pathname.split("/")[2];
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return key in ui[lang] ? ui[lang][key] : ui[defaultLang][key];
  };
}

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="d-flex gap-1 justify-content-start align-items-center gap-0 navbar-brand col-lg-3 p-0"> <a href="/" class="btn btn-lg btn-primary fw-bold fs-4 p-1"> N </a> <div class="lh-0"> <div class="fw-bold fs-3 mb-2"> B </div> <small class="bottom-0">ti business Consulting</small> </div> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/logo.astro", void 0);

const $$LangChanger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="dropdown"> <button class="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false"> <i class="bi bi-globe"></i> </button> <ul class="dropdown-menu dropdown-menu-end"> ${Object.keys(languages).map((lang) => renderTemplate`<li><a class="dropdown-item"${addAttribute(`/nbc/${lang}`, "href")}> ${lang == "en" ? languages[lang] : languages.fr} </a></li>`)} </ul> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/utils/langChanger.astro", void 0);

const $$Astro$4 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const locale = getLangFromUrl(Astro2.url);
  const { pathname } = Astro2.url;
  const t = useTranslations(locale);
  const today = (/* @__PURE__ */ new Date()).getTime();
  const refLink = "";
  const activeLink = "active fw-bold";
  const services = await getCollection("services", ({ id }) => {
    return id.startsWith(locale + "/");
  });
  const recentPosts = await getCollection("posts", ({ id, data }) => {
    const dat = new Date(data.publishedDate).getTime();
    return Math.floor(today - dat) < 52596e5 && id.includes(locale + "/");
  });
  const showPosts = recentPosts.slice(0, 2);
  const blogs = [
    { name: "taxes", icon: "me-2 bi bi-tag ", link: `${refLink}/blog/1` },
    { name: "astuces", icon: "me-2 bi bi-info", link: `${refLink}/blog/1` },
    { name: "articles", icon: "me-2 bi bi-newspaper ", link: `${refLink}/blog/1` }
  ];
  const resources = [
    { name: "Communaute", icon: "me-2 bi bi-people ", link: `${refLink}/blog/1` },
    { name: "Politiques de Privacy", icon: "me-2 bi bi-people ", link: `${refLink}/blog/1` },
    { name: "opportunites de ..", icon: "me-2 bi bi-node-plus ", link: `${refLink}/blog/1` },
    { name: "temoinages", icon: "me-2 bi bi-people ", link: `${refLink}/blog/1` }
  ];
  const proj = [
    { name: "projet typ-1", icon: "me-2 bi bi-archive", link: `${refLink}/blog/1` }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="container-fluid border-bottom"> <section data-bs-toggle="modal" data-bs-target="#contactUs" class="container mx-auto d-flex justify-content-between align-itms-center px-2 py-1"> <btn class="btn btn-sm"> <i class="bi bi-phone"></i>
Book a consultation
</btn> <small> EN | FR </small> </section> </header> <nav class="container-fluid navbar navbar-dark navbar-expand-lg p-3 position-absolute" aria-label="Offcanvas navbar large"> <section class="container mx-auto nav gap-2 justify-content-between align-items-center"> ${renderComponent($$result, "Logo", $$Logo, {})} <aside class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavMenu" aria-labelledby="offcanvasNavMenuLabel"> <section class="offcanvas-header"> <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button> </section> <section class="offcanvas-body"> <ul class="navbar-nav nav flex-column flex-lg-row gap-2 justify-content-end justify-content-lg-center flex-grow-1 pe-3"> <a${addAttribute(`nav-link ${pathname.endsWith("fr") || pathname.endsWith("en") ? activeLink : ""}`, "class")} aria-current="page"${addAttribute(`${refLink}`, "href")}> ${t("nav.home")} </a> <div class="dropdown"> <a${addAttribute(`nav-link dropdown-toggle ${pathname.search("about-us") > 0 ? activeLink : ""}`, "class")} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${t("nav.about")} </a> <ul class="dropdown-menu"> <a class="dropdown-item"${addAttribute(`${refLink}/about-us#`, "href")}>${t("nav.who")}</a> <a class="dropdown-item"${addAttribute(`${refLink}/about-us#team`, "href")}>Team</a> <a class="dropdown-item"${addAttribute(`${refLink}/about-us#faq`, "href")}>faq</a> </ul> </div> <a${addAttribute(`nav-link dropdown-toggle ${pathname.includes("/blog") || pathname.includes("/project") ? activeLink : ""}`, "class")} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${t("nav.news")} </a> <aside class="dropdown-menu mega-menu"> <section class="bg-body container mx-auto row p-3"> <div class="col-lg-3"> <h6 class="fw-bold text-primary mb-3">Projets</h6> ${proj.map((projet) => renderTemplate`<a${addAttribute(projet.link, "href")} class="mb-3">${projet.name}</a>`)} </div> <div class="col-lg-3"> <h6 class="fw-bold text-primary mb-3">Blog</h6> ${blogs.map((blog) => renderTemplate`<a${addAttribute(blog.link, "href")} class="d-block mb-3"> <i${addAttribute(blog.icon, "class")}></i> ${blog.name} </a>`)} <h6 class="fw-bold text-primary mb-3">Resouces</h6> ${resources.map((resource) => renderTemplate`<a${addAttribute(resource.link, "href")} class="d-block mb-3"> <i${addAttribute(resource.icon, "class")}></i> ${resource.name} </a>`)} </div> <div class="col-lg-6 d-none d-lg-flex flex-column gap-2"> <h6 class="fw-bold text-primary">Nouveaute</h6> <div style="font-size: smaller;" class="d-flex gap-1"> ${showPosts.map((item) => renderTemplate`<a${addAttribute(`${refLink}/blog/${item.data.title}`, "href")} class="col-md-6 position-relative border-end p-2"> <p>${item.data.tags.map((tag) => renderTemplate`<small class="btn btn-sm btn-primary me-1">${tag}</small>`)}</p> <p class="fw-semibold"> ${item.data.title} </p> <p>${item.data.description}</p> </a>`)} </div> </div> </section> </aside> <div class="dropdown"> <a${addAttribute(`nav-link dropdown-toggle ${pathname.search("/services") > 0 ? activeLink : ""}`, "class")} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Services
</a> <div class="dropdown-menu dropdown-menu-end"> ${services.map((service) => renderTemplate`<a class="dropdown-item"${addAttribute(`${refLink}/services/${service.data.title}`, "href")}> <i${addAttribute(`${service.data.icon} me-1`, "class")}></i> ${service.data.title} </a>`)} </div> </div> </ul> <input type="button" data-bs-toggle="modal" data-bs-target="#contactUs" class="btn btn-primary"${addAttribute(t("nav.contact"), "value")}> </section> </aside> <aside class="d-flex gap-2"> <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavMenu" aria-controls="offcanvasNavMenu" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> ${renderComponent($$result, "LangChanger", $$LangChanger, {})} </aside> </section> </nav>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/navbar.astro", void 0);

const socials = [
  { icon: "bi bi-twitter-x", to: "#", link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2Fntibusinessco&h=AT0Mex82b2vatg6zvYHgBDt0YjwJM5_pMi1k_DNBdh8Sgl2YzOvrmnn7YIQIaByaNvdSsATyTcDCv7lXmSSWxgbueWqVpY03HD1SjQbnvZTuxGtPr9OtQqP_1AB8wwlf1XwsQq5AfiNZ0DM3SyEO" },
  { icon: "bi bi-facebook mx-1", to: "#", link: "https://www.facebook.com/people/NTI-Business-Consulting/100095274985381/?mibextid=ZbWKwL" },
  { icon: "bi bi-whatsapp", to: "#", link: "https://wa.me/+237-667316329?text=hello," },
  { icon: "bi bi-instagram", to: "#", link: "https://www.instagram.com/ntibusinessconsulting" }
];
const address = [
  { icon: "bi bi-geo", to: "Yaoundé, Cameroon", link: "" },
  { icon: "bi bi-telephone-fill", to: "+237 667 316 329", link: "" },
  { icon: "bi bi-google", to: "ntibusinessconsulting@gmail.com", link: "" }
];

const $$Astro$3 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  const refLink = `/nbc/${locale}`;
  const lastLinks = refLink + `/` + (locale == "en" ? "terms-and-condittions" : "termes-et-conditions");
  const links = [
    { name: t("nav.home"), to: "/#" },
    { name: "Blogs", to: refLink + "/#" },
    { name: "F.A.Q", to: refLink + "/about#faq" },
    { name: t("nav.who"), to: refLink + "/about-us#who" }
  ];
  const services = await getCollection("services", ({ id }) => {
    return id.startsWith(locale + "/");
  });
  return renderTemplate`${maybeRenderHead()}<footer class="py-4 text-bg-dark"> <section class="container row g-3 justify-content-between mx-auto pt-4 pb-4 pb-lg-5"> <aside class="col-lg-5 px-4 px-md-0"> ${renderComponent($$result, "Logo", $$Logo, {})} <p class="my-1">${t("slogan")}</p> ${address.map((item) => renderTemplate`<span class="d-block mb-1"> <i${addAttribute(`${item.icon} me-2`, "class")}></i> ${item.to} </span>`)} <div class="mt-3"> ${socials.map((it) => renderTemplate`<a${addAttribute(it.link, "href")}${addAttribute(`btn btn-outline-light rounded-circle btn-sm ${it.icon} me-1`, "class")}></a>`)} </div> </aside> <aside class="d-none d-md-block col-md-6 col-lg-3 text-center text-md-start"> <h5 class="fw-bold">Services</h5> ${services.map((item) => renderTemplate`<a class="d-lg-block mb-1 mx-2 mx-lg-0"${addAttribute(`${refLink}/services/${item.data.title}`, "href")}> <i class="bi bi-check2-circle me-1"></i> ${item.data.title} </a>`)} </aside> <aside class="d-none d-md-block col-md-6 col-lg-2 text-center text-lg-start"> <h5 class="fw-bold">Pages</h5> ${links.map((item) => renderTemplate`<a class="d-lg-block mb-1 mx-2 mx-lg-0"${addAttribute(item.to, "href")}> ${item.name}</a>`)} </aside> <div class="border-top d-lg-none"></div> </section> <div style="font-size: xx-small;" class="container nav justify-content-center justify-content-lg-between p-2 pt-4 mx-auto"> <span>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Nti.BC. All rights reserved.
</span> <span> <a${addAttribute(lastLinks, "href")}>${t("terms")}</a> <span class="vr mx-1"></span><a${addAttribute(lastLinks + "#4-*", "href")}>${t("privacy")}</a> </span> </div> </footer>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/footer.astro", void 0);

const $$Astro$2 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  const address = [
    { icon: "bi bi-telephone-fill", to: "+237 667 316 329" },
    { icon: "bi bi-google", to: "ntibusinessconsulting@gmail.com" }
  ];
  return renderTemplate`<!-- Modal -->${maybeRenderHead()}<aside class="modal fade" data-bs-backdrop="static" id="contactUs" tabindex="-1" aria-labelledby="contactUsLabel" aria-hidden="true"> <div class="modal-dialog modal-dialog-centered"> <div class="modal-content"> <div class="modal-header border-0 py-1"> <h1 class="modal-title fs-5" id="exampleModalLabel">${t("talk")}</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> </div> <form id="contact" class="modal-body pt-1"> <h2 class="display-5 fw-bold">${t("nav.contact")}</h2> <p>${t("slogan")}</p> ${address.map((addr) => renderTemplate`<a class="d-block" target="_blank"> <i${addAttribute(`me-1 text-primary ${addr.icon}`, "class")}></i> ${addr.to} </a>`)} <p> <i class="bi bi-alarm-fill me-1 text-primary"></i> ${t("contact.hr")} </p> <input placeholder="Nom / Prenom" type="text" class="form-control mb-3" name="name" required> <input placeholder="Email / Tel" type="text" class="form-control mb-3" name="mail" required> <textarea placeholder="Message" class="form-control mb-3" name="message" required></textarea> <button class="btn btn-primary" type="submit">Send</button> </form> </div> </div> </aside> ${renderScript($$result, "D:/Personal Dev Projects/important/nti-consulting/src/components/forms/contactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/forms/contactForm.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeSwitcher = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button class="btn" id="themeToggle"> <i class="bi bi-sun sun"></i> <i class="bi bi-moon moon"></i> <i class="bi bi-brightness-alt-low-fill auto-theme"></i> </button> <script>

    const theme = (() => {
      const localStorageTheme = localStorage?.getItem("theme") ?? '';
      if (['dark', 'light'].includes(localStorageTheme)) return localStorageTheme;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
      return 'light';
    })();
  
    
    if (theme === 'auto') {
      document.body.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.body.setAttribute('data-bs-theme', theme)
    }
  
    window.localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const isDark = document.body.getAttribute('data-bs-theme') === "dark"  ? "light":  "dark" ;
      document.body.setAttribute('data-bs-theme', isDark);
      localStorage.setItem("theme", isDark );
    }
  
    document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);
    
<\/script>`])), maybeRenderHead());
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/utils/themeSwitcher.astro", void 0);

const $$Astro$1 = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Util = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Util;
  const locale = getLangFromUrl(Astro2.url);
  const t = useTranslations(locale);
  return renderTemplate`${maybeRenderHead()}<div style="right:3rem;" class="position-fixed top-50 translate-middle-y d-flex"> <button class="btn btn-info" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <i class="bi bi-question-circle-fill"></i> </button> <div style="width: 160px;" class="dropdown-menu dropdown-menu-start shadow"> <a class="btn btn-outline-scondary" href="#"> <i class="bi bi-arrow-up"></i> </a> ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, {})} <button${addAttribute(t("nav.contact"), "title")} data-bs-toggle="modal" data-bs-target="#contactUs" class="btn btn-primary"> <i class="bi bi-headset"></i> </button> </div> </div>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/components/utils/util.astro", void 0);

const $$Astro = createAstro("https://ntibusinessconsulting.netlify.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const {
    title = "NBC",
    desc = "lorem ipsosuim ....",
    keywds = "Accounting, comptabilites, cameroon, start-up de comptabilites"
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/nbc/favicon.svg"><meta name="description"${addAttribute(desc, "content")}><link rel="sitemap" href="/sitemap-index.xml"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"><title> ${title} | N.B consulting</title>${renderHead()}</head> <body data-bs-theme="light"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "ContactForm", $$ContactForm, {})} ${renderComponent($$result, "Util", $$Util, {})} ${renderScript($$result, "D:/Personal Dev Projects/important/nti-consulting/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/Personal Dev Projects/important/nti-consulting/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getLangFromUrl as g, languages as l, useTranslations as u };
