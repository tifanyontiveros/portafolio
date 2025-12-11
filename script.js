/* ========================================================= */
/* LÓGICA DE CAMBIO DE IDIOMA */
/* ========================================================= */

const translations = {
    'es': {
        'doc_title': 'Tifany Ontiveros | Portafolio de Desarrolladora Web Front-End',
        // NAV
        'nav_home': 'Inicio', 'nav_about': 'Sobre mí', 'nav_skills': 'Habilidades', 'nav_projects': 'Proyectos', 'nav_contact': 'Contacto',
        // HERO
        'hero_role': 'Desarrolladora Web Front-End', 'hero_btn_projects': 'Ver proyectos', 'hero_btn_cv': 'Descargar CV',
        // SECCIONES GENERALES
        'title_about': 'Sobre mí',
        'text_about': 'Soy desarrolladora Front-End enfocada en interfaces modernas, accesibles y responsivas. Mi pasión es traducir diseños creativos en experiencias de usuario fluidas y eficientes, utilizando principalmente HTML, CSS, y JavaScript.',
        'title_skills': 'Habilidades técnicas',
        'skills_lang_title': 'Lenguajes', 'skills_frameworks_title': 'Frameworks y Librerías', 'skills_tools_title': 'Herramientas y Otros',
        'title_projects': 'Proyectos principales', 'project_btn_view': 'Ver Figma',
        'title_certs': 'Certificaciones y Cursos',
        // PROYECTOS
        'project_rutamaz_title': 'Aplicacion movil Rutamaz',
        'project_rutamaz_desc': 'Aplicación móvil sobre rutas de transporte público en Mazatlán, desde el diseño hasta el prototipo interactivo.',
        'project_eazyhome_title': 'Eazy Home',
        'project_eazyhome_desc': 'Maquetación y diseño de interfaz para el sitio web EazyHome, un proyecto de bienes raíces.',
        // CERTIFICACIONES
        'cert_css_title': 'CSS Essentials', 'cert_html_title': 'HTML Essentials', 'cert_provider': 'Cisco NetAcad',
        // CONTACTO
        'title_contact': 'Hablemos | Contacto', 
        'contact_email_label': 'Email:', 'contact_linkedin_label': 'LinkedIn:', 'contact_github_label': 'GitHub:', 'contact_location_label': 'Ubicación:',
        'form_name_label': 'Nombre:', 'form_email_label': 'Email:', 'form_message_label': 'Mensaje:', 'form_submit': 'Enviar mensaje',
        // FOOTER
        'footer_text': '© 2025 Tifany Ontiveros — Frontend Developer'
    },
    'en': {
        'doc_title': 'Tifany Ontiveros | Front-End Web Developer Portfolio',
        // NAV
        'nav_home': 'Home', 'nav_about': 'About Me', 'nav_skills': 'Skills', 'nav_projects': 'Projects', 'nav_contact': 'Contact',
        // HERO
        'hero_role': 'Front-End Web Developer', 'hero_btn_projects': 'View Projects', 'hero_btn_cv': 'Download CV',
        // SECCIONES GENERALES
        'title_about': 'About Me',
        'text_about': 'I am a Front-End developer focused on modern, accessible, and responsive interfaces. My passion is translating creative designs into fluid and efficient user experiences, primarily using HTML, CSS, and JavaScript.',
        'title_skills': 'Technical Skills',
        'skills_lang_title': 'Languages', 'skills_frameworks_title': 'Frameworks and Libraries', 'skills_tools_title': 'Tools and Others',
        'title_projects': 'Main Projects', 'project_btn_view': 'View Figma',
        'title_certs': 'Certifications and Courses',
        // PROYECTOS
        'project_rutamaz_title': 'Rutamaz Mobile App',
        'project_rutamaz_desc': 'Mobile application about public transport routes in Mazatlan, from design to interactive prototype.',
        'project_eazyhome_title': 'Eazy Home',
        'project_eazyhome_desc': 'Layout and interface design for the EazyHome website, a real estate project.',
        // CERTIFICACIONES
        'cert_css_title': 'CSS Essentials', 'cert_html_title': 'HTML Essentials', 'cert_provider': 'Cisco NetAcad',
        // CONTACTO
        'title_contact': "Let's Talk | Contact", 
        'contact_email_label': 'Email:', 'contact_linkedin_label': 'LinkedIn:', 'contact_github_label': 'GitHub:', 'contact_location_label': 'Location:',
        'form_name_label': 'Name:', 'form_email_label': 'Email:', 'form_message_label': 'Message:', 'form_submit': 'Send message',
        // FOOTER
        'footer_text': '© 2025 Tifany Ontiveros — Frontend Developer'
    },
    'fr': {
        'doc_title': 'Tifany Ontiveros | Portfolio Développeuse Web Front-End',
        // NAV
        'nav_home': 'Accueil', 'nav_about': 'À Propos', 'nav_skills': 'Compétences', 'nav_projects': 'Projets', 'nav_contact': 'Contact',
        // HERO
        'hero_role': 'Développeuse Web Front-End', 'hero_btn_projects': 'Voir les projets', 'hero_btn_cv': 'Télécharger CV',
        // SECCIONES GENERALES
        'title_about': 'À Propos de moi',
        'text_about': 'Je suis développeuse Front-End axée sur des interfaces modernes, accessibles et réactives. Ma passion est de traduire des designs créatifs en expériences utilisateur fluides et efficaces, en utilisant principalement HTML, CSS et JavaScript.',
        'title_skills': 'Compétences techniques',
        'skills_lang_title': 'Langages', 'skills_frameworks_title': 'Frameworks et bibliothèques', 'skills_tools_title': 'Outils et autres',
        'title_projects': 'Projets principaux', 'project_btn_view': 'Voir Figma',
        'title_certs': 'Certifications et Cours',
        // PROYECTOS
        'project_rutamaz_title': 'Application mobile Rutamaz',
        'project_rutamaz_desc': 'Application mobile sur les itinéraires de transport public à Mazatlan, de la conception au prototype interactif.',
        'project_eazyhome_title': 'Eazy Home',
        'project_eazyhome_desc': 'Maquettage et conception d\'interface pour le site web EazyHome, un projet immobilier.',
        // CERTIFICACIONES
        'cert_css_title': 'CSS Essentials', 'cert_html_title': 'HTML Essentials', 'cert_provider': 'Cisco NetAcad',
        // CONTACTO
        'title_contact': 'Parlons | Contact', 
        'contact_email_label': 'Email:', 'contact_linkedin_label': 'LinkedIn:', 'contact_github_label': 'GitHub:', 'contact_location_label': 'Lieu:',
        'form_name_label': 'Nom:', 'form_email_label': 'Email:', 'form_message_label': 'Message:', 'form_submit': 'Envoyer le message',
        // FOOTER
        'footer_text': '© 2025 Tifany Ontiveros — Développeuse Front-End'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            const newText = translations[lang][key];
            if (element.tagName === 'TITLE') {
                document.title = newText;
            } else {
                element.textContent = newText;
            }
        }
    });
}

// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DE IDIOMA ---
    const langSelect = document.getElementById('language-select');
    // Intenta cargar el idioma guardado, si no, usa 'es'
    const savedLang = localStorage.getItem('userLang') || 'es';
    langSelect.value = savedLang; 
    setLanguage(savedLang);

    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        setLanguage(selectedLang);
        // Guarda la preferencia para la próxima visita
        localStorage.setItem('userLang', selectedLang);
    });

    // --- 2. HEADER DINÁMICO (STICKY HEADER) ---
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        // Añade la clase 'scrolled' si el usuario se ha desplazado más de 150px
        if (window.scrollY > 150) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 3. ANIMACIONES SCROLLREVEAL ---
    
    // Configuración global de ScrollReveal
    ScrollReveal({ 
        distance: '80px', 
        duration: 1500,  
        easing: 'cubic-bezier(.5, 0, 0, 1)', // Curva de animación suave
        reset: false 
    });

    // Animación de Elementos del Hero (La primera impresión)
    ScrollReveal().reveal('.hero-text h1', { origin: 'top', delay: 200, distance: '30px' });
    ScrollReveal().reveal('.hero-text p', { origin: 'top', delay: 400, distance: '30px' });
    ScrollReveal().reveal('.hero-cta', { origin: 'top', delay: 600, distance: '30px' });
    ScrollReveal().reveal('.hero-photo', { origin: 'right', delay: 500 }); // La foto se desliza desde la derecha

    // Animación de Títulos de Sección
    ScrollReveal().reveal('.section h2', { origin: 'left', distance: '30px' });

    // Animación de Contenido General (Sobre mí y Contacto)
    ScrollReveal().reveal('#sobre-mi p, #contacto dl, #contacto form', { 
        origin: 'bottom',
        interval: 150 // Permite que los elementos internos aparezcan en secuencia
    });

    // Animación en Habilidades (Cada columna aparece secuencialmente)
    ScrollReveal().reveal('#habilidades .skills-grid > div', { 
        origin: 'bottom',
        interval: 100 
    });
    
    // Animación en Proyectos y Certificaciones (Sube y rota ligeramente)
    ScrollReveal().reveal('.project-card, .cert', { 
        origin: 'bottom',
        rotate: { x: 0, y: 0, z: 5 }, // Pequeña rotación para más dinamismo
        interval: 250 // Efecto escalonado en las tarjetas
    });
});