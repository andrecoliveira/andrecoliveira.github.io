// Variation B — Editorial Mono / Tech-brutalist
// Space Grotesk display + JetBrains Mono metadata.
// Props: { lang, theme, density, heroVariant, timelineVariant, accent }

function ResumeEditorialMono({
  lang = 'en',
  theme = 'light',
  density = 'spacious',
  heroVariant = 'classic',
  timelineVariant = 'classic',
  accent = '#7dce94',
}) {
  const L = RESUME.labels[lang];
  const isDark = theme === 'dark';
  const compact = density === 'compact';

  const bg = isDark ? 'oklch(0.14 0.008 150)' : 'oklch(0.97 0.004 95)';
  const fg = isDark ? 'oklch(0.96 0.005 95)' : 'oklch(0.14 0.01 250)';
  const dim = isDark ? 'oklch(0.62 0.01 250)' : 'oklch(0.45 0.01 250)';
  const rule = isDark ? 'oklch(0.28 0.008 250)' : 'oklch(0.82 0.008 95)';
  const panel = isDark ? 'oklch(0.18 0.008 150)' : 'oklch(0.94 0.005 95)';

  const pagePad = compact ? '32px 40px' : '56px 72px';
  const sectionGap = compact ? 80 : 140;

  const mono = "'JetBrains Mono', 'SF Mono', Menlo, monospace";
  const display = "'Space Grotesk', 'Inter', sans-serif";

  const s = {
    root: {
      background: bg, color: fg, fontFamily: display,
      fontSize: 15, lineHeight: 1.55, padding: pagePad, minHeight: '100%',
      transition: 'background 0.4s ease, color 0.4s ease',
    },
    // Tiny top strip like a print register mark
    strip: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: mono, fontSize: 11, color: dim, letterSpacing: 0.5,
      paddingBottom: 20, borderBottom: `1px solid ${rule}`, marginBottom: 56,
    },
    stripLeft: { display: 'flex', gap: 20, alignItems: 'center' },
    stripRight: { display: 'flex', gap: 20 },
    navA: { color: dim, textDecoration: 'none', transition: 'color 0.2s' },
    mark: {
      width: 10, height: 10, border: `2px solid ${accent}`, borderRadius: '50%',
    },
    // Hero (classic) — huge stacked display with ampersand treatment
    heroBlock: { position: 'relative', paddingBottom: compact ? 40 : 72 },
    heroAvailable: {
      fontFamily: mono, fontSize: 11, letterSpacing: 1.5, color: accent,
      textTransform: 'uppercase', marginBottom: 32,
      display: 'inline-flex', alignItems: 'center', gap: 10,
    },
    availDot: {
      width: 8, height: 8, borderRadius: '50%', background: accent,
      boxShadow: `0 0 0 4px ${accent}33`, animation: 'pulseB 2s ease-in-out infinite',
    },
    display1: {
      fontFamily: display, fontSize: 'clamp(64px, 10.5vw, 168px)',
      fontWeight: 500, lineHeight: 0.94, letterSpacing: -4,
      margin: 0, color: fg,
    },
    amp: {
      color: accent, fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
      fontWeight: 400, paddingLeft: 4, paddingRight: 4,
    },
    heroGrid: {
      marginTop: compact ? 48 : 72,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 24,
      fontFamily: mono,
      fontSize: 12,
      borderTop: `1px solid ${rule}`,
      paddingTop: 20,
    },
    heroCell: { display: 'flex', flexDirection: 'column', gap: 4 },
    heroLabel: { color: dim, fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase' },
    heroVal: { color: fg, fontSize: 13 },
    // Section head
    section: { marginTop: sectionGap, position: 'relative' },
    secHead: {
      display: 'grid', gridTemplateColumns: '120px 1fr',
      gap: 40, alignItems: 'baseline',
      borderTop: `1px solid ${fg}`, paddingTop: 24, marginBottom: 48,
    },
    secNum: {
      fontFamily: mono, fontSize: 12, letterSpacing: 1, color: dim,
    },
    secTitle: {
      fontFamily: display, fontSize: compact ? 40 : 56, fontWeight: 500,
      letterSpacing: -1.5, lineHeight: 1, margin: 0,
    },
    secSub: {
      fontFamily: mono, fontSize: 12, color: dim, marginTop: 10, letterSpacing: 0.3,
    },
    // About
    aboutGrid: {
      display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64,
    },
    aboutMeta: {
      fontFamily: mono, fontSize: 12, lineHeight: 1.8,
    },
    aboutMetaRow: {
      display: 'flex', gap: 16, padding: '10px 0',
      borderBottom: `1px dashed ${rule}`,
    },
    aboutMetaKey: { color: dim, width: 80, textTransform: 'uppercase', fontSize: 10, letterSpacing: 1, paddingTop: 3 },
    aboutMetaVal: { color: fg, flex: 1 },
    aboutBody: {
      fontSize: 22, lineHeight: 1.5, letterSpacing: -0.3, fontWeight: 400,
    },
    // Skills
    skillsGrid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 48,
    },
    skillGroup: { borderTop: `1px solid ${rule}`, paddingTop: 20 },
    skillGroupHead: {
      fontFamily: mono, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
      color: dim, marginBottom: 16, display: 'flex', justifyContent: 'space-between',
    },
    skillGroupTitle: { color: fg, fontWeight: 500 },
    chips: { display: 'flex', flexWrap: 'wrap', gap: 6 },
    chip: {
      fontFamily: mono, fontSize: 12, padding: '5px 10px', background: panel,
      border: `1px solid transparent`, color: fg, borderRadius: 2,
      transition: 'all 0.2s', cursor: 'default',
      letterSpacing: 0.3,
    },
    // Proficiency — grid with [██░░] bars
    profSection: {
      marginTop: 48, padding: compact ? 32 : 40, background: panel, borderRadius: 2,
      border: `1px solid ${rule}`,
    },
    profHead: {
      fontFamily: mono, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
      color: dim, marginBottom: 20,
    },
    profGrid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 20,
    },
    profItem: { fontFamily: mono, fontSize: 13 },
    profTop: { display: 'flex', justifyContent: 'space-between', marginBottom: 6 },
    profName: { color: fg, fontWeight: 500 },
    profLvl: { color: dim, fontSize: 11 },
    bar: {
      height: 2, background: rule, borderRadius: 0, overflow: 'hidden',
    },
    barFill: { height: '100%', background: accent, transition: 'width 0.8s ease' },
    // Experience timeline classic
    timeline: {
      position: 'relative',
    },
    expItem: {
      display: 'grid',
      gridTemplateColumns: '160px 24px 1fr',
      gap: 32,
      paddingBottom: compact ? 40 : 72,
      position: 'relative',
    },
    expPeriod: {
      fontFamily: mono, fontSize: 12, color: dim, letterSpacing: 0.5,
      paddingTop: 10, textAlign: 'right',
    },
    expAxis: {
      position: 'relative', width: 24,
    },
    expLine: {
      position: 'absolute', left: 11, top: 0, bottom: -80, width: 2, background: rule,
    },
    expLineLast: {
      position: 'absolute', left: 11, top: 0, height: 12, width: 2, background: rule,
    },
    expMarker: {
      position: 'absolute', left: 4, top: 12, width: 16, height: 16,
      background: bg, border: `2px solid ${accent}`, borderRadius: 0,
      transform: 'rotate(45deg)',
    },
    expBody: {},
    expCompany: {
      fontFamily: display, fontSize: compact ? 28 : 36, fontWeight: 500,
      letterSpacing: -0.8, lineHeight: 1.05, marginBottom: 6,
    },
    expRole: {
      fontFamily: mono, fontSize: 12, color: accent, letterSpacing: 0.5,
      textTransform: 'uppercase', marginBottom: 14,
    },
    expDesc: {
      fontSize: 15, color: dim, lineHeight: 1.6, maxWidth: 680, marginBottom: 16,
    },
    expSkills: { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 },
    expSkill: {
      fontFamily: mono, fontSize: 10, padding: '3px 8px',
      color: dim, border: `1px solid ${rule}`, letterSpacing: 0.5,
      textTransform: 'uppercase',
    },
    // Dense variant — table-like
    denseTable: { borderTop: `1px solid ${fg}` },
    denseHead: {
      display: 'grid', gridTemplateColumns: '120px 1.2fr 2fr',
      gap: 32, padding: '12px 0', borderBottom: `1px solid ${rule}`,
      fontFamily: mono, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: dim,
    },
    denseRow: {
      display: 'grid', gridTemplateColumns: '120px 1.2fr 2fr',
      gap: 32, padding: '24px 0', borderBottom: `1px solid ${rule}`,
      alignItems: 'baseline', transition: 'background 0.2s', cursor: 'default',
    },
    densePeriod: { fontFamily: mono, fontSize: 12, color: dim },
    denseCompany: {
      fontFamily: display, fontSize: 22, fontWeight: 500, letterSpacing: -0.4,
    },
    denseRole: {
      fontFamily: mono, fontSize: 11, color: accent, textTransform: 'uppercase',
      letterSpacing: 0.5, marginTop: 4,
    },
    denseDesc: { fontSize: 13, color: dim, lineHeight: 1.6 },
    // Education
    eduGrid: {
      display: 'grid', gridTemplateColumns: '160px 1fr',
      gap: 32, paddingTop: 16,
    },
    eduYear: { fontFamily: mono, fontSize: 12, color: dim, paddingTop: 10 },
    eduBody: {},
    eduDeg: {
      fontFamily: display, fontSize: 36, fontWeight: 500, letterSpacing: -0.8,
      lineHeight: 1.1,
    },
    eduSch: { fontSize: 14, color: dim, marginTop: 8, fontFamily: mono },
    // Footer
    footer: {
      marginTop: sectionGap, paddingTop: 32,
      borderTop: `1px solid ${fg}`,
    },
    footerGrid: {
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
      gap: 32, alignItems: 'end', paddingBottom: 24,
    },
    footerCTA: {
      fontFamily: display, fontSize: compact ? 48 : 72, fontWeight: 500,
      letterSpacing: -2, lineHeight: 0.95,
    },
    footerColTitle: {
      fontFamily: mono, fontSize: 10, color: dim, letterSpacing: 1.5, textTransform: 'uppercase',
      marginBottom: 12,
    },
    footerLink: {
      display: 'block', color: fg, textDecoration: 'none', fontSize: 13,
      padding: '6px 0', fontFamily: mono,
      transition: 'color 0.2s, padding-left 0.2s',
    },
    downloadBtn: {
      display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 22px',
      background: fg, color: bg, fontFamily: mono, fontSize: 12, fontWeight: 600,
      letterSpacing: 1, textTransform: 'uppercase', textDecoration: 'none',
      border: 'none', cursor: 'pointer', borderRadius: 0,
      transition: 'all 0.2s',
    },
    stripBot: {
      display: 'flex', justifyContent: 'space-between',
      fontFamily: mono, fontSize: 10, color: dim, letterSpacing: 1,
      paddingTop: 20, borderTop: `1px solid ${rule}`, textTransform: 'uppercase',
    },
  };

  const renderHero = () => {
    const roles = RESUME.hero.role[lang];
    if (heroVariant === 'story') {
      return (
        <div style={s.heroBlock}>
          <h1 style={{ ...s.display1, fontSize: 'clamp(44px, 6.5vw, 96px)' }}>
            I ship <span style={s.amp}>quiet</span> interfaces.<br/>
            Fifteen years.<br/>
            <span style={{ color: accent }}>Still shipping.</span>
          </h1>
        </div>
      );
    }
    if (heroVariant === 'compact') {
      return (
        <div style={s.heroBlock}>
          <h1 style={{ ...s.display1, fontSize: 'clamp(52px, 8vw, 128px)' }}>
            Front-end<br/>engineer <span style={s.amp}>&</span> <span style={{ color: accent }}>designer</span>.
          </h1>
          <p style={{ fontSize: 18, color: dim, marginTop: 28, maxWidth: 540, lineHeight: 1.55, fontFamily: mono }}>
            {RESUME.hero.tagline[lang]}
          </p>
        </div>
      );
    }
    return (
      <div style={s.heroBlock}>
        <h1 style={s.display1}>
          {roles[0]}<span style={s.amp}>&</span><br/>
          {roles[1]}<span style={s.amp}>&</span><br/>
          <span style={{ color: accent }}>{roles[2]}.</span>
        </h1>
      </div>
    );
  };

  const renderTimeline = () => {
    if (timelineVariant === 'dense') {
      return (
        <div style={s.denseTable}>
          <div style={s.denseHead}>
            <div>{lang === 'pt' ? 'Período' : 'Period'}</div>
            <div>{lang === 'pt' ? 'Empresa / Papel' : 'Company / Role'}</div>
            <div>{lang === 'pt' ? 'Resumo' : 'Summary'}</div>
          </div>
          {RESUME.experience.map((exp, i) => (
            <div key={i} style={s.denseRow} className="rs-dense-row">
              <div style={s.densePeriod}>{lang === 'pt' ? exp.periodPt : exp.period}</div>
              <div>
                <div style={s.denseCompany}>{exp.company}</div>
                <div style={s.denseRole}>{exp.role[lang]}</div>
              </div>
              <div style={s.denseDesc}>{exp.description[lang]}</div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div style={s.timeline}>
        {RESUME.experience.map((exp, i) => (
          <div key={i} style={s.expItem}>
            <div style={s.expPeriod}>{lang === 'pt' ? exp.periodPt : exp.period}</div>
            <div style={s.expAxis}>
              {i < RESUME.experience.length - 1 ? <div style={s.expLine}></div> : <div style={s.expLineLast}></div>}
              <div style={s.expMarker}></div>
            </div>
            <div style={s.expBody}>
              <div style={s.expCompany}>{exp.company}</div>
              <div style={s.expRole}>{exp.role[lang]}</div>
              <p style={s.expDesc}>{exp.description[lang]}</p>
              <div style={s.expSkills}>
                {exp.skills.map((sk, j) => (
                  <span key={j} style={s.expSkill}>{sk}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const profPct = { Professional: 95, Advanced: 80, Intermediate: 60, Beginner: 30 };

  return (
    <div style={s.root} className="rs-b">
      <style>{`
        @keyframes pulseB { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .rs-b .rs-dense-row:hover { background: ${panel}; }
        .rs-b .rs-chip:hover { background: ${accent}; color: #0d1a0f; border-color: ${accent}; transform: translateY(-1px); }
        .rs-b .rs-nav:hover { color: ${accent} !important; }
        .rs-b .rs-footer-link:hover { color: ${accent}; padding-left: 8px; }
        .rs-b .rs-download:hover { background: ${accent} !important; color: #0d1a0f !important; }
        .rs-b .rs-hero-link:hover { border-color: ${accent}; color: ${accent}; }
      `}</style>

      {/* Top strip */}
      <div style={s.strip}>
        <div style={s.stripLeft}>
          <span style={s.mark}></span>
          <span>ANDRÉ OLIVEIRA / RESUME v2026</span>
        </div>
        <div style={s.stripRight}>
          <a href="#about" className="rs-nav" style={s.navA}>[01] {L.about}</a>
          <a href="#experience" className="rs-nav" style={s.navA}>[02] {L.experience}</a>
          <a href="#education" className="rs-nav" style={s.navA}>[03] {L.education}</a>
        </div>
      </div>

      {/* Hero */}
      <section id="home">
        {renderHero()}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: compact ? 32 : 48, alignItems: 'center' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} style={s.downloadBtn} className="rs-download">
            ↓ {L.downloadPDF}
          </a>
          <a href={`mailto:${RESUME.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 20px', background: 'transparent', color: fg, fontFamily: mono, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', textDecoration: 'none', border: `1px solid ${rule}`, cursor: 'pointer', transition: 'all 0.2s' }} className="rs-hero-link">
            → Email
          </a>
          <a href={`https://${RESUME.github}`} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 20px', background: 'transparent', color: fg, fontFamily: mono, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', textDecoration: 'none', border: `1px solid ${rule}`, cursor: 'pointer', transition: 'all 0.2s' }} className="rs-hero-link">
            → GitHub
          </a>
          <a href={`https://${RESUME.linkedin}`} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 20px', background: 'transparent', color: fg, fontFamily: mono, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', textDecoration: 'none', border: `1px solid ${rule}`, cursor: 'pointer', transition: 'all 0.2s' }} className="rs-hero-link">
            → LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={s.section}>
        <div style={s.secHead}>
          <div>
            <div style={s.secNum}>[ 01 / {L.about.toUpperCase()} ]</div>
          </div>
          <div>
            <h2 style={s.secTitle}>{lang === 'pt' ? 'Um pouco sobre mim.' : 'A little about me.'}</h2>
            <div style={s.secSub}>// {lang === 'pt' ? 'bio curta, sem enrolação' : 'short bio, no fluff'}</div>
          </div>
        </div>
        <div style={s.aboutGrid}>
          <div style={s.aboutMeta}>
            <div style={s.aboutMetaRow}>
              <span style={s.aboutMetaKey}>Name</span>
              <span style={s.aboutMetaVal}>{RESUME.fullName}</span>
            </div>
            <div style={s.aboutMetaRow}>
              <span style={s.aboutMetaKey}>{lang === 'pt' ? 'Nac.' : 'Nat.'}</span>
              <span style={s.aboutMetaVal}>{RESUME.nationality[lang]}</span>
            </div>
            <div style={s.aboutMetaRow}>
              <span style={s.aboutMetaKey}>Loc.</span>
              <span style={s.aboutMetaVal}>{RESUME.location[lang]}</span>
            </div>
            <div style={s.aboutMetaRow}>
              <span style={s.aboutMetaKey}>Email</span>
              <span style={s.aboutMetaVal}>{RESUME.email}</span>
            </div>
          </div>
          <div>
            {RESUME.about[lang].map((p, i) => (
              <p key={i} style={{ ...s.aboutBody, marginBottom: 20, color: i === 0 ? fg : dim }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills section removed */}

      {/* Experience */}
      <section id="experience" style={s.section}>
        <div style={s.secHead}>
          <div>
            <div style={s.secNum}>[ 02 / {L.experience.toUpperCase()} ]</div>
          </div>
          <div>
            <h2 style={s.secTitle}>{lang === 'pt' ? '15+ anos, 7 paradas.' : '15+ years, 7 stops.'}</h2>
            <div style={s.secSub}>// {L.experienceSub}</div>
          </div>
        </div>
        {renderTimeline()}
      </section>

      {/* Education */}
      <section id="education" style={{ ...s.section, paddingBottom: compact ? 100 : 180 }}>
        <div style={s.secHead}>
          <div>
            <div style={s.secNum}>[ 03 / {L.education.toUpperCase()} ]</div>
          </div>
          <div>
            <h2 style={s.secTitle}>{L.education}.</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gap: compact ? 24 : 40 }}>
          {RESUME.education[lang].map((edu, i) => (
            <div key={i} style={s.eduGrid}>
              <div style={s.eduYear}>{edu.period}</div>
              <div style={s.eduBody}>
                <div style={s.eduDeg}>{edu.degree}</div>
                <div style={s.eduSch}>{edu.school}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer removed — content ends at Education */}
    </div>
  );
}

window.ResumeEditorialMono = ResumeEditorialMono;
