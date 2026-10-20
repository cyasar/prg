import { useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  GitFork as Github,
  GraduationCap,
  LayoutDashboard,
  List,
  Maximize,
  Menu,
  Minimize,
  MonitorPlay,
  PanelLeftClose,
  PanelLeftOpen,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  X,
  Search,
} from "lucide-react";
import { alignment, REPO, sources } from "./course.js";
import { curriculum as weeks } from "./curriculum.js";
import { decks } from "./lessons.js";
import { Outcomes, SlideBody } from "./components.jsx";

const weekUrl = (id) => `#/hafta/${id}/sunum/1`;
const slideUrl = (id, index = 1) => `#/hafta/${id}/sunum/${index}`;
const nav = [
  ["/", "Derse genel bakış", LayoutDashboard],
  ["/plan", "14 haftalık plan", List],
];

function useRoute() {
  const [route, setRoute] = useState(location.hash.slice(1) || "/");
  useEffect(() => {
    const handler = () => {
      setRoute(location.hash.slice(1) || "/");
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  return route;
}

function SectionHeading({ eyebrow, title, description, children }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      {children}
    </div>
  );
}

function Sidebar({ route, mobile, close }) {
  return (
    <>
      <aside className={`sidebar ${mobile ? "mobile-open" : ""}`}>
        <a href="#/" className="brand" onClick={close}>
          <span className="brand-symbol">
            <Code2 size={28} />
          </span>
          <span>
            <strong>
              Programlamaya
              <br />
              Giriş
            </strong>
            <small>BGT-1009</small>
          </span>
        </a>
        <button
          className="mobile-close icon-button"
          aria-label="Menüyü kapat"
          onClick={close}
        >
          <X />
        </button>
        <div className="sidebar-label">DERS ALANI</div>
        <nav aria-label="Ana gezinme">
          {nav.map(([path, label, Icon]) => (
            <a
              key={path}
              href={`#${path}`}
              className={route === path ? "active" : ""}
              aria-current={route === path ? "page" : undefined}
              onClick={close}
            >
              <Icon size={19} />
              {label}
            </a>
          ))}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-label">
          HAFTALIK SUNUMLAR <span>03 / 14</span>
        </div>
        <div className="week-nav">
          {weeks.slice(0, 3).map((w) => (
            <a
              key={w.id}
              href={weekUrl(w.id)}
              onClick={close}
              className={route.startsWith(`/hafta/${w.id}`) ? "current" : ""}
            >
              <span className="week-small">0{w.id}</span>
              <div>
                <strong>{w.short}</strong>
                <small>Etkileşimli sunum</small>
              </div>
              <ChevronRight size={15} />
            </a>
          ))}
          <a className="all-weeks" href="#/plan" onClick={close}>
            Tüm haftaları incele <ArrowRight size={15} />
          </a>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <ShieldCheck size={21} />
            <p>
              Önce düşün.
              <br />
              Sonra kodla, test et.
            </p>
          </div>
          <a className="repo-link" href={REPO} target="_blank" rel="noreferrer">
            <Github size={18} />
            cyasar / prg
            <ExternalLink size={14} />
          </a>
          <span className="small-note">2026–2027 Güz dönemi</span>
        </div>
      </aside>
      {mobile && (
        <button
          className="menu-backdrop"
          aria-label="Menüyü kapat"
          onClick={close}
        />
      )}
    </>
  );
}

function Home() {
  return (
    <>
      <SectionHeading
        eyebrow="BİLGİ GÜVENLİĞİ TEKNOLOJİSİ BÖLÜMÜ"
        title="Programlamaya Giriş"
        description="Algoritmik düşünmeden Python’a, web teknolojilerinden yapay zekâ destekli programlamaya."
      >
        <span className="semester-pill">
          <span />
          2026–2027 Güz
        </span>
      </SectionHeading>
      <div className="course-meta">
        <span>
          <BookOpen size={16} />
          14 hafta
        </span>
        <span>
          <Terminal size={16} />
          Her hafta uygulama
        </span>
        <span>
          <Code2 size={16} />
          Python ile başlangıç
        </span>
        <span>2 teori + 2 uygulama · 6 AKTS</span>
      </div>
      <div className="start-card">
        <div className="start-copy">
          <div className="eyebrow">
            <span className="badge">01. HAFTA</span> İLK ADIM
          </div>
          <h2>
            İyi bir program,
            <br />
            iyi bir soruyla başlar.
          </h2>
          <p>
            Bir problemi küçük parçalara ayır. Çözümünü adım adım kur ve farklı
            durumlarda doğru çalıştığını göster.
          </p>
          <div className="button-row">
            <a className="button primary" href={slideUrl(1)}>
              <PlayIcon />
              İlk sunumu aç
              <ArrowRight size={17} />
            </a>
            <a className="text-link" href={weekUrl(1)}>
              Haftayı incele
            </a>
          </div>
        </div>
        <div className="start-diagram">
          <div className="diagram-title">
            <span className="mini-dot" /> BİR ALGORİTMANIN İZİ
          </div>
          <div className="mini-code">
            <span className="line-number">01</span>
            <span>
              boyut = <b>1024</b>
            </span>
          </div>
          <div className="mini-code">
            <span className="line-number">02</span>
            <span>
              boyut <b>≤ 1024</b> mü?
            </span>
          </div>
          <div className="diagram-connector" />
          <div className="accepted">
            <Check size={18} />
            <span>KABUL</span>
            <small>Sınır değeri de test ettik.</small>
          </div>
          <p>Girdi belli. Kural açık. Sonuç doğrulanabilir.</p>
        </div>
      </div>
      <div className="section-row">
        <h2>14 haftalık öğrenme yolu</h2>
        <a className="text-link" href="#/plan">
          Kazanımları incele <ArrowRight size={16} />
        </a>
      </div>
      <div className="week-cards">
        {weeks.map((w) => (
          <WeekCard key={w.id} week={w} />
        ))}
      </div>
      <div className="approach-strip">
        <Sparkles size={26} />
        <div>
          <h3>YZ ile üret. Kararını kendin ver.</h3>
          <p>
            Önce kendi algoritmanı yaz, YZ’den yardım al, her satırı açıkla ve
            test et.
          </p>
        </div>
        <a href="#/hafta/1/sunum/4" className="text-link">
          Slaytta incele <ArrowRight size={16} />
        </a>
      </div>
      <div className="section-row">
        <h2>Bu ders bölümde nereye bağlanıyor?</h2>
      </div>
      <div className="foundation-grid">
        <div>
          <span>01</span>
          <h3>Güvenli yazılım</h3>
          <p>Girdi doğrulama ve hata yönetiminin temelleri.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Güvenlik otomasyonu</h3>
          <p>Sentetik kayıtları işleyen küçük Python araçları.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Analitik düşünme</h3>
          <p>Çözümü gerekçelendirme ve testle kanıtlama.</p>
        </div>
      </div>
      <p className="source-note">
        Ders yaklaşımı{" "}
        <a href={sources[0].url} target="_blank" rel="noreferrer">
          bölümün resmî hedefleri
        </a>{" "}
        doğrultusunda hazırlanmıştır.{" "}
        <a href="#/plan">Haftalık kazanımları incele.</a>
      </p>
    </>
  );
}
function WeekCard({ week: w }) {
  return (
    <article className={`week-card ${w.ready ? "" : "upcoming"}`}>
      <div className="week-card-top">
        <span className="large-number">{String(w.id).padStart(2, "0")}</span>
        <span className="badge">{w.ready ? "Sunum hazır" : "Yakında"}</span>
      </div>
      <h3>{w.title}</h3>
      <p>{w.theory}</p>
      <div className="week-card-bottom">
        {w.ready ? (
          <>
            <span>
              <MonitorPlay size={16} />
              {decks[w.id].length} slayt
            </span>
            <a className="text-link" href={slideUrl(w.id)}>
              Derse Git <ArrowRight size={16} />
            </a>
          </>
        ) : (
          <span>Uygulama ve kazanım planı hazır</span>
        )}
      </div>
    </article>
  );
}
function PlayIcon() {
  return <MonitorPlay size={18} />;
}

function Plan() {
  const [selected, setSelected] = useState(1);
  const w = weeks[selected - 1];
  return (
    <>
      <SectionHeading
        eyebrow="DÖNEM ROTASI"
        title="14 haftalık ders planı"
        description="Her hafta bir problem, çalışan bir çözüm ve öğrenmeni gösteren bir ürün."
      />
      <p className="inline-note">
        1–5. haftaların etkileşimli ders sunumları ve ders notları hazır. 6–14.
        haftalar kazanımları ve uygulamaları belirlenmiş ders planıdır.
      </p>
      <div className="plan-layout">
        <div className="timeline" aria-label="Hafta seçimi">
          {weeks.map((week) => (
            <button
              key={week.id}
              aria-pressed={selected === week.id}
              className={selected === week.id ? "selected" : ""}
              onClick={() => setSelected(week.id)}
            >
              <span className="timeline-number">
                {String(week.id).padStart(2, "0")}
              </span>
              <span>
                <strong>{week.short}</strong>
                <small>{week.theme}</small>
              </span>
              {week.ready ? (
                <span className="ready-dot" title="Sunum hazır" />
              ) : (
                <span className="plan-status">Plan</span>
              )}
            </button>
          ))}
        </div>
        <article className="plan-detail" key={w.id}>
          <span className="eyebrow">
            {String(w.id).padStart(2, "0")}. HAFTA
          </span>
          <h2>{w.title}</h2>
          <h3 className="outcomes-heading">
            <Target size={18} />
            Bu haftanın kazanımları
          </h3>
          <Outcomes items={w.outcomes} />
          <div className="detail-block">
            <span className="eyebrow">UYGULAMADA ÖĞRENİLECEK KAVRAMLAR</span>
            <p>{w.theory}</p>
          </div>
          <div className="detail-block">
            <span className="eyebrow">SINIF UYGULAMASI</span>
            <p>{w.lab}</p>
          </div>
          <div className="detail-block">
            <span className="eyebrow">HAFTANIN ÜRÜNÜ</span>
            <p>{w.deliverable}</p>
          </div>
          <div className="detail-block">
            <span className="eyebrow">KAZANIM KONTROLÜ</span>
            <p>{w.assessment}</p>
          </div>
          <div className="alignment-tags">
            {w.alignment.map((id) => (
              <span key={id}>{alignment.find((a) => a.id === id).title}</span>
            ))}
          </div>
          {w.ready ? (
            <a className="button primary" href={slideUrl(w.id)}>
              <MonitorPlay size={17} />
              Kazanımlarla sunuma başla
              <ArrowRight size={16} />
            </a>
          ) : (
            <p className="small-note">
              Bu haftanın ayrıntılı slaytları sonraki hazırlık aşamasında
              eklenecek.
            </p>
          )}
        </article>
      </div>
      <p className="small-note">
        Hafta sıralaması pedagojik öneridir. Ara değerlendirme ve dönem sonu
        sınav tarihleri akademik takvime göre öğretim elemanı tarafından
        düzenlenir.
      </p>
    </>
  );
}

function SlideQuickNavigator({ weekId, index, deck, go }) {
  const [open, setOpen] = useState(false);
  const [pageInput, setPageInput] = useState(String(index));
  const [searchTerm, setSearchTerm] = useState("");
  const popoverRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setPageInput(String(index));
  }, [index]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.target.closest(
          'input, textarea, select, button, a, summary, [contenteditable="true"]',
        )
      )
        return;
      if (e.key.toLowerCase() === "g") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleOutside);
    }
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const handleJump = (target) => {
    const num = parseInt(target, 10);
    if (!isNaN(num) && num >= 1 && num <= deck.length) {
      go(num);
      setOpen(false);
      setSearchTerm("");
    }
  };

  const handleTrackClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const target = Math.max(
      1,
      Math.min(deck.length, Math.ceil(ratio * deck.length)),
    );
    go(target);
  };

  const filteredSlides = searchTerm.trim()
    ? deck
        .map((s, i) => ({ ...s, pageNum: i + 1 }))
        .filter(
          (s) =>
            s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(s.pageNum) === searchTerm.trim() ||
            (s.type && s.type.toLowerCase().includes(searchTerm.toLowerCase())),
        )
    : deck.map((s, i) => ({ ...s, pageNum: i + 1 }));

  const getTypeBadge = (type) => {
    switch (type) {
      case "outcomes":
        return "Kazanım";
      case "think":
        return "Düşün";
      case "cards":
        return "Kavram";
      case "table":
        return "Tablo";
      case "exercise":
        return "Soru & Çözüm";
      case "python":
        return "Python Kod";
      case "quiz":
        return "Quiz";
      case "array_simulation":
        return "Simülatör";
      default:
        return "Slayt";
    }
  };

  return (
    <div className="quick-jump-wrapper" ref={popoverRef}>
      <div className="slide-progress">
        <button
          type="button"
          className="slide-progress-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          title="Hızlı slayt seçiciyi aç (G tuşu)"
        >
          <span className="current-num">{String(index).padStart(2, "0")}</span>
          <span className="total-num">/ {deck.length}</span>
          <Search size={12} className="jump-icon" />
        </button>

        <div
          className="progress-track scrubbable"
          onClick={handleTrackClick}
          title="Doğrudan bu noktaya atlamak için tıklayın"
        >
          <div style={{ width: `${(index / deck.length) * 100}%` }} />
        </div>
      </div>

      {open && (
        <div
          className="quick-jump-popover"
          role="dialog"
          aria-label="Hızlı Slayt Seçici"
        >
          <div className="jump-popover-header">
            <h4>Hızlı Slayta Git</h4>
            <button
              type="button"
              className="jump-close-btn"
              onClick={() => setOpen(false)}
            >
              <X size={15} />
            </button>
          </div>

          <div className="jump-inputs-row">
            <div className="direct-page-box">
              <label htmlFor="jump-slide-input">Slayt No:</label>
              <input
                id="jump-slide-input"
                ref={inputRef}
                type="number"
                min="1"
                max={deck.length}
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleJump(pageInput);
                  if (e.key === "Escape") setOpen(false);
                }}
              />
              <button
                type="button"
                className="btn-jump-action"
                onClick={() => handleJump(pageInput)}
              >
                Git
              </button>
            </div>

            <div className="jump-slider-box">
              <input
                type="range"
                min="1"
                max={deck.length}
                value={index}
                onChange={(e) => go(Number(e.target.value))}
                title={`Slayt ${index} / ${deck.length}`}
              />
            </div>
          </div>

          <div className="jump-search-box">
            <Search size={14} />
            <input
              type="text"
              placeholder="Başlık veya konu ara (örn: simülatör, while, quiz)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && filteredSlides.length > 0) {
                  handleJump(filteredSlides[0].pageNum);
                }
                if (e.key === "Escape") setOpen(false);
              }}
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchTerm("")}
              >
                <X size={12} />
              </button>
            )}
          </div>

          <div className="jump-slides-list">
            {filteredSlides.map((s) => (
              <button
                type="button"
                key={s.pageNum}
                className={`jump-slide-item ${s.pageNum === index ? "active" : ""}`}
                onClick={() => handleJump(s.pageNum)}
              >
                <span className="jump-slide-num">
                  {String(s.pageNum).padStart(2, "0")}
                </span>
                <span className={`jump-type-tag ${s.type || "default"}`}>
                  {getTypeBadge(s.type)}
                </span>
                <span className="jump-slide-title">{s.title}</span>
              </button>
            ))}
            {filteredSlides.length === 0 && (
              <div className="no-search-results">Eşleşen slayt bulunamadı.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Presentation({ weekId, index, reading = false }) {
  const deck = decks[weekId];
  const current = deck[index - 1];
  const [focus, setFocus] = useState(false);
  const [contents, setContents] = useState(false);
  const [notes, setNotes] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [message, setMessage] = useState("");
  const surface = useRef(null);
  const go = (page) => {
    if (page >= 1 && page <= deck.length)
      location.hash = slideUrl(weekId, page).slice(1);
  };
  useEffect(() => {
    const key = (e) => {
      if (
        reading ||
        e.target.closest(
          'input, textarea, select, button, a, summary, [contenteditable="true"]',
        )
      )
        return;
      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      }
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(index + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      }
      if (e.key === "Home") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "End") {
        e.preventDefault();
        go(deck.length);
      }
      if (e.key === "Escape") {
        setFocus(false);
        setContents(false);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [weekId, index, deck.length, reading]);
  useEffect(() => {
    const onFull = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFull);
    return () => document.removeEventListener("fullscreenchange", onFull);
  }, []);
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await surface.current.requestFullscreen();
    } catch {
      setMessage(
        "Bu tarayıcı tam ekranı açamadı. Odak görünümünü kullanabilirsiniz.",
      );
      setFocus(true);
    }
  }
  if (reading) return <LessonNotes weekId={weekId} />;
  return (
    <div className={`presentation ${focus ? "focus-mode" : ""}`} ref={surface}>
      <div className="presentation-toolbar">
        <a className="back-link" href="#/plan">
          <ArrowLeft size={17} />
          <span>{weekId}. hafta</span>
        </a>
        <nav className="presentation-course" aria-label="İçerik yolu">
          <a href="#/">Programlamaya Giriş</a> / Hafta {weekId} /{" "}
          {current.title}
        </nav>
        <div className="toolbar-actions">
          <a className="button small" href={`#/hafta/${weekId}/notlar`}>
            <BookOpen size={15} />
            Ders notu modu
          </a>
          <button
            className="icon-button"
            aria-label="Slayt listesini aç"
            aria-expanded={contents}
            onClick={() => setContents(!contents)}
          >
            <List size={19} />
          </button>
          <button
            className="icon-button"
            aria-label={focus ? "Odak görünümünden çık" : "Odak görünümü"}
            title="Odak görünümü"
            onClick={() => setFocus(!focus)}
          >
            {focus ? <PanelLeftOpen size={19} /> : <PanelLeftClose size={19} />}
          </button>
          <button
            className="icon-button"
            aria-label={fullscreen ? "Tam ekrandan çık" : "Tam ekran"}
            title="Tam ekran"
            onClick={toggleFullscreen}
          >
            {fullscreen ? <Minimize size={19} /> : <Maximize size={19} />}
          </button>
        </div>
      </div>
      {message && <p role="status">{message}</p>}
      {contents && (
        <nav className="slide-index" aria-label="Slayt listesi">
          {deck.map((s, i) => (
            <a
              href={slideUrl(weekId, i + 1)}
              key={i}
              aria-current={i + 1 === index ? "page" : undefined}
              onClick={() => setContents(false)}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {s.title}
            </a>
          ))}
        </nav>
      )}
      <article
        className={`slide-surface slide-${current.type}`}
        key={`${weekId}-${index}`}
      >
        <div className="slide-kicker">
          <span>HAFTA {String(weekId).padStart(2, "0")}</span>
          <span>
            {current.type === "outcomes"
              ? "KAZANIMLAR"
              : current.type === "activity"
                ? "UYGULAMA"
                : current.type === "quiz"
                  ? "KENDİNİ KONTROL ET"
                  : "BİRLİKTE ÖĞRENELİM"}
          </span>
        </div>
        <h1>{current.title}</h1>
        <SlideBody slide={current} />
      </article>
      <div className="presentation-bottom">
        <button
          className="button"
          disabled={index === 1}
          onClick={() => go(index - 1)}
        >
          <ChevronLeft size={18} />
          <span>Önceki</span>
        </button>
        <SlideQuickNavigator
          weekId={weekId}
          index={index}
          deck={deck}
          go={go}
        />
        <button
          className="button primary"
          disabled={index === deck.length}
          onClick={() => go(index + 1)}
        >
          <span>Sonraki</span>
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="presentation-help">
        <span>
          ← → Slayt değiştir · G Slayta git{" "}
          <span className="help-extra">
            {" "}
            · F Tam ekran · Home / End İlk / son slayt
          </span>
        </span>
        <button onClick={() => setNotes(!notes)} aria-expanded={notes}>
          <FileText size={14} />
          {notes ? "Notları gizle" : "Öğretim elemanı notu"}
        </button>
      </div>
      {notes && (
        <div className="speaker-notes">
          <strong>Öğretim elemanı notu</strong>
          <p>{current.notes}</p>
          <span className="small-note">
            Bu notlar herkese açıktır ve öğrenciler tarafından da okunabilir.
          </span>
        </div>
      )}
    </div>
  );
}

function LessonNotes({ weekId }) {
  return (
    <div className="lesson-notes">
      <div className="notes-toolbar">
        <a className="back-link" href="#/plan">
          <ArrowLeft size={16} />
          Haftalık plan
        </a>
        <a className="button primary" href={slideUrl(weekId)}>
          <MonitorPlay size={17} />
          Sunum modu
        </a>
      </div>
      <SectionHeading
        eyebrow={`HAFTA ${weekId} · DERS NOTU MODU`}
        title={weeks[weekId - 1].title}
        description="Aynı ders içeriğini kendi hızında oku, örnekleri çalıştır ve soruları yanıtla."
      />
      {decks[weekId].map((slide, i) => (
        <article className={`reading-section slide-${slide.type}`} key={i}>
          <div className="section-row">
            <span className="eyebrow">
              {String(i + 1).padStart(2, "0")} / {decks[weekId].length}
            </span>
            <a className="text-link" href={slideUrl(weekId, i + 1)}>
              Bu slaytı aç <ArrowRight size={15} />
            </a>
          </div>
          <h2>{slide.title}</h2>
          <SlideBody slide={slide} />
          <div className="reading-explanation">
            <strong>Açıklama ve sınıf uygulaması</strong>
            <p>{slide.notes}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
function NotFound() {
  return (
    <div className="not-found">
      <h1>Bu sayfa bulunamadı</h1>
      <p>Hafta veya uygulama bağlantısı geçerli değil.</p>
      <a className="button primary" href="#/plan">
        Ders planına dön
      </a>
    </div>
  );
}

export default function App() {
  const route = useRoute();
  const [mobile, setMobile] = useState(false);
  const main = useRef(null);
  const weekMatch = route.match(/^\/hafta\/(\d+)$/);
  const slideMatch = route.match(/^\/hafta\/(\d+)\/sunum\/(\d+)$/);
  const notesMatch = route.match(/^\/hafta\/(\d+)\/notlar$/);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobile(false);
    main.current?.focus({ preventScroll: true });
  }, [route]);
  let page;
  if (route === "/") page = <Home />;
  else if (route === "/plan") page = <Plan />;
  else if (notesMatch && decks[Number(notesMatch[1])])
    page = <LessonNotes weekId={Number(notesMatch[1])} />;
  else if (
    slideMatch &&
    decks[Number(slideMatch[1])]?.[Number(slideMatch[2]) - 1]
  )
    page = (
      <Presentation
        weekId={Number(slideMatch[1])}
        index={Number(slideMatch[2])}
      />
    );
  else page = <NotFound />;
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
        }}
      >
        İçeriğe geç
      </a>
      <Sidebar route={route} mobile={mobile} close={() => setMobile(false)} />
      <div className="app-shell">
        <header className="topbar">
          <button
            className="icon-button menu-toggle"
            aria-label="Menüyü aç"
            onClick={() => setMobile(true)}
          >
            <Menu size={22} />
          </button>
          <div className="institution">
            <GraduationCap size={23} />
            <div>
              <strong>ÇANAKKALE ONSEKİZ MART ÜNİVERSİTESİ</strong>
              <span>Çanakkale Uygulamalı Bilimler Fakültesi</span>
            </div>
          </div>
          <a
            className="top-github"
            href={REPO}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            GitHub
            <ExternalLink size={14} />
          </a>
        </header>
        <main
          id="main-content"
          ref={main}
          tabIndex={-1}
          className={slideMatch ? "main-content slides-page" : "main-content"}
        >
          {page}
        </main>
        <footer className="site-footer">
          <span>ÇOMÜ · Bilgi Güvenliği Teknolojisi</span>
          <span>BGT-1009 · Öğren, uygula, açıkla.</span>
        </footer>
      </div>
    </>
  );
}
