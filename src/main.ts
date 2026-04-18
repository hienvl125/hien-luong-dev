import "./style.css";
import {
  type Porfoilio,
  type Skill,
  type Company,
  type TechSkillSet,
  type Education,
  type BasicProfile,
  SKILL_META,
} from "./model";
import portfolio from "./data/2026-backend";

// ── Render helpers ────────────────────────────────────────────
function renderBadge(skill: Skill): string {
  const meta = SKILL_META[skill];
  return `
    <span class="badge ${meta.cssClass}">
      ${meta.label}
    </span>`;
}

function renderProfile(p: BasicProfile): string {
  return `
    <div class="avatar-wrap" role="img" aria-label="Avatar of ${p.name}">
      <img class="avatar-initials" src="${p.avatar}" alt="Avatar of ${p.name}" />
    </div>

    <h1 class="hero-name">${p.name}</h1>

    <p class="hero-role">
      <span class="role-dot" aria-hidden="true"></span>
      ${p.title}
    </p>

    <div class="hero-stats">
      <span class="hero-stat">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        ${p.yearOfExperience}+ Years of Experience
      </span>
    </div>

    <p class="hero-goal">${p.description}</p>

    <div class="hero-links">
      <a href="mailto:${p.email}" class="hero-link hero-link-primary" aria-label="Send email to ${p.name}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        Get in Touch
      </a>
      <a href="${p.githubLink}" target="_blank" class="hero-link hero-link-secondary" aria-label="GitHub profile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        GitHub
      </a>
      <a href="${p.linkedinLink}" target="_blank" class="hero-link hero-link-secondary" aria-label="LinkedIn profile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
    </div>`;
}

function renderCompany(c: Company): string {
  const isCurrent = c.endDate === "Present";
  return `
    <article class="exp-card" aria-label="Work experience at ${c.name}">
      <div class="exp-top">
        <div class="exp-left">
          <div class="exp-logo" aria-hidden="true">
            <img src="${c.image}" alt="${c.name}" />
          </div>
          <div class="exp-info">
            <div class="exp-company">${c.name}</div>
            <div class="exp-position">${c.position}</div>
          </div>
        </div>
        <time class="exp-date${isCurrent ? " current" : ""}">${c.startDate} — ${c.endDate}</time>
      </div>
      <p class="exp-desc">${c.positionDescription}</p>
      <div class="exp-tags" aria-label="Technologies used">
        ${c.skills.map(renderBadge).join("")}
      </div>
    </article>`;
}

function renderEducation(e: Education): string {
  return `
    <div class="edu-card" role="article" aria-label="Education at ${e.universityName}">
      <div class="edu-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      </div>
      <div class="edu-info">
        <div class="edu-university">${e.universityName}</div>
        <div class="edu-degree">${e.degree}</div>
        <time class="edu-date" datetime="${e.fromYear}/${e.toYear}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="13" height="13" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          ${e.fromYear} — ${e.toYear}
        </time>
      </div>
    </div>`;
}

function renderSkillSet(s: TechSkillSet): string {
  return `
    <div class="skill-group" aria-label="${s.name}">
      <div class="skill-group-title">${s.name}</div>
      <div class="badges">
        ${s.skills.map(renderBadge).join("")}
      </div>
    </div>`;
}

// ── loadPortfolio ─────────────────────────────────────────────

function loadPortfolio(p: Porfoilio): void {
  const profileEl = document.getElementById("profile-content");
  if (profileEl)
    profileEl.innerHTML = renderProfile(
      p.basicProfile,
    );

  const expEl = document.getElementById("experience-list");
  if (expEl) expEl.innerHTML = p.workedCompanies.map(renderCompany).join("");

  const eduEl = document.getElementById("education-content");
  if (eduEl) eduEl.innerHTML = renderEducation(p.education);

  const skillsEl = document.getElementById("skills-content");
  if (skillsEl)
    skillsEl.innerHTML = p.techSkillSets.map(renderSkillSet).join("");
}

// ── Theme toggle ──────────────────────────────────────────────
const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): "dark" | "light" {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme: "dark" | "light") {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

// Apply before first paint to avoid flash
applyTheme(getInitialTheme());

document.addEventListener("DOMContentLoaded", () => {
  loadPortfolio(portfolio);

  const btn = document.getElementById(
    "themeToggle",
  ) as HTMLButtonElement | null;
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "light" ? "dark" : "light");
    });
  }

  // ── Scroll reveal ────────────────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  }

  // ── Smooth nav scroll ────────────────────────────────────────
  document.querySelectorAll('.nav-links a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const href = (anchor as HTMLAnchorElement).getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });
});
