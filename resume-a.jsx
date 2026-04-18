// Variation A — Editorial Serif
// Big serif display + Inter sans. Magazine-like, generous whitespace.
// Props: { lang, theme, density, heroVariant, timelineVariant, accent }

function ResumeEditorialSerif({
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

  const bg = isDark ? 'oklch(0.18 0.008 150)' : 'oklch(0.985 0.004 95)';
  const fg = isDark ? 'oklch(0.96 0.005 95)' : 'oklch(0.18 0.01 250)';
  const dim = isDark ? 'oklch(0.65 0.01 250)' : 'oklch(0.5 0.01 250)';
  const faint = isDark ? 'oklch(0.3 0.008 250)' : 'oklch(0.88 0.008 95)';
  const rule = isDark ? 'oklch(0.28 0.008 250)' : 'oklch(0.88 0.008 95)';
  const panel = isDark ? 'oklch(0.22 0.008 150)' : 'oklch(0.96 0.005 95)';

  const pagePad = compact ? '40px 48px' : '64px 80px';
  const pagePadX = compact ? 48 : 80;
  const pagePadY = compact ? 40 : 64;
  const sectionGap = compact ? 96 : 160;

  const styles = {
    root: {
      background: bg,
      color: fg,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      fontSize: 16,
      lineHeight: 1.55,
      padding: 0,
      minHeight: '100%',
      transition: 'background 0.4s ease, color 0.4s ease',
    },
    pageInner: {
      padding: `0 ${pagePadX}px ${pagePadY}px`,
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `16px ${pagePadX}px`,
      borderBottom: `1px solid ${rule}`,
      marginBottom: compact ? 44 : 76,
      fontFamily: "'Inter', sans-serif",
      fontSize: 13,
      letterSpacing: 0.2,
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: isDark
        ? 'color-mix(in oklch, ' + bg + ' 88%, transparent)'
        : 'color-mix(in oklch, ' + bg + ' 88%, transparent)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    },
    brand: {
      fontFamily: "'Instrument Serif', 'Times New Roman', serif",
      fontSize: 22,
      fontWeight: 400,
      fontStyle: 'italic',
      letterSpacing: -0.3,
    },
    navLinks: {
      display: 'flex',
      gap: 28,
      alignItems: 'center',
    },
    navLink: {
      color: dim,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s',
    },
    sectionLabel: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 2.5,
      textTransform: 'uppercase',
      color: dim,
      marginBottom: 32,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    },
    sectionNumber: {
      display: 'inline-block',
      minWidth: 28,
      color: accent,
      fontFeatureSettings: '"tnum"',
    },
    displayLead: {
      fontFamily: "'Instrument Serif', 'Times New Roman', serif",
      fontSize: 'clamp(72px, 11vw, 180px)',
      fontWeight: 400,
      lineHeight: 0.95,
      letterSpacing: -2.5,
      margin: 0,
    },
    italicWord: {
      fontStyle: 'italic',
    },
    accentWord: {
      color: accent,
      fontStyle: 'italic',
    },
    heroMeta: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 32,
      marginTop: compact ? 56 : 88,
      paddingTop: 24,
      borderTop: `1px solid ${rule}`,
    },
    metaItem: {},
    metaLabel: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: dim,
      marginBottom: 6,
    },
    metaValue: {
      fontSize: 15,
      color: fg,
    },
    availableBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: dim,
      marginBottom: 32,
    },
    availableDot: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: accent,
      boxShadow: `0 0 0 4px ${accent}33`,
      animation: 'pulse 2s ease-in-out infinite',
    },
    section: {
      marginTop: sectionGap,
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 80,
      alignItems: 'start',
    },
    aboutText: {
      fontFamily: "'Instrument Serif', 'Times New Roman', serif",
      fontSize: 32,
      lineHeight: 1.3,
      letterSpacing: -0.5,
      fontWeight: 400,
      color: fg,
    },
    aboutPara: {
      marginBottom: 24,
    },
    aboutSmall: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 14,
      lineHeight: 1.6,
      color: dim,
      marginTop: 24,
    },
    aboutList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    aboutListItem: {
      display: 'flex',
      padding: '14px 0',
      borderBottom: `1px solid ${rule}`,
      fontSize: 14,
    },
    aboutListKey: {
      width: 140,
      color: dim,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
      fontSize: 11,
      fontWeight: 500,
      paddingTop: 2,
    },
    aboutListVal: {
      flex: 1,
      color: fg,
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: compact ? 32 : 56,
    },
    skillGroup: {},
    skillGroupTitle: {
      fontFamily: "'Instrument Serif', 'Times New Roman', serif",
      fontSize: 28,
      fontWeight: 400,
      letterSpacing: -0.3,
      marginBottom: 20,
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
    },
    skillGroupNumber: {
      fontSize: 13,
      fontFamily: "'Inter', sans-serif",
      color: dim,
      fontFeatureSettings: '"tnum"',
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
    },
    chip: {
      fontSize: 13,
      padding: '6px 12px',
      borderRadius: 999,
      border: `1px solid ${rule}`,
      color: fg,
      background: 'transparent',
      transition: 'all 0.2s',
      cursor: 'default',
    },
    proficiency: {
      marginTop: compact ? 48 : 72,
      padding: compact ? 32 : 48,
      background: panel,
      borderRadius: 2,
    },
    profTitle: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      letterSpacing: 2.5,
      textTransform: 'uppercase',
      color: dim,
      marginBottom: 24,
      fontWeight: 500,
    },
    profGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 20,
    },
    profItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16,
      paddingBottom: 10,
      borderBottom: `1px solid ${rule}`,
    },
    profName: {
      fontSize: 16,
      fontWeight: 500,
    },
    profLevel: {
      fontSize: 12,
      color: dim,
      fontStyle: 'italic',
      fontFamily: "'Instrument Serif', serif",
      fontSize: 15,
    },
    timelineClassic: {
      position: 'relative',
      paddingLeft: 40,
    },
    timelineLine: {
      position: 'absolute',
      left: 7,
      top: 8,
      bottom: 8,
      width: 1,
      background: rule,
    },
    expItem: {
      position: 'relative',
      paddingBottom: compact ? 48 : 80,
    },
    expDot: {
      position: 'absolute',
      left: -40,
      top: 10,
      width: 15,
      height: 15,
      borderRadius: '50%',
      background: bg,
      border: `2px solid ${accent}`,
    },
    expDotInner: {
      position: 'absolute',
      left: -36,
      top: 14,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: accent,
    },
    expHeader: {
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: 40,
      marginBottom: 16,
      alignItems: 'baseline',
    },
    expPeriod: {
      fontSize: 13,
      color: dim,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: 0.3,
      fontFeatureSettings: '"tnum"',
      paddingTop: 8,
    },
    expMain: {},
    expCompany: {
      fontFamily: "'Instrument Serif', 'Times New Roman', serif",
      fontSize: 40,
      fontWeight: 400,
      letterSpacing: -0.8,
      lineHeight: 1.1,
      marginBottom: 8,
    },
    expRole: {
      fontSize: 15,
      color: accent,
      fontWeight: 500,
      marginBottom: 16,
    },
    expDesc: {
      fontSize: 16,
      color: dim,
      lineHeight: 1.65,
      maxWidth: 680,
      marginBottom: 20,
    },
    expSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 16,
    },
    expSkill: {
      fontSize: 11,
      padding: '4px 10px',
      border: `1px solid ${rule}`,
      color: dim,
      borderRadius: 2,
      letterSpacing: 0.3,
    },
    // Dense timeline variant
    denseList: {
      borderTop: `1px solid ${rule}`,
    },
    denseRow: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 1fr',
      gap: 40,
      padding: '28px 0',
      borderBottom: `1px solid ${rule}`,
      alignItems: 'baseline',
      transition: 'background 0.2s',
      cursor: 'default',
    },
    densePeriod: {
      fontSize: 13,
      color: dim,
      fontFeatureSettings: '"tnum"',
    },
    denseCompany: {
      fontFamily: "'Instrument Serif', serif",
      fontSize: 26,
      fontWeight: 400,
      letterSpacing: -0.4,
    },
    denseRole: {
      fontSize: 13,
      color: dim,
      marginTop: 4,
    },
    eduBlock: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 80,
      alignItems: 'baseline',
    },
    eduDegree: {
      fontFamily: "'Instrument Serif', serif",
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: -0.8,
      fontWeight: 400,
    },
    eduSchool: {
      fontSize: 14,
      color: dim,
      marginTop: 12,
    },
    footer: {
      marginTop: sectionGap,
      paddingTop: 48,
      borderTop: `1px solid ${rule}`,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'end',
    },
    footerSign: {
      fontFamily: "'Instrument Serif', serif",
      fontSize: 60,
      fontStyle: 'italic',
      letterSpacing: -1,
      lineHeight: 1,
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 14,
      textAlign: 'right',
    },
    footerLink: {
      color: fg,
      textDecoration: 'none',
      display: 'inline-flex',
      gap: 8,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    downloadBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 24px',
      borderRadius: 999,
      background: accent,
      color: '#0d1a0f',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 0.5,
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
    },
  };

  // Hero variations
  const renderHero = () => {
    const roles = RESUME.hero.role[lang];
    if (heroVariant === 'story') {
      return (
        <>
          <h1 style={{ ...styles.displayLead, fontSize: 'clamp(48px, 7vw, 112px)' }}>
            {lang === 'pt' ? (
              <>
                Do <span style={styles.accentWord}>system design</span> à produção.
              </>
            ) : (
              <>
                From <span style={styles.accentWord}>system design</span> to production.
              </>
            )}
          </h1>
        </>
      );
    }
    if (heroVariant === 'compact') {
      return (
        <>
          <h1 style={{ ...styles.displayLead, fontSize: 'clamp(56px, 8vw, 132px)' }}>
            {lang === 'pt' ? (
              <>
                <span style={styles.italicWord}>Engenheiro</span> front-end<br/>
                & <span style={styles.accentWord}>designer</span>.
              </>
            ) : (
              <>
                <span style={styles.italicWord}>Front-end</span> engineer<br/>
                & <span style={styles.accentWord}>designer</span>.
              </>
            )}
          </h1>
          <p style={{ fontSize: 20, color: dim, marginTop: 32, maxWidth: 560, lineHeight: 1.5 }}>
            {RESUME.hero.tagline[lang]}
          </p>
        </>
      );
    }
    // classic
    return (
      <>
        <h1 style={styles.displayLead}>
          <span style={styles.italicWord}>{roles[0]}</span>&<br/>
          <span>{roles[1]}</span>&<br/>
          <span style={styles.accentWord}>{roles[2]}.</span>
        </h1>
      </>
    );
  };

  const renderTimeline = () => {
    if (timelineVariant === 'dense') {
      return (
        <div style={styles.denseList}>
          {RESUME.experience.map((exp, i) => (
            <div
              key={i}
              style={styles.denseRow}
              className="rs-dense-row"
            >
              <div style={styles.densePeriod}>{lang === 'pt' ? exp.periodPt : exp.period}</div>
              <div>
                <div style={styles.denseCompany}>{exp.company}</div>
                <div style={styles.denseRole}>{exp.role[lang]}</div>
              </div>
              <div style={{ fontSize: 13, color: dim, lineHeight: 1.55 }}>
                {exp.description[lang]}
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div style={styles.timelineClassic}>
        <div style={styles.timelineLine}></div>
        {RESUME.experience.map((exp, i) => (
          <div key={i} style={styles.expItem}>
            <div style={styles.expDot}></div>
            <div style={styles.expHeader}>
              <div style={styles.expPeriod}>
                {lang === 'pt' ? exp.periodPt : exp.period}
              </div>
              <div style={styles.expMain}>
                <div style={styles.expCompany}>{exp.company}</div>
                <div style={styles.expRole}>{exp.role[lang]}</div>
                <p style={styles.expDesc}>{exp.description[lang]}</p>
                {exp.bullets && exp.bullets[lang] && (
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '16px 0 20px',
                    display: 'grid',
                    gap: 10,
                  }}>
                    {exp.bullets[lang].map((b, k) => (
                      <li key={k} style={{
                        display: 'grid',
                        gridTemplateColumns: '16px 1fr',
                        gap: 10,
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: dim,
                      }}>
                        <span style={{
                          color: accent,
                          fontWeight: 700,
                          lineHeight: 1.6,
                        }}>—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div style={styles.expSkills}>
                  {exp.skills.map((s, j) => (
                    <span key={j} style={styles.expSkill}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.root} className="rs-a">
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .rs-a .rs-dense-row:hover { background: ${isDark ? 'oklch(0.22 0.008 150)' : 'oklch(0.96 0.005 95)'}; padding-left: 12px !important; padding-right: 12px !important; }
        .rs-a .rs-chip:hover { background: ${accent}; color: #0d1a0f; border-color: ${accent}; }
        .rs-a .rs-navlink:hover { color: ${accent} !important; }
        .rs-a .rs-footer-link:hover { color: ${accent} !important; }
        .rs-a .rs-download:hover { transform: translateY(-1px); box-shadow: 0 8px 24px ${accent}55; }
        .rs-a .rs-hero-link:hover { border-color: ${accent}; color: ${accent}; transform: translateY(-1px); }
        .rs-a .rs-fade { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .rs-a .rs-fade.rs-in { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Nav */}
      <nav style={styles.navbar}>
        <div style={styles.brand}>André Oliveira</div>
        <div style={styles.navLinks}>
          <a style={styles.navLink} className="rs-navlink" href="#about">{L.about}</a>
          <a style={styles.navLink} className="rs-navlink" href="#experience">{L.experience}</a>
          <a style={styles.navLink} className="rs-navlink" href="#education">{L.education}</a>
          <a style={styles.navLink} className="rs-navlink" href="#languages">{L.languages}</a>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: `1px solid ${rule}`,
              borderRadius: 999,
              padding: 3,
              marginLeft: 12,
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1,
            }}
            role="group"
            aria-label="Language toggle"
          >
            <button
              type="button"
              onClick={() => window.__setLang && window.__setLang('pt')}
              style={{
                background: lang === 'pt' ? accent : 'transparent',
                color: lang === 'pt' ? '#0d1a0f' : dim,
                border: 'none',
                padding: '5px 12px',
                borderRadius: 999,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: 1,
                transition: 'all 0.2s',
              }}
              className="rs-lang-btn"
            >PT</button>
            <button
              type="button"
              onClick={() => window.__setLang && window.__setLang('en')}
              style={{
                background: lang === 'en' ? accent : 'transparent',
                color: lang === 'en' ? '#0d1a0f' : dim,
                border: 'none',
                padding: '5px 12px',
                borderRadius: 999,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: 1,
                transition: 'all 0.2s',
              }}
              className="rs-lang-btn"
            >EN</button>
          </div>
        </div>
      </nav>

      <div style={styles.pageInner}>

      {/* Hero */}
      <section id="home">
        {renderHero()}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: compact ? 40 : 56, alignItems: 'center' }}>
          <a href={lang === 'pt' ? 'resume_pt.pdf' : 'resume_en.pdf'} target="_blank" rel="noopener" download style={styles.downloadBtn} className="rs-download">
            {L.downloadPDF}
          </a>
          <a href={`https://${RESUME.github}`} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 22px', borderRadius: 999, border: `1px solid ${rule}`, color: fg, textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: 0.3, transition: 'all 0.2s' }} className="rs-hero-link">
            GitHub
          </a>
          <a href={`https://${RESUME.linkedin}`} target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 22px', borderRadius: 999, border: `1px solid ${rule}`, color: fg, textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: 0.3, transition: 'all 0.2s' }} className="rs-hero-link">
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionNumber}>01</span> — {L.about}
        </div>
        <div style={styles.aboutGrid}>
          <div>
            <ul style={styles.aboutList}>
              <li style={styles.aboutListItem}>
                <span style={styles.aboutListKey}>Full Name</span>
                <span style={styles.aboutListVal}>{RESUME.fullName}</span>
              </li>
              <li style={styles.aboutListItem}>
                <span style={styles.aboutListKey}>{lang === 'pt' ? 'Nacional.' : 'Nationality'}</span>
                <span style={styles.aboutListVal}>{RESUME.nationality[lang]}</span>
              </li>
              <li style={styles.aboutListItem}>
                <span style={styles.aboutListKey}>{lang === 'pt' ? 'Mora em' : 'Living'}</span>
                <span style={styles.aboutListVal}>{RESUME.location[lang]}</span>
              </li>
              <li style={styles.aboutListItem}>
                <span style={styles.aboutListKey}>Email</span>
                <span style={styles.aboutListVal}>{RESUME.email}</span>
              </li>
            </ul>
          </div>
          <div>
            {RESUME.about[lang].map((p, i) => (
              <p key={i} style={{ ...styles.aboutText, ...styles.aboutPara, opacity: i === 0 ? 1 : 0.75 }}>
                {i === 0 && <span style={{ color: accent, fontStyle: 'italic' }}>— </span>}
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      {/* Skills section removed */}

      {/* Experience */}
      <section id="experience" style={styles.section}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionNumber}>02</span> — {L.experience}
        </div>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 56, letterSpacing: -1.2, lineHeight: 1.05, marginBottom: 64, maxWidth: 900 }}>
          {L.experienceSub}
        </div>
        {renderTimeline()}
      </section>

      {/* Education */}
      <section id="education" style={{ ...styles.section }}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionNumber}>03</span> — {L.education}
        </div>
        <div style={{ display: 'grid', gap: compact ? 32 : 48 }}>
          {RESUME.education[lang].map((edu, i) => (
            <div key={i} style={styles.eduBlock}>
              <div style={{ fontSize: 13, color: dim, letterSpacing: 0.5 }}>{edu.period}</div>
              <div>
                <div style={styles.eduDegree}>
                  <span style={{ fontStyle: 'italic' }}>{edu.degree}</span>
                </div>
                <div style={styles.eduSchool}>{edu.school}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section id="languages" style={{ ...styles.section, paddingBottom: compact ? 120 : 200 }}>
        <div style={styles.sectionLabel}>
          <span style={styles.sectionNumber}>04</span> — {L.languages}
        </div>
        <div style={{ display: 'grid', gap: compact ? 24 : 36 }}>
          {RESUME.languages[lang].map((l, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 32,
              alignItems: 'baseline',
              borderBottom: `1px solid ${rule}`,
              paddingBottom: compact ? 20 : 28,
            }}>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 36,
                lineHeight: 1.1,
                fontStyle: 'italic',
                color: fg,
              }}>
                {l.name}
              </div>
              <div style={{
                fontSize: 13,
                color: dim,
                letterSpacing: 0.5,
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                {l.level}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer removed — content ends at Languages */}
      </div>
    </div>
  );
}

window.ResumeEditorialSerif = ResumeEditorialSerif;
