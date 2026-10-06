import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  Plus,
  Trash2,
  Copy,
  Check,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  GripVertical,
} from "lucide-react";

// Varsayılan hazır senaryolar
const PRESETS = [
  {
    id: "filter_ports",
    title: "1D Dizi: Şüpheli Portları Ayıkla",
    type: "1d",
    data: [22, 80, 23, 443, 3389, 8080],
    loopType: "for_in",
    blocks: [
      { id: "b1", type: "condition", op: ">", threshold: 1000 },
      { id: "b2", type: "append", target: "guvensizler" },
      { id: "b3", type: "counter", varName: "supheli_adet" },
    ],
  },
  {
    id: "sum_while",
    title: "1D Dizi: While ile Paket Boyutları Topla",
    type: "1d",
    data: [120, 450, 800, 1500, 300],
    loopType: "while",
    blocks: [
      { id: "b1", type: "sum", varName: "toplam_bayt" },
      { id: "b2", type: "condition", op: ">", threshold: 500 },
      { id: "b3", type: "counter", varName: "buyuk_paketler" },
    ],
  },
  {
    id: "matrix_2d",
    title: "2D Dizi: Sunucu Güvenlik Log Matrisi",
    type: "2d",
    data: [
      [12, 45, 8],
      [3, 98, 14],
      [27, 5, 62],
    ],
    labels: { rows: ["Web-01", "DB-01", "Auth-01"], cols: ["Pzt", "Sal", "Çar"] },
    loopType: "nested_2d",
    blocks: [
      { id: "b1", type: "sum", varName: "genel_hata_toplami" },
      { id: "b2", type: "condition", op: ">", threshold: 40 },
      { id: "b3", type: "append", target: "kritik_alarmlar" },
    ],
  },
  {
    id: "cube_3d",
    title: "3D Dizi: Veri Merkezi Sensör Sıcaklıkları",
    type: "3d",
    data: [
      [
        [24, 26],
        [28, 33],
      ],
      [
        [22, 23],
        [29, 36],
      ],
    ],
    labels: {
      blocks: ["Şube 0 (İst)", "Şube 1 (Ank)"],
      rows: ["Kabin 0", "Kabin 1"],
      cols: ["Sunucu 0", "Sunucu 1"],
    },
    loopType: "nested_3d",
    blocks: [
      { id: "b1", type: "condition", op: ">=", threshold: 30 },
      { id: "b2", type: "append", target: "asiri_isinanlar" },
      { id: "b3", type: "counter", varName: "alarm_sayisi" },
    ],
  },
];

export function ArrayLoopSimulation() {
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0].id);
  const currentPreset = PRESETS.find((p) => p.id === selectedPreset) || PRESETS[0];

  // Veri ve Döngü Ayarları
  const [arrayData, setArrayData] = useState(currentPreset.data);
  const [loopType, setLoopType] = useState(currentPreset.loopType);
  const [pipeline, setPipeline] = useState(currentPreset.blocks);

  // Simülasyon Durumu
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [speed, setSpeed] = useState(700); // ms
  const [copied, setCopied] = useState(false);

  // Çalışma Zamanı Değişkenleri
  const [memory, setMemory] = useState({
    pointer: null, // [i] veya [row, col] veya [b, r, c]
    currentVal: null,
    toplam: 0,
    sayac: 0,
    sonucListesi: [],
    logs: [],
  });

  // Hazır senaryo değiştiğinde yükle
  const loadPreset = (presetId) => {
    const p = PRESETS.find((item) => item.id === presetId);
    if (!p) return;
    setSelectedPreset(presetId);
    setArrayData(p.data);
    setLoopType(p.loopType);
    setPipeline(p.blocks);
    resetSimulation();
  };

  // Simülasyon adımlarını oluştur (Pre-compute execution steps)
  const computeSteps = () => {
    const steps = [];
    if (loopType === "for_in" || loopType === "while") {
      const arr = arrayData;
      let accSum = 0;
      let accCount = 0;
      let accList = [];

      for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        let condMet = true;

        // Pipeline bloklarını uygula
        for (const block of pipeline) {
          if (block.type === "condition") {
            if (block.op === ">") condMet = val > block.threshold;
            else if (block.op === ">=") condMet = val >= block.threshold;
            else if (block.op === "<") condMet = val < block.threshold;
            else if (block.op === "==") condMet = val === block.threshold;
          } else if (block.type === "sum") {
            accSum += val;
          } else if (block.type === "counter") {
            if (condMet) accCount++;
          } else if (block.type === "append") {
            if (condMet) accList = [...accList, val];
          }
        }

        steps.push({
          pointer: [i],
          currentVal: val,
          sum: accSum,
          count: accCount,
          list: [...accList],
          condMet,
          log: `İndeks [${i}] -> Değer: ${val}${
            condMet ? " (Şartı Sağladı ✅)" : " (Atlandı ❌)"
          }`,
        });
      }
    } else if (loopType === "nested_2d") {
      let accSum = 0;
      let accCount = 0;
      let accList = [];

      for (let r = 0; r < arrayData.length; r++) {
        for (let c = 0; c < arrayData[r].length; c++) {
          const val = arrayData[r][c];
          let condMet = true;

          for (const block of pipeline) {
            if (block.type === "condition") {
              if (block.op === ">") condMet = val > block.threshold;
              else if (block.op === ">=") condMet = val >= block.threshold;
            } else if (block.type === "sum") {
              accSum += val;
            } else if (block.type === "counter") {
              if (condMet) accCount++;
            } else if (block.type === "append") {
              if (condMet) accList = [...accList, `[${r},${c}]:${val}`];
            }
          }

          steps.push({
            pointer: [r, c],
            currentVal: val,
            sum: accSum,
            count: accCount,
            list: [...accList],
            condMet,
            log: `Hücre [${r}][${c}] -> Değer: ${val}${
              condMet ? " (Kritik Eşik ✅)" : ""
            }`,
          });
        }
      }
    } else if (loopType === "nested_3d") {
      let accSum = 0;
      let accCount = 0;
      let accList = [];

      for (let b = 0; b < arrayData.length; b++) {
        for (let r = 0; r < arrayData[b].length; r++) {
          for (let c = 0; c < arrayData[b][r].length; c++) {
            const val = arrayData[b][r][c];
            let condMet = true;

            for (const block of pipeline) {
              if (block.type === "condition") {
                if (block.op === ">=") condMet = val >= block.threshold;
                else if (block.op === ">") condMet = val > block.threshold;
              } else if (block.type === "sum") {
                accSum += val;
              } else if (block.type === "counter") {
                if (condMet) accCount++;
              } else if (block.type === "append") {
                if (condMet) accList = [...accList, `[${b},${r},${c}]:${val}°C`];
              }
            }

            steps.push({
              pointer: [b, r, c],
              currentVal: val,
              sum: accSum,
              count: accCount,
              list: [...accList],
              condMet,
              log: `Şube[${b}] Kabin[${r}] Sunucu[${c}] -> ${val}°C ${
                condMet ? "🚨 YÜKSEK ISI" : "Normal"
              }`,
            });
          }
        }
      }
    }
    return steps;
  };

  const allSteps = computeSteps();

  // Sıfırla
  const resetSimulation = () => {
    setIsPlaying(false);
    setStepIndex(0);
    setMemory({
      pointer: null,
      currentVal: null,
      toplam: 0,
      sayac: 0,
      sonucListesi: [],
      logs: ["Simülasyon hazır. Başlatmak için 'Oynat' veya 'Adım İlerle'ye basın."],
    });
  };

  // Bir adım ilerlet
  const stepForward = () => {
    if (stepIndex >= allSteps.length) {
      setIsPlaying(false);
      return;
    }
    const current = allSteps[stepIndex];
    setMemory((prev) => ({
      pointer: current.pointer,
      currentVal: current.currentVal,
      toplam: current.sum,
      sayac: current.count,
      sonucListesi: current.list,
      logs: [...prev.logs, current.log],
    }));
    setStepIndex((s) => s + 1);
  };

  // Otomatik oynatma döngüsü
  useEffect(() => {
    let timer;
    if (isPlaying) {
      if (stepIndex >= allSteps.length) {
        setIsPlaying(false);
      } else {
        timer = setTimeout(() => {
          stepForward();
        }, speed);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, stepIndex, speed, allSteps]);

  // Blok ekleme
  const addBlock = (type) => {
    const newId = "b_" + Date.now();
    let newBlock;
    if (type === "condition") {
      newBlock = { id: newId, type: "condition", op: ">", threshold: 50 };
    } else if (type === "sum") {
      newBlock = { id: newId, type: "sum", varName: "toplam" };
    } else if (type === "counter") {
      newBlock = { id: newId, type: "counter", varName: "adet" };
    } else if (type === "append") {
      newBlock = { id: newId, type: "append", target: "filtrelenenler" };
    }
    if (newBlock) {
      setPipeline([...pipeline, newBlock]);
      resetSimulation();
    }
  };

  // Blok silme
  const removeBlock = (id) => {
    setPipeline(pipeline.filter((b) => b.id !== id));
    resetSimulation();
  };

  // Blok güncelleme
  const updateBlock = (id, key, val) => {
    setPipeline(
      pipeline.map((b) => (b.id === id ? { ...b, [key]: val } : b)),
    );
    resetSimulation();
  };

  // PYTHON KODU GENERATE ETME
  const generatePythonCode = () => {
    let code = "# ==========================================\n";
    code += `# 🐍 Otomatik Üretilen Python Kodu\n`;
    code += `# Senaryo: ${currentPreset.title}\n`;
    code += "# ==========================================\n\n";

    // 1. Veri Tanımı
    if (loopType === "for_in" || loopType === "while") {
      code += `veri_listesi = ${JSON.stringify(arrayData)}\n`;
    } else if (loopType === "nested_2d") {
      code += `matris = [\n`;
      arrayData.forEach((row) => {
        code += `    ${JSON.stringify(row)},\n`;
      });
      code += `]\n`;
    } else if (loopType === "nested_3d") {
      code += `kup_3d = [\n`;
      arrayData.forEach((block) => {
        code += `    [\n`;
        block.forEach((row) => {
          code += `        ${JSON.stringify(row)},\n`;
        });
        code += `    ],\n`;
      });
      code += `]\n`;
    }

    code += "\n# Değişken Başlangıç Değerleri\n";
    pipeline.forEach((b) => {
      if (b.type === "sum") code += `${b.varName || "toplam"} = 0\n`;
      if (b.type === "counter") code += `${b.varName || "sayac"} = 0\n`;
      if (b.type === "append") code += `${b.target || "sonuclar"} = []\n`;
    });

    code += "\n# --- Döngü Başlangıcı ---\n";
    if (loopType === "for_in") {
      code += "for eleman in veri_listesi:\n";
      pipeline.forEach((b) => {
        if (b.type === "sum") {
          code += `    ${b.varName || "toplam"} += eleman\n`;
        }
        if (b.type === "condition") {
          code += `    if eleman ${b.op} ${b.threshold}:\n`;
        }
        if (b.type === "counter") {
          code += `        ${b.varName || "sayac"} += 1\n`;
        }
        if (b.type === "append") {
          code += `        ${b.target || "sonuclar"}.append(eleman)\n`;
        }
      });
    } else if (loopType === "while") {
      code += "i = 0\n";
      code += "while i < len(veri_listesi):\n";
      code += "    eleman = veri_listesi[i]\n";
      pipeline.forEach((b) => {
        if (b.type === "sum") code += `    ${b.varName || "toplam"} += eleman\n`;
        if (b.type === "condition")
          code += `    if eleman ${b.op} ${b.threshold}:\n`;
        if (b.type === "counter") code += `        ${b.varName || "sayac"} += 1\n`;
        if (b.type === "append")
          code += `        ${b.target || "sonuclar"}.append(eleman)\n`;
      });
      code += "    i += 1  # Sayacı ilerlet (Sonsuz döngüyü önle!)\n";
    } else if (loopType === "nested_2d") {
      code += "for satir_idx in range(len(matris)):\n";
      code += "    for sutun_idx in range(len(matris[satir_idx])):\n";
      code += "        deger = matris[satir_idx][sutun_idx]\n";
      pipeline.forEach((b) => {
        if (b.type === "sum") code += `        ${b.varName || "toplam"} += deger\n`;
        if (b.type === "condition")
          code += `        if deger ${b.op} ${b.threshold}:\n`;
        if (b.type === "counter")
          code += `            ${b.varName || "sayac"} += 1\n`;
        if (b.type === "append")
          code += `            ${b.target || "sonuclar"}.append(f"[{satir_idx},{sutun_idx}]:{deger}")\n`;
      });
    } else if (loopType === "nested_3d") {
      code += "for b in range(len(kup_3d)):          # 1. Boyut: Şube / Blok\n";
      code += "    for r in range(len(kup_3d[b])):      # 2. Boyut: Kabin / Satır\n";
      code += "        for c in range(len(kup_3d[b][r])):  # 3. Boyut: Sunucu / Sütun\n";
      code += "            sicaklik = kup_3d[b][r][c]\n";
      pipeline.forEach((b) => {
        if (b.type === "sum")
          code += `            ${b.varName || "toplam"} += sicaklik\n`;
        if (b.type === "condition")
          code += `            if sicaklik ${b.op} ${b.threshold}:\n`;
        if (b.type === "counter")
          code += `                ${b.varName || "sayac"} += 1\n`;
        if (b.type === "append")
          code += `                ${b.target || "sonuclar"}.append(f"Şube:{b} Kabin:{r} Sunucu:{c} -> {sicaklik}°C")\n`;
      });
    }

    code += "\n# --- Sonuç Raporu ---\n";
    pipeline.forEach((b) => {
      if (b.type === "sum")
        code += `print("Hesaplanan Toplam:", ${b.varName || "toplam"})\n`;
      if (b.type === "counter")
        code += `print("Kriteri Sağlayan Adet:", ${b.varName || "sayac"})\n`;
      if (b.type === "append")
        code += `print("Filtrelenen Elemanlar:", ${b.target || "sonuclar"})\n`;
    });

    return code;
  };

  const generatedCode = generatePythonCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="array-sim-container">
      {/* BAŞLIK VE SENARYO SEÇİMİ */}
      <div className="sim-header">
        <div className="sim-title-group">
          <span className="sim-badge">
            <Cpu size={15} /> İNTERAKTİF DİZİ & DÖNGÜ SİMÜLATÖRÜ
          </span>
          <h3>Görsel Akış Kurucu & Python Kod Üretici</h3>
          <p className="sim-desc">
            Diziler üzerinde for ve while döngülerinin adım adım nasıl gezindiğini
            inceleyin, blokları kurgulayın ve otomatik oluşturulan temiz Python kodunu
            gözlemleyin.
          </p>
        </div>

        {/* SENARYO BUTONLARI */}
        <div className="preset-buttons">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              className={`preset-btn ${selectedPreset === p.id ? "active" : ""}`}
              onClick={() => loadPreset(p.id)}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>

      <div className="sim-grid">
        {/* SOL: GÖRSEL DİZİ ALANI VE KONTROLLER */}
        <div className="sim-visual-panel">
          <div className="panel-card">
            <div className="panel-card-header">
              <span className="card-tag">DİZİ GÖRSELLEŞTİRME (BELLEK)</span>
              <span className="loop-indicator">
                {loopType === "for_in" && "🔄 for eleman in liste"}
                {loopType === "while" && "🔁 while i < len(liste)"}
                {loopType === "nested_2d" && "⊞ İç İçe 2D Matris Döngüsü"}
                {loopType === "nested_3d" && "🧊 3D Küp Koordinat Taraması"}
              </span>
            </div>

            {/* 1D DİZİ GÖRÜNÜMÜ */}
            {(loopType === "for_in" || loopType === "while") && (
              <div className="array-1d-wrapper">
                <div className="array-1d-cells">
                  {arrayData.map((val, idx) => {
                    const isCurrent =
                      memory.pointer && memory.pointer[0] === idx;
                    const isPassed =
                      memory.pointer && memory.pointer[0] > idx;
                    return (
                      <div
                        key={idx}
                        className={`array-cell ${isCurrent ? "current" : ""} ${
                          isPassed ? "passed" : ""
                        }`}
                      >
                        <span className="cell-index">[{idx}]</span>
                        <div className="cell-value">{val}</div>
                        {isCurrent && (
                          <div className="cell-pointer-indicator">
                            ▲ {loopType === "while" ? "i" : "eleman"}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2D MATRİS GÖRÜNÜMÜ */}
            {loopType === "nested_2d" && (
              <div className="matrix-2d-wrapper">
                <table className="matrix-table">
                  <thead>
                    <tr>
                      <th className="corner-th">Satır \ Sütun</th>
                      {arrayData[0].map((_, c) => (
                        <th key={c}>
                          {currentPreset.labels?.cols?.[c] || `Sütun [${c}]`}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {arrayData.map((row, r) => (
                      <tr key={r}>
                        <th className="row-header">
                          {currentPreset.labels?.rows?.[r] || `Satır [${r}]`}
                        </th>
                        {row.map((val, c) => {
                          const isCurrent =
                            memory.pointer &&
                            memory.pointer[0] === r &&
                            memory.pointer[1] === c;
                          const isPassed =
                            memory.pointer &&
                            (memory.pointer[0] > r ||
                              (memory.pointer[0] === r &&
                                memory.pointer[1] > c));
                          return (
                            <td
                              key={c}
                              className={`matrix-cell ${
                                isCurrent ? "current" : ""
                              } ${isPassed ? "passed" : ""}`}
                            >
                              <span className="matrix-coords">
                                [{r}][{c}]
                              </span>
                              <strong className="matrix-val">{val}</strong>
                              {isCurrent && (
                                <span className="matrix-focus-badge">
                                  Aktif
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* 3D KÜP GÖRÜNÜMÜ */}
            {loopType === "nested_3d" && (
              <div className="cube-3d-wrapper">
                {arrayData.map((block, b) => (
                  <div key={b} className="cube-block">
                    <span className="block-title">
                      🏢 1. Boyut (Şube {b}):{" "}
                      {currentPreset.labels?.blocks?.[b] || `Blok ${b}`}
                    </span>
                    <div className="cube-slice">
                      {block.map((row, r) => (
                        <div key={r} className="cube-row">
                          <span className="cube-row-label">
                            {currentPreset.labels?.rows?.[r] || `Kabin ${r}`}:
                          </span>
                          <div className="cube-cells">
                            {row.map((val, c) => {
                              const isCurrent =
                                memory.pointer &&
                                memory.pointer[0] === b &&
                                memory.pointer[1] === r &&
                                memory.pointer[2] === c;
                              return (
                                <div
                                  key={c}
                                  className={`cube-cell ${
                                    isCurrent ? "current" : ""
                                  } ${val >= 30 ? "danger" : ""}`}
                                >
                                  <small className="cube-idx">
                                    [{b},{r},{c}]
                                  </small>
                                  <strong>{val}°C</strong>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ÇALIŞMA ZAMANI KONTROLLERİ */}
            <div className="sim-controls-bar">
              <div className="playback-buttons">
                <button
                  className={`btn-control primary ${isPlaying ? "pause" : ""}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                  disabled={stepIndex >= allSteps.length}
                >
                  {isPlaying ? (
                    <>
                      <Pause size={16} /> Duraklat
                    </>
                  ) : (
                    <>
                      <Play size={16} /> Oynat
                    </>
                  )}
                </button>

                <button
                  className="btn-control"
                  onClick={stepForward}
                  disabled={isPlaying || stepIndex >= allSteps.length}
                >
                  <StepForward size={16} /> Adım İlerle
                </button>

                <button className="btn-control secondary" onClick={resetSimulation}>
                  <RotateCcw size={16} /> Başa Dön
                </button>
              </div>

              <div className="speed-selector">
                <span>Hız:</span>
                {[
                  { label: "Yavaş", val: 1200 },
                  { label: "Normal", val: 700 },
                  { label: "Hızlı", val: 300 },
                ].map((s) => (
                  <button
                    key={s.val}
                    className={`speed-pill ${speed === s.val ? "active" : ""}`}
                    onClick={() => setSpeed(s.val)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* BELLEK & ÇIKTI İZLEYİCİ */}
            <div className="runtime-memory-card">
              <span className="card-tag">BELLEK VE DEĞİŞKEN DURUMLARI (RAM)</span>
              <div className="memory-metrics">
                <div className="metric-box">
                  <span className="metric-label">Mevcut İndeks</span>
                  <strong className="metric-value">
                    {memory.pointer
                      ? `[${memory.pointer.join("][")}]`
                      : "—"}
                  </strong>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Okunan Değer</span>
                  <strong className="metric-value highlight">
                    {memory.currentVal !== null ? memory.currentVal : "—"}
                  </strong>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Toplam Değişkeni</span>
                  <strong className="metric-value">{memory.toplam}</strong>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Filtre Sayaç</span>
                  <strong className="metric-value">{memory.sayac}</strong>
                </div>
              </div>

              <div className="result-array-box">
                <span className="result-label">Sonuç Listesi:</span>
                <span className="result-content">
                  {memory.sonucListesi.length > 0
                    ? `[ ${memory.sonucListesi.join(", ")} ]`
                    : "[] (Henüz boş)"}
                </span>
              </div>
            </div>

            {/* ADIM GÜNLÜĞÜ (LOG) */}
            <div className="sim-log-viewer">
              <div className="log-header">
                <span>Konsol Günlüğü (Adım Adım İzleme)</span>
                <span className="step-counter">
                  Adım: {stepIndex} / {allSteps.length}
                </span>
              </div>
              <div className="log-messages">
                {memory.logs.slice(-4).map((msg, idx) => (
                  <div key={idx} className="log-line">
                    <span className="log-arrow">❯</span> {msg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ: BLOK TABANLI DÖNGÜ KURUCU & KOD ÜRETİCİ */}
        <div className="sim-builder-panel">
          {/* BLOK PALETİ */}
          <div className="panel-card">
            <div className="panel-card-header">
              <span className="card-tag">ALGORİTMA AKIŞI KURUCU (DÖNGÜ GÖVDESİ)</span>
              <span className="card-subtitle">İşlem bloklarını yapılandırın</span>
            </div>

            <div className="pipeline-container">
              {pipeline.map((block, idx) => (
                <div key={block.id} className="pipeline-block">
                  <div className="block-grip">
                    <GripVertical size={16} />
                    <span className="block-order">#{idx + 1}</span>
                  </div>

                  <div className="block-content">
                    {block.type === "condition" && (
                      <div className="block-row">
                        <span className="block-type-badge if">Eğer (if)</span>
                        <span className="block-text">eleman</span>
                        <select
                          className="block-select"
                          value={block.op}
                          onChange={(e) =>
                            updateBlock(block.id, "op", e.target.value)
                          }
                        >
                          <option value=">">&gt;</option>
                          <option value=">=">&gt;=</option>
                          <option value="<">&lt;</option>
                          <option value="==">==</option>
                        </select>
                        <input
                          type="number"
                          className="block-input"
                          value={block.threshold}
                          onChange={(e) =>
                            updateBlock(
                              block.id,
                              "threshold",
                              Number(e.target.value),
                            )
                          }
                        />
                      </div>
                    )}

                    {block.type === "sum" && (
                      <div className="block-row">
                        <span className="block-type-badge sum">Toplayıcı</span>
                        <span className="block-text">{block.varName} += eleman</span>
                      </div>
                    )}

                    {block.type === "counter" && (
                      <div className="block-row">
                        <span className="block-type-badge count">Sayaç</span>
                        <span className="block-text">
                          şart sağlarsa: {block.varName} += 1
                        </span>
                      </div>
                    )}

                    {block.type === "append" && (
                      <div className="block-row">
                        <span className="block-type-badge append">Listeye Ekle</span>
                        <span className="block-text">
                          {block.target}.append(eleman)
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    className="block-delete-btn"
                    title="Bloğu sil"
                    onClick={() => removeBlock(block.id)}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}

              {pipeline.length === 0 && (
                <div className="empty-pipeline">
                  Henüz blok eklenmedi. Aşağıdaki butonlardan blok ekleyin.
                </div>
              )}
            </div>

            {/* BLOK EKLEME BUTONLARI */}
            <div className="add-block-actions">
              <span className="add-label">Blok Ekle:</span>
              <button
                className="add-block-btn if"
                onClick={() => addBlock("condition")}
              >
                <Plus size={14} /> Şart (if)
              </button>
              <button
                className="add-block-btn sum"
                onClick={() => addBlock("sum")}
              >
                <Plus size={14} /> Toplayıcı (+=)
              </button>
              <button
                className="add-block-btn count"
                onClick={() => addBlock("counter")}
              >
                <Plus size={14} /> Sayaç (+1)
              </button>
              <button
                className="add-block-btn append"
                onClick={() => addBlock("append")}
              >
                <Plus size={14} /> Listeye Ekle (.append)
              </button>
            </div>
          </div>

          {/* PYTHON GENERATED CODE KARTI */}
          <div className="panel-card generated-code-card">
            <div className="panel-card-header code-header">
              <div className="header-left">
                <Code2 size={18} className="code-icon" />
                <span className="card-tag">OTOMATİK ÜRETİLEN PYTHON KODU</span>
              </div>
              <button className="copy-code-btn" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check size={14} /> Kopyalandı
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Kodu Kopyala
                  </>
                )}
              </button>
            </div>

            <div className="code-viewer-container">
              <pre className="generated-code-pre">
                <code>{generatedCode}</code>
              </pre>
            </div>

            <div className="code-footer-tip">
              <Sparkles size={16} />
              <span>
                Bu kod, sol tarafta kurguladığınız döngü ve dizi bloklarının birebir
                çalıştırılabilir Python karşılığıdır. Terminalde veya Pyodide
                laboratuvarında test edebilirsiniz.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
