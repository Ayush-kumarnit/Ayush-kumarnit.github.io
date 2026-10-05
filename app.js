/**
 * Ayush Kumar Portfolio Core JavaScript Engine
 * Dynamic data binding, 3D flip card, cyber terminal, custom cursor, 5 visual themes & Matrix rain
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  populatePortfolioData();
  initRoleRotator();
  initPortraitTilt();
  initAcademicTrendChart();
  initWorkflowPipeline();
  initFAQ();
  initSkillsSection();
  initProjectsSection();
  initLiveClock();
  initVisualThemes();
  initMatrixRain();
  initTerminal();
  initAnalyticsDrawer();
  initContactForm();
  initScrollSpy();
});

/* ========================================================
   1. CUSTOM FLUID CURSOR
   ======================================================== */
function initCursor() {
  const ambient = document.getElementById('cursorAmbient');
  const lens = document.getElementById('cursorLens');
  const dot = document.getElementById('cursorDot');

  if (!ambient || !lens || !dot) return;

  if (window.matchMedia('(pointer: coarse)').matches) {
    ambient.style.display = 'none';
    lens.style.display = 'none';
    dot.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let lensX = mouseX;
  let lensY = mouseY;
  let ambientX = mouseX;
  let ambientY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    lensX += (mouseX - lensX) * 0.22;
    lensY += (mouseY - lensY) * 0.22;
    ambientX += (mouseX - ambientX) * 0.08;
    ambientY += (mouseY - ambientY) * 0.08;

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;
    ambient.style.left = `${ambientX}px`;
    ambient.style.top = `${ambientY}px`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  const hoverTargets = 'a, button, input, textarea, .hero-portrait-card, .workflow-step-item, .project-card';
  document.querySelectorAll(hoverTargets).forEach((el) => {
    el.addEventListener('mouseenter', () => {
      lens.style.transform = 'translate(-50%, -50%) scale(1.4)';
      lens.style.borderColor = 'var(--cyan)';
    });
    el.addEventListener('mouseleave', () => {
      lens.style.transform = 'translate(-50%, -50%) scale(1)';
      lens.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    });
  });
}

/* ========================================================
   2. DATA INJECTION & POPULATION
   ======================================================== */
function populatePortfolioData() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;
  const p = PORTFOLIO_DATA.personal;
  const a = PORTFOLIO_DATA.academic;

  const brandText = document.getElementById('brandText');
  if (brandText) brandText.textContent = p.domain;

  const heroName = document.getElementById('heroName');
  if (heroName) {
    heroName.innerHTML = `${p.firstName}<br><span class="hero-title-accent">${p.lastName}</span>`;
  }

  const heroHeadline = document.getElementById('heroHeadline');
  if (heroHeadline) heroHeadline.innerHTML = p.headline;

  const aboutBio = document.getElementById('aboutBio');
  if (aboutBio) aboutBio.textContent = p.bio;

  const aboutMotto = document.getElementById('aboutMotto');
  if (aboutMotto) aboutMotto.textContent = `"${p.motto}"`;

  const profileImg = document.getElementById('profileImg');
  if (profileImg && p.images && p.images.profile) profileImg.src = p.images.profile;

  const profileBackImg = document.getElementById('profileBackImg');
  if (profileBackImg && p.images && p.images.profileBack) profileBackImg.src = p.images.profileBack;

  const locCountry = document.getElementById('locCountry');
  if (locCountry) locCountry.textContent = p.location.country;

  const locCoords = document.getElementById('locCoords');
  if (locCoords) locCoords.textContent = `${p.location.coordinates} · ${p.location.city}`;

  const semLabel = document.getElementById('semLabel');
  if (semLabel) semLabel.textContent = a.semestersLabel;

  const cpiDisplay = document.getElementById('cpiDisplay');
  if (cpiDisplay) cpiDisplay.innerHTML = `${a.cpi} <span>CGPA (${a.institution})</span>`;

  const trendStatus = document.getElementById('trendStatus');
  if (trendStatus) trendStatus.textContent = a.statusNote;

  const cardInstTag = document.getElementById('cardInstTag');
  if (cardInstTag) cardInstTag.textContent = a.institution;

  const cardYearTag = document.getElementById('cardYearTag');
  if (cardYearTag) cardYearTag.textContent = `${a.years} · CGPA: ${a.cpi}`;

  const mailLink = document.getElementById('mailLink');
  if (mailLink) mailLink.href = p.socialLinks.email;

  const phoneLink = document.getElementById('phoneLink');
  if (phoneLink && p.socialLinks.phone) phoneLink.href = p.socialLinks.phone;

  const githubLink = document.getElementById('githubLink');
  if (githubLink) githubLink.href = p.socialLinks.github;

  const linkedinLink = document.getElementById('linkedinLink');
  if (linkedinLink) linkedinLink.href = p.socialLinks.linkedin;

  const twitterLink = document.getElementById('twitterLink');
  if (twitterLink) twitterLink.href = p.socialLinks.twitter;

  const redditLink = document.getElementById('redditLink');
  if (redditLink) redditLink.href = p.socialLinks.reddit;

  const resumeLink = document.getElementById('resumeLink');
  if (resumeLink) resumeLink.href = p.socialLinks.resume;

  const pillarsGrid = document.getElementById('pillarsGrid');
  if (pillarsGrid && a.pillars) {
    pillarsGrid.innerHTML = a.pillars.map(pillar => `
      <div class="pillar-card" style="--pillar-border: ${pillar.color}35; --pillar-bg: ${pillar.color}0a; --pillar-color: ${pillar.color};">
        <div class="pillar-tag">${pillar.tag}</div>
        <p class="pillar-desc">${pillar.desc}</p>
      </div>
    `).join('');
  }
}

/* ========================================================
   3. HERO ROLE ROTATOR
   ======================================================== */
function initRoleRotator() {
  const roleText = document.getElementById('roleText');
  const dotsContainer = document.getElementById('roleDots');
  if (!roleText || typeof PORTFOLIO_DATA === 'undefined') return;

  const roles = PORTFOLIO_DATA.personal.roles || ["EMBEDDED SYSTEMS", "IOT DEVELOPER", "BLOCKCHAIN DEV", "ML RESEARCHER", "CIRCUIT DESIGNER"];
  let currentIndex = 0;

  if (dotsContainer) {
    dotsContainer.innerHTML = roles.map((_, i) => `
      <div class="role-dot ${i === 0 ? 'active' : ''}"></div>
    `).join('');
  }

  setInterval(() => {
    roleText.style.opacity = '0';
    roleText.style.transform = 'translateY(12px) scale(0.97)';

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % roles.length;
      roleText.textContent = roles[currentIndex];

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.role-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }

      roleText.style.opacity = '1';
      roleText.style.transform = 'translateY(0) scale(1)';
    }, 280);
  }, 2600);
}

/* ========================================================
   4. INTERACTIVE 3D PORTRAIT CARD TILT
   ======================================================== */
function initPortraitTilt() {
  const card = document.getElementById('portraitCard');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
  });
}

/* ========================================================
   5. ACADEMIC TREND SVG CHART
   ======================================================== */
function initAcademicTrendChart() {
  const svg = document.getElementById('trendSvg');
  if (!svg || typeof PORTFOLIO_DATA === 'undefined') return;

  const trendData = PORTFOLIO_DATA.academic.trendData || [
    { sem: "Class X", spi: 9.10, cpi: 9.10 },
    { sem: "Class XII", spi: 8.46, cpi: 8.78 },
    { sem: "NITN S1", spi: 9.388, cpi: 9.388 }
  ];

  const width = 240;
  const height = 70;
  const paddingX = 28;
  const paddingY = 14;

  const minVal = 7.5;
  const maxVal = 10.0;

  function getY(val) {
    return height - paddingY - ((val - minVal) / (maxVal - minVal)) * (height - 2 * paddingY);
  }

  function getX(idx) {
    return paddingX + (idx / (trendData.length - 1)) * (width - 2 * paddingX);
  }

  let spiPath = '';
  let cpiPath = '';

  trendData.forEach((d, idx) => {
    const x = getX(idx);
    const ySpi = getY(d.spi);
    const yCpi = getY(d.cpi);

    if (idx === 0) {
      spiPath += `M ${x} ${ySpi}`;
      cpiPath += `M ${x} ${yCpi}`;
    } else {
      spiPath += ` L ${x} ${ySpi}`;
      cpiPath += ` L ${x} ${yCpi}`;
    }
  });

  let html = `
    <line x1="${paddingX}" y1="${getY(8.0)}" x2="${width - paddingX}" y2="${getY(8.0)}" stroke="var(--border)" stroke-dasharray="3,3"/>
    <line x1="${paddingX}" y1="${getY(9.0)}" x2="${width - paddingX}" y2="${getY(9.0)}" stroke="var(--border)" stroke-dasharray="3,3"/>
    <path d="${spiPath}" fill="none" stroke="var(--cyan)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${cpiPath}" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  `;

  trendData.forEach((d, idx) => {
    const x = getX(idx);
    const ySpi = getY(d.spi);
    const yCpi = getY(d.cpi);

    html += `
      <g class="chart-node" data-sem="${d.sem}" data-spi="${d.spi}" data-cpi="${d.cpi}">
        <circle cx="${x}" cy="${ySpi}" r="14" fill="transparent"></circle>
        <circle cx="${x}" cy="${ySpi}" r="3.5" fill="var(--cyan)" stroke="var(--bg-card)" stroke-width="1.5"></circle>
        <circle cx="${x}" cy="${yCpi}" r="2.5" fill="var(--amber)" stroke="var(--bg-card)" stroke-width="1.5"></circle>
        <text x="${x}" y="${height - 2}" text-anchor="middle" font-size="8.5" fill="var(--text-muted)" font-family="var(--font-mono)">${d.sem}</text>
      </g>
    `;
  });

  svg.innerHTML = html;

  svg.querySelectorAll('.chart-node').forEach(node => {
    node.addEventListener('mouseenter', () => {
      const sem = node.getAttribute('data-sem');
      const spi = node.getAttribute('data-spi');
      const cpi = node.getAttribute('data-cpi');
      const trendStatus = document.getElementById('trendStatus');
      if (trendStatus) {
        trendStatus.innerHTML = `<span style="color:var(--cyan); font-weight:700;">${sem}</span>: Score <strong>${spi}</strong> (Cumulative: <strong>${cpi}</strong>)`;
      }
    });

    node.addEventListener('mouseleave', () => {
      const trendStatus = document.getElementById('trendStatus');
      if (trendStatus) {
        trendStatus.textContent = PORTFOLIO_DATA.academic.statusNote;
      }
    });
  });
}

/* ========================================================
   6. PROJECTS SECTION & SCOPE/TECH TOGGLE
   ======================================================== */
function initProjectsSection() {
  const container = document.getElementById('projectsGrid');
  if (!container || typeof PORTFOLIO_DATA === 'undefined') return;

  const projects = PORTFOLIO_DATA.projects || [];

  container.innerHTML = projects.map(proj => `
    <div class="project-card" style="--project-accent: ${proj.accent};">
      <div class="project-card-top-bar"></div>
      
      <div class="project-preview-box">
        <div class="project-preview-mockup">
          <div class="mock-window-dots">
            <span class="mock-dot" style="background:${proj.accent};"></span>
            <span class="mock-dot"></span>
            <span class="mock-dot"></span>
          </div>
          <div class="mock-content-art">
            <div class="mock-grid-line"></div>
            <span>${proj.previewBadge || 'ENGINEERING ARCHITECTURE'}</span>
          </div>
        </div>
      </div>

      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-summary">${proj.summary}</p>

        <div class="scope-tech-toggle">
          <button class="tab-btn active" data-target="scope-${proj.id}">SCOPE</button>
          <button class="tab-btn" data-target="tech-${proj.id}">TECH</button>
        </div>

        <div class="tab-content-area">
          <div id="scope-${proj.id}" class="tab-pane active">${proj.scope}</div>
          <div id="tech-${proj.id}" class="tab-pane" style="display:none;">
            <div class="tech-tag-row">
              ${proj.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="project-links">
          <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="project-link-btn" title="View Source Code">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            <span>Schematic / Code</span>
          </a>
          <a href="${proj.liveUrl}" target="_blank" rel="noopener" class="project-link-btn" style="color:var(--cyan);" title="View Verified Resume Report">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h6v6"/>
              <path d="M10 14 21 3"/>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            </svg>
            <span>Resume Report</span>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      card.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-target');
      card.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
      const targetPane = card.querySelector(`#${targetId}`);
      if (targetPane) targetPane.style.display = 'block';
    });
  });
}

/* ========================================================
   7. SKILLS / FORGE SECTION
   ======================================================== */
function initSkillsSection() {
  const tabsContainer = document.getElementById('skillsTabs');
  const titleEl = document.getElementById('skillGroupTitle');
  const descEl = document.getElementById('skillGroupDesc');
  const badgeEl = document.getElementById('skillGroupBadge');
  const pillsContainer = document.getElementById('skillsPillsGrid');

  if (!tabsContainer || typeof PORTFOLIO_DATA === 'undefined') return;

  const categories = PORTFOLIO_DATA.skillsCategories || [];
  if (categories.length === 0) return;

  tabsContainer.innerHTML = categories.map((cat, idx) => `
    <button class="skill-category-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
      <span class="skill-tab-dot"></span>
      <span>${cat.name}</span>
    </button>
  `).join('');

  function renderCategory(idx) {
    const cat = categories[idx];
    if (!cat) return;

    if (titleEl) titleEl.textContent = cat.name;
    if (descEl) descEl.textContent = cat.description;
    if (badgeEl) {
      badgeEl.textContent = cat.badge;
      badgeEl.style.color = cat.color;
      badgeEl.style.borderColor = `${cat.color}45`;
      badgeEl.style.background = `${cat.color}10`;
    }

    if (pillsContainer) {
      pillsContainer.innerHTML = cat.skills.map(skill => `
        <div class="skill-item-chip" style="--item-color:${cat.color}">
          <span class="skill-item-dot"></span>
          <span>${skill}</span>
        </div>
      `).join('');
    }
  }

  renderCategory(0);

  tabsContainer.querySelectorAll('.skill-category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.skill-category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      renderCategory(idx);
    });
  });
}

/* ========================================================
   8. WORKFLOW PIPELINE
   ======================================================== */
function initWorkflowPipeline() {
  const track = document.getElementById('workflowTrack');
  const detailText = document.getElementById('workflowDetailText');
  if (!track || typeof PORTFOLIO_DATA === 'undefined') return;

  const steps = PORTFOLIO_DATA.workflowSteps || [];

  const iconSVGs = {
    lightbulb: '<circle cx="12" cy="12" r="6"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>',
    brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    flask: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
  };

  track.innerHTML = steps.map((s, idx) => `
    <div class="workflow-step-item ${idx === 3 ? 'active' : ''}" data-idx="${idx}" style="--step-color:${s.color}">
      <div class="workflow-icon-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${iconSVGs[s.icon] || iconSVGs.code}
        </svg>
      </div>
      <span class="workflow-label">${s.label}</span>
    </div>
    ${idx < steps.length - 1 ? '<div class="workflow-connector"></div>' : ''}
  `).join('');

  function selectStep(idx) {
    const s = steps[idx];
    if (!s) return;
    track.querySelectorAll('.workflow-step-item').forEach(item => {
      item.classList.toggle('active', parseInt(item.getAttribute('data-idx'), 10) === idx);
    });
    if (detailText) {
      detailText.innerHTML = `<strong>${s.label}</strong>: ${s.desc}`;
    }
  }

  selectStep(3);

  track.querySelectorAll('.workflow-step-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-idx'), 10);
      selectStep(idx);
    });
  });
}

/* ========================================================
   9. FAQ ACCORDION
   ======================================================== */
function initFAQ() {
  const list = document.getElementById('faqList');
  if (!list || typeof PORTFOLIO_DATA === 'undefined') return;

  const faqs = PORTFOLIO_DATA.faq || [];

  list.innerHTML = faqs.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button class="faq-question-btn">
        <span>${faq.q}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
}

/* ========================================================
   10. LIVE CLOCK (GMT+5:30)
   ======================================================== */
function initLiveClock() {
  const display = document.getElementById('liveTimeDisplay');
  if (!display) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeStr = now.toLocaleTimeString('en-US', options);
    display.textContent = `GMT+5:30 · ${timeStr} IST`;
  }
  update();
  setInterval(update, 1000);
}

/* ========================================================
   11. 5 VISUAL THEMES ENGINE (NIGHT | LIGHT | NEUTRAL | MATRIX | TIMES)
   ======================================================== */
let isMatrixActive = false;

function initVisualThemes() {
  const validThemes = ['night', 'light', 'neutral', 'matrix', 'times'];
  const savedTheme = localStorage.getItem('ayush_portfolio_theme') || 'night';

  window.setVisualTheme = function(themeName) {
    if (!validThemes.includes(themeName)) return;

    validThemes.forEach(t => document.body.classList.remove(`theme-${t}`));
    document.body.classList.add(`theme-${themeName}`);

    document.querySelectorAll('.theme-pill-btn[data-theme]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === themeName);
    });

    localStorage.setItem('ayush_portfolio_theme', themeName);

    isMatrixActive = (themeName === 'matrix');
  };

  document.querySelectorAll('.theme-pill-btn[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.getAttribute('data-theme');
      setVisualTheme(t);
    });
  });

  setVisualTheme(savedTheme);
}

/* ========================================================
   12. HTML5 CANVAS MATRIX DIGITAL RAIN
   ======================================================== */
function initMatrixRain() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initDrops();
  });

  const chars = '0123456789ABCDEFﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ';
  const fontSize = 14;
  let columns = Math.floor(width / fontSize);
  let drops = [];

  function initDrops() {
    columns = Math.floor(width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }
  }
  initDrops();

  let lastTime = 0;
  const fps = 33;
  const interval = 1000 / fps;

  function drawMatrix(currentTime) {
    requestAnimationFrame(drawMatrix);

    if (!isMatrixActive) {
      return;
    }

    const delta = currentTime - lastTime;
    if (delta < interval) return;
    lastTime = currentTime - (delta % interval);

    ctx.fillStyle = 'rgba(2, 9, 4, 0.08)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#22c55e';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      if (Math.random() > 0.85) {
        ctx.fillStyle = '#bbf7d0';
      } else {
        ctx.fillStyle = '#22c55e';
      }

      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  requestAnimationFrame(drawMatrix);
}

/* ========================================================
   13. INTERACTIVE TERMINAL / LOUNGE
   ======================================================== */
function initTerminal() {
  const overlay = document.getElementById('terminalOverlay');
  const openBtn = document.getElementById('openTerminalBtn');
  const footerOpenBtn = document.getElementById('openTerminalFooterBtn');
  const heroLoungeBtn = document.getElementById('heroLoungeBtn');
  const closeDot = document.getElementById('termCloseDot');
  const input = document.getElementById('terminalInput');
  const body = document.getElementById('terminalBody');

  window.openTerminal = function() {
    if (overlay) overlay.classList.add('active');
    if (input) setTimeout(() => input.focus(), 150);
  };

  function closeTerminal() {
    if (overlay) overlay.classList.remove('active');
  }

  if (openBtn) openBtn.addEventListener('click', openTerminal);
  if (footerOpenBtn) footerOpenBtn.addEventListener('click', openTerminal);
  if (heroLoungeBtn) heroLoungeBtn.addEventListener('click', openTerminal);
  if (closeDot) closeDot.addEventListener('click', closeTerminal);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeTerminal();
    });
  }

  if (!input || !body) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      if (!cmd) return;
      handleCommand(cmd);
      input.value = '';
    }
  });

  function printLine(html) {
    const div = document.createElement('div');
    div.className = 't-line';
    div.innerHTML = html;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function handleCommand(cmd) {
    printLine(`<span class="t-prompt">visitor@ayushkumar:~$</span> <span class="t-cmd">${cmd}</span>`);

    const lower = cmd.toLowerCase().trim();
    const parts = lower.split(' ');
    const mainCmd = parts[0];
    const arg = parts[1];

    switch (mainCmd) {
      case 'help':
        printLine(`
          <div class="t-res accent">Available System Commands:</div>
          <div class="t-res">  - <span class="t-cmd">whoami</span>: Developer profile and background</div>
          <div class="t-res">  - <span class="t-cmd">education</span>: Academic credentials (NIT Nagaland, 9.388 CGPA)</div>
          <div class="t-res">  - <span class="t-cmd">projects</span>: Engineering projects (Smart Meters, Blockchain EHR, RC Car)</div>
          <div class="t-res">  - <span class="t-cmd">skills</span>: Competencies in Embedded, Blockchain, IoT, and ML</div>
          <div class="t-res">  - <span class="t-cmd">achievements</span>: Honors (1st Rank Math Contest, SIH 2025)</div>
          <div class="t-res">  - <span class="t-cmd">certifications</span>: NIELIT Drone, MSME 3D Printing & Green Energy</div>
          <div class="t-res">  - <span class="t-cmd">resume</span>: View / download verified PDF resume</div>
          <div class="t-res">  - <span class="t-cmd">theme &lt;night|light|neutral|matrix|times&gt;</span>: Switch visual modes</div>
          <div class="t-res">  - <span class="t-cmd">contact</span>: Email, phone, and location details</div>
          <div class="t-res">  - <span class="t-cmd">date</span>: Query live timestamp</div>
          <div class="t-res">  - <span class="t-cmd">clear</span>: Flush console buffer</div>
        `);
        break;

      case 'theme':
        if (['night', 'light', 'neutral', 'matrix', 'times'].includes(arg)) {
          setVisualTheme(arg);
          printLine(`<span class="t-res accent">Switched visual mode to: [${arg.toUpperCase()}]</span>`);
        } else {
          printLine(`<span class="t-res">Usage: <span class="t-cmd">theme &lt;night | light | neutral | matrix | times&gt;</span></span>`);
        }
        break;

      case 'whoami':
      case 'about':
        printLine(`<span class="t-res">${PORTFOLIO_DATA.personal.bio}</span>`);
        printLine(`<span class="t-res accent">Degree: ${PORTFOLIO_DATA.academic.degree} (${PORTFOLIO_DATA.academic.institution}) · CGPA: ${PORTFOLIO_DATA.academic.cpi}</span>`);
        break;

      case 'education':
        printLine(`<span class="t-res accent">[Higher Education]:</span> NIT Nagaland — B.Tech in EEE (2024–2028), CGPA: 9.388`);
        printLine(`<span class="t-res accent">[Class XII]:</span> SRKG College, Sitamarhi (Bihar Board, 2023) — 84.6%`);
        printLine(`<span class="t-res accent">[Class X]:</span> Bhagirathi Vidyalaya, Haridwar (CBSE, 2021) — 91.0%`);
        break;

      case 'achievements':
        PORTFOLIO_DATA.achievements.forEach(ach => {
          printLine(`<span class="t-cmd">★ ${ach.title}</span> — <span class="t-res">${ach.desc}</span>`);
        });
        break;

      case 'certifications':
        PORTFOLIO_DATA.certifications.forEach(cert => {
          printLine(`<span class="t-res accent">✓ ${cert.name}</span> — <span class="t-res">${cert.issuer} (${cert.tag})</span>`);
        });
        break;

      case 'skills':
        PORTFOLIO_DATA.skillsCategories.forEach(cat => {
          printLine(`<span class="t-res accent">[${cat.name}]:</span> <span class="t-res">${cat.skills.join(', ')}</span>`);
        });
        break;

      case 'projects':
        PORTFOLIO_DATA.projects.forEach(p => {
          printLine(`<span class="t-cmd">${p.title}</span> — <span class="t-res">${p.summary}</span>`);
          printLine(`  <span class="t-res accent">Stack:</span> ${p.techStack.join(' · ')}`);
        });
        break;

      case 'resume':
        printLine(`<span class="t-res accent">Opening resume PDF: <a href="${PORTFOLIO_DATA.personal.socialLinks.resume}" target="_blank" style="text-decoration:underline; color:var(--cyan);">Ayush_Kumar_Resume.pdf</a></span>`);
        window.open(PORTFOLIO_DATA.personal.socialLinks.resume, '_blank');
        break;

      case 'contact':
        printLine(`<span class="t-res">Email: <a href="${PORTFOLIO_DATA.personal.socialLinks.email}" style="color:var(--cyan);">${PORTFOLIO_DATA.personal.socialLinks.email.replace('mailto:', '')}</a></span>`);
        printLine(`<span class="t-res">GitHub: <a href="${PORTFOLIO_DATA.personal.socialLinks.github}" target="_blank" style="color:var(--emerald);">${PORTFOLIO_DATA.personal.socialLinks.github}</a></span>`);
        printLine(`<span class="t-res">Phone: <a href="${PORTFOLIO_DATA.personal.socialLinks.phone}" style="color:var(--amber);">${PORTFOLIO_DATA.personal.socialLinks.phone.replace('tel:', '')}</a></span>`);
        printLine(`<span class="t-res">Location: ${PORTFOLIO_DATA.personal.location.city}, ${PORTFOLIO_DATA.personal.location.country}</span>`);
        break;

      case 'github':
        printLine(`<span class="t-res">GitHub: <a href="${PORTFOLIO_DATA.personal.socialLinks.github}" target="_blank" style="color:var(--cyan);">${PORTFOLIO_DATA.personal.socialLinks.github}</a></span>`);
        window.open(PORTFOLIO_DATA.personal.socialLinks.github, '_blank');
        break;

      case 'clear':
        body.innerHTML = '';
        break;

      case 'date':
        printLine(`<span class="t-res">${new Date().toString()}</span>`);
        break;

      case 'matrix':
        setVisualTheme('matrix');
        printLine(`<span class="t-res accent">Matrix Mode engaged. Follow the white rabbit...</span>`);
        break;

      case 'sudo':
        printLine(`<span class="t-res" style="color:#ef4444;">Access denied: User 'visitor' is not in the sudoers file. Incident reported.</span>`);
        break;

      default:
        printLine(`<span class="t-res" style="color:#f59e0b;">Command not recognized: '${cmd}'. Type <span class="t-cmd">'help'</span> for instructions.</span>`);
        break;
    }
  }
}

/* ========================================================
   14. VISITOR ANALYTICS DRAWER
   ======================================================== */
function initAnalyticsDrawer() {
  const drawer = document.getElementById('analyticsDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const openBtn = document.getElementById('openVisitorsBtn');
  const closeBtn = document.getElementById('closeDrawerBtn');

  function openDrawer() {
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  if (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.visitorStats) {
    const stats = PORTFOLIO_DATA.visitorStats;

    const totalVisitsNum = document.getElementById('totalVisitsNum');
    if (totalVisitsNum) totalVisitsNum.textContent = stats.totalVisitors.toLocaleString();

    const countriesList = document.getElementById('countriesList');
    if (countriesList && stats.countries) {
      countriesList.innerHTML = stats.countries.map(c => `
        <div class="country-stat-row">
          <div class="country-meta">
            <span>${c.name}</span>
            <span style="font-family:var(--font-mono); color:var(--cyan);">${c.percent}%</span>
          </div>
          <div class="country-bar-track">
            <div class="country-bar-fill" style="width: ${c.percent}%;"></div>
          </div>
        </div>
      `).join('');
    }

    const osList = document.getElementById('osList');
    if (osList && stats.osBreakdown) {
      osList.innerHTML = stats.osBreakdown.map(item => `
        <div class="os-pill">
          <span>${item.os}</span>
          <span style="color:var(--cyan); font-weight:700;">${item.percent}</span>
        </div>
      `).join('');
    }
  }
}

/* ========================================================
   15. CONTACT FORM & TOAST
   ======================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  window.showToast = function(msg) {
    if (!toast) return;
    if (toastText) toastText.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  };

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    showToast(`Thank you, ${name}! Your transmission has been received.`);
    form.reset();
  });
}

/* ========================================================
   16. MOBILE NAVIGATION & SCROLL SPY
   ======================================================== */
function initScrollSpy() {
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const closeMobile = document.getElementById('closeMobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  if (closeMobile && mobileDrawer) {
    closeMobile.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  window.closeMobileNav = function() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
  };

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
