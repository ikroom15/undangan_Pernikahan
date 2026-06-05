/* ============================================================
   SCRIPT.JS — Wedding Invitation Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── POPULATE DATA FROM CONFIG ──────────────────────────────
  function populateData() {
    // Gate
    document.getElementById('gateNames').innerHTML =
      `<span class="gate-groom">${CONFIG.groomName.split(' ')[CONFIG.groomName.split(' ').length - 1]}</span>` +
      `<span class="gate-amp">&amp;</span>` +
      `<span class="gate-bride">${CONFIG.brideName.split(' ')[0]}</span>`;
    document.getElementById('gateDate').textContent = CONFIG.eventDate;

    // Hero
    document.getElementById('heroBismillah').textContent = CONFIG.openingGreeting;
    document.getElementById('heroGroom').textContent = CONFIG.groomName;
    document.getElementById('heroBride').textContent = CONFIG.brideName;
    document.getElementById('heroDate').textContent = CONFIG.eventDate;

    // Opening
    document.getElementById('openingSalam').textContent = CONFIG.openingGreeting;
    document.getElementById('openingPoem').textContent = CONFIG.invitationPoem;

    // Quran
    document.getElementById('quranArabic').textContent = CONFIG.quranArabic;
    document.getElementById('quranTranslation').textContent = CONFIG.quranTranslation;
    document.getElementById('quranSource').textContent = CONFIG.quranSource;

    // Prewed photo
    const prewedImg = document.getElementById('prewedPhoto');
    prewedImg.src = CONFIG.preweddingPhoto;
    prewedImg.alt = `Foto Prewedding ${CONFIG.groomName} & ${CONFIG.brideName}`;

    // Couple
    document.getElementById('groomName').textContent = CONFIG.groomName;
    document.getElementById('brideName').textContent = CONFIG.brideName;
    document.getElementById('groomDesc').textContent = CONFIG.groomFullDesc;
    document.getElementById('brideDesc').textContent = CONFIG.brideFullDesc;

    // Event
    document.getElementById('eventDate').textContent = CONFIG.eventDate;
    document.getElementById('eventTime').textContent = CONFIG.eventTime;
    document.getElementById('eventAddress').textContent = CONFIG.eventAddress;

    // Maps
    const mapsIframe = document.getElementById('mapsEmbed');
    mapsIframe.src = CONFIG.googleMapsEmbed;
    document.getElementById('mapsLink').href =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.eventAddress)}`;

    // Gift / QR
    document.getElementById('giftNote').textContent = CONFIG.giftNote;
    document.getElementById('giftAccount').textContent = `a/n ${CONFIG.bankAccountName}`;
    const qrImg = document.getElementById('qrCode');
    qrImg.src = CONFIG.qrCodeImage;
    qrImg.alt = `QR Code ${CONFIG.bankAccountName}`;

    // Closing
    document.getElementById('closingMessage').textContent = CONFIG.closingMessage;
    document.getElementById('closingSignature').textContent = CONFIG.closingSignature;
    document.getElementById('closingGroom').textContent = CONFIG.groomName;
    document.getElementById('closingBride').textContent = CONFIG.brideName;

    // Audio
    const audio = document.getElementById('bgMusic');
    audio.src = CONFIG.audioSrc;
  }

  // ── PARTICLE EFFECT (gate background) ─────────────────────
  function initParticles() {
    const container = document.getElementById('gateParticles');
    if (!container) return;
    const count = 40;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: rgba(201,168,76,${Math.random() * 0.5 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFall ${Math.random() * 10 + 8}s linear ${Math.random() * 10}s infinite;
        pointer-events: none;
      `;
      container.appendChild(p);
    }
  }

  // ── GATE FORM LOGIC ────────────────────────────────────────
  function initGate() {
    const input    = document.getElementById('guestNameInput');
    const btn      = document.getElementById('enterBtn');
    const msgEl    = document.getElementById('validationMsg');
    const gate     = document.getElementById('gate');
    const invite   = document.getElementById('invitation');

    function validateAndEnter() {
      const name = input.value.trim();
      const displayName = name || 'Tamu Undangan';

      // Show validation message
      msgEl.innerHTML = `<span class="checkmark">✓</span> Nama <em>${escapeHTML(displayName)}</em> tervalidasi sebagai tamu`;
      msgEl.classList.add('visible');

      // After short delay, hide gate and show invitation
      setTimeout(() => {
        // Fade out gate
        gate.style.transition = 'opacity .7s ease, transform .7s ease';
        gate.style.opacity    = '0';
        gate.style.transform  = 'scale(1.03)';

        setTimeout(() => {
          gate.style.display = 'none';

          // Show invitation
          invite.style.display = 'block';
          invite.removeAttribute('aria-hidden');

          // Force reflow then trigger hero animation
          void invite.offsetWidth;
          invite.classList.add('visible');
          document.querySelector('.hero .animate-on-scroll').classList.add('in-view');

          // Scroll to top of invitation
          window.scrollTo({ top: 0, behavior: 'smooth' });

          // Start music if configured
          if (CONFIG.audioAutoplay) {
            tryAutoplay();
          }

          // Init scroll observer
          initScrollObserver();
          initCountdown();

        }, 700);
      }, 1100);
    }

    btn.addEventListener('click', validateAndEnter);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') validateAndEnter();
    });
  }

  // ── SAFE HTML ESCAPE ───────────────────────────────────────
  function escapeHTML(str) {
    const d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  }

  // ── SCROLL OBSERVER ───────────────────────────────────────
  function initScrollObserver() {
    const targets = document.querySelectorAll('#invitation .animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => observer.observe(el));
  }

  // ── COUNTDOWN TIMER ────────────────────────────────────────
  function initCountdown() {
    const target = new Date(CONFIG.eventDateISO + 'T08:00:00').getTime();

    function tick() {
      const now  = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        document.getElementById('cdDays').textContent  = '00';
        document.getElementById('cdHours').textContent = '00';
        document.getElementById('cdMins').textContent  = '00';
        document.getElementById('cdSecs').textContent  = '00';
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
          countdownEl.insertAdjacentHTML('beforeend',
            '<p style="width:100%;text-align:center;color:var(--gold);font-family:var(--font-serif);font-size:1.1rem;margin-top:1rem;">🎉 Hari Bahagia Telah Tiba!</p>'
          );
        }
        return;
      }

      const d  = Math.floor(diff / 86400000);
      const h  = Math.floor((diff % 86400000) / 3600000);
      const m  = Math.floor((diff % 3600000)  / 60000);
      const s  = Math.floor((diff % 60000)    / 1000);

      document.getElementById('cdDays').textContent  = String(d).padStart(2, '0');
      document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
      document.getElementById('cdMins').textContent  = String(m).padStart(2, '0');
      document.getElementById('cdSecs').textContent  = String(s).padStart(2, '0');

      setTimeout(tick, 1000);
    }
    tick();
  }

  // ── MUSIC CONTROL ─────────────────────────────────────────
  const audio    = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');
  const musicIcon = document.getElementById('musicIcon');
  const vinyl    = document.getElementById('musicVinyl');
  let   isPlaying = false;

  function setPlaying(state) {
    isPlaying = state;
    musicIcon.textContent = state ? '❚❚' : '♪';
    if (state) {
      vinyl.classList.add('playing');
    } else {
      vinyl.classList.remove('playing');
    }
  }

  function tryAutoplay() {
    if (!audio.src) return;
    const p = audio.play();
    if (p !== undefined) {
      p.then(() => setPlaying(true))
       .catch(() => {
         // Autoplay blocked — wait for user interaction
         setPlaying(false);
       });
    }
  }

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  });

  audio.addEventListener('play',  () => setPlaying(true));
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('ended', () => setPlaying(false));

  // ── INIT ──────────────────────────────────────────────────
  populateData();
  initParticles();
  initGate();

});
