// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle) {
  toggle.addEventListener('click', () => navList.classList.toggle('show'));
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth',block:'start'});
      navList?.classList.remove('show');
    }
  });
});

// Contact form (demo only)
const form = document.querySelector('.contact-form');
const statusEl = document.querySelector('.form-status');
form?.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // TODO: Replace with your backend endpoint
  await new Promise(r=>setTimeout(r,800));
  statusEl.textContent = `Thanks, ${data.name || 'friend'}! We’ll get back to you shortly.`;
  form.reset();
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
