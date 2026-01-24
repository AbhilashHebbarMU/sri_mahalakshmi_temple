// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Lightbox for gallery (works even without external libraries)
(() => {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox-backdrop";
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-prev" aria-label="Previous">&#8249;</button>
      <img src="" alt="Expanded gallery item" />
      <button class="lightbox-next" aria-label="Next">&#8250;</button>
    </div>
  `;
  document.body.appendChild(lightbox);

  const imgEl = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");
  let images = [];
  let index = 0;

  function getImageUrl(el) {
    return el?.dataset?.full || el?.href || el?.querySelector?.("img")?.src || "";
  }

  const open = (idx) => {
    if (images.length === 0) return;
    index = ((idx % images.length) + images.length) % images.length;
    imgEl.src = getImageUrl(images[index]);
    lightbox.classList.add("show");
  };

  const close = () => lightbox.classList.remove("show");
  const showPrev = () => open(index - 1);
  const showNext = () => open(index + 1);

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });
  nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  // Touch swipe: left-to-right = next, right-to-left = prev
  let touchStartX = 0;
  lightbox.addEventListener("touchstart", (e) => {
    if (e.touches?.[0]) touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    const t = e.changedTouches?.[0];
    if (!t || !lightbox.classList.contains("show")) return;
    const dx = t.clientX - touchStartX;
    const min = 50;
    if (dx > min) showNext();      // swipe left-to-right = next
    else if (dx < -min) showPrev(); // swipe right-to-left = prev
  }, { passive: true });

  // Keyboard: ArrowLeft=prev, ArrowRight=next, Escape=close
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("show")) return;
    if (e.key === "Escape") { close(); e.preventDefault(); return; }
    if (e.key === "ArrowLeft") { showPrev(); e.preventDefault(); return; }
    if (e.key === "ArrowRight") { showNext(); e.preventDefault(); return; }
  });

  const thumbs = document.querySelectorAll("[data-lightbox]");
  images = Array.from(thumbs);
  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener("click", (e) => {
      e.preventDefault();
      open(idx);
    });
  });
})();

// Contact form validation + fallback submission
(() => {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const successModal = new bootstrap.Modal(document.getElementById("thanksModal"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((value, key) => params.append(key, value.toString()));

    const endpoint = form.getAttribute("action");
    if (endpoint && endpoint !== "{{CONTACT_ENDPOINT}}") {
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })
        .then(() => successModal.show())
        .catch(() => successModal.show());
    } else {
      // mailto fallback for environments without backend
      const email = "{{TEMPLE_EMAIL}}";
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join("%0D%0A");
      window.location.href = `mailto:${email}?subject=Temple%20Contact&body=${body}`;
      successModal.show();
    }
  });
})();

// Carousel configuration (Home testimonials)
document.addEventListener("DOMContentLoaded", () => {
  const testimonialCarousel = document.querySelector("#testimonialCarousel");
  if (testimonialCarousel) {
    new bootstrap.Carousel(testimonialCarousel, {
      interval: 5000,
      pause: "hover",
      ride: "carousel",
    });
  }
});

