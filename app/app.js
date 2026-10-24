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
            path: '../assets/protocolos/nutricion-shock/protocolo-nutricion-shock-cardiogenico.pdf?v=20261024u',
            ext: '.pdf'
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
}

function renderNav() {
  els.nav.innerHTML = SECTIONS.map((section) =>
    '<button type="button" class="nav-btn" data-section-id="' + escapeHtml(section.id) + '">' +
      escapeHtml(section.title) +
    '</button>'
  ).join('');
  els.nav.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => openSection(btn.dataset.sectionId));
  });
}

function showHome() {
  state.sectionId = null;
  state.itemId = null;
  setActiveNav(null);
  els.title.textContent = 'Inicio';
  els.crumbs.textContent = 'Unidad Cuidados Críticos Cardiológicos HM';
  els.meta.textContent = 'Elige una sección del menú';
  els.viewer.innerHTML =
    '<div class="panel home-hero">' +
      '<div>' +
        '<h2>Unidad Cuidados Críticos Cardiológicos HM</h2>' +
        '<p>Selecciona Respiratorio, Infecciones, Nutrición u otra área del menú lateral para abrir sus protocolos y herramientas.</p>' +
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
  els.crumbs.textContent = 'UCC Cardiológicos HM / ' + section.title;
  els.meta.textContent = (section.items || []).length
    ? (section.items.length + ' recurso' + (section.items.length === 1 ? '' : 's'))
    : 'Sin protocolos todavía';

  const items = section.items || [];
  if (!items.length) {
    els.viewer.innerHTML =
      '<div class="panel">' +
        '<div class="empty">' +
          '<strong>' + escapeHtml(section.title) + '</strong>' +
          'Sin protocolos todavía. Esta sección está preparada para añadir contenido más adelante.' +
        '</div>' +
      '</div>';
    return;
  }

  const cards = items.map((item) => {
    const inner =
      '<span class="card-title">' + escapeHtml(item.title) + '</span>' +
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
    '<div class="panel">' +
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
      '<span class="card-title">' + escapeHtml(part.title) + '</span>' +
      '<span class="card-desc">' + escapeHtml(part.description || '') + '</span>' +
      '<span class="card-cta">Abrir</span>' +
    '</button>'
  ).join('');

  els.viewer.innerHTML =
    '<div class="panel">' +
      '<div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:16px">' +
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
        '<div class="doc-toolbar-title">' + escapeHtml(item.title) + '</div>' +
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
        '<div class="doc-toolbar-title">' + escapeHtml(part.title) + '</div>' +
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

renderNav();
openItem('hemodinamica', 'escalas-shock');
