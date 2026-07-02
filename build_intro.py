import re

with open(r'C:\Users\dell\Desktop\portfolio_zip\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# ── 1. REPLACE OLD LOADER CSS ────────────────────────────────────────────────
old_loader_css = r"""/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LOADER — ultra minimal fade
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
#loader{
  position:fixed;inset:0;z-index:99997;
  background:var(--bg);
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;gap:18px;
  transition:opacity .6s ease,visibility .6s;
}
#loader.out{opacity:0;visibility:hidden;pointer-events:none}
.ld-logo-img{
  width:52px;height:52px;object-fit:contain;
  filter:var(--logo-filter);
  animation:ldBreath 1.6s ease-in-out infinite;
}
@keyframes ldBreath{0%,100%{opacity:.5;transform:scale(.97)}50%{opacity:1;transform:scale(1)}}
.ld-sig{
  font-family:'Dancing Script',cursive;
  font-size:20px;color:var(--text3);letter-spacing:.02em;
}
.ld-bar{
  width:100px;height:1px;
  background:var(--border2);
  position:relative;overflow:hidden;border-radius:1px;
}
.ld-fill{
  position:absolute;inset:0;
  background:#111;
  transform:translateX(-100%);
  animation:ldFill 1.4s cubic-bezier(.4,0,.2,1) forwards .2s;
}
@keyframes ldFill{to{transform:translateX(0)}}"""

new_loader_css = """/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INTRO ANIMATION — premium futuristic
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
#loader{
  position:fixed;inset:0;z-index:99997;
  background:#fff;
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;
  overflow:hidden;
  transition:opacity .9s cubic-bezier(.4,0,.2,1),visibility .9s;
}
#loader.out{opacity:0;visibility:hidden;pointer-events:none}

/* ── Scene container ── */
.intro-scene{
  position:relative;
  width:360px;height:360px;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;
}

/* ── Center logo ── */
.intro-center{
  position:absolute;z-index:20;
  display:flex;flex-direction:column;align-items:center;gap:14px;
  opacity:0;
  animation:iCenterIn .7s cubic-bezier(.34,1.38,.64,1) both .25s;
}
@keyframes iCenterIn{from{opacity:0;transform:scale(.55)}to{opacity:1;transform:scale(1)}}

.intro-logo-img{
  width:84px;height:84px;object-fit:contain;
  animation:iPulse 2.4s ease-in-out infinite 1s;
}
@keyframes iPulse{
  0%,100%{filter:drop-shadow(0 2px 10px rgba(0,0,0,.12))}
  50%{filter:drop-shadow(0 4px 32px rgba(0,0,0,.24)) drop-shadow(0 0 18px rgba(0,0,0,.08))}
}

/* ── Name letters ── */
.intro-name{
  display:flex;align-items:center;
  font-family:'Cabinet Grotesk',sans-serif;
  font-size:11px;font-weight:700;
  letter-spacing:.22em;text-transform:uppercase;
  color:#111;gap:0;
}
.intro-name .ilet{
  display:inline-block;
  opacity:0;transform:translateY(8px);
  animation:iLetIn .35s ease forwards;
}
.intro-name .ilet.sp{width:6px}
@keyframes iLetIn{to{opacity:1;transform:translateY(0)}}

/* ── Orbit rings (3 tracks) ── */
.orbit-track{
  position:absolute;top:50%;left:50%;
  border-radius:50%;border:1px solid rgba(0,0,0,.075);
  transform:translate(-50%,-50%);
  opacity:0;
  animation:iRingIn .6s ease both;
}
.orbit-track:nth-child(1){
  width:178px;height:178px;
  animation-delay:.15s;
  --spin-dur:13s;--spin-dir:normal;
}
.orbit-track:nth-child(2){
  width:264px;height:264px;
  border-color:rgba(0,0,0,.05);
  animation-delay:.22s;
  --spin-dur:21s;--spin-dir:reverse;
}
.orbit-track:nth-child(3){
  width:352px;height:352px;
  border-color:rgba(0,0,0,.035);
  animation-delay:.3s;
  --spin-dur:33s;--spin-dir:normal;
}
@keyframes iRingIn{to{opacity:1}}

/* ── Orbit arms (positioned items) ── */
.orbit-arm{
  position:absolute;
  top:50%;left:50%;
  width:0;height:0;
  transform-origin:0 0;
  transform:translate(0,0) rotate(var(--a));
  animation:armSpin var(--spin-dur,13s) linear infinite var(--spin-dir,normal);
}
@keyframes armSpin{
  from{transform:rotate(var(--a))}
  to{transform:rotate(calc(var(--a) + 360deg))}
}

.orbit-chip{
  position:absolute;
  left:var(--r);
  top:0;
  transform:translateY(-50%) rotate(calc(-1*(var(--a))));
  animation:chipCounter var(--spin-dur,13s) linear infinite var(--chip-dir,reverse);
  display:inline-flex;align-items:center;gap:5px;
  font-family:'DM Mono',monospace;
  font-size:9px;letter-spacing:.06em;color:rgba(0,0,0,.52);
  background:rgba(255,255,255,.95);
  border:1px solid rgba(0,0,0,.1);
  border-radius:100px;
  padding:4px 10px;
  white-space:nowrap;
  box-shadow:0 1px 6px rgba(0,0,0,.07);
  opacity:0;
  animation:chipIn .5s ease forwards var(--chip-delay,.5s), chipCounter var(--spin-dur,13s) linear var(--chip-delay,.5s) infinite var(--chip-dir,reverse);
}
@keyframes chipIn{to{opacity:1}}
@keyframes chipCounter{
  from{transform:translateY(-50%) rotate(0deg)}
  to{transform:translateY(-50%) rotate(-360deg)}
}
.orbit-chip svg{width:9px;height:9px;opacity:.55;flex-shrink:0}

/* ── Progress bar ── */
.intro-bar-wrap{
  position:absolute;bottom:28px;left:50%;transform:translateX(-50%);
  width:72px;height:1px;background:rgba(0,0,0,.08);
  border-radius:1px;overflow:hidden;
  opacity:0;animation:iRingIn .4s ease both .4s;
}
.intro-bar-fill{
  height:100%;background:#111;width:0;
  animation:iBarFill 2.8s cubic-bezier(.4,0,.2,1) forwards .4s;
}
@keyframes iBarFill{to{width:100%}}"""

html = html.replace(old_loader_css, new_loader_css)
print("CSS replaced:", "iPulse" in html)

# ── 2. REPLACE OLD LOADER HTML ───────────────────────────────────────────────
old_loader_html_pat = r'<!-- LOADER -->\s*<div id="loader" aria-hidden="true">.*?</div>\s*(?=<!-- NAV -->)'

new_loader_html = """<!-- INTRO ANIMATION -->
<div id="loader" aria-hidden="true">
  <div class="intro-scene">

    <!-- Orbit track 1 · r=89 -->
    <div class="orbit-track" style="--spin-dur:13s;--spin-dir:normal">
      <div class="orbit-arm" style="--a:0deg;--r:89px">
        <div class="orbit-chip" style="--r:89px;--spin-dur:13s;--chip-dir:reverse;--chip-delay:.55s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>HTML
        </div>
      </div>
      <div class="orbit-arm" style="--a:130deg;--r:89px">
        <div class="orbit-chip" style="--r:89px;--spin-dur:13s;--chip-dir:reverse;--chip-delay:.7s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>CSS
        </div>
      </div>
      <div class="orbit-arm" style="--a:250deg;--r:89px">
        <div class="orbit-chip" style="--r:89px;--spin-dur:13s;--chip-dir:reverse;--chip-delay:.85s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>JS
        </div>
      </div>
    </div>

    <!-- Orbit track 2 · r=132 -->
    <div class="orbit-track" style="--spin-dur:21s;--spin-dir:reverse">
      <div class="orbit-arm" style="--a:45deg;--r:132px">
        <div class="orbit-chip" style="--r:132px;--spin-dur:21s;--chip-dir:normal;--chip-delay:.6s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>React
        </div>
      </div>
      <div class="orbit-arm" style="--a:185deg;--r:132px">
        <div class="orbit-chip" style="--r:132px;--spin-dur:21s;--chip-dir:normal;--chip-delay:.75s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>PHP
        </div>
      </div>
      <div class="orbit-arm" style="--a:305deg;--r:132px">
        <div class="orbit-chip" style="--r:132px;--spin-dur:21s;--chip-dir:normal;--chip-delay:.9s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>MySQL
        </div>
      </div>
    </div>

    <!-- Orbit track 3 · r=176 -->
    <div class="orbit-track" style="--spin-dur:33s;--spin-dir:normal">
      <div class="orbit-arm" style="--a:20deg;--r:176px">
        <div class="orbit-chip" style="--r:176px;--spin-dur:33s;--chip-dir:reverse;--chip-delay:.65s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M5.45 5.11L2 12l3.45 6.89A2 2 0 0 0 5.24 21h13.52a2 2 0 0 0 1.79-2.11L22 12l-3.45-6.89A2 2 0 0 0 18.76 3H5.24a2 2 0 0 0-1.79 2.11z"/></svg>Git
        </div>
      </div>
      <div class="orbit-arm" style="--a:105deg;--r:176px">
        <div class="orbit-chip" style="--r:176px;--spin-dur:33s;--chip-dir:reverse;--chip-delay:.8s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Linux
        </div>
      </div>
      <div class="orbit-arm" style="--a:205deg;--r:176px">
        <div class="orbit-chip" style="--r:176px;--spin-dur:33s;--chip-dir:reverse;--chip-delay:.95s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>Mobile
        </div>
      </div>
      <div class="orbit-arm" style="--a:295deg;--r:176px">
        <div class="orbit-chip" style="--r:176px;--spin-dur:33s;--chip-dir:reverse;--chip-delay:1.1s">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Desktop
        </div>
      </div>
    </div>

    <!-- Center -->
    <div class="intro-center">
      <img class="intro-logo-img" src="logo.png" alt="ML">
      <div class="intro-name" id="introName"></div>
    </div>

    <!-- Bar -->
    <div class="intro-bar-wrap"><div class="intro-bar-fill"></div></div>

  </div>
</div>

"""

html = re.sub(old_loader_html_pat, new_loader_html, html, count=1, flags=re.DOTALL)
print("HTML replaced:", "intro-center" in html)

# ── 3. REPLACE LOADER JS DISMISS (1200ms → 3200ms + add name animation) ─────
old_loader_js = """window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('out'), 1200);
});"""

new_loader_js = """/* ─── INTRO ANIMATION ─── */
(function() {
  const name = 'Mohcine Laghmich';
  const nameEl = document.getElementById('introName');
  if (!nameEl) return;

  // Build letter spans
  let delay = 0.55;
  for (let i = 0; i < name.length; i++) {
    const span = document.createElement('span');
    span.className = name[i] === ' ' ? 'ilet sp' : 'ilet';
    span.textContent = name[i] === ' ' ? '\u00a0' : name[i];
    span.style.animationDelay = delay + 's';
    delay += name[i] === ' ' ? 0.06 : 0.055;
    nameEl.appendChild(span);
  }

  // Dismiss after 3.2s
  window.addEventListener('load', () => {
    setTimeout(() => {
      const ld = document.getElementById('loader');
      if (ld) ld.classList.add('out');
    }, 3200);
  });
})();"""

html = html.replace(old_loader_js, new_loader_js)
print("JS replaced:", "INTRO ANIMATION" in html)

with open(r'C:\Users\dell\Desktop\portfolio_zip\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("DONE — file saved.")
