const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value.trim();
    const note = document.getElementById('formNote');

    if (!name || !email || !message) return;

    const subject = encodeURIComponent((project || 'Project Enquiry') + ' — via XNETWORK site');
    const body = encodeURIComponent(
      `Hi Endy,\n\nMy name is ${name}.\n\n${message}\n\nProject type: ${project || 'Not specified'}\n\nReply to: ${email}`
    );
    window.location.href = `mailto:deandie17@gmail.com?subject=${subject}&body=${body}`;

    note.textContent = '✓ Your email client should open. If not, email deandie17@gmail.com directly.';
    note.style.color = '#527e37';
  });
}