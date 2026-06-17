// ============================================
//  MAIN.JS — Rio Vincent Portfolio
//  Entry point: loads all modules
// ============================================

import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';

import { initBackground } from './components/background.js';
import { initNavbar }     from './components/navbar.js';
import { initHero }       from './sections/hero.js';
import { initSkills }     from './sections/skills.js';
import { initPortfolio }  from './sections/portfolio.js';
import { initTestimonials } from './sections/testimonials.js';
import { initBlog }       from './sections/blog.js';
import { initContact }    from './sections/contact.js';
import { initFooter }     from './sections/footer.js';
import { initScrollReveal } from './components/scroll-reveal.js';
import { initScrollTop }  from './components/scroll-top.js';

document.addEventListener('DOMContentLoaded', () => {
  initBackground();
  initNavbar();
  initHero();
  initSkills();
  initPortfolio();
  initTestimonials();
  initBlog();
  initContact();
  initFooter();
  initScrollReveal();
  initScrollTop();
});
