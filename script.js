/* =========================================
   CUSTOM CURSOR
========================================= */
const co = document.getElementById('cur-outer');
const ci = document.getElementById('cur-inner');
let mx = 0, my = 0, ox = 0, oy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  ci.style.left = mx + 'px';
  ci.style.top  = my + 'px';
});
(function loop() {
  ox += (mx - ox) * 0.11;
  oy += (my - oy) * 0.11;
  co.style.left = ox + 'px';
  co.style.top  = oy + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, select, .p-card, .a-card, .sk-tag').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* =========================================
   CONSTELLATION CANVAS
========================================= */
(function () {
  const canvas = document.getElementById('constellation');
  const ctx    = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  class Star {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.4 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.18;
      this.vy = (Math.random() - 0.5) * 0.18;
      this.a  = Math.random();
    }
    move() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
  }
  for (let i = 0; i < 110; i++) stars.push(new Star());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x, dy = stars[i].y - stars[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = `rgba(244,114,182,${(1 - d / 130) * 0.18})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(244,114,182,${s.a * 0.6})`;
      ctx.fill();
      s.move();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* =========================================
   STICKY HEADER
========================================= */
const hdr = document.getElementById('hdr');
window.addEventListener('scroll', () => {
  hdr.classList.toggle('pinned', scrollY > 50);
});

/* =========================================
   SCROLL REVEAL
========================================= */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => revObs.observe(el));

/* =========================================
   ACTIVE NAV
========================================= */
const secs  = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav a');
const secObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('on'));
      const active = document.querySelector(`.nav a[href="#${e.target.id}"]`);
      if (active) active.classList.add('on');
    }
  });
}, { threshold: 0.4 });
secs.forEach(s => secObs.observe(s));

/* =========================================
   TYPEWRITER
========================================= */
(function () {
  const el      = document.getElementById('typewriter');
  const phrases = ['Front-End Developer', 'UI Designer', 'Creative Coder', 'Figma Enthusiast'];
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const p = phrases[pi];
    if (!deleting) {
      el.textContent = p.slice(0, ++ci);
      if (ci === p.length) { deleting = true; setTimeout(tick, 1600); return; }
    } else {
      el.textContent = p.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 55 : 90);
  }
  tick();
})();

/* =========================================
   3D TILT CARDS
========================================= */
document.querySelectorAll('.p-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(1100px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg) translateY(-10px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

/* =========================================
   CERT MODAL
========================================= */
(function () {
  const modal     = document.getElementById('cert-modal');
  const closeBtn  = document.getElementById('cert-modal-close');
  const imgWrap   = document.getElementById('cert-modal-img-wrap');
  const titleEl   = document.getElementById('cert-modal-title');
  const byEl      = document.getElementById('cert-modal-by');
  const metaTitle = document.getElementById('cert-modal-meta-title');
  const metaBy    = document.getElementById('cert-modal-meta-by');
  const extLink   = document.getElementById('cert-modal-extlink');

  // Guarda el link actual para usarlo en el click
  let currentLink = '#';

  function openModal(card) {
    const title = card.dataset.certTitle || '';
    const by    = card.dataset.certBy    || '';
    const img   = card.dataset.certImg   || '';
    currentLink = card.dataset.certLink  || '#';

    titleEl.textContent   = title;
    byEl.textContent      = by;
    metaTitle.textContent = title;
    metaBy.textContent    = by;

    // Actualiza el href del enlace
    extLink.setAttribute('href', currentLink);

    // Carga imagen
    imgWrap.innerHTML = '';
    if (img) {
      const i = document.createElement('img');
      i.src = img;
      i.alt = title;
      i.onerror = () => {
        imgWrap.innerHTML = `
          <div class="cert-modal-no-img">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
            <span>Imagen no encontrada.<br>Puedes verificarlo en Credly.</span>
          </div>`;
      };
      imgWrap.appendChild(i);
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Abrir modal al hacer clic en una tarjeta
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => openModal(card));
  });

  // Cerrar con X
  closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    closeModal();
  });

  // Cerrar al hacer clic en el fondo (backdrop), NO en el box
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.id === 'cert-modal-backdrop') {
      closeModal();
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Botón Verificar en Credly — abre el link directamente
  extLink.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    if (currentLink && currentLink !== '#') {
      window.open(currentLink, '_blank', 'noopener,noreferrer');
    }
  });
})();

/* =========================================
   FORMULARIO — FORMSPREE
   👉 Reemplaza TU_ID con el ID que te da
      Formspree al crear tu formulario en
      https://formspree.io
========================================= */
(function () {
  const FORMSPREE_ID = 'mojkaong';

  const form     = document.getElementById('contact-form');
  const btn      = document.getElementById('form-btn');
  const btnText  = document.getElementById('form-btn-text');
  const btnIcon  = document.getElementById('form-btn-icon');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Estado: enviando
    btn.disabled = true;
    btnText.textContent = 'Enviando...';
    btnIcon.innerHTML = '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="31.4" stroke-dashoffset="31.4" style="animation:spin-dash 1s linear infinite"/>';
    feedback.style.display = 'none';

    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        // Éxito
        feedback.textContent = '✓ ¡Mensaje enviado! Te responderé pronto 🌸';
        feedback.className = 'form-feedback success';
        feedback.style.display = 'block';
        form.reset();
        btnText.textContent = 'Mensaje enviado ✓';
        btnIcon.innerHTML = '<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.2" fill="none"/>';
        setTimeout(() => {
          btn.disabled = false;
          btnText.textContent = 'Enviar mensaje';
          btnIcon.innerHTML = '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>';
        }, 4000);
      } else {
        throw new Error('Error al enviar');
      }
    } catch {
      feedback.textContent = '✕ Algo salió mal. Escríbeme directamente a niicole_21@hotmail.com';
      feedback.className = 'form-feedback error';
      feedback.style.display = 'block';
      btn.disabled = false;
      btnText.textContent = 'Enviar mensaje';
      btnIcon.innerHTML = '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>';
    }
  });
})();

/* =========================================
   I18N
========================================= */
const i18n = {
  es: {
    nav_home:'Inicio', nav_about:'Sobre mí', nav_skills:'Habilidades',
    nav_projects:'Proyectos', nav_contact:'Contacto',
    hero_btn_projects:'Ver proyectos', hero_btn_cv:'Descargar CV',
    text_about:'Soy desarrolladora Front-End enfocada en interfaces modernas, accesibles y responsivas. Mi pasión es traducir diseños creativos en experiencias de usuario fluidas y eficientes.',
    skills_lang_title:'Lenguajes', skills_frameworks_title:'Frameworks', skills_tools_title:'Herramientas',
    project_rutamaz_title:'Rutamaz',
    project_rutamaz_desc:'App móvil de rutas de transporte público en Mazatlán — prototipo interactivo en Figma.',
    project_eazyhome_title:'Eazy Home',
    project_eazyhome_desc:'Diseño y maquetación de interfaz para sitio web de bienes raíces.',
    cert_css_title:'CSS Essentials', cert_html_title:'HTML Essentials',
    form_name_label:'Nombre', form_email_label:'Email',
    form_message_label:'Mensaje', form_submit:'Enviar mensaje',
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_skills:'Skills',
    nav_projects:'Projects', nav_contact:'Contact',
    hero_btn_projects:'View projects', hero_btn_cv:'Download CV',
    text_about:"I'm a Front-End developer focused on modern, accessible, and responsive interfaces. My passion is turning creative designs into smooth, efficient user experiences.",
    skills_lang_title:'Languages', skills_frameworks_title:'Frameworks', skills_tools_title:'Tools',
    project_rutamaz_title:'Rutamaz',
    project_rutamaz_desc:'Mobile app for public transit routes in Mazatlán — interactive Figma prototype.',
    project_eazyhome_title:'Eazy Home',
    project_eazyhome_desc:'Interface design & layout for a real estate website, focused on clarity and conversion.',
    cert_css_title:'CSS Essentials', cert_html_title:'HTML Essentials',
    form_name_label:'Name', form_email_label:'Email',
    form_message_label:'Message', form_submit:'Send message',
  },
  fr: {
    nav_home:'Accueil', nav_about:'À propos', nav_skills:'Compétences',
    nav_projects:'Projets', nav_contact:'Contact',
    hero_btn_projects:'Voir projets', hero_btn_cv:'Télécharger CV',
    text_about:"Je suis développeuse Front-End axée sur des interfaces modernes, accessibles et réactives. Ma passion est de transformer des designs créatifs en expériences utilisateur fluides.",
    skills_lang_title:'Langages', skills_frameworks_title:'Frameworks', skills_tools_title:'Outils',
    project_rutamaz_title:'Rutamaz',
    project_rutamaz_desc:"Application mobile de transport public à Mazatlán — prototype interactif Figma.",
    project_eazyhome_title:'Eazy Home',
    project_eazyhome_desc:"Maquette et design d'interface pour un site immobilier.",
    cert_css_title:'CSS Essentials', cert_html_title:'HTML Essentials',
    form_name_label:'Nom', form_email_label:'Email',
    form_message_label:'Message', form_submit:'Envoyer',
  }
};

document.getElementById('lang-select').addEventListener('change', function () {
  const t = i18n[this.value] || i18n.es;
  document.querySelectorAll('[data-key]').forEach(el => {
    if (t[el.dataset.key]) el.textContent = t[el.dataset.key];
  });
});