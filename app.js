const MAP_BOUNDS = { minX: 0, maxX: 40, minY: 0, maxY: 40 };

const SILVER_CHESTS = [
  { id: "chest-65", label: "①", x: 36.9, y: 18.6, note: "南側から入る小部屋",             nearby: "周辺: Lv5 クレセント・マギドール" },
  { id: "chest-66", label: "②", x: 15.7, y: 29.0, note: "石塔高台の上",                   nearby: "周辺: Lv11 クレセント・フォーパー" },
  { id: "chest-67", label: "③", x: 7.8,  y: 17.5, note: "水晶洞窟内から迂回した崖上",     nearby: "周辺: Lv13 クレセント・メナスダハーカ" },
  { id: "chest-68", label: "④", x: 31.8, y: 26.1, note: "通路内の曲がり角",               nearby: "周辺: Lv21 クレセント・ダーティアイ" },
  { id: "chest-69", label: "⑤", x: 35.4, y: 33.4, note: "南側通路から入った左行き止まり", nearby: "周辺: Lv17 クレセント・バチェラー" },
  { id: "chest-70", label: "⑥", x: 4.9,  y: 4.7,  note: "マップ最北西",                   nearby: "周辺: Lv23 クレセント・アーパス" },
  { id: "chest-71", label: "⑦", x: 5.4,  y: 15.3, note: "水晶洞窟の最奥",                 nearby: "Lv24 ハーゲンティは聴覚感知 / Lv25 クレセント・ジャンベトー" },
  { id: "chest-72", label: "⑧", x: 8.6,  y: 35.7, note: "階段の殿堂最上層",               nearby: "周辺: Lv28 クレセント・ブレイザー（夜: デュラハン追加）" },
];

const CONTENT_META = {
  title: "クレセントアイル：南征編",
  subtitle: "三日月島南部 — 銀箱（青箱）チェックリスト＆座標マップ",
  copperNote:
    "銅箱（木箱）はエリア内に複数あり、攻略サイトによって表記が異なります。ゲーム内ミニマップ座標で位置を確認してください。",
  disclaimer:
    "非公式ファンツールです。座標・名称はパッチや調整で変わる場合があります。最終確認はゲーム内でお願いします。",
};

const STORAGE_KEY = "ff14-crescent-silver-chests-v1";

/** 宝箱位置スクショのパス規則 */
const BOX_POSITION_IMAGE_DIR = "../images/黄金/クレセントアイル/boxposition/";
const BOX_POSITION_IMAGE_EXT = ".png";
function getBoxPositionImagePath(chestId) {
  return `${BOX_POSITION_IMAGE_DIR}${chestId}${BOX_POSITION_IMAGE_EXT}`;
}

const OVERLAY_STORAGE_KEY = "ff14-crescent-overlay-visibility-v1";

const MAP_IMAGE_CANDIDATES = [
  "../images/黄金/クレセントアイル/map.jpg",
  "../images/黄金/クレセントアイル/map.jpeg",
  "/Frontend/images/黄金/クレセントアイル/map.jpg",
  "/Frontend/images/黄金/クレセントアイル/map.jpeg",
  "map.jpg",
  "map.jpeg",
];

const OVERLAY_DEFS = [
  { key: "silber", names: ["silberBox.jpg", "silberBox.jpeg"] },
  { key: "bronz",  names: ["bronzBox.jpg",  "bronzBox.jpeg"]  },
];
const OVERLAY_PIN_OFFSET = {
  silber: { x: 0,    y: 0   },
  bronz:  { x: 0.45, y: 0.2 },
};

// =============================================================
//  ピン座標オーバーライド設定
// =============================================================
const SILVER_PIN_OVERRIDES = [
  { id: "chest-65", left: 10.52, top:  9.27 },
  { id: "chest-66", left: 11.93, top: 34.67 },
  { id: "chest-67", left: 17.67, top: 41.06 },
  { id: "chest-68", left: 87.46, top: 43.49 },
  { id: "chest-69", left: 36.79, top: 68.17 },
  { id: "chest-70", left: 85.16, top: 79.53 },
  { id: "chest-71", left: 19.27, top: 85.93 },
  { id: "chest-72", left: 74.37, top: 61.02 },
];

const BRONZE_PIN_OVERRIDES = [
  { id: "chest-1",  left: 22.07, top:  8.81 }, { id: "chest-2",  left: 30.46, top: 13.11 },
  { id: "chest-3",  left: 68.96, top: 14.45 }, { id: "chest-4",  left: 44.26, top: 14.93 },
  { id: "chest-5",  left: 15.67, top: 15.40 }, { id: "chest-6",  left: 78.39, top: 15.74 },
  { id: "chest-7",  left:  8.41, top: 19.28 }, { id: "chest-8",  left: 73.31, top: 20.79 },
  { id: "chest-9",  left: 19.01, top: 22.56 }, { id: "chest-10", left: 57.12, top: 23.05 },
  { id: "chest-11", left: 26.76, top: 25.48 }, { id: "chest-12", left: 79.90, top: 26.21 },
  { id: "chest-13", left: 67.58, top: 27.37 }, { id: "chest-14", left: 28.96, top: 30.79 },
  { id: "chest-15", left: 40.44, top: 30.80 }, { id: "chest-16", left: 90.38, top: 31.14 },
  { id: "chest-17", left: 17.10, top: 32.79 }, { id: "chest-18", left: 52.55, top: 34.95 },
  { id: "chest-19", left: 68.21, top: 35.00 }, { id: "chest-20", left: 87.07, top: 37.75 },
  { id: "chest-21", left: 63.76, top: 38.43 }, { id: "chest-22", left: 14.16, top: 39.25 },
  { id: "chest-23", left: 52.24, top: 39.71 }, { id: "chest-24", left: 26.56, top: 40.21 },
  { id: "chest-25", left:  9.55, top: 42.21 }, { id: "chest-26", left: 42.86, top: 42.89 },
  { id: "chest-27", left:  9.59, top: 45.98 }, { id: "chest-28", left: 72.04, top: 46.08 },
  { id: "chest-29", left: 14.90, top: 47.14 }, { id: "chest-30", left: 83.86, top: 48.33 },
  { id: "chest-31", left: 60.44, top: 50.29 }, { id: "chest-32", left: 17.33, top: 51.40 },
  { id: "chest-33", left: 27.92, top: 52.32 }, { id: "chest-34", left: 13.88, top: 55.14 },
  { id: "chest-35", left: 78.54, top: 55.27 }, { id: "chest-36", left: 88.35, top: 56.32 },
  { id: "chest-37", left: 49.06, top: 57.38 }, { id: "chest-38", left: 37.34, top: 57.40 },
  { id: "chest-39", left: 30.48, top: 59.73 }, { id: "chest-40", left: 15.43, top: 60.48 },
  { id: "chest-41", left: 63.37, top: 61.02 }, { id: "chest-42", left: 30.81, top: 67.95 },
  { id: "chest-43", left: 19.12, top: 70.21 }, { id: "chest-44", left: 50.24, top: 71.36 },
  { id: "chest-45", left: 90.62, top: 71.48 }, { id: "chest-46", left: 36.97, top: 73.71 },
  { id: "chest-47", left: 63.24, top: 74.91 }, { id: "chest-48", left: 73.56, top: 76.92 },
  { id: "chest-49", left: 15.93, top: 77.60 }, { id: "chest-50", left: 41.80, top: 79.37 },
  { id: "chest-51", left: 91.01, top: 79.64 }, { id: "chest-52", left: 78.41, top: 80.55 },
  { id: "chest-53", left: 63.55, top: 80.58 }, { id: "chest-54", left: 52.29, top: 81.60 },
  { id: "chest-55", left: 25.33, top: 81.95 }, { id: "chest-56", left: 17.86, top: 82.08 },
  { id: "chest-57", left: 61.87, top: 82.08 }, { id: "chest-58", left: 70.74, top: 84.28 },
  { id: "chest-59", left:  9.68, top: 85.15 }, { id: "chest-60", left: 90.50, top: 85.49 },
  { id: "chest-61", left: 57.88, top: 88.30 }, { id: "chest-62", left: 16.09, top: 88.70 },
  { id: "chest-63", left: 22.59, top: 89.82 }, { id: "chest-64", left: 40.29, top: 90.54 },
  { id: "chest-73", left: 79.37, top: 70.02 }, { id: "chest-74", left: 30.81, top: 74.95 },
];

function getOverlayCandidatesByType() {
  const out = [];
  const byType = { silber: [], bronz: [] };
  for (const base of MAP_IMAGE_CANDIDATES) {
    const slash = base.lastIndexOf("/");
    const dir = slash >= 0 ? base.slice(0, slash + 1) : "";
    for (const def of OVERLAY_DEFS) {
      for (const name of def.names) {
        const p = `${dir}${name}`;
        if (!out.includes(p)) { out.push(p); byType[def.key].push(p); }
      }
    }
  }
  return byType;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function resolveFirstImage(candidates) {
  for (const src of candidates) {
    try { return { src, image: await loadImage(src) }; } catch {}
  }
  return null;
}

function detectChestPoints(overlayImg, type) {
  const w = overlayImg.naturalWidth || overlayImg.width;
  const h = overlayImg.naturalHeight || overlayImg.height;
  if (!w || !h) return [];
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];
  ctx.drawImage(overlayImg, 0, 0, w, h);
  const over = ctx.getImageData(0, 0, w, h).data;
  const mask = new Uint8Array(w * h);
  for (let i = 0, p = 0; i < mask.length; i++, p += 4) {
    const r = over[p], g = over[p+1], b = over[p+2];
    let hit = false;
    if (type === "bronz") {
      hit = (r>=38&&r<=140&&g>=16&&g<=105&&b>=16&&b<=110&&r-g>=7) ||
            (r>=92&&r<=200&&g>=35&&g<=125&&b>=55&&b<=165&&r-g>=10);
    } else {
      hit = b>=45&&b<=165&&r<=110&&g<=145&&b-r>=8;
    }
    if (hit) mask[i] = 1;
  }
  const visited = new Uint8Array(w * h);
  const points = [];
  const queue = new Uint32Array(w * h);
  const dirs = [-1, 1, -w, w, -w-1, -w+1, w-1, w+1];
  for (let i = 0; i < mask.length; i++) {
    if (!mask[i] || visited[i]) continue;
    let head = 0, tail = 0;
    queue[tail++] = i; visited[i] = 1;
    let area = 0, sumX = 0, sumY = 0, minX = w, maxX = 0, minY = h, maxY = 0;
    while (head < tail) {
      const cur = queue[head++];
      const y = Math.floor(cur / w), x = cur - y * w;
      area++; sumX += x; sumY += y;
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
      for (const d of dirs) {
        const next = cur + d;
        if (next < 0 || next >= mask.length || visited[next] || !mask[next]) continue;
        const ny = Math.floor(next / w), nx = next - ny * w;
        if (Math.abs(nx-x) > 1 || Math.abs(ny-y) > 1) continue;
        visited[next] = 1; queue[tail++] = next;
      }
    }
    const bw = maxX-minX+1, bh = maxY-minY+1, ratio = bw/Math.max(1,bh);
    if (area<16||area>420||bw<4||bh<4||bw>30||bh>30||ratio<0.45||ratio>1.9) continue;
    points.push({ left: (sumX/area/w)*100, top: (sumY/area/h)*100 });
  }
  const deduped = [];
  for (const p of points) {
    if (!deduped.some(d => Math.hypot(d.left-p.left, d.top-p.top) < 1.8)) deduped.push(p);
  }
  return deduped;
}

function refinePointsWithTemplate(mask, w, h, points, templateSize=13, searchRadius=5) {
  if (!points.length) return points;
  const half = Math.floor(templateSize/2);
  const template = new Float32Array(templateSize*templateSize);
  let sampleCount = 0;
  for (const p of points) {
    const cx = Math.round((p.left/100)*w), cy = Math.round((p.top/100)*h);
    if (cx-half<0||cy-half<0||cx+half>=w||cy+half>=h) continue;
    let ti = 0;
    for (let dy=-half; dy<=half; dy++) { const row=(cy+dy)*w; for (let dx=-half; dx<=half; dx++) template[ti++] += mask[row+cx+dx]; }
    if (++sampleCount >= 28) break;
  }
  if (!sampleCount) return points;
  for (let i = 0; i < template.length; i++) template[i] /= sampleCount;
  const refined = points.map(p => {
    const cx = Math.round((p.left/100)*w), cy = Math.round((p.top/100)*h);
    let best = -1, bestX = cx, bestY = cy;
    for (let sy=-searchRadius; sy<=searchRadius; sy++) {
      for (let sx=-searchRadius; sx<=searchRadius; sx++) {
        const x = cx+sx, y = cy+sy;
        if (x-half<0||y-half<0||x+half>=w||y+half>=h) continue;
        let score = 0, ti = 0;
        for (let dy=-half; dy<=half; dy++) { const row=(y+dy)*w; for (let dx=-half; dx<=half; dx++) score += template[ti++]*mask[row+x+dx]; }
        if (score > best) { best=score; bestX=x; bestY=y; }
      }
    }
    return { left: (bestX/w)*100, top: (bestY/h)*100 };
  });
  const deduped = [];
  for (const p of refined) { if (!deduped.some(d => Math.hypot(d.left-p.left,d.top-p.top)<1.25)) deduped.push(p); }
  return deduped;
}

function detectBronzePointsFromSilberDiff(bronzImg, silberImg) {
  const w = Math.min(bronzImg.naturalWidth||bronzImg.width, silberImg.naturalWidth||silberImg.width);
  const h = Math.min(bronzImg.naturalHeight||bronzImg.height, silberImg.naturalHeight||silberImg.height);
  if (!w||!h) return [];
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];
  ctx.drawImage(bronzImg, 0, 0, w, h);
  const bronz = ctx.getImageData(0, 0, w, h).data;
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(silberImg, 0, 0, w, h);
  const silber = ctx.getImageData(0, 0, w, h).data;
  const mask = new Uint8Array(w * h);
  for (let i = 0, p = 0; i < mask.length; i++, p += 4) {
    const br=bronz[p],bg=bronz[p+1],bb=bronz[p+2],sr=silber[p],sg=silber[p+1],sb=silber[p+2];
    const diff = Math.abs(br-sr)+Math.abs(bg-sg)+Math.abs(bb-sb);
    if (diff>=52 && br>=35&&br<=170&&bg>=15&&bg<=130&&bb>=15&&bb<=150&&br-bg>=8) mask[i]=1;
  }
  const visited = new Uint8Array(w*h), points = [], queue = new Uint32Array(w*h);
  const dirs = [-1,1,-w,w,-w-1,-w+1,w-1,w+1];
  for (let i = 0; i < mask.length; i++) {
    if (!mask[i]||visited[i]) continue;
    let head=0,tail=0; queue[tail++]=i; visited[i]=1;
    let area=0,sumX=0,sumY=0,minX=w,maxX=0,minY=h,maxY=0;
    while (head<tail) {
      const cur=queue[head++], y=Math.floor(cur/w), x=cur-y*w;
      area++; sumX+=x; sumY+=y;
      if (x<minX)minX=x; if(x>maxX)maxX=x; if(y<minY)minY=y; if(y>maxY)maxY=y;
      for (const d of dirs) {
        const next=cur+d;
        if (next<0||next>=mask.length||visited[next]||!mask[next]) continue;
        const ny=Math.floor(next/w),nx=next-ny*w;
        if (Math.abs(nx-x)>1||Math.abs(ny-y)>1) continue;
        visited[next]=1; queue[tail++]=next;
      }
    }
    const bw=maxX-minX+1,bh=maxY-minY+1,ratio=bw/Math.max(1,bh);
    if (area<12||area>380||bw<4||bh<4||bw>26||bh>26||ratio<0.45||ratio>2.0) continue;
    points.push({ left:(sumX/area/w)*100, top:(sumY/area/h)*100 });
  }
  const deduped = [];
  for (const p of points) { if (!deduped.some(d=>Math.hypot(d.left-p.left,d.top-p.top)<1.5)) deduped.push(p); }
  return refinePointsWithTemplate(mask, w, h, deduped, 13, 5);
}

function applyOverlayOffset(points, type) {
  const offset = OVERLAY_PIN_OFFSET[type] || { x: 0, y: 0 };
  return points.map(p => ({
    left: Math.max(0, Math.min(100, p.left + offset.x)),
    top:  Math.max(0, Math.min(100, p.top  + offset.y)),
  }));
}

function loadChecked() {
  try { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return new Set(); const arr = JSON.parse(raw); return new Set(Array.isArray(arr)?arr:[]); } catch { return new Set(); }
}
function saveChecked(set) { localStorage.setItem(STORAGE_KEY, JSON.stringify([...set])); }

function loadOverlayVisibility() {
  const defaults = { silber: true, bronz: true };
  try { const raw = localStorage.getItem(OVERLAY_STORAGE_KEY); if (!raw) return defaults; const parsed = JSON.parse(raw); return { silber: parsed?.silber!==false, bronz: parsed?.bronz!==false }; } catch { return defaults; }
}
function saveOverlayVisibility(state) { localStorage.setItem(OVERLAY_STORAGE_KEY, JSON.stringify(state)); }

function toPercent(x, y) {
  const { minX, maxX, minY, maxY } = MAP_BOUNDS;
  return { left: ((x-minX)/(maxX-minX))*100, top: (1-(y-minY)/(maxY-minY))*100 };
}

function syncPinLayer(stageEl) {
  const img   = stageEl.querySelector(".map-bg");
  const layer = stageEl.querySelector(".map-pin-layer");
  if (!img||!layer||!img.naturalWidth) return;
  const cw=stageEl.clientWidth, ch=stageEl.clientHeight;
  const sc=Math.min(cw/img.naturalWidth, ch/img.naturalHeight);
  const dw=img.naturalWidth*sc, dh=img.naturalHeight*sc;
  layer.style.left=`${(cw-dw)/2}px`; layer.style.top=`${(ch-dh)/2}px`;
  layer.style.width=`${dw}px`; layer.style.height=`${dh}px`;
}

function bindMapImage(stageEl, imgEl, gridEl) {
  let idx = 0;
  const tryLoad = () => {
    if (idx >= MAP_IMAGE_CANDIDATES.length) {
      imgEl.removeAttribute("src"); imgEl.alt=""; imgEl.classList.add("map-bg--hidden");
      stageEl.classList.remove("map-stage--has-image"); gridEl.classList.remove("map-grid--dim"); return;
    }
    imgEl.src = MAP_IMAGE_CANDIDATES[idx++];
  };
  imgEl.decoding="async"; imgEl.className="map-bg map-bg--hidden"; imgEl.alt="三日月島南部ミニマップ（スクショ）";
  imgEl.addEventListener("load", () => { imgEl.classList.remove("map-bg--hidden"); stageEl.classList.add("map-stage--has-image"); gridEl.classList.add("map-grid--dim"); syncPinLayer(stageEl); });
  imgEl.addEventListener("error", tryLoad);
  tryLoad();
  const ro = new ResizeObserver(() => { if (imgEl.naturalWidth) syncPinLayer(stageEl); });
  ro.observe(stageEl);
}

// ----------------------------------------------------------------
//  画像モーダル
// ----------------------------------------------------------------
function createModal() {
  if (document.getElementById("chest-modal")) return;
  const overlay = document.createElement("div");
  overlay.id = "chest-modal";
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal-inner">
      <button class="modal-close" aria-label="閉じる">✕</button>
      <img class="modal-img" src="" alt="宝箱位置スクショ" />
      <p class="modal-no-image">画像がありません</p>
    </div>
  `;
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  document.body.appendChild(overlay);
}

function openModal(chestId) {
  createModal();
  const overlay = document.getElementById("chest-modal");
  const img = overlay.querySelector(".modal-img");
  const noImg = overlay.querySelector(".modal-no-image");
  img.style.display = "none"; noImg.style.display = "none";
  const testImg = new Image();
  testImg.onload = () => { img.src = testImg.src; img.style.display = "block"; };
  testImg.onerror = () => { noImg.style.display = "block"; noImg.textContent = `画像なし: ${chestId}`; };
  testImg.src = getBoxPositionImagePath(chestId);
  overlay.classList.add("modal-overlay--open");
}

function closeModal() {
  const overlay = document.getElementById("chest-modal");
  if (overlay) overlay.classList.remove("modal-overlay--open");
}

function renderMap(container, checked, onToggle, overlayVisibility, overlayPins) {
  container.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.className = "map-stage";
  wrap.setAttribute("role", "img");
  wrap.setAttribute("aria-label", "三日月島南部のマップ。銀箱の位置を座標で表示しています。");

  const fallback = document.createElement("div");
  fallback.className = "map-fallback"; fallback.setAttribute("aria-hidden", "true");
  wrap.appendChild(fallback);

  const img = document.createElement("img");
  const grid = document.createElement("div");
  grid.className = "map-grid";

  const pinLayer = document.createElement("div");
  pinLayer.className = "map-pin-layer";

  // 銅箱ピン（左クリック=画像表示、右クリック=チェック）
  if (overlayVisibility["bronz"] !== false) {
    for (const p of (overlayPins["bronz"] || [])) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "map-pin map-pin--overlay map-pin--bronz";
      btn.style.left = `${p.left}%`; btn.style.top = `${p.top}%`;
      btn.setAttribute("aria-label", "銅箱");
      btn.dataset.chestId = p.id || "";
      if (p.id) btn.dataset.tooltip = p.id;
      btn.addEventListener("click", (e) => { e.preventDefault(); if (p.id) openModal(p.id); });
      btn.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        const isDone = btn.classList.toggle("map-pin--bronz-done");
        btn.classList.toggle("map-pin--bronz", !isDone);
      });
      pinLayer.appendChild(btn);
    }
  }

  // 銀箱ピン（左クリック=画像表示、右クリック=チェック）
  if (overlayVisibility["silber"] !== false) {
    (overlayPins["silber"] || []).forEach((p, i) => {
      const chest = SILVER_CHESTS[i];
      const isDone = chest && checked.has(chest.id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "map-pin map-pin--overlay map-pin--silber" + (isDone ? " map-pin--silber-done" : "");
      btn.style.left = `${p.left}%`; btn.style.top = `${p.top}%`;
      btn.setAttribute("aria-label", chest ? `銀箱${chest.label} ${chest.note}` : `銀箱${i+1}`);
      if (chest) { btn.dataset.chestId = chest.id; btn.dataset.tooltip = `${chest.id}  ${chest.note}`; }
      if (chest) btn.addEventListener("click", (e) => { e.preventDefault(); openModal(chest.id); });
      if (chest) btn.addEventListener("contextmenu", (e) => { e.preventDefault(); onToggle(chest.id); });
      pinLayer.appendChild(btn);
    });
  }

  const axis = document.createElement("div");
  axis.className = "map-axis";
  axis.innerHTML = `<span class="map-axis__n">北</span><span class="map-axis__s">南</span><span class="map-axis__w">西</span><span class="map-axis__e">東</span>`;

  // zoom-containerにまとめる（画像・グリッド・ピンを一体で動かす）
  const zoomContainer = document.createElement("div");
  zoomContainer.className = "map-zoom-container";
  zoomContainer.appendChild(img);
  zoomContainer.appendChild(grid);
  zoomContainer.appendChild(pinLayer);

  wrap.appendChild(zoomContainer);
  wrap.appendChild(axis);

  bindMapImage(wrap, img, grid);

  // ズーム＆パン
  let scale = 1, ox = 0, oy = 0;
  let dragging = false, dragStartX, dragStartY, dragOriginX, dragOriginY;
  const MIN_SCALE = 1, MAX_SCALE = 5;

  function clampOffset(sc, tx, ty) {
    if (sc <= MIN_SCALE) return { tx: 0, ty: 0 };
    const maxTx = (wrap.clientWidth  * (sc - 1)) / 2;
    const maxTy = (wrap.clientHeight * (sc - 1)) / 2;
    return { tx: Math.min(maxTx, Math.max(-maxTx, tx)), ty: Math.min(maxTy, Math.max(-maxTy, ty)) };
  }

  function applyTransform() {
    const { tx, ty } = clampOffset(scale, ox, oy);
    ox = tx; oy = ty;
    zoomContainer.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    wrap.style.cursor = scale > MIN_SCALE ? "grab" : "default";
    syncPinLayer(wrap);
  }

  wrap.addEventListener("wheel", (e) => {
    e.preventDefault();
    const rect = wrap.getBoundingClientRect();
    const mx = e.clientX - rect.left - wrap.clientWidth  / 2;
    const my = e.clientY - rect.top  - wrap.clientHeight / 2;
    const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * (e.deltaY > 0 ? 0.85 : 1.18)));
    const ratio = newScale / scale;
    ox = mx - ratio * (mx - ox);
    oy = my - ratio * (my - oy);
    scale = newScale;
    applyTransform();
  }, { passive: false });

  wrap.addEventListener("mousedown", (e) => {
    if (scale <= MIN_SCALE || e.button !== 0) return;
    if (e.target.closest("button.map-pin")) return;
    dragging = true;
    dragStartX = e.clientX; dragStartY = e.clientY;
    dragOriginX = ox; dragOriginY = oy;
    wrap.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    ox = dragOriginX + (e.clientX - dragStartX);
    oy = dragOriginY + (e.clientY - dragStartY);
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    wrap.style.cursor = scale > MIN_SCALE ? "grab" : "default";
  });

  let lastTouchDist = null;
  wrap.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) lastTouchDist = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
  }, { passive: true });
  wrap.addEventListener("touchmove", (e) => {
    if (e.touches.length !== 2) return;
    e.preventDefault();
    const dist = Math.hypot(e.touches[0].clientX-e.touches[1].clientX, e.touches[0].clientY-e.touches[1].clientY);
    if (lastTouchDist) { scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * dist/lastTouchDist)); applyTransform(); }
    lastTouchDist = dist;
  }, { passive: false });
  wrap.addEventListener("touchend", () => { lastTouchDist = null; });

  const zoomReset = document.createElement("button");
  zoomReset.type = "button"; zoomReset.className = "btn-zoom-reset"; zoomReset.textContent = "⟳ リセット";
  zoomReset.addEventListener("click", () => { scale=1; ox=0; oy=0; applyTransform(); });
  wrap.appendChild(zoomReset);

  container.appendChild(wrap);
}

function renderList(container, checked, onToggle) {
  container.innerHTML = "";
  const ul = document.createElement("ul");
  ul.className = "chest-list";
  SILVER_CHESTS.forEach((c) => {
    const li = document.createElement("li");
    li.className = "chest-list__item" + (checked.has(c.id) ? " chest-list__item--done" : "");
    const cb = document.createElement("input");
    cb.type="checkbox"; cb.id=`chk-${c.id}`; cb.checked=checked.has(c.id);
    cb.addEventListener("change", () => onToggle(c.id));
    const label = document.createElement("label");
    label.htmlFor = `chk-${c.id}`;
    label.innerHTML = `
      <span class="chest-list__badge">銀箱 ${c.label}</span>
      <span class="chest-list__coords">x ${c.x} / y ${c.y}</span>
      <span class="chest-list__note">${escapeHtml(c.note)}</span>
      ${c.nearby ? `<span class="chest-list__near">${escapeHtml(c.nearby)}</span>` : ""}
    `;
    li.appendChild(cb); li.appendChild(label); ul.appendChild(li);
  });
  container.appendChild(ul);
}

function escapeHtml(s) { const d=document.createElement("div"); d.textContent=s; return d.innerHTML; }

function updateProgress(checked) {
  const n=checked.size, total=SILVER_CHESTS.length;
  const el=document.getElementById("progress-text"), bar=document.getElementById("progress-bar");
  if (el) el.textContent=`${n} / ${total} 取得済み`;
  if (bar) bar.style.width=`${(n/total)*100}%`;
}

async function init() {
  let checked = loadChecked();
  let overlayVisibility = loadOverlayVisibility();
  let overlayPins = { silber: [], bronz: [] };

  const mapEl      = document.getElementById("map-root");
  const listEl     = document.getElementById("list-root");
  const resetBtn   = document.getElementById("btn-reset");
  const toggleSilber = document.getElementById("toggle-silber");
  const toggleBronz  = document.getElementById("toggle-bronz");

  async function buildOverlayPins() {
    const overlayByType = getOverlayCandidatesByType();
    const result = { silber: [], bronz: [] };
    let silberResolved = null;
    for (const def of OVERLAY_DEFS) {
      const overlayResolved = await resolveFirstImage(overlayByType[def.key]);
      if (!overlayResolved) continue;
      if (def.key === "silber") {
        silberResolved = overlayResolved;
        result[def.key] = applyOverlayOffset(detectChestPoints(overlayResolved.image, def.key), def.key);
        continue;
      }
      if (def.key === "bronz" && silberResolved) {
        result[def.key] = applyOverlayOffset(detectBronzePointsFromSilberDiff(overlayResolved.image, silberResolved.image), def.key);
        continue;
      }
      result[def.key] = applyOverlayOffset(detectChestPoints(overlayResolved.image, def.key), def.key);
    }
    if (typeof SILVER_PIN_OVERRIDES !== "undefined") {
      result.silber = SILVER_PIN_OVERRIDES.map((ov, i) => {
        if (ov && ov.left !== null && ov.top !== null) return ov;
        return result.silber[i] || null;
      }).filter(Boolean);
    }
    if (typeof BRONZE_PIN_OVERRIDES !== "undefined") {
      result.bronz = BRONZE_PIN_OVERRIDES.filter(p => p && p.left !== null && p.top !== null);
    }
    return result;
  }

  function onToggle(id) {
    if (checked.has(id)) checked.delete(id); else checked.add(id);
    saveChecked(checked);
    renderMap(mapEl, checked, onToggle, overlayVisibility, overlayPins);
    renderList(listEl, checked, onToggle);
    updateProgress(checked);
  }

  function syncOverlayToggles() {
    if (toggleSilber) toggleSilber.checked = overlayVisibility.silber !== false;
    if (toggleBronz)  toggleBronz.checked  = overlayVisibility.bronz  !== false;
  }

  document.getElementById("meta-title").textContent    = CONTENT_META.title;
  document.getElementById("meta-subtitle").textContent = CONTENT_META.subtitle;
  document.getElementById("copper-note").textContent   = CONTENT_META.copperNote;
  document.getElementById("disclaimer").textContent    = CONTENT_META.disclaimer;

  overlayPins = await buildOverlayPins();
  syncOverlayToggles();
  renderMap(mapEl, checked, onToggle, overlayVisibility, overlayPins);
  renderList(listEl, checked, onToggle);
  updateProgress(checked);

  toggleSilber?.addEventListener("change", () => {
    overlayVisibility = { ...overlayVisibility, silber: toggleSilber.checked };
    saveOverlayVisibility(overlayVisibility);
    renderMap(mapEl, checked, onToggle, overlayVisibility, overlayPins);
  });

  toggleBronz?.addEventListener("change", () => {
    overlayVisibility = { ...overlayVisibility, bronz: toggleBronz.checked };
    saveOverlayVisibility(overlayVisibility);
    renderMap(mapEl, checked, onToggle, overlayVisibility, overlayPins);
  });

  resetBtn?.addEventListener("click", () => {
    if (!confirm("取得チェックをすべて解除しますか？")) return;
    checked = new Set();
    saveChecked(checked);
    renderMap(mapEl, checked, onToggle, overlayVisibility, overlayPins);
    renderList(listEl, checked, onToggle);
    updateProgress(checked);
  });

  // アイコンサイズスライダー
  const pinSlider  = document.getElementById("pin-size-slider");
  const pinSizeVal = document.getElementById("pin-size-value");
  function applyPinSize(size) {
    document.documentElement.style.setProperty("--pin-size", `${size}px`);
    if (pinSizeVal) pinSizeVal.textContent = size;
  }
  if (pinSlider) {
    applyPinSize(pinSlider.value);
    pinSlider.addEventListener("input", () => applyPinSize(pinSlider.value));
  }
}

init();