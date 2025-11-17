// ------------------------------------------------------
// TESTIMONIAL LIST (Unlimited)
// ------------------------------------------------------
const testimonials = [
  {
    text: "BulletByte saved my workday! They were at my home office within the hour. Professional, friendly, and explained everything clearly.",
    author: "Amanda R., Glendora",
    stars: 5
  },
  {
    text: "Reliable partner for my small business. They monitor our computers monthly — zero downtime since we started!",
    author: "Maria T., San Dimas",
    stars: 5
  },
  {
    text: "Fast, honest, affordable. They didn't try to upsell me — just fixed my Wi-Fi issue fast.",
    author: "Jose S., Azusa",
    stars: 5
  },
  {
    text: "My Wi-Fi kept dropping for weeks. BulletByte fixed it in under 30 minutes. Super friendly and extremely professional.",
    author: "Maria G., Covina",
    stars: 5
  },
  {
    text: "I run a small home office. BulletByte cleaned up my entire system, removed viruses, and made everything fast again. Worth every dollar.",
    author: "Daniel S., Diamond Bar",
    stars: 5
  },
  {
    text: "BulletByte set up our office network and printers. Fast service, no upselling, very honest. Highly recommended.",
    author: "John, Upland",
    stars: 5
  }
];


// ------------------------------------------------------
// ADA-COMPLIANT SLIDE + FADE TESTIMONIAL ROTATION
// ------------------------------------------------------
let rotationInterval;
let isPaused = false;

function startSlideRotation() {
  const box = document.getElementById("fadeTestimonial");
  const pauseBtn = document.getElementById("pauseRotation");

  if (!box) return;

  // ADA — aria-live ensures screen readers announce updates
  box.setAttribute("aria-live", "polite");

  let list = [...testimonials].sort(() => Math.random() - 0.5);
  let index = 0;

  function rotate() {
    if (isPaused) return;

    const t = list[index];

    box.classList.remove("show");
    box.classList.add("hide");

    setTimeout(() => {
      box.innerHTML = `
        <p style="color:#ffffff;">"${t.text}"</p>
        <h6 class="mt-3" style="color:#00e0ff;"> - ${t.author}</h6>
        <div class="testimonial-stars text-warning">
           ${"★".repeat(t.stars)}
        </div>
      `;

      box.classList.remove("hide");
      box.classList.add("show");
    }, 500);

    index = (index + 1) % list.length;
  }

  rotate();
  rotationInterval = setInterval(rotate, 6000);

  // ADA Pause / Play controls
  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "▶ Resume Testimonials" : "⏸ Pause Testimonials";
    pauseBtn.setAttribute("aria-pressed", isPaused);
  });

  // Keyboard support for pause button
  pauseBtn.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      pauseBtn.click();
    }
  });
}


// ------------------------------------------------------
// RENDER FULL LIST ON testimonials.html
// ------------------------------------------------------
function renderAllTestimonials() {
  const container = document.getElementById("allTestimonials");
  if (!container) return;

  testimonials.forEach(t => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="testimonial-card" style="background:#111827; padding:20px; border-radius:12px; border:1px solid #1f2937;">
          <p style="color:#ffffff;">"${t.text}"</p>
          <h6 class="mt-3" style="color:#00e0ff;"> - ${t.author}</h6>
          <div class="text-warning fs-5" aria-label="${t.stars} out of 5 stars">${"★".repeat(t.stars)}</div>
        </div>
      </div>
    `;
  });
}


// ------------------------------------------------------
// AUTO RUN
// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  startSlideRotation();
  renderAllTestimonials();
});
