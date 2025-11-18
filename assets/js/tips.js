// ------------------------------------------------------
// TECH TIPS LIST
// ------------------------------------------------------
const tips = [
  {
    text: "Restart your modem and router at least once a month to prevent Wi-Fi slowdowns and connection drops.",
    author: "Wi-Fi Tip"
  },
  {
    text: "Avoid filling your SSD above 80%. A nearly full SSD can slow down Windows, apps, and boot times.",
    author: "Storage Tip"
  },
  {
    text: "Use a password manager and enable two-factor authentication on every important account.",
    author: "Security Tip"
  },
  {
    text: "Disable unnecessary startup programs to speed up boot time and improve overall performance.",
    author: "Optimization Tip"
  },
  {
    text: "Clean dust from vents and fans every 6–12 months to prevent overheating and sudden shutdowns.",
    author: "Hardware Tip"
  },
  {
    text: "Keep Windows and your drivers updated to reduce crashes and fix security vulnerabilities.",
    author: "Windows Tip"
  }
];

// ------------------------------------------------------
// SLIDE + FADE TIP ROTATION (ADA Friendly)
// ------------------------------------------------------
let tipRotationInterval;

function startTipRotation() {
  const box = document.getElementById("fadeTip");
  const nextBtn = document.getElementById("nextTip");

  if (!box) return;

  // Screen reader live updates
  box.setAttribute("aria-live", "polite");

  // Shuffle tips
  let list = [...tips].sort(() => Math.random() - 0.5);
  let index = 0;

  function rotate() {
    const t = list[index];

    // Fade out
    box.classList.remove("show");
    box.classList.add("hide");

    setTimeout(() => {
      box.innerHTML = `
        <p style="color:#ffffff;">"${t.text}"</p>
        <p class="mt-3" style="color:#00e0ff; font-weight:bold;">- ${t.author}</p>
      `;

      // Fade in
      box.classList.remove("hide");
      box.classList.add("show");
    }, 500);

    index = (index + 1) % list.length;
  }

  // Auto start
  rotate();
  tipRotationInterval = setInterval(rotate, 6000);

  // Next Tip Button
  if (nextBtn) {
    nextBtn.addEventListener("click", rotate);

    // Keyboard support
    nextBtn.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        rotate();
      }
    });
  }
}

// ------------------------------------------------------
// RENDER FULL LIST ON tips.html
// ------------------------------------------------------
function renderAllTips() {
  const container = document.getElementById("allTips");
  if (!container) return;

  container.innerHTML = "";

  tips.forEach(t => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="tip-card"
             role="article"
             aria-label="Technical tip card"
             style="background:#111827; padding:20px; border-radius:12px; border:1px solid #1f2937;">
          <p style="color:#ffffff;">"${t.text}"</p>
          <h6 class="mt-3" style="color:#00e0ff;">- ${t.author}</h6>
        </div>
      </div>
    `;
  });
}

// ------------------------------------------------------
// SEARCH FUNCTION
// ------------------------------------------------------
function setupTipSearch() {
  const searchInput = document.getElementById("tipSearch");
  const container = document.getElementById("allTips");
  if (!searchInput || !container) return;

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    container.innerHTML = "";

    tips
      .filter(t =>
        t.text.toLowerCase().includes(q) ||
        t.author.toLowerCase().includes(q)
      )
      .forEach(t => {
        container.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="tip-card"
                 role="article"
                 aria-label="Technical tip card"
                 style="background:#111827; padding:20px; border-radius:12px; border:1px solid #1f2937;">
              <p style="color:#ffffff;">"${t.text}"</p>
              <h6 class="mt-3" style="color:#00e0ff;">- ${t.author}</h6>
            </div>
          </div>
        `;
      });
  });
}

// ------------------------------------------------------
// AUTO RUN
// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  startTipRotation();
  renderAllTips();
  setupTipSearch();
});
