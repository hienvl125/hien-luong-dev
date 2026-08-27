import {
  type Porfoilio,
  type Company,
} from "./model";
import portfolio from "./data/2026-backend";

function renderExpInCompany(cpn: Company) {
  const techstackLine = cpn.resumeVersion?.techstack.join(', ')
  return `
    <div class="section-item">
      <div class="section-item-header">
        <b>${cpn.position}</b>
        <b class="mid">${cpn.name}</b>
        <b>${cpn.startDate} - ${cpn.endDate}</b>
      </div>
      <div class="section-item-content">
        <div>
          ${cpn.resumeVersion?.companyOverview}
        </div>
        <ul>
          ${cpn.resumeVersion?.jobDescriptions
            .map((description) => `<li>${description}</li>`)
            .join("") ?? ""}
        </ul>
        <div>
          <b>Tech stack</b>: ${techstackLine}
        </div>
      </div>
    </div>
  `;
}

function loadPortfolio(portfolio: Porfoilio) {
  const employmentExps = document.getElementById("employment-exps");
  if (!employmentExps) return;

  portfolio.workedCompanies.forEach((company) => {
    employmentExps.insertAdjacentHTML("beforeend", renderExpInCompany(company));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPortfolio(portfolio);
});
