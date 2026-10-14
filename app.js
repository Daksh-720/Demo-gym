// PowerPoint Gym - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initInquiryForm();
  initSmoothScroll();
});

/* ----------------------------------------------------
   1. DARK / LIGHT (OFF-WHITE BEIGE) THEME TOGGLE
---------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('powerpoint_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme: default to light (off-white beige) unless explicitly saved as dark
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('powerpoint_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeText) themeText.textContent = 'Light';
      if (toggleBtn) toggleBtn.setAttribute('title', 'Switch to Off-White Beige Light Mode');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeText) themeText.textContent = 'Dark';
      if (toggleBtn) toggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
  }
}

/* ----------------------------------------------------
   2. INQUIRY FORM SUBMISSION
---------------------------------------------------- */
function initInquiryForm() {
  const form = document.getElementById('gymInquiryForm');
  const successMsg = document.getElementById('inqSuccessMsg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inqName').value;
      if (successMsg) {
        successMsg.innerHTML = `✓ Thank you <strong>${name}</strong>! Your inquiry has been noted. Drop by PowerPoint Gym anytime between <strong>6:00 AM and 11:00 PM</strong>!`;
        successMsg.style.display = 'block';
      }
      form.reset();
    });
  }
}

/* ----------------------------------------------------
   3. SMOOTH SCROLLING
---------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
