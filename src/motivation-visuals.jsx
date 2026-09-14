import { useEffect, useState } from "react";
import {
  ArrowRight,
  FileText,
  Search,
  ShieldCheck,
  Code,
  Check,
} from "lucide-react";
import {
  backupDevices,
  backupStatus,
  changedText,
  loginEvents,
  originalText,
  sha256,
  summarizeLogins,
} from "./motivation.js";
import "./motivation.css";

function Evidence({ children }) {
  return (
    <div className="motivation-evidence" role="status">
      {children}
    </div>
  );
}

function Purpose() {
  return (
    <>
      <div className="motivation-triad">
        {[
          [
            Search,
            "ANLA",
            "Veri nereye gidiyor?",
            "Bir formdan gelen bilginin nasıl işlendiğini takip et.",
          ],
          [
            Code,
            "GELİŞTİR",
            "Kural nasıl uygulanıyor?",
            "Bir dosyayı yalnızca yetkili kişinin görmesini sağlayan kararı kur.",
          ],
          [
            ShieldCheck,
            "DOĞRULA",
            "Beklenmeyen durumda ne olur?",
            "Boş girdi ve yetkisiz kullanıcı için beklenen sonucu test et.",
          ],
        ].map(([Icon, label, title, body]) => (
          <section className="motivation-card" key={label}>
            <Icon size={34} aria-hidden="true" />
            <span className="eyebrow">{label}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
      <div className="motivation-takeaway">
        Bir güvenlik kuralını{" "}
        <strong>okuyabilmek, yazabilmek ve sınayabilmek.</strong>
      </div>
      <a
        className="motivation-source"
        href="https://bilgiguven.cubf.comu.edu.tr/tr/sayfa/hedefler-5"
        target="_blank"
        rel="noreferrer"
      >
        Bölüm hedefleri: analitik düşünme ve uygulama
      </a>
    </>
  );
}

function LogInvestigation() {
  const [threshold, setThreshold] = useState(3);
  const [revealed, setRevealed] = useState(false);
  const summary = summarizeLogins(loginEvents, threshold);
  const candidates = summary.filter((item) => item.review);
  return (
    <>
      <div className="motivation-controls">
        <label>
          İnceleme eşiği{" "}
          <select
            value={threshold}
            onChange={(e) => {
              setThreshold(Number(e.target.value));
              setRevealed(false);
            }}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} başarısız deneme
              </option>
            ))}
          </select>
        </label>
        <button
          className="button primary"
          onClick={() => setRevealed(!revealed)}
          aria-expanded={revealed}
        >
          {revealed ? "Sonucu Gizle" : "Say ve Karşılaştır"}
        </button>
      </div>
      <div className="motivation-split">
        <div className="motivation-table-wrap">
          <table className="motivation-table">
            <caption>6 kurgusal kayıt · 09:00–09:07</caption>
            <thead>
              <tr>
                <th>Saat</th>
                <th>Hesap</th>
                <th>Sonuç</th>
              </tr>
            </thead>
            <tbody>
              {loginEvents.map((event) => (
                <tr key={event.time}>
                  <td>{event.time}</td>
                  <td>{event.account}</td>
                  <td>{event.success ? "Başarılı" : "Başarısız"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="motivation-chart" aria-live="polite">
          <span className="eyebrow">BAŞARISIZ DENEMELER</span>
          {revealed ? (
            <>
              {summary.map((item) => (
                <div className="motivation-bar-row" key={item.account}>
                  <span>{item.account}</span>
                  <div className="motivation-bar-track" aria-hidden="true">
                    <div style={{ width: `${(item.failures / 3) * 100}%` }} />
                  </div>
                  <strong>{item.failures}</strong>
                  <small>{item.review ? "İncele" : "Eşik altında"}</small>
                </div>
              ))}
              <p>
                <strong>{candidates.length} inceleme adayı.</strong>{" "}
                {candidates.map((item) => item.account).join(", ") ||
                  "Bu eşikte aday yok."}
              </p>
            </>
          ) : (
            <p>
              Önce her hesabın başarısız denemelerini say ve sonucunu tahmin et.
            </p>
          )}
        </div>
      </div>
      <p className="motivation-caption">
        Program sayar ve karşılaştırır. İnsan eşiği belirler ve bağlamı
        değerlendirir. Bu sonuç, saldırı kanıtı değildir.
      </p>
    </>
  );
}

function IntegrityDemo() {
  const [changed, setChanged] = useState(false);
  const [hashes, setHashes] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    Promise.all([sha256(originalText), sha256(changedText)])
      .then((values) => {
        if (active) setHashes(values);
      })
      .catch(() => {
        if (active) setError(true);
      });
    return () => {
      active = false;
    };
  }, []);
  const currentHash = hashes?.[changed ? 1 : 0];
  return (
    <>
      <div className="motivation-split">
        {[
          ["GÜVENİLİR İLK KOPYA", originalText, hashes?.[0]],
          ["ŞİMDİKİ İÇERİK", changed ? changedText : originalText, currentHash],
        ].map(([label, content, hash]) => (
          <section className="motivation-file" key={label}>
            <div>
              <FileText size={30} aria-hidden="true" />
              <span className="eyebrow">{label}</span>
            </div>
            <code className="motivation-file-text">{content}</code>
            <span className="motivation-hash-label">↓ SHA-256 özeti</span>
            <code className="motivation-hash">
              {hash ||
                (error
                  ? "Özet hesaplanamadı. HTTPS veya localhost kullanın."
                  : "Hesaplanıyor…")}
            </code>
          </section>
        ))}
      </div>
      <div className="motivation-controls">
        <button
          className="button primary"
          aria-pressed={changed}
          onClick={() => setChanged(!changed)}
        >
          {changed ? "İlk İçeriğe Geri Dön" : "Ayarı Değiştir"}
        </button>
        <span>Yalnızca bu sayfadaki örnek metin değişir.</span>
      </div>
      <Evidence>
        {hashes ? (
          <>
            <strong>
              {currentHash === hashes[0]
                ? "Özetler aynı."
                : "Özetler farklı: içerik değişti."}
            </strong>{" "}
            {changed
              ? "Değişikliğin nedenini ayrıca incelemeliyiz."
              : "Örnekte iki içerik de aynı."}
          </>
        ) : error ? (
          "Tarayıcı özet hesaplama özelliğine erişemedi."
        ) : (
          "Özetler hesaplanıyor…"
        )}
      </Evidence>
      <a
        className="motivation-source"
        href="https://docs.python.org/3/library/hashlib.html"
        target="_blank"
        rel="noreferrer"
      >
        Python ile karşılığı: hashlib · özet hesaplama
      </a>
    </>
  );
}

function BackupAutomation() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="motivation-rule">
        <span className="eyebrow">ÖRNEK SINIF KURALI</span>
        <p>
          <strong>0–1 gün:</strong> Güncel · <strong>1 günden eski:</strong>{" "}
          Kontrol et · <strong>Tarih yok:</strong> Veri eksik
        </p>
      </div>
      <div className="motivation-devices">
        {backupDevices.map((device) => (
          <div
            key={device.name}
            className={`motivation-device ${checked && device.days !== null && device.days <= 1 ? "is-current" : ""}`}
          >
            <div className="motivation-monitor" aria-hidden="true">
              {checked ? (
                backupStatus(device.days) === "Güncel" ? (
                  <Check size={24} />
                ) : (
                  "?"
                )
              ) : (
                "—"
              )}
            </div>
            <strong>{device.name}</strong>
            <span>
              {device.days === null
                ? "Tarih bulunamadı"
                : `${device.days} gün önce`}
            </span>
            {checked && <b>{backupStatus(device.days)}</b>}
          </div>
        ))}
      </div>
      <div className="motivation-controls">
        <button
          className="button primary"
          onClick={() => setChecked(!checked)}
          aria-expanded={checked}
        >
          {checked ? "Raporu Gizle" : "Kontrol Raporunu Oluştur"}
        </button>
        <span>Oku → eksik veriyi ayır → karşılaştır → raporla</span>
      </div>
      <Evidence>
        {checked
          ? "3 güncel kayıt · 2 kontrol gerekli · 1 eksik kayıt. Veri yoksa, güvenli olduğunu varsayma."
          : "Aynı algoritma her kayda uygulanır. Önce bu altı kayıtta doğru çalıştığını sınarız."}
      </Evidence>
    </>
  );
}

const pythonTasks = [
  {
    title: "Kayıtları özetle",
    input: "olaylar.csv",
    tool: "csv",
    work: "Satırları oku → kuralını uygula",
    output: "Hesaplara göre sayım",
    url: "https://docs.python.org/3/library/csv.html",
  },
  {
    title: "Değişikliği fark et",
    input: "Dosya içeriği",
    tool: "hashlib",
    work: "Özet hesapla → ilk özetle karşılaştır",
    output: "Aynı / farklı raporu",
    url: "https://docs.python.org/3/library/hashlib.html",
  },
  {
    title: "Araç verisini anlamlandır",
    input: "Örnek JSON yanıtı",
    tool: "json",
    work: "Veriyi çözümle → gerekli alanı seç",
    output: "Okunabilir durum özeti",
    url: "https://docs.python.org/3/library/json.html",
  },
];

function PythonBridge() {
  const [index, setIndex] = useState(0);
  const task = pythonTasks[index];
  return (
    <>
      <div
        className="motivation-choices"
        role="group"
        aria-label="Python ile çözülecek görev"
      >
        {pythonTasks.map((item, i) => (
          <button
            className="button"
            key={item.tool}
            aria-pressed={index === i}
            onClick={() => setIndex(i)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="motivation-pipeline" aria-live="polite">
        <section>
          <FileText aria-hidden="true" size={30} />
          <span className="eyebrow">GİRDİ</span>
          <h2>{task.input}</h2>
        </section>
        <ArrowRight className="motivation-arrow" aria-hidden="true" />
        <section className="motivation-python">
          <Code aria-hidden="true" size={30} />
          <span className="eyebrow">PYTHON + {task.tool}</span>
          <h2>{task.work}</h2>
        </section>
        <ArrowRight className="motivation-arrow" aria-hidden="true" />
        <section>
          <ShieldCheck aria-hidden="true" size={30} />
          <span className="eyebrow">ÇIKTI</span>
          <h2>{task.output}</h2>
        </section>
      </div>
      <div className="motivation-takeaway">
        Hazır araç işlemi kolaylaştırır.{" "}
        <strong>Problemi ve doğruluk ölçütünü sen tanımlarsın.</strong>
      </div>
      <a
        className="motivation-source"
        href={task.url}
        target="_blank"
        rel="noreferrer"
      >
        Python standart kütüphanesi: {task.tool} · Bu adları bugün ezberlemen
        gerekmiyor.
      </a>
    </>
  );
}

function Roadmap() {
  return (
    <>
      <ol className="motivation-roadmap">
        {[
          ["01–02", "Bir karar ver", "Bir değeri al, kuralla karşılaştır."],
          [
            "04–05",
            "Çözümü büyüt",
            "Kayıtları tekrarla, işi fonksiyonlara böl.",
          ],
          [
            "08–13",
            "Veriyle çalış, test et",
            "Dosyayı oku, beklenmeyeni dene.",
          ],
          ["14", "Kendi aracını sun", "Python raporu + web görünümü + test."],
        ].map(([week, title, detail]) => (
          <li key={week}>
            <span className="motivation-milestone">{week}</span>
            <div>
              <small>HAFTA {week}</small>
              <h2>{title}</h2>
              <p>{detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="motivation-takeaway">
        Bugün başlaman yeterli:{" "}
        <strong>Bir problem, bir kural, bir beklenen sonuç.</strong>
      </div>
    </>
  );
}

export function MotivationVisual({ variant }) {
  const visuals = {
    purpose: Purpose,
    logs: LogInvestigation,
    integrity: IntegrityDemo,
    automation: BackupAutomation,
    python: PythonBridge,
    roadmap: Roadmap,
  };
  const Visual = visuals[variant];
  return (
    <div className="motivation-visual">
      <Visual />
    </div>
  );
}
