// Shared motion: scroll reveals (with a safety fallback), count-up stats, sticky CTA after the hero.
(()=>{
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els=[...document.querySelectorAll('.rv')];
  if(!reduce&&'IntersectionObserver' in window){
    document.documentElement.classList.add('motion');
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
    els.forEach(el=>io.observe(el));
    setTimeout(()=>els.forEach(el=>el.classList.add('in')),4000); // never leave content hidden
  }
  // count-up: <strong data-count="38" data-prefix="$" data-suffix="K+">
  const nums=[...document.querySelectorAll('[data-count]')];
  const run=el=>{const end=+el.dataset.count,pre=el.dataset.prefix||'',suf=el.dataset.suffix||'',fmt=n=>pre+Math.round(n).toLocaleString('en-US')+suf;
    if(reduce){el.textContent=fmt(end);return}const t0=performance.now(),d=1400;
    const step=t=>{const p=Math.min(1,(t-t0)/d),e=1-Math.pow(1-p,3);el.textContent=fmt(end*e);if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
  if('IntersectionObserver' in window){const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){run(e.target);io2.unobserve(e.target)}}),{threshold:.6});nums.forEach(n=>io2.observe(n))}
  // sticky CTA appears once the hero is out of view
  const sticky=document.querySelector('.sticky'),hero=document.querySelector('.hero,.cs-hero');
  if(sticky&&hero&&'IntersectionObserver' in window){new IntersectionObserver(([e])=>sticky.classList.toggle('on',!e.isIntersecting)).observe(hero)}
  // copy email
  const c=document.getElementById('copy'),a=document.getElementById('addr');
  if(c&&a)c.addEventListener('click',()=>{navigator.clipboard?.writeText(a.textContent).then(()=>{c.textContent='Copied'},()=>{const r=document.createRange();r.selectNodeContents(a);const s=getSelection();s.removeAllRanges();s.addRange(r)})});
})();
