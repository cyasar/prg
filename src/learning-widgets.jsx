import { useId, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export function ThinkBox({ question, solution, kind = "think" }) {
  const [shown, setShown] = useState(false);
  return (
    <section className={`think-box ${kind}`}>
      <span className="eyebrow">
        {kind === "exercise" ? "ÖĞRENCİ ALIŞTIRMASI" : "🧠 ÖNCE SEN DÜŞÜN"}
      </span>
      <p>{question}</p>
      <button
        className="button"
        aria-expanded={shown}
        onClick={() => setShown(!shown)}
      >
        {shown ? "Çözümü Gizle" : "Çözümü Göster"}
      </button>
      {shown && (
        <div className="revealed-answer" role="status">
          <strong>Bir örnek çözüm</strong>
          <pre>{solution}</pre>
        </div>
      )}
    </section>
  );
}

export function AIBox({ prompt, task }) {
  return (
    <section className="ai-box">
      <div className="ai-box-heading">
        <Sparkles size={23} />
        <h3>🤖 YZ ile Çalış</h3>
      </div>
      <blockquote>{prompt}</blockquote>
      <div className="practice-prompt">
        <span>ÖNCE KENDİ TASLAĞIN</span>
        <p>{task}</p>
      </div>
      <p className="small-note">
        Kullandığın yardımı belirt. Kodu açıklayarak ve test ederek doğrula.
        Gerçek kişisel veri veya parola paylaşma.
      </p>
    </section>
  );
}

export function Flowchart({ variant = "sum" }) {
  const marker = useId().replaceAll(":", "");
  const grade = variant === "grade";
  const text = (x, y, value) => (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle">
      {value}
    </text>
  );
  const arrow = (x1, y1, x2, y2) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} markerEnd={`url(#${marker})`} />
  );
  return (
    <svg
      className="flowchart-svg"
      viewBox={grade ? "0 0 660 540" : "0 0 660 490"}
      role="img"
      aria-label={
        grade
          ? "Başla, notu al, not 50 veya üzerinde mi, evetse Geçti, hayırsa Kaldı yaz, bitir."
          : "Başla, iki sayı al, sayıları topla, toplamı yaz, bitir."
      }
    >
      <defs>
        <marker
          id={marker}
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 z" />
        </marker>
      </defs>
      <rect
        className="terminal-node"
        x="255"
        y="8"
        width="150"
        height="45"
        rx="22"
      />
      {text(330, 31, "Başla")}
      {arrow(330, 53, 330, 86)}
      <polygon points="230,90 450,90 430,145 210,145" />
      {text(330, 118, grade ? "Notu al" : "sayi1 ve sayi2 al")}
      {arrow(330, 145, 330, 182)}
      {grade ? (
        <>
          <polygon
            className="decision-node"
            points="330,186 445,252 330,318 215,252"
          />
          {text(330, 252, "notu ≥ 50 ?")}
          <path
            className="branch-line"
            d="M215 252 H145 V353"
            markerEnd={`url(#${marker})`}
          />
          <path
            className="branch-line"
            d="M445 252 H515 V353"
            markerEnd={`url(#${marker})`}
          />
          {text(155, 228, "Evet")}
          {text(510, 228, "Hayır")}
          <polygon points="75,359 235,359 215,409 55,409" />
          {text(145, 384, "Geçti yaz")}
          <polygon points="445,359 605,359 585,409 425,409" />
          {text(515, 384, "Kaldı yaz")}
          <path
            className="branch-line"
            d="M145 409 V444 H515 V409 M330 444 V475"
            markerEnd={`url(#${marker})`}
          />
          <rect
            className="terminal-node"
            x="255"
            y="482"
            width="150"
            height="45"
            rx="22"
          />
          {text(330, 505, "Bitir")}
        </>
      ) : (
        <>
          <rect x="215" y="187" width="230" height="55" rx="2" />
          {text(330, 215, "toplam = sayi1 + sayi2")}
          {arrow(330, 242, 330, 284)}
          <polygon points="230,290 450,290 430,345 210,345" />
          {text(330, 318, "toplamı yaz")}
          {arrow(330, 345, 330, 390)}
          <rect
            className="terminal-node"
            x="255"
            y="396"
            width="150"
            height="45"
            rx="22"
          />
          {text(330, 419, "Bitir")}
        </>
      )}
    </svg>
  );
}

export function MemoryBoxes({ items }) {
  return (
    <div className="memory-boxes">
      {items.map(([name, value, type]) => (
        <div className="memory-item" key={name}>
          <span className="memory-name">{name}</span>
          <ArrowDown size={20} />
          <div>
            <strong>{value}</strong>
            <span>{type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SumTrace() {
  const [a, setA] = useState("4");
  const [b, setB] = useState("7");
  const [step, setStep] = useState(0);
  const valid = [a, b].every(
    (x) => /^-?\d+$/.test(x) && Math.abs(Number(x)) <= 1000000,
  );
  const lines = [
    "BAŞLA",
    "sayi1 oku",
    "sayi2 oku",
    "toplam = sayi1 + sayi2",
    "toplamı yaz",
    "BİTİR",
  ];
  return (
    <div className="trace">
      <div className="trace-controls">
        <label>
          Birinci tam sayı
          <input
            type="number"
            value={a}
            onChange={(e) => {
              setA(e.target.value);
              setStep(0);
            }}
          />
        </label>
        <label>
          İkinci tam sayı
          <input
            type="number"
            value={b}
            onChange={(e) => {
              setB(e.target.value);
              setStep(0);
            }}
          />
        </label>
        <button
          className="button primary"
          disabled={!valid || step === 5}
          onClick={() => setStep(step + 1)}
        >
          Sonraki adım <ArrowRight size={16} />
        </button>
        <button
          className="icon-button"
          aria-label="İzlemeyi sıfırla"
          onClick={() => setStep(0)}
        >
          <RotateCcw size={17} />
        </button>
      </div>
      {!valid && (
        <p className="error" role="alert">
          Bu görselleştirmede -1.000.000 ile 1.000.000 arasında tam sayı
          kullanın.
        </p>
      )}
      <div className="trace-grid">
        <ol className="trace-lines">
          {lines.map((line, i) => (
            <li
              key={line}
              className={step === i ? "active" : i < step ? "done" : ""}
            >
              <span>{i + 1}</span>
              {line}
            </li>
          ))}
        </ol>
        <div className="trace-state" aria-live="polite">
          <span className="eyebrow">BELLEK VE ÇIKTI</span>
          <dl>
            <dt>sayi1</dt>
            <dd>{step >= 1 ? a : "Henüz okunmadı"}</dd>
            <dt>sayi2</dt>
            <dd>{step >= 2 ? b : "Henüz okunmadı"}</dd>
            <dt>toplam</dt>
            <dd>{step >= 3 ? Number(a) + Number(b) : "Henüz hesaplanmadı"}</dd>
            <dt>Çıktı</dt>
            <dd className="trace-result">
              {step >= 4 ? Number(a) + Number(b) : "—"}
            </dd>
          </dl>
          {step === 5 && (
            <span className="badge">
              <Check size={14} />
              Tamamlandı
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function BooleanLab() {
  const [allowed, setAllowed] = useState(true);
  const [maintenance, setMaintenance] = useState(false);
  return (
    <div className="boolean-lab">
      <div className="boolean-controls">
        <label>
          <input
            type="checkbox"
            checked={allowed}
            onChange={(e) => setAllowed(e.target.checked)}
          />
          yetkili = {String(allowed ? "True" : "False")}
        </label>
        <label>
          <input
            type="checkbox"
            checked={maintenance}
            onChange={(e) => setMaintenance(e.target.checked)}
          />
          bakim_var = {String(maintenance ? "True" : "False")}
        </label>
      </div>
      <div className="boolean-result" aria-live="polite">
        <code>yetkili and not bakim_var</code>
        <strong>
          {allowed && !maintenance
            ? "True · İşleme devam"
            : "False · İşlem bekliyor"}
        </strong>
      </div>
      <p className="small-note">
        Dört birleşimi dene. Bu, koşulları öğretmek için hazırlanmış bir
        modeldir.
      </p>
    </div>
  );
}

export function LiveDemo({ demo, CodeComponent }) {
  const [active, setActive] = useState("html");
  const [parts, setParts] = useState({
    html: demo.html,
    css: demo.css,
    js: demo.js,
  });
  const [applied, setApplied] = useState(parts);
  const document = `<!doctype html><html lang="tr"><head><meta charset="UTF-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline';"><style>${applied.css.replaceAll("</style", "<\\/style")}</style></head><body>${applied.html}<script>${applied.js.replaceAll("</script", "<\\/script")}</script></body></html>`;
  return (
    <section className="live-demo">
      <div className="live-demo-grid">
        <div className="demo-code">
          <div className="segmented" aria-label="Web dili seçimi">
            {["html", "css", "js"].map((lang) => (
              <button
                key={lang}
                aria-pressed={active === lang}
                className={active === lang ? "selected" : ""}
                onClick={() => setActive(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <label className="sr-only" htmlFor={`demo-${demo.path}`}>
            {active.toUpperCase()} kodu
          </label>
          <textarea
            id={`demo-${demo.path}`}
            className="web-editor"
            spellCheck="false"
            aria-label={`${active.toUpperCase()} kodu`}
            value={parts[active]}
            onChange={(e) => setParts({ ...parts, [active]: e.target.value })}
          />
          <div className="button-row">
            <button
              className="button primary"
              onClick={() => setApplied({ ...parts })}
            >
              Demoyu çalıştır
            </button>
            <button
              className="button"
              onClick={() => {
                const initial = { html: demo.html, css: demo.css, js: demo.js };
                setParts(initial);
                setApplied(initial);
              }}
            >
              Sıfırla
            </button>
          </div>
        </div>
        <div className="demo-output">
          <span className="eyebrow">CANLI ÇIKTI</span>
          <iframe
            title={demo.title}
            sandbox="allow-scripts"
            srcDoc={document}
          />
        </div>
      </div>
      <p className="small-note">
        HTML yapısını, CSS görünümünü veya JavaScript davranışını değiştir.
        Demo, ana sayfaya ve ağ kaynaklarına erişemeyen ayrı bir çerçevede
        çalışır.
      </p>
      <details>
        <summary>Seçili kodu renkli göster</summary>
        <CodeComponent
          language={active === "js" ? "JavaScript" : active.toUpperCase()}
          code={parts[active]}
        />
      </details>
    </section>
  );
}
