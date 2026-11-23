document.addEventListener('DOMContentLoaded',()=>{
  if(window.lucide) lucide.createIcons();
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav-links');
  toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  const top=document.querySelector('.back-top');
  window.addEventListener('scroll',()=>top?.classList.toggle('show',window.scrollY>500),{passive:true});
  top?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();
});