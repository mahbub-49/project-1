(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    };
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !expanded);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (nav.classList.contains('open') && !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    const requiredFields = ['name', 'email', 'message'].map(id => document.getElementById(id));
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = field => {
      const value = field.value.trim();
      const valid = field.id === 'email' ? emailPattern.test(value) : value.length > 0;
      field.setAttribute('aria-invalid', String(!valid));
      return valid;
    };

    requiredFields.forEach(field => {
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') validate(field);
      });
      field.addEventListener('blur', () => {
        if (field.value.trim()) validate(field);
      });
    });

    form.addEventListener('submit', event => {
      event.preventDefault();
      const results = requiredFields.map(validate);
      if (results.some(valid => !valid)) {
        status.textContent = 'Please complete the required fields with a valid email address.';
        const firstInvalid = requiredFields.find(field => field.getAttribute('aria-invalid') === 'true');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const interest = document.getElementById('interest').value;
      const message = document.getElementById('message').value.trim();
      const subject = encodeURIComponent(`House Of BN enquiry — ${interest}`);
      const body = encodeURIComponent(`Hello House Of BN,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nSent from the House Of BN website.`);
      // Replace the placeholder below with the company's confirmed contact email before launch.
      const recipient = 'YOUR-CONTACT-EMAIL@example.com';
      if (recipient === 'YOUR-CONTACT-EMAIL@example.com') {
        status.textContent = 'Demo setup: replace YOUR-CONTACT-EMAIL@example.com in script.js with your confirmed business email before publishing.';
        return;
      }
      status.textContent = 'Opening your email application…';
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
})();
