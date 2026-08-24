document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuIcon = menuToggle?.querySelector("svg");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  function closeMenu() {
    document.body.classList.remove("menu-open");
    mobileMenu?.classList.remove("open");
    mobileMenu?.setAttribute("aria-hidden", "true");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Ouvrir le menu");
    if (menuToggle) {
      menuToggle.innerHTML = '<i data-lucide="menu"></i>';
      lucide.createIcons();
    }
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    menuToggle.innerHTML = isOpen
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';
    lucide.createIcons();
  });

  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Reveal on scroll
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // Animated counters
  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = Number(el.dataset.target || 0);
        const duration = 1300;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(target * eased);

          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target;
        }

        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.7 }
  );

  counters.forEach(counter => counterObserver.observe(counter));

  // Contact form demo
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm?.addEventListener("submit", e => {
    e.preventDefault();
    const name = new FormData(contactForm).get("name");

    formMessage.textContent =
      `Merci ${name || ""}. Votre demande a bien été préparée. Connectez ce formulaire à votre backend ou service e-mail pour l'envoi réel.`;

    contactForm.reset();
  });

  // Back to top
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    backToTop?.classList.toggle("show", window.scrollY > 650);
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Current year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ── Team accordion ────────────────────────────────────────
  // One card is always open. Hovering a closed card opens it
  // smoothly; leaving the stage restores the last-pinned card.
  const teamStage = document.querySelector(".team-stage");
  const teamCards = document.querySelectorAll(".team-card");

  if (teamStage && teamCards.length) {

    // Default pinned card = Moussa (data-member="1")
    let pinnedCard = document.querySelector('.team-card[data-member="1"]');

    function openCard(card) {
      teamCards.forEach(c => c.classList.remove("team-card--open"));
      card.classList.add("team-card--open");
    }

    // Init — open the default card on load
    openCard(pinnedCard);

    teamCards.forEach(card => {

      // Hover enters a card that isn't open → open it
      card.addEventListener("mouseenter", () => {
        if (!card.classList.contains("team-card--open")) {
          openCard(card);
        }
      });

      // Click → pin this card as the new default
      card.addEventListener("click", () => {
        pinnedCard = card;
        // already open from mouseenter, but ensure it stays
        openCard(card);
      });
    });

    // Mouse leaves the whole stage → restore the pinned card
    teamStage.addEventListener("mouseleave", () => {
      openCard(pinnedCard);
    });
  }
});

