// ── Canvas Background ──
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = {x:0,y:0};
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  resize();
  window.addEventListener('resize',resize);
  class Particle{
    constructor(){this.reset(true)}
    reset(init=false){
      this.x=Math.random()*W;this.y=init?Math.random()*H:H+10;
      this.z=Math.random()*2+0.5;this.vx=(Math.random()-0.5)*0.3;
      this.vy=-(Math.random()*0.4+0.1)*this.z;this.r=Math.random()*1.5+0.5;
      this.alpha=Math.random()*0.6+0.2;
      this.color=Math.random()>0.5?'0,212,255':'124,58,237';
    }
    update(){
      this.x+=this.vx;this.y+=this.vy;
      const dx=this.x-mouse.x,dy=this.y-mouse.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<120){this.x+=dx/dist*1.5;this.y+=dy/dist*1.5;}
      if(this.y<-10)this.reset();
    }
    draw(){
      ctx.beginPath();ctx.arc(this.x,this.y,this.r*this.z,0,Math.PI*2);
      ctx.fillStyle=`rgba(${this.color},${this.alpha})`;ctx.fill();
      ctx.beginPath();ctx.arc(this.x,this.y,this.r*this.z*3,0,Math.PI*2);
      const g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r*this.z*3);
      g.addColorStop(0,`rgba(${this.color},0.15)`);g.addColorStop(1,`rgba(${this.color},0)`);
      ctx.fillStyle=g;ctx.fill();
    }
  }
  for(let i=0;i<100;i++) particles.push(new Particle());
  let ringAngle=0;
  function drawGrid(){
    const gs=60;ctx.strokeStyle='rgba(0,212,255,0.025)';ctx.lineWidth=1;
    for(let x=0;x<W;x+=gs){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=gs){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  }
  function drawRings(){
    ctx.save();ctx.translate(W/2,H/2);
    for(let r=0;r<3;r++){
      const radius=250+r*120,tilt=0.3+r*0.15;
      ctx.save();ctx.rotate(ringAngle*(r%2===0?1:-1)+r*0.5);ctx.scale(1,tilt);
      ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2);
      ctx.strokeStyle=`rgba(0,212,255,${0.04-r*0.01})`;ctx.lineWidth=1;
      ctx.setLineDash([4,20]);ctx.stroke();ctx.setLineDash([]);ctx.restore();
    }
    ctx.restore();ringAngle+=0.002;
  }
  function connectParticles(){
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<120){
          ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(0,212,255,${(1-d/120)*0.15})`;ctx.lineWidth=0.5;ctx.stroke();
        }
      }
    }
  }
  function animate(){
    ctx.clearRect(0,0,W,H);drawGrid();drawRings();
    particles.forEach(p=>{p.update();p.draw()});
    connectParticles();requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('mousemove',e=>{
    mouse.x=e.clientX;mouse.y=e.clientY;
    const c=document.getElementById('cursor'),cr=document.getElementById('cursor-ring');
    if(c){c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';}
    if(cr){cr.style.left=e.clientX+'px';cr.style.top=e.clientY+'px';}
  });
}

// ── Hamburger ──
function initHamburger(){
  const h=document.getElementById('hamburger'),m=document.getElementById('mobileMenu');
  if(!h||!m)return;
  h.addEventListener('click',()=>{
    h.classList.toggle('open');m.classList.toggle('open');
    document.body.style.overflow=m.classList.contains('open')?'hidden':'';
  });
}
function closeMenu(){
  const h=document.getElementById('hamburger'),m=document.getElementById('mobileMenu');
  if(h)h.classList.remove('open');if(m)m.classList.remove('open');
  document.body.style.overflow='';
}

// ── Scroll Reveal ──
function initReveal(){
  const reveals=document.querySelectorAll('.reveal');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('visible'),i*80);
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.1});
  reveals.forEach(el=>obs.observe(el));
}

// ── Init all ──
document.addEventListener('DOMContentLoaded',()=>{
  initCanvas();initHamburger();initReveal();
});
