/* Disco Automotive Hardware Catalog Browser */

const SECTIONS = [
  // Core Hardware
  { id: "Section-1-Screws", file: "Section-1-Screws.csv", title: "Screws", group: "Core Hardware", count: 423 },
  { id: "Section-2-Standard-Fasteners", file: "Section-2-Standard-Fasteners.csv", title: "Standard Fasteners", group: "Core Hardware", count: 486 },
  { id: "Section-3-Metric", file: "Section-3-Metric.csv", title: "Metric Fasteners", group: "Core Hardware", count: 245 },
  { id: "Section-4-Stainless-Steel", file: "Section-4-Stainless-Steel.csv", title: "Stainless Steel", group: "Core Hardware", count: 123 },
  { id: "Section-5-Specialty-Nuts", file: "Section-5-Specialty-Nuts.csv", title: "Specialty Nuts", group: "Core Hardware", count: 474 },
  { id: "Section-6-Shims", file: "Section-6-Shims.csv", title: "Shims", group: "Core Hardware", count: 9 },
  { id: "Section-7-Hole-Plugs", file: "Section-7-Hole-Plugs.csv", title: "Hole Plugs", group: "Core Hardware", count: 36 },
  { id: "Section-8-Vacuum-caps", file: "Section-8-Vacuum-caps.csv", title: "Vacuum Caps", group: "Core Hardware", count: 39 },
  { id: "Section-9-Oil-Drain-Hardware", file: "Section-9-Oil-Drain-Hardware.csv", title: "Oil Drain Hardware", group: "Core Hardware", count: 62 },
  { id: "Section-10-Rubber-Products", file: "Section-10-Rubber-Products.csv", title: "Rubber Products", group: "Core Hardware", count: 52 },
  { id: "Section-11-Rivets", file: "Section-11-Rivets.csv", title: "Rivets", group: "Core Hardware", count: 227 },
  { id: "Section-12-Electrical", file: "Section-12-Electrical.csv", title: "Electrical", group: "Core Hardware", count: 331 },
  { id: "Section-13-Shield-Hood-Weatherstrip", file: "Section-13-Shield-Hood-Weatherstrip.csv", title: "Shield / Hood / Weatherstrip", group: "Core Hardware", count: 295 },
  { id: "Section-14-Push-Screw-Retainers", file: "Section-14-Push-Screw-Retainers.csv", title: "Push & Screw Retainers", group: "Core Hardware", count: 356 },
  { id: "Section-15-Doors", file: "Section-15-Doors.csv", title: "Doors", group: "Core Hardware", count: 358 },
  { id: "Section-16-Headlight-Retainers", file: "Section-16-Headlight-Retainers.csv", title: "Headlight Retainers", group: "Core Hardware", count: 18 },
  { id: "Section-17-Windshield-Retainers", file: "Section-17-Windshield-Retainers.csv", title: "Windshield Retainers", group: "Core Hardware", count: 60 },

  // Domestic OEM
  { id: "Section-18-General-Motors", file: "Section-18-General-Motors.csv", title: "General Motors", group: "Domestic OEM", count: 573 },
  { id: "Section-19-Ford", file: "Section-19-Ford.csv", title: "Ford", group: "Domestic OEM", count: 304 },
  { id: "Section-20-Chrysler", file: "Section-20-Chrysler.csv", title: "Chrysler", group: "Domestic OEM", count: 254 },
  { id: "Section-21-Tesla", file: "Section-21-Tesla.csv", title: "Tesla", group: "Domestic OEM", count: 18 },

  // Imports
  { id: "Section-22-1-BMW", file: "Section-22-1-BMW.csv", title: "BMW", group: "Imports", count: 55 },
  { id: "Section-22-2-Honda", file: "Section-22-2-Honda.csv", title: "Honda", group: "Imports", count: 209 },
  { id: "Section-22-2-Hyundai", file: "Section-22-2-Hyundai.csv", title: "Hyundai", group: "Imports", count: 81 },
  { id: "Section-22-3-Mitsubishi", file: "Section-22-3-Mitsubishi.csv", title: "Mitsubishi", group: "Imports", count: 28 },
  { id: "Section-22-4-Nissan", file: "Section-22-4-Nissan.csv", title: "Nissan", group: "Imports", count: 135 },
  { id: "Section-22-5-Subaru", file: "Section-22-5-Subaru.csv", title: "Subaru", group: "Imports", count: 43 },
  { id: "Section-22-6-Mazda", file: "Section-22-6-Mazda.csv", title: "Mazda", group: "Imports", count: 70 },
  { id: "Section-22-6-Toyota", file: "Section-22-6-Toyota.csv", title: "Toyota", group: "Imports", count: 234 },
  { id: "Section-22-7-Volkswagen", file: "Section-22-7-Volkswagen.csv", title: "Volkswagen", group: "Imports", count: 93 },
  { id: "Section-22-Acura", file: "Section-22-Acura.csv", title: "Acura", group: "Imports", count: 13 },
  { id: "Section-22-Kia", file: "Section-22-Kia.csv", title: "Kia", group: "Imports", count: 14 },
  { id: "Section-22-Land-Rover", file: "Section-22-Land-Rover.csv", title: "Land Rover", group: "Imports", count: 6 },
  { id: "Section-22-Lexus", file: "Section-22-Lexus.csv", title: "Lexus", group: "Imports", count: 21 },
  { id: "Import-Audi", file: "Import-Audi.csv", title: "Audi", group: "Imports", count: 12 },
  { id: "Import-Mercedes", file: "Import-Mercedes.csv", title: "Mercedes", group: "Imports", count: 68 },
  { id: "Import-Volvo", file: "Import-Volvo.csv", title: "Volvo", group: "Imports", count: 8 },
  { id: "Import-Isuzu", file: "Import-Isuzu.csv", title: "Isuzu", group: "Imports", count: 8 },
  { id: "Import-Fiat", file: "Import-Fiat.csv", title: "Fiat", group: "Imports", count: 4 },
  { id: "Import-Renault", file: "Import-Renault.csv", title: "Renault", group: "Imports", count: 4 },
  { id: "Import-Suzuki", file: "Import-Suzuki.csv", title: "Suzuki", group: "Imports", count: 4 },
  { id: "Import-Jaguar", file: "Import-Jaguar.csv", title: "Jaguar", group: "Imports", count: 3 },
  { id: "Import-Citroen-Peugeot", file: "Import-Citroen-Peugeot.csv", title: "Citroën / Peugeot", group: "Imports", count: 2 },
  { id: "Import-Infiniti", file: "Import-Infiniti.csv", title: "Infiniti", group: "Imports", count: 2 },
  { id: "Import-Navistar", file: "Import-Navistar.csv", title: "Navistar", group: "Imports", count: 1 },
  { id: "Import-Porsche", file: "Import-Porsche.csv", title: "Porsche", group: "Imports", count: 1 },

  // Tools & Other
  { id: "Section-23-Hose-Clamps", file: "Section-23-Hose-Clamps.csv", title: "Hose Clamps", group: "Tools & Other", count: 40 },
  { id: "Section-24-Abrasives", file: "Section-24-Abrasives.csv", title: "Abrasives", group: "Tools & Other", count: 48 },
  { id: "Section-24-Tools-Supplies", file: "Section-24-Tools-Supplies.csv", title: "Tools & Supplies", group: "Tools & Other", count: 159 },
  { id: "Section-26-Assortments-1", file: "Section-26-Assortments-1.csv", title: "Assortments", group: "Tools & Other", count: 874 },
  { id: "Section-27-Service-Equipment", file: "Section-27-Service-Equipment.csv", title: "Service Equipment", group: "Tools & Other", count: 48 },
  { id: "Section-28-Sales-Aids", file: "Section-28-Sales-Aids.csv", title: "Sales Aids", group: "Tools & Other", count: 64 },
];

// ---------- State ----------
let currentSection = null;
let currentRows = [];
let filteredRows = [];
let sortCol = null;
let sortDir = 1;
let headers = [];

// ---------- DOM ----------
const navEl = document.getElementById("nav");
const homeView = document.getElementById("homeView");
const tableView = document.getElementById("tableView");
const pageTitle = document.getElementById("pageTitle");
const tableSearch = document.getElementById("tableSearch");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const rowCountEl = document.getElementById("rowCount");
const filterCountEl = document.getElementById("filterCount");
const emptyState = document.getElementById("emptyState");
const totalStat = document.getElementById("totalStat");
const heroStats = document.getElementById("heroStats");
const categoryGrid = document.getElementById("categoryGrid");
const navSearch = document.getElementById("navSearch");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const exportBtn = document.getElementById("exportBtn");

// ---------- Init ----------
function init() {
  const total = SECTIONS.reduce((s, x) => s + x.count, 0);
  totalStat.textContent = `${total.toLocaleString()} products`;

  heroStats.innerHTML = `
    <div class="hero-stat"><div class="num">${total.toLocaleString()}</div><div class="label">Total Products</div></div>
    <div class="hero-stat"><div class="num">${SECTIONS.length}</div><div class="label">Sections</div></div>
    <div class="hero-stat"><div class="num">4</div><div class="label">Categories</div></div>
  `;

  buildNav();
  buildCategoryCards();
  bindEvents();
}

function buildNav(filter = "") {
  const groups = {};
  SECTIONS.forEach((s) => {
    if (filter && !s.title.toLowerCase().includes(filter.toLowerCase()) && !s.group.toLowerCase().includes(filter.toLowerCase())) {
      return;
    }
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  });

  let html = "";
  for (const [group, items] of Object.entries(groups)) {
    html += `<div class="nav-group"><div class="nav-group-title">${group}</div>`;
    items.forEach((s) => {
      const active = currentSection && currentSection.id === s.id ? "active" : "";
      html += `<button class="nav-item ${active}" data-id="${s.id}">
        <span>${s.title}</span>
        <span class="count">${s.count}</span>
      </button>`;
    });
    html += `</div>`;
  }
  navEl.innerHTML = html || `<div class="nav-group-title">No matches</div>`;

  navEl.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sec = SECTIONS.find((x) => x.id === btn.dataset.id);
      if (sec) loadSection(sec);
      sidebar.classList.remove("open");
    });
  });
}

function buildCategoryCards() {
  const groups = {};
  SECTIONS.forEach((s) => {
    if (!groups[s.group]) groups[s.group] = { count: 0, sections: 0 };
    groups[s.group].count += s.count;
    groups[s.group].sections += 1;
  });

  categoryGrid.innerHTML = Object.entries(groups)
    .map(
      ([name, g]) => `
    <div class="cat-card" data-group="${name}">
      <h3>${name}</h3>
      <div class="meta">${g.sections} sections · ${g.count.toLocaleString()} products</div>
    </div>`
    )
    .join("");

  categoryGrid.querySelectorAll(".cat-card").forEach((card) => {
    card.addEventListener("click", () => {
      const group = card.dataset.group;
      const first = SECTIONS.find((s) => s.group === group);
      if (first) loadSection(first);
    });
  });
}

function bindEvents() {
  tableSearch.addEventListener("input", () => {
    applyFilter(tableSearch.value.trim());
  });

  navSearch.addEventListener("input", () => {
    buildNav(navSearch.value.trim());
  });

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  exportBtn.addEventListener("click", exportCurrentCSV);
}

// ---------- Load & Parse ----------
// Data is embedded in data.js as window.CATALOG_DATA — works offline, no server needed.
function loadSection(section) {
  currentSection = section;
  pageTitle.textContent = section.title;
  tableSearch.disabled = false;
  tableSearch.value = "";
  tableSearch.placeholder = `Search in ${section.title}…`;

  homeView.classList.add("hidden");
  tableView.classList.remove("hidden");
  tableBody.innerHTML = `<tr><td colspan="10" class="loading">Loading ${section.title}…</td></tr>`;
  emptyState.classList.add("hidden");

  buildNav(); // refresh active state

  try {
    const catalog = window.CATALOG_DATA;
    if (!catalog || !catalog[section.id]) {
      throw new Error("Section data not found in embedded catalog.");
    }
    const parsed = catalog[section.id];
    headers = parsed.headers || [];
    currentRows = parsed.rows || [];
    sortCol = null;
    filteredRows = currentRows.slice();
    renderTable();
  } catch (err) {
    tableBody.innerHTML = `<tr><td colspan="10" class="loading">Could not load ${section.title}<br><small>${err.message}</small></td></tr>`;
    console.error(err);
  }
}

function parseCSV(text) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").filter((l) => l.trim());
  if (lines.length === 0) return { headers: [], rows: [] };

  const headers = splitCSVLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = splitCSVLine(lines[i]);
    if (cols.length === 0 || cols.every((c) => !c.trim())) continue;
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = cols[idx] !== undefined ? cols[idx] : "";
    });
    rows.push(obj);
  }
  return { headers, rows };
}

function splitCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        result.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
  }
  result.push(current);
  return result;
}

// ---------- Render ----------
function renderTable() {
  rowCountEl.textContent = currentRows.length.toLocaleString();
  const filtered = filteredRows.length;
  filterCountEl.textContent =
    filtered !== currentRows.length ? `${filtered.toLocaleString()} shown` : "";

  if (filteredRows.length === 0) {
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  // Prefer common columns first
  const preferred = ["Section", "Part_Number", "Size", "Description", "Finish", "Quantity", "OEM_Number"];
  const ordered = [
    ...preferred.filter((h) => headers.includes(h)),
    ...headers.filter((h) => !preferred.includes(h)),
  ];

  tableHead.innerHTML =
    "<tr>" +
    ordered
      .map((h) => {
        let ind = "";
        if (sortCol === h) ind = sortDir === 1 ? " ▲" : " ▼";
        return `<th data-col="${h}">${escapeHtml(h)}<span class="sort-ind">${ind}</span></th>`;
      })
      .join("") +
    "</tr>";

  tableHead.querySelectorAll("th").forEach((th) => {
    th.addEventListener("click", () => {
      const col = th.dataset.col;
      if (sortCol === col) sortDir *= -1;
      else {
        sortCol = col;
        sortDir = 1;
      }
      filteredRows.sort((a, b) => {
        const va = (a[col] || "").toString().toLowerCase();
        const vb = (b[col] || "").toString().toLowerCase();
        if (va < vb) return -1 * sortDir;
        if (va > vb) return 1 * sortDir;
        return 0;
      });
      renderTable();
    });
  });

  const maxRows = 2000; // safety for very large sections
  const slice = filteredRows.slice(0, maxRows);

  // Store ordered headers for copy formatting
  window._tableOrderedHeaders = ordered;

  tableBody.innerHTML = slice
    .map((row, idx) => {
      return (
        `<tr class="clickable-row" data-idx="${idx}" title="Click to copy row data">` +
        ordered
          .map((h) => {
            const val = row[h] || "";
            let cls = "";
            if (h === "Part_Number") cls = "part";
            if (h === "Section") cls = "section-cell";
            return `<td class="${cls}" title="${escapeAttr(val)}">${escapeHtml(truncate(val, 120))}</td>`;
          })
          .join("") +
        "</tr>"
      );
    })
    .join("");

  // Click-to-copy handlers
  tableBody.querySelectorAll("tr.clickable-row").forEach((tr) => {
    tr.addEventListener("click", () => {
      const idx = parseInt(tr.dataset.idx, 10);
      const row = slice[idx];
      if (!row) return;
      copyRowToClipboard(row, ordered);
      // Visual feedback
      tr.classList.add("copied");
      setTimeout(() => tr.classList.remove("copied"), 600);
    });
  });

  if (filteredRows.length > maxRows) {
    tableBody.innerHTML += `<tr><td colspan="${ordered.length}" style="text-align:center;color:var(--text-muted);padding:16px">Showing first ${maxRows.toLocaleString()} of ${filteredRows.length.toLocaleString()} rows. Use search to narrow results.</td></tr>`;
  }
}

function copyRowToClipboard(row, orderedHeaders) {
  // Format as labeled lines (easy to read when pasted)
  const lines = orderedHeaders
    .map((h) => {
      const val = (row[h] || "").toString().trim();
      return val ? `${h}: ${val}` : null;
    })
    .filter(Boolean);

  // Also include a tab-separated single line for spreadsheet paste
  const tsv = orderedHeaders.map((h) => (row[h] || "").toString().replace(/\t/g, " ")).join("\t");

  const text = lines.join("\n") + "\n\n" + tsv;

  const showToast = (msg, ok) => {
    let toast = document.getElementById("copyToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "copyToast";
      toast.className = "copy-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.toggle("error", !ok);
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("show"), 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => showToast("Row copied to clipboard", true),
      () => fallbackCopy(text, showToast)
    );
  } else {
    fallbackCopy(text, showToast);
  }
}

function fallbackCopy(text, showToast) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast("Row copied to clipboard", true);
  } catch (e) {
    showToast("Could not copy — try selecting manually", false);
  }
  document.body.removeChild(ta);
}

function applyFilter(q) {
  if (!q) {
    filteredRows = currentRows.slice();
  } else {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    filteredRows = currentRows.filter((row) => {
      const hay = Object.values(row).join(" ").toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }
  if (sortCol) {
    filteredRows.sort((a, b) => {
      const va = (a[sortCol] || "").toString().toLowerCase();
      const vb = (b[sortCol] || "").toString().toLowerCase();
      if (va < vb) return -1 * sortDir;
      if (va > vb) return 1 * sortDir;
      return 0;
    });
  }
  renderTable();
}

function exportCurrentCSV() {
  if (!filteredRows.length || !headers.length) return;
  const preferred = ["Section", "Part_Number", "Size", "Description", "Finish", "Quantity", "OEM_Number"];
  const ordered = [
    ...preferred.filter((h) => headers.includes(h)),
    ...headers.filter((h) => !preferred.includes(h)),
  ];
  const lines = [ordered.map(csvEscape).join(",")];
  filteredRows.forEach((row) => {
    lines.push(ordered.map((h) => csvEscape(row[h] || "")).join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = (currentSection ? currentSection.id : "export") + "-filtered.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function csvEscape(val) {
  const s = String(val);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s) {
  return String(s).replace(/"/g, "&quot;");
}

function truncate(s, n) {
  s = String(s);
  return s.length > n ? s.slice(0, n) + "…" : s;
}

// Boot
init();
