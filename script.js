const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
window.addEventListener('load',()=>$('.loader')?.classList.add('done'));
const year=$('#year');if(year)year.textContent=new Date().getFullYear();
const nav=$('nav'),menu=$('.menu');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
$$('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
$$('.reveal').forEach(e=>io.observe(e));
const hero=$('.hero'),bg=$('.hero-bg');
hero?.addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;if(bg)bg.style.transform=`scale(1.06) translate(${x*-12}px,${y*-8}px)`});
hero?.addEventListener('mouseleave',()=>{if(bg)bg.style.transform='scale(1.05)'});
addEventListener('scroll',()=>{if(bg)bg.style.backgroundPosition=`center calc(50% + ${Math.min(scrollY*.08,60)}px)`},{passive:true});
const cursor=$('.cursor');
addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
$$('a,button,input,select,textarea').forEach(el=>{el.addEventListener('mouseenter',()=>cursor?.classList.add('active'));el.addEventListener('mouseleave',()=>cursor?.classList.remove('active'))});

// Doubts & Clarifications: front-end submission flow.
// This currently provides instant feedback only. Connect the form to Supabase/Firebase
// later to store submissions and let the church team moderate and publish answers.
const doubtForm=$('#doubtForm'),doubtStatus=$('#doubtStatus');
doubtForm?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(doubtForm);
  const question=(data.get('question')||'').toString().trim();
  if(!question){if(doubtStatus)doubtStatus.textContent='Please enter your question.';return}
  if(doubtStatus)doubtStatus.textContent='Thank you. Your question has been received for church-team review.';
  doubtForm.reset();
});