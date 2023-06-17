//import "./modules/fancybox.js";
import "../libs/gsap/gsap.min";
import "../libs/gsap/ScrollTrigger.min";
import "../libs/gsap/ScrollSmoother.min";

window.addEventListener('scroll', function(e) {
	document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: 'scroll-wrapper',
	content: 'scroll-content', 
})