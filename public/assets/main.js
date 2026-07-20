const header=document.querySelector("[data-header]");const nav=document.querySelector("#site-nav");const toggle=document.querySelector(".nav-toggle");const modelStage=document.querySelector("[data-model-stage]");const accordion=document.querySelector("[data-accordion]");const discussionForm=document.querySelector(".discussion-form");if(toggle&&nav){toggle.addEventListener("click",()=>{const isOpen=nav.classList.toggle("is-open");toggle.setAttribute("aria-expanded",String(isOpen))});nav.addEventListener("click",event=>{if(event.target instanceof HTMLAnchorElement){nav.classList.remove("is-open");toggle.setAttribute("aria-expanded","false")}})}if(header){const updateHeader=()=>header.classList.toggle("is-scrolled",window.scrollY>12);updateHeader();window.addEventListener("scroll",updateHeader,{passive:true})}if(modelStage){const updateModelStage=()=>{const rect=modelStage.getBoundingClientRect();const visible=rect.top<window.innerHeight*.82&&rect.bottom>window.innerHeight*.18;const progress=Math.min(1,Math.max(0,(window.innerHeight*.72-rect.top)/(rect.height+window.innerHeight*.18)));modelStage.classList.toggle("is-drafting",visible&&progress>.08);modelStage.classList.toggle("is-shifted",visible&&progress>.48);modelStage.classList.toggle("is-resolved",visible&&progress>.68)};updateModelStage();window.addEventListener("scroll",updateModelStage,{passive:true});window.addEventListener("resize",updateModelStage)}if(accordion){accordion.addEventListener("toggle",event=>{const active=event.target;if(!(active instanceof HTMLDetailsElement)||!active.open)return;accordion.querySelectorAll("details").forEach(item=>{if(item!==active)item.removeAttribute("open")})},true)}if(discussionForm){discussionForm.addEventListener("submit",event=>{event.preventDefault();const button=discussionForm.querySelector("button");if(!button)return;const original=button.textContent;button.textContent="Discussion Requested";button.disabled=true;window.setTimeout(()=>{button.textContent=original;button.disabled=false;discussionForm.reset()},2200)})}

const realizationPanels = document.querySelectorAll('.realization-panel');
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const expressiveFade = (value) => {
  const t = clamp(value);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const revealProfiles = {
  realization: {
    fadeInStart: 0.18,
    fadeInEnd: 0.34,
    fadeOutStart: 0.58,
    fadeOutEnd: 0.86,
    travel: 44
  },
  diagram: {
    fadeInStart: 0.12,
    fadeInEnd: 0.3,
    fadeOutStart: 0.76,
    fadeOutEnd: 1,
    travel: 34
  },
  identity: {
    fadeInStart: 0.12,
    fadeInEnd: 0.32,
    fadeOutStart: 0.72,
    fadeOutEnd: 1,
    travel: 40
  }
};

if (realizationPanels.length) {
  const updateRealizationPanels = () => {
    realizationPanels.forEach((panel) => {
      const rect = panel.getBoundingClientRect();
      const profileName = panel.dataset.revealProfile || 'realization';
      const profile = revealProfiles[profileName] || revealProfiles.realization;
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
      const fadeIn = expressiveFade((progress - profile.fadeInStart) / (profile.fadeInEnd - profile.fadeInStart));
      const fadeOut = 1 - expressiveFade((progress - profile.fadeOutStart) / (profile.fadeOutEnd - profile.fadeOutStart));
      const opacity = fadeIn * fadeOut;
      const isExiting = progress > profile.fadeOutStart;
      const translate = (isExiting ? -1 : 1) * (1 - opacity) * profile.travel;


      panel.style.setProperty('--reveal-opacity', opacity.toFixed(3));
      panel.style.setProperty('--reveal-y', translate.toFixed(2) + 'px');
    });
  };

  updateRealizationPanels();
  window.addEventListener('scroll', updateRealizationPanels, { passive: true });
  window.addEventListener('resize', updateRealizationPanels);
}

const realizationRoot = document.querySelector('.realization');

if (realizationRoot && header) {
  const updateIntroHeader = () => {
    const introBottom = realizationRoot.offsetTop + realizationRoot.offsetHeight;
    const shouldConceal = window.scrollY < introBottom - window.innerHeight * 0.16;
    header.classList.toggle('is-intro-concealed', shouldConceal);
  };

  updateIntroHeader();
  window.addEventListener('scroll', updateIntroHeader, { passive: true });
  window.addEventListener('resize', updateIntroHeader);
}
