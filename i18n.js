(function () {
  var STORAGE_KEY = "site-lang";
  var SUPPORTED = ["en", "es"];

  var DICTIONARY = {
    en: {
      "summary.contact": "Contact",
      "summary.topSkills": "Top Skills",
      "summary.technologies": "Technologies",
      "summary.education": "Education",
      "summary.edu.csm": "Certified ScrumMaster (CSM)",
      "summary.edu.csmSchool": "Scrum Alliance",
      "summary.edu.audit": "Security Management and Systems Audit Diploma",
      "summary.edu.auditSchool": "Universidad de Los Andes",
      "summary.edu.engineering": "System Engineering Degree",
      "summary.edu.engineeringSchool": "Universidad Catolica Boliviana \"San Pablo\"",
      "summary.role": "Software Developer",
      "summary.actions.viewDetailed": "View Detailed CV",
      "summary.actions.print": "Print / Save PDF",
      "summary.intro": "Software developer with 10+ years of experience developing and maintaining enterprise-level applications using technologies and programming languages such as Java and C#/.NET. I contribute across every stage of the software development lifecycle, including design, coding, debugging, testing, and maintenance, while collaborating with teammates to deliver reliable solutions that help customers achieve their goals.",
      "summary.experience": "Experience",
      "summary.jobs.1.title": "Software Developer <span class=\"item-company\">| CodeRoad Inc. (Towbook)</span>",
      "summary.jobs.1.desc": "Develop and maintain a large-scale towing platform built on .NET Framework, ASP.NET MVC, SQL Server, Cosmos DB, and Azure Service Bus. Lead migration and upgrades to .NET Standard and .NET 8, deploying services to Azure Kubernetes (AKS) via GitHub Actions.",
      "summary.jobs.2.title": "Freelance Backend Developer <span class=\"item-company\">| Hakan Solutions</span>",
      "summary.jobs.2.desc": "Built backend microservices for fintech products using Quarkus and PostgreSQL with Keycloak, plus notification services using Twilio and Amazon SES, and Libranda API integration for WooCommerce ebook workflows.",
      "summary.jobs.3.title": "Software Developer <span class=\"item-company\">| Mojix (Towbook)</span>",
      "summary.jobs.3.desc": "Developed and maintained Towbook modules in .NET Framework, ASP.NET MVC, SQL Server, Cosmos DB, and Service Bus. Migrated libraries and services to .NET Standard and .NET 7 for AKS deployments through GitHub Actions.",
      "summary.jobs.4.title": "Software Engineer <span class=\"item-company\">| Mojix</span>",
      "summary.jobs.4.desc": "Built and maintained backend REST APIs in Java and Spring for an enterprise IoT platform, using MongoDB, MySQL, Apache Kafka, and Python migration scripts.",
      "summary.jobs.5.title": "Consultant / Senior Developer <span class=\"item-company\">| IDEATI S.A. - Get Better</span>",
      "summary.jobs.5.desc": "Designed and developed a Tax Audit System for DGI Nicaragua using DDD, Repository and Unit of Work patterns in .NET Framework, Entity Framework, ASP.NET MVC, SQL Server, and Reporting Services.",
      "summary.jobs.6.title": "Consultant / Senior Developer <span class=\"item-company\">| Servicio de Impuestos Nacionales</span>",
      "summary.jobs.6.desc": "Designed and developed the Galileo (MASI) BPM-based tax administration model in .NET Framework, Oracle, and WCF, including process engine and workflow design.",
      "summary.jobs.7.title": "Technical Analyst III <span class=\"item-company\">| Banco de Crédito BCP</span>",
      "summary.jobs.7.desc": "Maintained and developed Internet Banking features under CMMI and SOA using .NET Framework, WCF, and SQL Server.",

      "detailed.identityRole": "Software Developer",
      "detailed.cvTitle": "Curriculum Vitae",
      "detailed.role": "Enterprise Software Developer",
      "detailed.summary": "Software developer with 10+ years of experience designing, developing, modernizing, and operating enterprise applications across .NET and Java ecosystems. Strong full lifecycle execution from design and coding through debugging, testing, deployment, and long-term maintenance.",
      "detailed.actions.backSummary": "Back To Summary CV",
      "detailed.stats.years": "Years Experience",
      "detailed.stats.stack": "Recent Stack",
      "detailed.stats.cloud": "Cloud Deployments",
      "detailed.stats.backend": "Backend Expertise",
      "detailed.sections.experience": "Professional Experience",
      "detailed.sections.projects": "Selected Projects",
      "detailed.sections.coreSkills": "Core Skills",
      "detailed.sections.education": "Education",
      "detailed.sections.languages": "Languages",
      "detailed.sections.links": "Profile Links",
      "detailed.languages.spanish": "Spanish · Native",
      "detailed.languages.english": "English · Professional",
      "detailed.links.portfolio": "Portfolio",
      "detailed.links.download": "Download PDF CV",
      "detailed.footer": "Curriculum Vitae - Last updated June 2026",
      "detailed.jobs.1.title": "Software Developer",
      "detailed.jobs.1.desc": "Develop and maintain a large-scale towing management platform with .NET Framework, ASP.NET MVC, SQL Server, Cosmos DB, and Azure Service Bus. Lead modernization of libraries and services to .NET Standard and .NET 8, deployed to AKS through GitHub Actions pipelines.",
      "detailed.jobs.2.title": "Software Developer",
      "detailed.jobs.2.desc": "Developed and maintained platform modules in .NET Framework and ASP.NET MVC. Executed migration initiatives to .NET Standard and .NET 7 for Azure Kubernetes deployment workflows.",
      "detailed.jobs.3.title": "Freelance Backend Developer",
      "detailed.jobs.3.desc": "Built fintech microservices in Quarkus and PostgreSQL with Keycloak IAM. Delivered multi-channel notification services with Twilio and Amazon SES, plus Libranda API integration for WooCommerce ebook commerce flows.",
      "detailed.jobs.4.title": "Software Engineer",
      "detailed.jobs.4.desc": "Designed and maintained REST API services for an IoT platform using Java, Spring Framework, MongoDB, MySQL, and Apache Kafka. Produced Python data migration scripts and collaborated with QA and DevOps for production readiness.",
      "detailed.jobs.5.title": "Consultant / Senior Developer",
      "detailed.jobs.5.desc": "Designed and built a Tax Audit System for DGI Nicaragua using DDD, Repository, and Unit of Work patterns on .NET Framework, Entity Framework, ASP.NET MVC, and SQL Server.",
      "detailed.jobs.6.title": "Consultant / Senior Developer",
      "detailed.jobs.6.desc": "Built the Galileo (MASI) BPM tax administration platform using .NET Framework (C#), Oracle, and WCF. Designed XPDL-based process engine features and guided junior developer activities.",
      "detailed.jobs.7.title": "Technical Analyst III",
      "detailed.jobs.7.desc": "Maintained and implemented Internet Banking capabilities applying SOA and CMMI practices on .NET Framework (C#), WCF, and SQL Server.",
      "detailed.jobs.8.title": "Consultant Software Developer / IT Product Specialist",
      "detailed.jobs.8.desc": "Delivered accounting, HR, billing, tourism, and document management solutions using .NET Framework, SQL Server, and complementary enterprise tooling.",
      "detailed.projects.1.title": "Towbook Platform",
      "detailed.projects.1.desc": "Modernized a .NET Framework platform to .NET 8 and automated AKS deployments with GitHub Actions.",
      "detailed.projects.2.title": "IoT Platform Backend",
      "detailed.projects.2.desc": "Built and evolved REST APIs for high-volume IoT workloads with distributed Java services and Kafka.",
      "detailed.projects.3.title": "Tax Audit System",
      "detailed.projects.3.desc": "Designed a full audit lifecycle platform for DGI Nicaragua using DDD and enterprise .NET architecture.",
      "detailed.projects.4.title": "BCP Internet Banking",
      "detailed.projects.4.desc": "Maintained and developed account management and banking operation features for Internet Banking projects."
    },
    es: {
      "summary.contact": "Contacto",
      "summary.topSkills": "Habilidades Clave",
      "summary.technologies": "Tecnologias",
      "summary.education": "Educacion",
      "summary.edu.csm": "Certified ScrumMaster (CSM)",
      "summary.edu.csmSchool": "Scrum Alliance",
      "summary.edu.audit": "Diplomado en Gestion de Seguridad y Auditoria de Sistemas",
      "summary.edu.auditSchool": "Universidad de Los Andes",
      "summary.edu.engineering": "Ingenieria de Sistemas",
      "summary.edu.engineeringSchool": "Universidad Catolica Boliviana \"San Pablo\"",
      "summary.role": "Desarrollador de Software",
      "summary.actions.viewDetailed": "Ver CV Detallado",
      "summary.actions.print": "Imprimir / Guardar PDF",
      "summary.intro": "Desarrollador de software con mas de 10 anos de experiencia en desarrollo y mantenimiento de aplicaciones empresariales utilizando tecnologias y lenguajes como Java y C#/.NET. Aporto en todas las etapas del ciclo de vida del software, incluyendo diseno, codificacion, depuracion, pruebas y mantenimiento, colaborando con equipos para entregar soluciones confiables que ayuden a cumplir objetivos.",
      "summary.experience": "Experiencia",
      "summary.jobs.1.title": "Desarrollador de Software <span class=\"item-company\">| CodeRoad Inc. (Towbook)</span>",
      "summary.jobs.1.desc": "Desarrollo y mantengo una plataforma de gruas a gran escala construida en .NET Framework, ASP.NET MVC, SQL Server, Cosmos DB y Azure Service Bus. Lidero migraciones y actualizaciones a .NET Standard y .NET 8, desplegando servicios en Azure Kubernetes (AKS) mediante GitHub Actions.",
      "summary.jobs.2.title": "Desarrollador Backend Freelance <span class=\"item-company\">| Hakan Solutions</span>",
      "summary.jobs.2.desc": "Construi microservicios backend para productos fintech usando Quarkus y PostgreSQL con Keycloak, ademas de servicios de notificacion con Twilio y Amazon SES e integracion de API de Libranda para flujos de ebooks en WooCommerce.",
      "summary.jobs.3.title": "Desarrollador de Software <span class=\"item-company\">| Mojix (Towbook)</span>",
      "summary.jobs.3.desc": "Desarrolle y mantuve modulos de Towbook en .NET Framework, ASP.NET MVC, SQL Server, Cosmos DB y Service Bus. Migre librerias y servicios a .NET Standard y .NET 7 para despliegues en AKS mediante GitHub Actions.",
      "summary.jobs.4.title": "Ingeniero de Software <span class=\"item-company\">| Mojix</span>",
      "summary.jobs.4.desc": "Desarrolle y mantuve APIs REST backend en Java y Spring para una plataforma IoT empresarial, usando MongoDB, MySQL, Apache Kafka y scripts de migracion en Python.",
      "summary.jobs.5.title": "Consultor / Desarrollador Senior <span class=\"item-company\">| IDEATI S.A. - Get Better</span>",
      "summary.jobs.5.desc": "Disene y desarrolle un Sistema de Fiscalizacion para DGI Nicaragua usando DDD, Repository y Unit of Work en .NET Framework, Entity Framework, ASP.NET MVC, SQL Server y Reporting Services.",
      "summary.jobs.6.title": "Consultor / Desarrollador Senior <span class=\"item-company\">| Servicio de Impuestos Nacionales</span>",
      "summary.jobs.6.desc": "Disene y desarrolle el modelo de administracion tributaria Galileo (MASI) basado en BPM con .NET Framework, Oracle y WCF, incluyendo motor de procesos y diseno de workflow.",
      "summary.jobs.7.title": "Analista Tecnico III <span class=\"item-company\">| Banco de Credito BCP</span>",
      "summary.jobs.7.desc": "Mantuve y desarrolle funcionalidades de banca por internet bajo CMMI y SOA usando .NET Framework, WCF y SQL Server.",

      "detailed.identityRole": "Desarrollador de Software",
      "detailed.cvTitle": "Curriculum Vitae",
      "detailed.role": "Desarrollador de Software Empresarial",
      "detailed.summary": "Desarrollador de software con mas de 10 anos de experiencia disenando, desarrollando, modernizando y operando aplicaciones empresariales en ecosistemas .NET y Java. Ejecucion solida de ciclo completo: desde diseno y codificacion hasta depuracion, pruebas, despliegue y mantenimiento de largo plazo.",
      "detailed.actions.backSummary": "Volver al CV Resumido",
      "detailed.stats.years": "Anos de Experiencia",
      "detailed.stats.stack": "Stack Reciente",
      "detailed.stats.cloud": "Despliegues en Nube",
      "detailed.stats.backend": "Experiencia Backend",
      "detailed.sections.experience": "Experiencia Profesional",
      "detailed.sections.projects": "Proyectos Seleccionados",
      "detailed.sections.coreSkills": "Habilidades Principales",
      "detailed.sections.education": "Educacion",
      "detailed.sections.languages": "Idiomas",
      "detailed.sections.links": "Enlaces de Perfil",
      "detailed.languages.spanish": "Espanol · Nativo",
      "detailed.languages.english": "Ingles · Profesional",
      "detailed.links.portfolio": "Portafolio",
      "detailed.links.download": "Descargar CV PDF",
      "detailed.footer": "Curriculum Vitae - Ultima actualizacion Junio 2026",
      "detailed.jobs.1.title": "Desarrollador de Software",
      "detailed.jobs.1.desc": "Desarrollo y mantengo una plataforma de gestion de gruas a gran escala con .NET Framework, ASP.NET MVC, SQL Server, Cosmos DB y Azure Service Bus. Lidero la modernizacion de librerias y servicios a .NET Standard y .NET 8, desplegados en AKS mediante pipelines de GitHub Actions.",
      "detailed.jobs.2.title": "Desarrollador de Software",
      "detailed.jobs.2.desc": "Desarrolle y mantuve modulos de plataforma en .NET Framework y ASP.NET MVC. Ejecute iniciativas de migracion a .NET Standard y .NET 7 para flujos de despliegue en Azure Kubernetes.",
      "detailed.jobs.3.title": "Desarrollador Backend Freelance",
      "detailed.jobs.3.desc": "Construi microservicios fintech en Quarkus y PostgreSQL con IAM en Keycloak. Entregue servicios de notificacion multicanal con Twilio y Amazon SES, ademas de integracion de la API de Libranda para flujos de ecommerce de ebooks en WooCommerce.",
      "detailed.jobs.4.title": "Ingeniero de Software",
      "detailed.jobs.4.desc": "Disene y mantuve servicios REST para una plataforma IoT usando Java, Spring Framework, MongoDB, MySQL y Apache Kafka. Produje scripts de migracion en Python y colabore con QA y DevOps para preparacion productiva.",
      "detailed.jobs.5.title": "Consultor / Desarrollador Senior",
      "detailed.jobs.5.desc": "Disene y construi un Sistema de Fiscalizacion para DGI Nicaragua usando DDD, Repository y Unit of Work en .NET Framework, Entity Framework, ASP.NET MVC y SQL Server.",
      "detailed.jobs.6.title": "Consultor / Desarrollador Senior",
      "detailed.jobs.6.desc": "Construi la plataforma tributaria Galileo (MASI) basada en BPM con .NET Framework (C#), Oracle y WCF. Disene funcionalidades del motor de procesos basadas en XPDL y acompanamiento a desarrolladores junior.",
      "detailed.jobs.7.title": "Analista Tecnico III",
      "detailed.jobs.7.desc": "Mantuve e implemente capacidades de banca por internet aplicando practicas SOA y CMMI sobre .NET Framework (C#), WCF y SQL Server.",
      "detailed.jobs.8.title": "Consultor Desarrollador de Software / Especialista de Producto TI",
      "detailed.jobs.8.desc": "Entregue soluciones de contabilidad, RRHH, facturacion, turismo y gestion documental usando .NET Framework, SQL Server y herramientas empresariales complementarias.",
      "detailed.projects.1.title": "Plataforma Towbook",
      "detailed.projects.1.desc": "Modernice una plataforma .NET Framework a .NET 8 y automatice despliegues en AKS con GitHub Actions.",
      "detailed.projects.2.title": "Backend Plataforma IoT",
      "detailed.projects.2.desc": "Construi y evolucione APIs REST para cargas IoT de alto volumen con servicios Java distribuidos y Kafka.",
      "detailed.projects.3.title": "Sistema de Fiscalizacion",
      "detailed.projects.3.desc": "Disene una plataforma completa de ciclo de auditoria para DGI Nicaragua usando DDD y arquitectura .NET empresarial.",
      "detailed.projects.4.title": "Banca por Internet BCP",
      "detailed.projects.4.desc": "Mantuve y desarrolle funcionalidades de gestion de cuentas y operaciones bancarias para proyectos de banca por internet."
    }
  };

  function normalizeLang(value) {
    if (!value) {
      return "en";
    }

    var short = String(value).toLowerCase().slice(0, 2);
    return SUPPORTED.indexOf(short) >= 0 ? short : "en";
  }

  function getPreferredLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return normalizeLang(saved);
    }

    return normalizeLang(navigator.language || "en");
  }

  function applyTranslations(lang) {
    var dict = DICTIONARY[lang] || DICTIONARY.en;
    var plainNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < plainNodes.length; i += 1) {
      var node = plainNodes[i];
      var key = node.getAttribute("data-i18n");
      if (dict[key]) {
        node.textContent = dict[key];
      }
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j += 1) {
      var htmlNode = htmlNodes[j];
      var htmlKey = htmlNode.getAttribute("data-i18n-html");
      if (dict[htmlKey]) {
        htmlNode.innerHTML = dict[htmlKey];
      }
    }

    document.documentElement.setAttribute("lang", lang);
  }

  function updateThemeButtonLocale(lang) {
    var buttons = document.querySelectorAll(".theme-toggle");
    var isEs = lang === "es";

    for (var i = 0; i < buttons.length; i += 1) {
      var button = buttons[i];
      button.setAttribute("data-label-dark", isEs ? "Modo Oscuro" : "Dark Mode");
      button.setAttribute("data-label-light", isEs ? "Modo Claro" : "Light Mode");
      button.setAttribute("data-title-dark", isEs ? "Cambiar a modo oscuro" : "Switch to dark mode");
      button.setAttribute("data-title-light", isEs ? "Cambiar a modo claro" : "Switch to light mode");
    }
  }

  function updateLanguageButtons(lang) {
    var buttons = document.querySelectorAll(".lang-toggle");
    var isEs = lang === "es";

    for (var i = 0; i < buttons.length; i += 1) {
      var button = buttons[i];
      button.setAttribute("aria-pressed", isEs ? "true" : "false");
      button.setAttribute("title", isEs ? "Switch to English" : "Cambiar a Espanol");

      var label = button.querySelector("span");
      if (label) {
        label.textContent = isEs ? "English" : "Espanol";
      }
    }
  }

  function setLanguage(lang) {
    var normalized = normalizeLang(lang);
    localStorage.setItem(STORAGE_KEY, normalized);
    applyTranslations(normalized);
    updateThemeButtonLocale(normalized);
    updateLanguageButtons(normalized);
    window.dispatchEvent(new CustomEvent("copilot-language-changed", { detail: { lang: normalized } }));
  }

  function init() {
    var initial = getPreferredLang();
    setLanguage(initial);

    var langButtons = document.querySelectorAll(".lang-toggle");
    for (var i = 0; i < langButtons.length; i += 1) {
      langButtons[i].addEventListener("click", function () {
        var current = normalizeLang(localStorage.getItem(STORAGE_KEY) || document.documentElement.lang);
        var next = current === "es" ? "en" : "es";
        setLanguage(next);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
