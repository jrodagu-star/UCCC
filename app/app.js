const SECTIONS = [
  {
    id: 'respiratorio',
    title: 'Respiratorio',
    items: [
      {
        id: 'vm-cuidados',
        title: 'Cuidados integrales en VM',
        description: 'Protocolo de cuidados integrales del paciente en ventilación mecánica.',
        parts: [
          {
            id: 'protocolo',
            title: 'Protocolo VM · Cuidados integrales',
            description: 'Documento clínico completo.',
            path: '../assets/protocolos/vm-cuidados-integrales/protocolo-vm-cuidados-integrales.html',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'humidificador',
        title: 'Póster humidificador 6',
        description: 'Póster de montaje y uso del humidificador.',
        parts: [
          {
            id: 'poster',
            title: 'Póster humidificador 6',
            description: 'Póster clínico del humidificador.',
            path: '../assets/protocolos/humidificador/poster-humidificador-6.png?v=20261020w',
            ext: '.png'
          }
        ]
      }
    ],
    posters: [
      {
        title: 'Principales cuidados',
        path: '../assets/protocolos/vm-cuidados-integrales/esquema-nz-humid-dds.html?v=20261024e',
        width: 905,
        height: 1105
      }
    ]
  },
  {
    id: 'infecciones',
    title: 'Infecciones',
    items: [
      {
        id: 'dds',
        title: 'DDS (Descontaminación Digestiva)',
        description: 'Guía rápida y protocolo detallado de descontaminación digestiva selectiva.',
        parts: [
          {
            id: 'folleto',
            title: 'Folleto general',
            description: 'Guía rápida de pared.',
            path: '../assets/protocolos/dds/folleto-general.png',
            ext: '.png'
          },
          {
            id: 'detallado',
            title: 'Protocolo detallado',
            description: 'Documento completo con índice navegable.',
            path: '../assets/protocolos/dds/protocolo-detallado.html',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'profilaxis',
        title: 'Profilaxis',
        description: 'Profilaxis antibiótica perioperatoria en AMC (LVAD y ECMO), según ISHLT 2024.',
        parts: [
          {
            id: 'protocolo',
            title: 'Profilaxis',
            description: 'Cefazolina y vancomicina perioperatorias en asistencia mecánica circulatoria.',
            path: '../assets/protocolos/profilaxis/profilaxis.html?v=20261020v',
            ext: '.html',
            view: 'document'
          }
        ]
      }
    ]
  },
  {
    id: 'nutricion',
    title: 'Nutrición',
    items: [
      {
        id: 'estrenimiento',
        title: 'Estreñimiento en UCI',
        description: 'Guía clínica y tabla de fármacos para el manejo del estreñimiento.',
        parts: [
          {
            id: 'guia',
            title: 'Guía clínica',
            description: 'Protocolo de estreñimiento en UCI.',
            path: '../assets/protocolos/estrenimiento/guia-clinica.pdf',
            ext: '.pdf'
          },
          {
            id: 'tabla',
            title: 'Tabla de fármacos',
            description: 'Fármacos para el estreñimiento en UCI.',
            path: '../assets/protocolos/estrenimiento/tabla-farmacos.pdf',
            ext: '.pdf'
          }
        ]
      },
      {
        id: 'diarrea-ne',
        title: 'Diarrea en paciente en UCI con NE',
        description: 'Manejo de la diarrea en nutrición enteral en UCI.',
        parts: [
          {
            id: 'poster',
            title: 'Diarrea en paciente en UCI con NE',
            description: 'Póster clínico de manejo de diarrea con nutrición enteral.',
            path: '../assets/protocolos/diarrea/diarrea-uci-ne.html',
            ext: '.html'
          }
        ]
      },
      {
        id: 'nutricion-shock',
        title: 'Nutrición en Shock cardiogénico',
        description: 'Protocolo de nutrición en el shock cardiogénico.',
        parts: [
          {
            id: 'protocolo',
            title: 'Nutrición en Shock cardiogénico',
            description: 'Protocolo clínico de nutrición en shock cardiogénico.',
            path: '../assets/protocolos/nutricion-shock/protocolo-nutricion-shock-cardiogenico.html?v=20261024v',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'nutricion-clinica',
        title: 'Calculadora nutrición clínica UCI',
        description: 'Herramienta externa de nutrición clínica en cuidados intensivos.',
        url: 'https://icuconnect-nutricion.web.app'
      }
    ]
  },
  {
    id: 'coagulacion',
    title: 'Coagulación',
    items: [
      {
        id: 'anticoagulacion-sec',
        title: 'Anticoagulación en SEC',
        description: 'Protocolo de anticoagulación en shock cardiogénico y soporte extracorpóreo.',
        parts: [
          {
            id: 'protocolo-medicina',
            title: 'Protocolo clínico (Medicina)',
            description: 'Anticoagulación en shock cardiogénico y soporte extracorpóreo.',
            path: '../assets/protocolos/anticoagulacion-sec/protocolo-anticoagulacion-sec.html',
            ext: '.html',
            view: 'document'
          },
          {
            id: 'resumen-enfermeria',
            title: 'Resumen de enfermería',
            description: 'Resumen operativo de anticoagulación en shock cardiogénico para enfermería.',
            path: '../assets/protocolos/anticoagulacion-sec/resumen-enfermeria-anticoagulacion-sec.html',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'transfusion-masiva',
        title: 'Protocolo transfusión masiva',
        description: 'Protocolo de transfusión masiva en UCI de cirugía cardiaca.',
        parts: [
          {
            id: 'protocolo',
            title: 'Protocolo transfusión masiva',
            description: 'Activación, fases empírica y dirigida, productos y monitorización en UCI cardiaca.',
            path: '../assets/protocolos/transfusion-masiva/protocolo-transfusion-masiva.html?v=20261024t',
            ext: '.html',
            view: 'document'
          }
        ]
      }
    ]
  },
  {
    id: 'sedoanalgesia',
    title: 'Sedoanalgesia',
    posters: [
      {
        title: 'Sedación ligera',
        path: '../assets/protocolos/analgosedacion-vm/sedacion-ligera.html?v=20261020ac',
        width: 718,
        height: 1139
      },
      {
        title: 'Sedación profunda',
        path: '../assets/protocolos/analgosedacion-vm/sedacion-profunda.html?v=20261024a',
        width: 718,
        height: 890
      }
    ],
    items: [
      {
        id: 'analgosedacion-vm',
        title: 'Analgosedación en VM',
        description: 'Protocolo de analgosedación en ventilación mecánica en UCI.',
        parts: [
          {
            id: 'protocolo',
            title: 'Protocolo de analgosedación en VM',
            description: 'Documento clínico de analgosedación en el paciente ventilado.',
            path: '../assets/protocolos/analgosedacion-vm/protocolo-analgosedacion-vm.html',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'anaconda',
        title: 'Sedación inhalada con AnaConDa',
        description: 'Póster de enfermería: isoflurano y sevoflurano con AnaConDa.',
        parts: [
          {
            id: 'poster',
            title: 'Sedación inhalada con AnaConDa',
            description: 'Guía de actuación: indicaciones, montaje, cuidados y recambios.',
            path: '../assets/protocolos/anaconda/poster-anaconda.html?v=20261024p',
            ext: '.html',
            view: 'document',
            enlarge: true,
            width: 1188,
            height: 1680
          }
        ]
      }
    ]
  },
  {
    id: 'hemodinamica',
    title: 'Hemodinámica',
    posters: [
      {
        title: 'Fármacos: misma luz',
        path: '../assets/protocolos/shock-cardiogenico/farmacos-luz.html?v=20261024f',
        width: 980,
        height: 730
      },
      {
        title: 'Distribución fármacos',
        path: '../assets/protocolos/shock-cardiogenico/luces-paciente-2.html?v=20261024l',
        width: 980,
        height: 766
      }
    ],
    items: [
      {
        id: 'escalas-shock',
        title: 'Escalas en shock cardiogénico',
        description: 'Calculadora de escalas en shock cardiogénico.',
        parts: [
          {
            id: 'calculadora',
            title: 'Escalas en shock cardiogénico',
            description: 'Calculadora de escalas en shock cardiogénico.',
            path: '../assets/protocolos/escalas-shock/escalas-shock-cardiogenico.html',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'farmacos',
        title: 'Fármacos',
        description: 'Tratamiento del shock cardiogénico: esquema rápido, noradrenalina y vasopresina.',
        parts: [
          {
            id: 'tratamiento',
            title: 'Fármacos',
            description: 'Líneas generales de tratamiento, esquema rápido de fármacos y noradrenalina con vasopresina.',
            path: '../assets/protocolos/shock-cardiogenico/shock-cardiogenico.html?v=20261020r',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'monitorizacion-hemodinamica',
        title: 'Monitorización hemodinámica',
        description: 'Dashboard, atlas, técnicas y soporte (ECMO, PiCCO, shunt…).',
        url: 'https://jrodagu-star.github.io/hemodinamica/'
      },
      {
        id: 'tep',
        title: 'TEP',
        description: 'Guía rápida de bolsillo de tromboembolismo pulmonar agudo en UCI.',
        parts: [
          {
            id: 'guia',
            title: 'TEP',
            description: 'Protocolo TEP con índice lateral navegable.',
            path: '../assets/protocolos/tep/tep-guia.html',
            ext: '.html',
            view: 'document'
          }
        ]
      }
    ]
  },
  {
    id: 'neurologico',
    title: 'Neurológico',
    items: [
      {
        id: 'monitorizacion-conox',
        title: 'Monitorización CONOX',
        description: 'Inserción, significado e interpretación del monitor Conox (qCON, qNOX, EMG).',
        parts: [
          {
            id: 'infografia',
            title: 'Monitorización CONOX',
            description: 'Guía de referencia rápida: sensor, índices y lectura de pantalla.',
            path: '../assets/protocolos/conox/monitorizacion-conox.html?v=20261020u',
            ext: '.html',
            view: 'document'
          }
        ]
      }
    ]
  },
  {
    id: 'formacion',
    title: 'Formación',
    items: [
      {
        id: 'conferencias-cardiologia',
        title: 'Conferencias de cardiología crítica',
        description: 'Notas de conferencia: shock cardiogénico, TEP, IAM, ECMO, soporte mecánico y más.',
        parts: [
          {
            id: 'notas',
            title: 'Conferencias de cardiología crítica',
            description: 'Notas de conferencia: shock cardiogénico, TEP, IAM, ECMO, soporte mecánico y más.',
            path: '../assets/formacion/conferencias-cardiologia/conferencias-cardiologia.html',
            ext: '.html',
            view: 'document'
          }
        ]
      },
      {
        id: 'ecmo-v1',
        title: 'ECMO V1 borrador',
        description: 'Documento de formación sobre ECMO.',
        parts: [
          {
            id: 'documento',
            title: 'ECMO V1 borrador',
            description: 'Documento de formación sobre ECMO.',
            path: '../assets/formacion/ecmo/ecmo-v1-borrador.pdf',
            ext: '.pdf'
          }
        ]
      },
      {
        id: 'inventario-uccc',
        title: 'Inventario UCCC',
        description: 'Enlace directo al inventario de la unidad.',
        url: 'https://inventario-ucc-asistencia.pplx.app',
        direct: true
      }
    ]
  }
];

const state = {
  sectionId: null,
  itemId: null
};

const els = {
  nav: document.getElementById('sectionNav'),
  topbar: document.querySelector('.topbar'),
  title: document.getElementById('pageTitle'),
  crumbs: document.getElementById('crumbs'),
  meta: document.getElementById('pageMeta'),
  viewer: document.getElementById('viewer')
};

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extFromPath(path) {
  const clean = String(path || '').split('?')[0];
  const i = clean.lastIndexOf('.');
  return i >= 0 ? clean.slice(i).toLowerCase() : '';
}

function findSection(id) {
  return SECTIONS.find((s) => s.id === id) || null;
}

function findItem(section, itemId) {
  return (section.items || []).find((item) => item.id === itemId) || null;
}

function setActiveNav(sectionId) {
  els.nav.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.sectionId === sectionId);
  });
  const toneClass = sectionId === 'team' ? 'tone-equipo' : (sectionId ? 'tone-' + sectionId : '');
  if (els.topbar) els.topbar.className = toneClass ? 'topbar ' + toneClass : 'topbar';
}

const ICONS = {
  respiratorio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V11"/><path d="M12 13c-2.2-2-5.2-1.6-6.2 1.2C4.6 17.4 6.4 20 9 20c1.8 0 2.4-1.6 3-3.2"/><path d="M12 13c2.2-2 5.2-1.6 6.2 1.2C19.4 17.4 17.6 20 15 20c-1.8 0-2.4-1.6-3-3.2"/></svg>',
  infecciones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  nutricion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-4 0-7-2.2-7-6 0-4 7-11 7-11s7 7 7 11c0 3.8-3 6-7 6z"/><path d="M12 11c-1.5 2-1 4 .5 5"/></svg>',
  coagulacion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.2 6 10a6 6 0 0 1-12 0c0-3.8 6-10 6-10z"/></svg>',
  sedoanalgesia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v5l-5 9a4 4 0 0 0 3.5 6h7a4 4 0 0 0 3.5-6l-5-9V3"/><path d="M8.5 14h7"/></svg>',
  hemodinamica: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>',
  neurologico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6a3 3 0 0 1 5.8-1A3 3 0 0 1 18 8a3 3 0 0 1 1 5 3 3 0 0 1-2 5 3 3 0 0 1-5 1 3 3 0 0 1-5-1 3 3 0 0 1-2-5 3 3 0 0 1 1-5 3 3 0 0 1 3-2z"/><path d="M12 7v10M9 10h6"/></svg>',
  formacion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l9-4 9 4-9 4-9-4z"/><path d="M7 11v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5"/></svg>',
  equipo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="2.2"/><circle cx="16" cy="9" r="1.8"/><path d="M4.5 18c.4-2.6 2.2-4 4.5-4s4.1 1.4 4.5 4"/><path d="M13 14.2c1.3-.5 2.6-.7 3.6-.4 1.6.4 2.6 1.6 3 3.2"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l5 5v13H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v6h6"/><path d="M8 16h3M8 12h8"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="9" cy="10" r="1.4"/><path d="M7 17l4-4 3 3 2-2 2 3"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 10a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4-8 4-8-4 8-4z"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4"/></svg>'
};

function iconHtml(name) {
  return '<span class="ico" aria-hidden="true">' + (ICONS[name] || ICONS.doc) + '</span>';
}

function itemKind(item) {
  if (item.url) return 'link';
  const parts = item.parts || [];
  if (parts.length > 1) return 'layers';
  const ext = ((parts[0] && parts[0].ext) || '').toLowerCase();
  if (ext === '.pdf') return 'file';
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp' || ext === '.gif') return 'image';
  return 'doc';
}

function renderNav() {
  const sections = SECTIONS.map((section) =>
    '<button type="button" class="nav-btn tone-' + escapeHtml(section.id) + '" data-section-id="' + escapeHtml(section.id) + '">' +
      iconHtml(section.id) +
      '<span class="nav-label">' + escapeHtml(section.title) + '</span>' +
    '</button>'
  ).join('');
  els.nav.innerHTML = sections +
    '<button type="button" class="nav-btn tone-equipo" id="teamBtn" data-section-id="team">' +
      iconHtml('equipo') +
      '<span class="nav-label">Equipo</span>' +
    '</button>';
  els.nav.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.sectionId === 'team') openTeam();
      else openSection(btn.dataset.sectionId);
    });
  });
}

function showHome() {
  state.sectionId = null;
  state.itemId = null;
  setActiveNav(null);
  els.title.textContent = 'Inicio';
  showSectionTeam(null);
  els.crumbs.textContent = 'Unidad Cuidados Críticos Cardiológicos HM';
  els.meta.textContent = 'Elige una sección del menú';
  els.viewer.innerHTML =
    '<div class="panel home-hero">' +
      '<div>' +
        '<h2>Unidad Cuidados Críticos Cardiológicos HM</h2>' +
        '<p>Selecciona Respiratorio, Infecciones, Nutrición u otra área del menú superior para abrir sus protocolos y herramientas.</p>' +
      '</div>' +
    '</div>';
}

function openSection(sectionId) {
  const section = findSection(sectionId);
  if (!section) return;
  state.sectionId = section.id;
  state.itemId = null;
  setActiveNav(section.id);
  els.title.textContent = section.title;
  showSectionTeam(section.id);
  els.crumbs.textContent = 'UCC Cardiológicos HM / ' + section.title;
  els.meta.textContent = (section.items || []).length
    ? (section.items.length + ' recurso' + (section.items.length === 1 ? '' : 's'))
    : 'Sin protocolos todavía';

  const items = section.items || [];
  if (!items.length) {
    els.viewer.innerHTML =
    '<div class="panel tone-' + escapeHtml(section.id) + '">' +
      '<div class="empty">' +
        '<strong>' + escapeHtml(section.title) + '</strong>' +
        'Sin protocolos todavía. Esta sección está preparada para añadir contenido más adelante.' +
      '</div>' +
    '</div>';
    return;
  }

  const cards = items.map((item) => {
    const inner =
      iconHtml(itemKind(item)) +
      '<span class="card-title-row"><span class="card-title">' + escapeHtml(item.title) + '</span>' +
        assigneesHtml(peopleForItem(section.id, item.id)) +
      '</span>' +
      '<span class="card-desc">' + escapeHtml(item.description || '') + '</span>' +
      '<span class="card-cta">Abrir</span>';
    if (item.url && item.direct) {
      return '<a class="card" href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener noreferrer">' + inner + '</a>';
    }
    return '<button type="button" class="card" data-item-id="' + escapeHtml(item.id) + '">' + inner + '</button>';
  }).join('');

  const posters = section.posters || (section.poster ? [section.poster] : []);
  const poster = posters.length
    ? '<div class="poster-row">' + posters.map((item) =>
        '<div class="poster-card">' +
          '<div class="poster-stage" style="--pw:' + item.width + ';--ph:' + item.height + '">' +
            '<iframe title="' + escapeHtml(item.title) + '" src="' + escapeHtml(item.path) + '" tabindex="-1"></iframe>' +
            '<button type="button" class="poster-open" data-poster="' + escapeHtml(item.title) + '" aria-label="Ampliar ' + escapeHtml(item.title) + '"><span>Ampliar</span></button>' +
          '</div>' +
          '<p class="poster-name">' + escapeHtml(item.title) + '</p>' +
        '</div>'
      ).join('') + '</div>'
    : '';

  els.viewer.innerHTML =
    '<div class="panel tone-' + escapeHtml(section.id) + '">' +
      '<p class="panel-lead">Elige un protocolo o herramienta de ' + escapeHtml(section.title) + '.</p>' +
      '<div class="grid">' + cards + '</div>' +
      poster +
    '</div>';

  els.viewer.querySelectorAll('[data-item-id]').forEach((btn) => {
    btn.addEventListener('click', () => openItem(section.id, btn.dataset.itemId));
  });
  els.viewer.querySelectorAll('.poster-open').forEach((posterBtn) => {
    const item = posters.find((entry) => entry.title === posterBtn.dataset.poster);
    if (item) posterBtn.addEventListener('click', () => openPoster(item));
  });
}

function openPoster(poster) {
  const box = document.createElement('div');
  box.className = 'poster-lightbox' + (poster.fullWidth ? ' is-full' : '');
  const sheetW = poster.fullWidth ? '100%' : ((poster.width || 760) + 2) + 'px';
  box.innerHTML =
    '<div class="poster-sheet' + (poster.fullWidth ? ' is-full' : '') + '" style="--poster-w:' + sheetW + '" role="dialog" aria-modal="true" aria-label="' + escapeHtml(poster.title) + '">' +
      '<header>' +
        '<button type="button" class="btn btn-accent" id="posterClose">Cerrar</button>' +
      '</header>' +
      '<iframe title="' + escapeHtml(poster.title) + '"></iframe>' +
    '</div>';
  document.body.appendChild(box);
  const frame = box.querySelector('iframe');
  function applyZoom() {
    if (!poster.fullWidth) return;
    try {
      if (frame.contentWindow && typeof frame.contentWindow.ajustarPoster === 'function') {
        frame.contentWindow.ajustarPoster(true);
      }
    } catch (err) {}
  }
  frame.addEventListener('load', applyZoom);
  frame.src = poster.path;
  function close() {
    box.remove();
    document.removeEventListener('keydown', onKey);
  }
  function onKey(event) {
    if (event.key === 'Escape') close();
  }
  document.addEventListener('keydown', onKey);
  box.querySelector('#posterClose').addEventListener('click', close);
  box.addEventListener('click', (event) => {
    if (event.target === box) close();
  });
}

function openItem(sectionId, itemId) {
  const section = findSection(sectionId);
  const item = findItem(section, itemId);
  if (!section || !item) return;
  state.sectionId = section.id;
  state.itemId = item.id;
  setActiveNav(section.id);
  showSectionTeam(null);

  if (item.url) {
    openExternal(section, item);
    return;
  }

  const parts = item.parts || [];
  if (parts.length === 1) {
    openPart(section, item, parts[0]);
    return;
  }
  if (!parts.length) {
    els.viewer.innerHTML =
      '<div class="panel"><div class="empty"><strong>' + escapeHtml(item.title) + '</strong>No hay documentos disponibles.</div></div>';
    return;
  }

  els.title.textContent = item.title;
  els.crumbs.textContent = 'UCC Cardiológicos HM / ' + section.title + ' / ' + item.title;
  els.meta.textContent = parts.length + ' documentos';

  const cards = parts.map((part) =>
    '<button type="button" class="card" data-part-id="' + escapeHtml(part.id) + '">' +
      iconHtml(itemKind(part)) +
      '<span class="card-title-row"><span class="card-title">' + escapeHtml(part.title) + '</span>' +
        assigneesHtml(peopleForItem(section.id, item.id)) +
      '</span>' +
      '<span class="card-desc">' + escapeHtml(part.description || '') + '</span>' +
      '<span class="card-cta">Abrir</span>' +
    '</button>'
  ).join('');

  els.viewer.innerHTML =
    '<div class="panel tone-' + escapeHtml(section.id) + '">' +
      '<div class="panel-head">' +
        '<p class="panel-lead" style="margin:0">Elige la parte que quieres visualizar.</p>' +
        '<button type="button" class="btn" id="backToSectionBtn">Volver</button>' +
      '</div>' +
      '<div class="grid">' + cards + '</div>' +
    '</div>';

  const backBtn = document.getElementById('backToSectionBtn');
  if (backBtn) backBtn.addEventListener('click', () => openSection(section.id));
  els.viewer.querySelectorAll('[data-part-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const part = parts.find((p) => p.id === btn.dataset.partId);
      if (part) openPart(section, item, part);
    });
  });
}

function openExternal(section, item) {
  els.title.textContent = item.title;
  els.crumbs.textContent = 'UCC Cardiológicos HM / ' + section.title + ' / ' + item.title;
  els.meta.textContent = 'Enlace externo';
  els.viewer.innerHTML =
    '<div class="doc-view">' +
      '<div class="doc-toolbar">' +
        '<div class="doc-toolbar-title">' + assigneesHtml(peopleForItem(section.id, item.id)) + escapeHtml(item.title) + '</div>' +
        '<div class="doc-toolbar-actions">' +
          '<a class="btn" href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener noreferrer">Abrir en pestaña</a>' +
          '<button type="button" class="btn btn-accent" id="closeDocBtn">Cerrar</button>' +
        '</div>' +
      '</div>' +
      '<iframe class="doc-frame" title="' + escapeHtml(item.title) + '" src="' + escapeHtml(item.url) + '"></iframe>' +
    '</div>';
  const closeBtn = document.getElementById('closeDocBtn');
  if (closeBtn) closeBtn.addEventListener('click', () => openSection(section.id));
}

function openPart(section, item, part) {
  if (!part) return;
  const ext = (part.ext || extFromPath(part.path) || '').toLowerCase();
  const src = part.path;
  els.title.textContent = part.title;
  els.crumbs.textContent = 'UCC Cardiológicos HM / ' + section.title + ' / ' + item.title + ' / ' + part.title;
  els.meta.textContent = ext ? ext.replace('.', '').toUpperCase() : 'Documento';

  const backTarget = (item.parts || []).length > 1
    ? () => openItem(section.id, item.id)
    : () => openSection(section.id);

  const enlarge = part.enlarge
    ? {
        title: part.title,
        path: src + (src.indexOf('?') === -1 ? '?' : '&') + 'modo=ampliado',
        fullWidth: true
      }
    : null;

  let body = '';
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp' || ext === '.gif') {
    body = '<div class="doc-image-wrap"><img src="' + escapeHtml(src) + '" alt="' + escapeHtml(part.title) + '"></div>';
  } else if (enlarge) {
    body =
      '<div class="doc-poster">' +
        '<iframe class="doc-frame" title="' + escapeHtml(part.title) + '" src="' + escapeHtml(src) + '" tabindex="-1"></iframe>' +
        '<button type="button" class="poster-open" id="enlargeDocHit" aria-label="Ampliar ' + escapeHtml(part.title) + '"><span>Ampliar</span></button>' +
      '</div>';
  } else {
    body = '<iframe class="doc-frame" title="' + escapeHtml(part.title) + '" src="' + escapeHtml(src) + '"></iframe>';
  }

  els.viewer.innerHTML =
    '<div class="doc-view">' +
      '<div class="doc-toolbar">' +
        '<div class="doc-toolbar-title">' + assigneesHtml(peopleForItem(section.id, item.id)) + escapeHtml(part.title) + '</div>' +
        '<div class="doc-toolbar-actions">' +
          (enlarge ? '<button type="button" class="btn" id="enlargeDocBtn">Ampliar</button>' : '') +
          '<a class="btn" href="' + escapeHtml(src) + '" target="_blank" rel="noopener noreferrer">Abrir en pestaña</a>' +
          '<button type="button" class="btn btn-accent" id="closeDocBtn">Cerrar</button>' +
        '</div>' +
      '</div>' +
      body +
    '</div>';

  const closeBtn = document.getElementById('closeDocBtn');
  if (closeBtn) closeBtn.addEventListener('click', backTarget);
  if (enlarge) {
    const open = () => openPoster(enlarge);
    const enlargeBtn = document.getElementById('enlargeDocBtn');
    const enlargeHit = document.getElementById('enlargeDocHit');
    if (enlargeBtn) enlargeBtn.addEventListener('click', open);
    if (enlargeHit) enlargeHit.addEventListener('click', open);
  }
}

const TEAM_KEY = 'uccc-equipo-v1';
const TEAM_COLORS = ['#0b5f73', '#8a3d08', '#146b34', '#9a1236', '#5b21b6', '#9a3412', '#1e3a8a', '#0f5c56', '#3d4f5f'];
const TEAM_SHAPES = [
  { id: 'circle', label: 'Círculo' },
  { id: 'rounded', label: 'Redondeado' },
  { id: 'hex', label: 'Hexágono' },
  { id: 'diamond', label: 'Rombo' },
  { id: 'shield', label: 'Escudo' }
];
const PERSON_SVG = {
  man: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="15" r="9"/><path d="M8 58V40c0-10 8-16 24-16s24 6 24 16v18z"/></svg>',
  woman: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M18 20c0-8 6-14 14-14s14 6 14 14v20c0 2-1 3-2 3h-3V24c0-5-4-9-9-9s-9 4-9 9v19h-3c-1 0-2-1-2-3z"/><circle cx="32" cy="20" r="8"/><path d="M22 42h20l8 16H14z"/></svg>'
};

function defaultTeam() {
  return TEAM_COLORS.map((color, index) => ({
    id: 'p' + (index + 1),
    name: '',
    color: color,
    shape: TEAM_SHAPES[index % TEAM_SHAPES.length].id,
    mark: index % 2 === 0 ? 'woman' : 'man',
    target: ''
  }));
}

function loadTeam() {
  const base = defaultTeam();
  try {
    const saved = JSON.parse(localStorage.getItem(TEAM_KEY) || 'null');
    if (!Array.isArray(saved)) return base;
    return base.map((person) => {
      const found = saved.find((entry) => entry && entry.id === person.id) || {};
      const shape = TEAM_SHAPES.some((item) => item.id === found.shape) ? found.shape : person.shape;
      const mark = found.mark === 'initials' || found.mark === 'man' || found.mark === 'woman' ? found.mark : person.mark;
      const color = /^#[0-9a-fA-F]{6}$/.test(found.color || '') ? found.color : person.color;
      return {
        id: person.id,
        name: String(found.name || '').slice(0, 40),
        color: color,
        shape: shape,
        mark: mark,
        target: typeof found.target === 'string' ? found.target : ''
      };
    });
  } catch (err) {
    return base;
  }
}

let team = loadTeam();

function peopleForSection(sectionId) {
  return team.filter((person) => {
    const ref = targetParts(person.target);
    return ref.sectionId === sectionId && (ref.kind === 'section' || ref.kind === 'item');
  });
}

function peopleForItem(sectionId, itemId) {
  return team.filter((person) => {
    const ref = targetParts(person.target);
    return ref.kind === 'item' && ref.sectionId === sectionId && ref.itemId === itemId;
  });
}

function miniAvatar(person) {
  const name = person.name || 'Sin nombre';
  return '<span class="mini-avatar shape-' + escapeHtml(person.shape) + '" style="background:' + escapeHtml(person.color) + ';color:' + inkFor(person.color) + '" title="' + escapeHtml(name) + '">' + avatarInner(person) + '</span>';
}

function assigneesHtml(people) {
  if (!people.length) return '';
  return '<span class="card-assignees">' + people.map(miniAvatar).join('') + '</span>';
}

function showSectionTeam(sectionId) {
  const box = document.getElementById('sectionTeam');
  if (!box) return;
  const people = sectionId ? peopleForSection(sectionId) : [];
  box.hidden = people.length === 0;
  box.innerHTML = people.map((person) => {
    const name = person.name || 'Sin nombre';
    return '<span class="section-person">' + miniAvatar(person) + '<span>' + escapeHtml(name) + '</span></span>';
  }).join('');
}

function saveTeam() {
  try { localStorage.setItem(TEAM_KEY, JSON.stringify(team)); } catch (err) {}
}

function personInitials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '·';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function inkFor(hex) {
  const raw = String(hex || '').replace('#', '');
  if (raw.length !== 6) return '#fff';
  const r = parseInt(raw.slice(0, 2), 16);
  const g = parseInt(raw.slice(2, 4), 16);
  const b = parseInt(raw.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 165 ? '#1c2422' : '#fff';
}

function targetParts(target) {
  const bits = String(target || '').split(':');
  return { kind: bits[0] || '', sectionId: bits[1] || '', itemId: bits[2] || '' };
}

function targetLabel(target) {
  const ref = targetParts(target);
  const section = findSection(ref.sectionId);
  if (!section) return 'Sin sección';
  if (ref.kind === 'section') return section.title;
  const item = findItem(section, ref.itemId);
  return item ? section.title + ' · ' + item.title : 'Sin sección';
}

function assignmentOptions(selected) {
  const head = '<option value="">Sin asignar</option>';
  const groups = SECTIONS.map((section) => {
    const whole = 'section:' + section.id;
    const items = (section.items || []).map((item) => {
      const value = 'item:' + section.id + ':' + item.id;
      return '<option value="' + escapeHtml(value) + '"' + (value === selected ? ' selected' : '') + '>' + escapeHtml(item.title) + '</option>';
    }).join('');
    return '<optgroup label="' + escapeHtml(section.title) + '">' +
      '<option value="' + escapeHtml(whole) + '"' + (whole === selected ? ' selected' : '') + '>Sección completa</option>' +
      items +
    '</optgroup>';
  }).join('');
  return head + groups;
}

function avatarInner(person) {
  if (person.mark === 'man' || person.mark === 'woman') return PERSON_SVG[person.mark];
  return escapeHtml(personInitials(person.name));
}

function openAssignment(target) {
  const ref = targetParts(target);
  if (ref.kind === 'item') openItem(ref.sectionId, ref.itemId);
  else if (ref.kind === 'section') openSection(ref.sectionId);
}

function closeTeamEditor() {
  const dialog = document.getElementById('teamDialog');
  if (dialog) dialog.remove();
}

function openTeamEditor(personId) {
  const person = team.find((entry) => entry.id === personId);
  if (!person) return;
  closeTeamEditor();
  const draft = Object.assign({}, person);
  const box = document.createElement('div');
  box.id = 'teamDialog';
  box.className = 'team-dialog';
  box.innerHTML =
    '<form class="team-sheet" role="dialog" aria-modal="true" aria-labelledby="teamEditorTitle">' +
      '<h2 id="teamEditorTitle">Personalizar</h2>' +
      '<label class="team-field"><span>Nombre</span><input type="text" name="name" maxlength="40" value="' + escapeHtml(draft.name) + '"></label>' +
      '<div class="team-field"><span>Apariencia</span><div class="team-choices" id="teamMarks"></div></div>' +
      '<div class="team-field"><span>Color</span><div class="team-swatches" id="teamColors"></div></div>' +
      '<div class="team-field"><span>Forma</span><div class="team-choices" id="teamShapes"></div></div>' +
      '<label class="team-field"><span>Sección o subsección</span><select name="target">' + assignmentOptions(draft.target) + '</select></label>' +
      '<div class="team-actions">' +
        '<button type="button" class="btn" id="teamCancel">Cancelar</button>' +
        '<button type="submit" class="btn btn-accent">Guardar</button>' +
      '</div>' +
    '</form>';
  document.body.appendChild(box);
  const form = box.querySelector('form');
  const nameInput = form.elements.name;
  nameInput.focus();

  function paintChoices() {
    box.querySelector('#teamMarks').innerHTML = [
      { id: 'initials', label: 'Iniciales' },
      { id: 'man', label: 'Hombre' },
      { id: 'woman', label: 'Mujer' }
    ].map((item) =>
      '<button type="button" class="team-choice' + (draft.mark === item.id ? ' is-on' : '') + '" data-mark="' + item.id + '">' + item.label + '</button>'
    ).join('');
    box.querySelector('#teamColors').innerHTML =
      TEAM_COLORS.map((color) =>
        '<button type="button" class="team-swatch' + (draft.color.toLowerCase() === color ? ' is-on' : '') + '" data-color="' + color + '" style="background:' + color + '" aria-label="' + color + '"></button>'
      ).join('') +
      '<input class="team-color" type="color" value="' + escapeHtml(draft.color) + '" aria-label="Color personalizado">';
    box.querySelector('#teamShapes').innerHTML = TEAM_SHAPES.map((item) =>
      '<button type="button" class="team-shape shape-' + item.id + (draft.shape === item.id ? ' is-on' : '') + '" data-shape="' + item.id + '" style="background:' + escapeHtml(draft.color) + '" aria-label="' + item.label + '"></button>'
    ).join('');
    box.querySelectorAll('[data-mark]').forEach((btn) => {
      btn.addEventListener('click', () => { draft.mark = btn.dataset.mark; paintChoices(); });
    });
    box.querySelectorAll('[data-color]').forEach((btn) => {
      btn.addEventListener('click', () => { draft.color = btn.dataset.color; paintChoices(); });
    });
    box.querySelectorAll('[data-shape]').forEach((btn) => {
      btn.addEventListener('click', () => { draft.shape = btn.dataset.shape; paintChoices(); });
    });
    const colorInput = box.querySelector('.team-color');
    colorInput.addEventListener('input', () => {
      draft.color = colorInput.value;
      box.querySelectorAll('.team-swatch').forEach((swatch) => {
        swatch.classList.toggle('is-on', swatch.dataset.color.toLowerCase() === draft.color.toLowerCase());
      });
      box.querySelectorAll('.team-shape').forEach((shape) => {
        shape.style.background = draft.color;
      });
    });
  }
  paintChoices();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    person.name = nameInput.value.trim().slice(0, 40);
    person.mark = draft.mark;
    person.color = draft.color;
    person.shape = draft.shape;
    person.target = form.elements.target.value;
    saveTeam();
    closeTeamEditor();
    openTeam();
  });
  box.querySelector('#teamCancel').addEventListener('click', closeTeamEditor);
  box.addEventListener('click', (event) => { if (event.target === box) closeTeamEditor(); });
  function onKey(event) {
    if (event.key === 'Escape') {
      closeTeamEditor();
      document.removeEventListener('keydown', onKey);
    }
  }
  document.addEventListener('keydown', onKey);
}

function openTeam() {
  state.sectionId = null;
  state.itemId = null;
  setActiveNav('team');
  els.title.textContent = 'Equipo';
  showSectionTeam(null);
  els.crumbs.textContent = 'UCC Cardiológicos HM / Equipo';
  els.meta.textContent = '9 personas';
  const cards = team.map((person) => {
    const name = person.name || 'Sin nombre';
    return '<article class="team-slot">' +
      '<button type="button" class="team-person" data-team-open="' + person.id + '" aria-label="' + escapeHtml(name + '. ' + targetLabel(person.target)) + '">' +
        '<span class="avatar shape-' + escapeHtml(person.shape) + '" style="background:' + escapeHtml(person.color) + ';color:' + inkFor(person.color) + '">' + avatarInner(person) + '</span>' +
        '<span class="team-name">' + escapeHtml(name) + '</span>' +
        '<span class="team-assign">' + escapeHtml(targetLabel(person.target)) + '</span>' +
      '</button>' +
      '<button type="button" class="team-edit" data-team-edit="' + person.id + '">Personalizar</button>' +
    '</article>';
  }).join('');
  els.viewer.innerHTML =
    '<div class="panel">' +
      '<p class="panel-lead">Nueve personas del equipo. Personaliza el icono y elige, en el menú, la sección o subsección que abre cada una.</p>' +
      '<div class="team-grid">' + cards + '</div>' +
    '</div>';
  els.viewer.querySelectorAll('[data-team-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const person = team.find((entry) => entry.id === btn.dataset.teamOpen);
      if (!person) return;
      if (person.target) openAssignment(person.target);
      else openTeamEditor(person.id);
    });
  });
  els.viewer.querySelectorAll('[data-team-edit]').forEach((btn) => {
    btn.addEventListener('click', () => openTeamEditor(btn.dataset.teamEdit));
  });
}

renderNav();
openItem('hemodinamica', 'escalas-shock');
