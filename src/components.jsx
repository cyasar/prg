import { useEffect, useId, useRef, useState } from "react";
import { MotivationVisual } from "./motivation-visuals.jsx";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Copy,
  Download,
  Play,
  RotateCcw,
  Square,
  ChevronRight,
} from "lucide-react";
import {
  AIBox,
  BooleanLab,
  Flowchart,
  LiveDemo,
  MemoryBoxes,
  SumTrace,
  ThinkBox,
} from "./learning-widgets.jsx";

function Highlight({ text }) {
  const tokens = text.split(
    /("[^"\n]*"|'[^'\n]*'|#[^\n]*|\/\/[^\n]*|\b(?:if|elif|else|and|or|not|True|False|const|let|return|function|true|false|int|float|str|bool|print|input|len|type)\b|\b\d+(?:\.\d+)?\b)/g,
  );
  return tokens.map((token, i) => {
    const cls = /^['"]/.test(token)
      ? "syntax-string"
      : /^(#|\/\/)/.test(token)
        ? "syntax-comment"
        : /^\d/.test(token)
          ? "syntax-number"
          : /^(if|elif|else|and|or|not|True|False|const|let|return|function|true|false|int|float|str|bool|print|input|len|type)$/.test(
                token,
              )
            ? "syntax-keyword"
            : "";
    return (
      <span key={i} className={cls}>
        {token}
      </span>
    );
  });
}

export function CopyButton({ text, label = "Kopyala" }) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Kopyalandı");
    } catch {
      setStatus("Kopyalanamadı; metni seçip kopyalayın.");
    }
  }
  return (
    <button className="button small" onClick={copy}>
      <Copy size={15} />
      {status || label}
    </button>
  );
}

export function CodeBlock({ code, language = "Python" }) {
  return (
    <div className="code-block">
      <div className="code-bar">
        <span>{language}</span>
        <CopyButton text={code} />
      </div>
      <pre>
        <code>
          {code.split("\n").map((line, i) => (
            <span className="code-line" key={i}>
              <span className="line-number" aria-hidden="true">
                {i + 1}
              </span>
              <span>
                <Highlight text={line || " "} />
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function Outcomes({ items }) {
  return (
    <ol className="outcomes">
      {items.map((item, i) => (
        <li key={item}>
          <span className="outcome-number">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function DataTable({ headers, rows }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Flow({ items }) {
  return (
    <div className="flow">
      {items.map(([title, value], i) => (
        <div className="flow-part" key={title}>
          <div className="flow-box">
            <span className="eyebrow">{title}</span>
            <strong>{value}</strong>
          </div>
          {i < items.length - 1 && (
            <ArrowRight className="flow-arrow" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}

export function Decision() {
  return (
    <div
      className="decision"
      role="img"
      aria-label="Başla, boyutu oku, boyut 1024 veya altında mı? Evet ise KABUL, hayır ise RED yaz ve bitir."
    >
      <div className="terminator">Başla</div>
      <ArrowDown />
      <div className="io-node">Boyutu oku</div>
      <ArrowDown />
      <div className="diamond">
        <span>boyut ≤ 1024?</span>
      </div>
      <div className="branches">
        <div>
          <span>Evet</span>
          <ArrowDown />
          <div className="io-node">KABUL yaz</div>
        </div>
        <div>
          <span>Hayır</span>
          <ArrowDown />
          <div className="io-node">RED yaz</div>
        </div>
      </div>
      <ArrowDown />
      <div className="terminator">Bitir</div>
    </div>
  );
}

export function Trace() {
  const [input, setInput] = useState("1024");
  const [step, setStep] = useState(0);
  const valid =
    input.trim() !== "" &&
    Number.isSafeInteger(Number(input)) &&
    Number(input) >= 0;
  const result = Number(input) <= 1024 ? "KABUL" : "RED";
  const lines = [
    "BAŞLA",
    "boyut değerini OKU",
    "boyut <= 1024 koşulunu değerlendir",
    "karara göre sonucu YAZ",
    "BİTİR",
  ];
  return (
    <div className="trace">
      <div className="trace-controls">
        <label>
          Dosya boyutu (KiB)
          <input
            type="number"
            min="0"
            step="1"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setStep(0);
            }}
          />
        </label>
        <button
          className="button primary"
          disabled={!valid || step === 4}
          onClick={() => setStep((s) => s + 1)}
        >
          Sonraki adım <ChevronRight size={17} />
        </button>
        <button
          className="icon-button"
          title="İzlemeyi sıfırla"
          aria-label="İzlemeyi sıfırla"
          onClick={() => setStep(0)}
        >
          <RotateCcw size={18} />
        </button>
      </div>
      {!valid && (
        <p role="alert" className="error">
          Sıfır veya pozitif, güvenli aralıkta bir tam sayı girin.
        </p>
      )}
      <div className="trace-grid">
        <ol className="trace-lines">
          {lines.map((line, i) => (
            <li
              key={line}
              className={i === step ? "active" : i < step ? "done" : ""}
            >
              <span>{i + 1}</span>
              {line}
            </li>
          ))}
        </ol>
        <div className="trace-state" aria-live="polite">
          <span className="eyebrow">Değişken ve çıktı</span>
          <dl>
            <dt>boyut</dt>
            <dd>{step >= 1 ? `${Number(input)} KiB` : "Henüz okunmadı"}</dd>
            <dt>boyut ≤ 1024</dt>
            <dd>
              {step >= 2
                ? result === "KABUL"
                  ? "Doğru"
                  : "Yanlış"
                : "Henüz karşılaştırılmadı"}
            </dd>
            <dt>Çıktı</dt>
            <dd className="trace-result">{step >= 3 ? result : "—"}</dd>
          </dl>
          {step === 4 && (
            <span className="badge">
              <Check size={14} /> Algoritma tamamlandı
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Quiz({ question, options, answer, explanation }) {
  const name = useId();
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  return (
    <div className="quiz">
      <h3>{question}</h3>
      <fieldset>
        <legend className="sr-only">Bir yanıt seçin</legend>
        {options.map((option, i) => (
          <label
            key={option}
            className={`quiz-option ${selected === i ? "selected" : ""}`}
          >
            <input
              type="radio"
              name={name}
              checked={selected === i}
              onChange={() => {
                setSelected(i);
                setChecked(false);
              }}
            />
            <span>{String.fromCharCode(65 + i)}</span>
            {option}
          </label>
        ))}
      </fieldset>
      <button
        className="button primary"
        disabled={selected === null}
        onClick={() => setChecked(true)}
      >
        Yanıtımı kontrol et
      </button>
      {checked && (
        <div
          className={`feedback ${selected === answer ? "correct" : ""}`}
          role="status"
        >
          <strong>{selected === answer ? "Doğru." : "Tekrar düşün."}</strong>{" "}
          {explanation}
        </div>
      )}
    </div>
  );
}

export function SlideBody({ slide }) {
  return (
    <>
      {slide.lead && <p className="slide-lead">{slide.lead}</p>}
      {slide.type === "outcomes" && (
        <>
          <h2 className="outcomes-heading">Bu haftanın kazanımları</h2>
          <Outcomes items={slide.items} />
        </>
      )}
      {slide.type === "cards" && (
        <div className={`concepts ${slide.items.length === 4 ? "four" : ""}`}>
          {slide.items.map(([title, text], i) => (
            <div className="concept" key={title}>
              <span className="concept-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      )}
      {slide.type === "steps" && (
        <ol className="steps">
          {slide.items.map(([label, text]) => (
            <li key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      )}
      {slide.type === "activity" && (
        <ol className="activity-steps">
          {slide.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
      {slide.type === "code" && !slide.lab && (
        <CodeBlock code={slide.code} language={slide.language} />
      )}
      {slide.type === "table" && (
        <DataTable headers={slide.headers} rows={slide.rows} />
      )}
      {slide.type === "flow" && <Flow items={slide.items} />}
      {slide.type === "decision" && <Decision />}
      {slide.type === "trace" && <Trace />}
      {slide.type === "quiz" && <Quiz {...slide} />}
      {slide.lab && <PythonLab lab={slide.lab} compact />}
      {(slide.type === "think" || slide.type === "exercise") && (
        <ThinkBox {...slide} kind={slide.type} />
      )}
      {slide.type === "ai" && (
        <AIBox prompt={slide.aiPrompt} task={slide.task} />
      )}
      {slide.type === "memory" && <MemoryBoxes items={slide.items} />}
      {slide.type === "flowchart" && <Flowchart variant={slide.variant} />}
      {slide.type === "sumtrace" && <SumTrace />}
      {slide.type === "boolean" && <BooleanLab />}
      {slide.type === "motivation" && (
        <MotivationVisual variant={slide.variant} />
      )}
      {slide.type === "web" && (
        <LiveDemo demo={slide.demo} CodeComponent={CodeBlock} />
      )}
      {slide.type === "python" && <PythonExample example={slide.example} />}
      {slide.type === "process" && (
        <ol className="process-list">
          {slide.items.map((item, i) => (
            <li key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      )}
      {slide.type === "links" && (
        <div className="resource-list">
          {slide.items.map(([title, url]) => (
            <a key={url} href={url} target="_blank" rel="noreferrer">
              {title}
              <ArrowRight size={18} />
            </a>
          ))}
        </div>
      )}
      {slide.prompt && (
        <div className="practice-prompt">
          <span>ŞİMDİ SEN</span>
          <p>{slide.prompt.replace(/^Uygulama: /, "")}</p>
        </div>
      )}
    </>
  );
}

export function PythonExample({ example }) {
  return (
    <div className="python-example">
      <CodeBlock code={example.code} />
      <details className="line-explanation">
        <summary>Satırları birlikte açıklayalım</summary>
        <ol>
          {example.explanations.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
      </details>
      <details className="try-code">
        <summary>Python kodunu dene ve değiştir</summary>
        <PythonLab lab={example} compact />
      </details>
      <a
        className="source-code-link"
        target="_blank"
        rel="noreferrer"
        href={`https://github.com/cyasar/prg/blob/main/${example.path}`}
      >
        GitHub kaynak kodu · {example.filename}
      </a>
    </div>
  );
}

export function PythonLab({ lab, compact = false }) {
  const [code, setCode] = useState(lab.code);
  const [input, setInput] = useState(lab.input);
  const [output, setOutput] = useState(
    "Çalıştırmadan önce beklediğin çıktıyı yaz.",
  );
  const [prediction, setPrediction] = useState("");
  const [phase, setPhase] = useState("idle");
  const worker = useRef(null);
  const timer = useRef(null);
  useEffect(
    () => () => {
      worker.current?.terminate();
      clearTimeout(timer.current);
    },
    [],
  );
  const busy = phase === "loading" || phase === "running";
  function stop(
    message = "Çalıştırma durduruldu. Kodunu düzenleyip yeniden deneyebilirsin.",
  ) {
    worker.current?.terminate();
    worker.current = null;
    clearTimeout(timer.current);
    setPhase("idle");
    setOutput(message);
  }
  function run() {
    clearTimeout(timer.current);
    setOutput(
      "Python hazırlanıyor… İlk yükleme internet bağlantısı gerektirir.",
    );
    setPhase("loading");
    if (!worker.current) {
      worker.current = new Worker(
        `${import.meta.env.BASE_URL}python-worker.js`,
        { type: "module" },
      );
      worker.current.onmessage = ({ data }) => {
        if (data.type === "ready") {
          clearTimeout(timer.current);
          setPhase("running");
          setOutput("Çalışıyor…");
          timer.current = setTimeout(
            () =>
              stop(
                "Çalıştırma 10 saniyeyi aştı. Döngünün bitiş koşulunu kontrol et.",
              ),
            10000,
          );
        } else if (data.type === "result") {
          clearTimeout(timer.current);
          setPhase("idle");
          setOutput(data.output || "(Program ekrana çıktı yazmadı.)");
        } else if (data.type === "error") {
          clearTimeout(timer.current);
          setPhase("idle");
          setOutput(`${data.output || ""}\n${data.message}`.trim());
        }
      };
      worker.current.onerror = () =>
        stop(
          "Python yüklenemedi. İnternet bağlantısını kontrol et veya kodu kopyalayıp bilgisayarında çalıştır.",
        );
    }
    timer.current = setTimeout(
      () =>
        stop(
          "Python yüklemesi zaman aşımına uğradı. Tekrar dene veya .py dosyasını bilgisayarında çalıştır.",
        ),
      60000,
    );
    worker.current.postMessage({ code, input });
  }

  return (
    <div className="python-lab">
      {!compact && (
        <div className="lab-instructions">
          <span className="eyebrow">{lab.time} uygulama</span>
          <h2>{lab.title}</h2>
          <p>{lab.goal}</p>
        </div>
      )}
      <label className="field-label">
        Çıktı tahminim
        <input
          value={prediction}
          onChange={(e) => setPrediction(e.target.value)}
          placeholder="Örneğin: 300 saniye yazacak."
        />
      </label>
      <div className="editor-grid">
        <div>
          <div className="code-bar">
            <span>{lab.filename}</span>
            <CopyButton text={code} />
          </div>
          <textarea
            className="editor"
            aria-label="Python kodu"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            autoCapitalize="off"
          />
        </div>
        <div className="console-side">
          <label className="field-label">
            Program girdileri <span>Her input() yanıtı ayrı satırda.</span>
            <textarea
              aria-label="Program girdileri"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bu program girdi istemiyorsa boş bırak."
              rows={3}
            />
          </label>
          <div className="output-heading">
            Çıktı{" "}
            <span aria-live="polite">
              {phase === "loading"
                ? "Python yükleniyor"
                : phase === "running"
                  ? "Çalışıyor"
                  : "Hazır"}
            </span>
          </div>
          <pre className="output" aria-live="polite">
            {output}
          </pre>
        </div>
      </div>
      <div className="lab-toolbar">
        <button className="button primary" disabled={busy} onClick={run}>
          <Play size={16} />
          {busy ? "Çalışıyor…" : "Python çalıştır"}
        </button>
        {busy && (
          <button className="button" onClick={() => stop()}>
            <Square size={15} />
            Durdur
          </button>
        )}
        <button
          className="button"
          disabled={busy}
          onClick={() => {
            setCode(lab.code);
            setInput(lab.input);
            setOutput("Örnek başlangıç haline döndü.");
          }}
        >
          <RotateCcw size={15} />
          Örneği sıfırla
        </button>
      </div>
      <p className="small-note">
        Gerçek Python tarayıcında çalışır. İlk kullanımda Pyodide internetten
        yüklenir. Girdiler bu uygulama tarafından bir sunucuya gönderilmez.
        Kodunu saklamak için kopyalayabilirsin.
      </p>
      <div className="practice-prompt">
        <span>SIRA SENDE</span>
        <p>{lab.task}</p>
      </div>
      <details className="solution">
        <summary>Test durumlarını göster</summary>
        <DataTable headers={["Girdi / durum", "Beklenen"]} rows={lab.tests} />
      </details>
    </div>
  );
}
