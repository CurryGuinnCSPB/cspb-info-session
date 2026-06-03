# CSPB Self-Guided Information Session

A prototype website for a self-guided information session for the CU Boulder Computer Science Post-Baccalaureate Program.

This site is intended to supplement or eventually provide an alternative to the current live monthly virtual information session. The prototype presents the core information in a modular, browsable format with short video placeholders, written summaries, program highlights, FAQs, and calls to action for applying or contacting CSPB.

## Prototype status

This is a working prototype, not a production site.

### Temporary internal prototype URL

```text
https://curryguinncspb.github.io/cspb-info-session/
```

This URL is temporary. A cleaner custom subdomain should be configured before broad stakeholder review or any public/prospective-student use.

## What is real in this prototype

The current prototype demonstrates:

- The overall site structure.
- A landing page for the self-guided information session.
- A simulated Qualtrics intake flow.
- A dashboard-style main page.
- Left-side navigation on desktop.
- Mobile navigation.
- Module cards driven by controlled JSON data.
- Program-highlight cards driven by controlled JSON data.
- Dynamic module pages.
- Sample detailed module treatments for:
  - Career Outcomes
  - Curriculum
  - Admissions Requirements
- A basic FAQ page.
- Reusable Astro components.
- GitHub Pages deployment through GitHub Actions.

## What is placeholder

The following are placeholders and should not be treated as final or approved:

- Videos and video thumbnails.
- Qualtrics form integration.
- Appointment scheduling links.
- Some external links.
- Tuition and fee information.
- Application deadlines.
- Career outcomes data and charts.
- Admissions copy.
- Transfer-credit guidance.
- Non-degree policy language.
- Staff/team information.
- CU Boulder brand review.
- Accessibility review.
- Privacy/contact-language review.
- Analytics implementation.

## Technical stack

```text
Astro
Tailwind CSS 4
Static JSON data files
GitHub Pages
GitHub Actions
```

The site is static. It does not use a server-side backend. Data capture is expected to happen through CU Boulder Qualtrics in a future integration.

## Local development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Astro will print a local URL, usually:

```text
http://localhost:4321/
```

Build the site:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Git workflow

The current working branch structure is:

```text
main
  Deployed branch / stable review branch

prototype-v0
  Development branch for prototype work
```

Recommended workflow:

```bash
git checkout prototype-v0
# make changes
npm run build
git add .
git commit -m "Describe the change"
git push
```

When the prototype branch is ready to deploy:

```bash
git checkout main
git merge prototype-v0
git push
```

The GitHub Actions workflow deploys the site from `main`.

## Deployment

The site deploys to GitHub Pages using the workflow in:

```text
.github/workflows/deploy.yml
```

The temporary GitHub Pages configuration assumes the project-page URL:

```text
https://curryguinncspb.github.io/cspb-info-session/
```

That requires the Astro configuration to include:

```js
site: "https://curryguinncspb.github.io",
base: "/cspb-info-session"
```

When a custom subdomain is added later, the Astro `site` and `base` settings may need to change. If the site is served from the root of a custom domain, the `base` setting will likely be removed.

## Important Tailwind note

This project uses Tailwind CSS 4.

The global stylesheet should begin with:

```css
@import "tailwindcss";
```

Do not replace this with the older Tailwind 3 syntax:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Using the older syntax with this project caused Tailwind utility classes not to compile, which made the site appear mostly unstyled.

## Project structure

```text
src/
  components/
    AdmissionsChecklist.astro
    CourseTable.astro
    CTAButton.astro
    FAQAccordion.astro
    Footer.astro
    GlobalCTA.astro
    Hero.astro
    Layout.astro
    MobileNav.astro
    ModuleCard.astro
    ModuleGrid.astro
    OutcomePanel.astro
    ProofPointStrip.astro
    ReviewNote.astro
    SamplePacing.astro
    SidebarNav.astro
    VideoPlaceholder.astro

  data/
    admissions.json
    courses.json
    faqs.json
    links.json
    modules.json
    outcomes.json
    programFacts.json

  pages/
    index.astro
    register.astro
    dashboard.astro
    faq.astro
    modules/
      [slug].astro

  styles/
    global.css

  utils/
    resolveLink.js
```

## Controlled content

High-maintenance content should live in `src/data/` rather than being hard-coded across pages and components.

Current controlled-content files:

| File | Purpose |
|---|---|
| `modules.json` | Module titles, questions, summaries, nav labels, source-slide references, and CTAs |
| `programFacts.json` | Program-highlight proof points |
| `courses.json` | Required and elective course lists |
| `links.json` | Apply, appointment, admissions, non-degree, tuition, contact, and other links |
| `faqs.json` | FAQ items |
| `admissions.json` | Prototype admissions requirements and checklist |
| `outcomes.json` | Prototype career-outcomes panels and methodology notes |

Before production, these files need ownership, verification, and review dates.

## Current pages

```text
/
  Landing page

/register/
  Simulated Qualtrics intake step

/dashboard/
  Main self-guided info-session dashboard

/modules/career-outcomes/
  Sample detailed career outcomes module

/modules/curriculum/
  Sample detailed curriculum module

/modules/admissions-requirements/
  Sample detailed admissions requirements module

/modules/[other-module]/
  Generated placeholder module pages

/faq/
  FAQ page
```

## Qualtrics integration plan

The current `/register/` page is a mockup. It simulates completion by setting a browser `localStorage` flag and routing the visitor to the dashboard.

Future production flow:

```text
Landing page
  ↓
CU Boulder Qualtrics form
  ↓
Qualtrics redirects to dashboard
  ↓
Dashboard stores return-visitor flag
```

Recommended production approach:

- Use a CU Boulder Qualtrics form for name/email/intake data.
- Keep the GitHub Pages site static.
- Use Qualtrics as the official data-capture system.
- Avoid collecting personal information directly in the static site.

## Stakeholder review guidance

When sharing the prototype, reviewers should focus on:

- Does the self-guided info-session model make sense?
- Does the dashboard structure work?
- Are the module categories right?
- Does the site feel appropriate for CSPB and CU Boulder?
- Does the site avoid feeling like a bootcamp or generic ed-tech sales page?
- Are the main calls to action clear?
- Is the mock Qualtrics flow acceptable?
- Which modules need real video first?
- What information is missing?
- Which content requires official approval before launch?

Reviewers should not treat the following as final:

- Exact copy.
- Exact data.
- Video content.
- Links.
- Brand treatment.
- Tuition/admissions/career-outcome claims.

## Production readiness checklist

Before this site can be used publicly, the following need to be completed:

- [ ] Configure a clean custom domain or CU-approved hosting URL.
- [ ] Replace mock Qualtrics step with a real CU Boulder Qualtrics form.
- [ ] Verify Qualtrics redirect behavior.
- [ ] Replace placeholder links.
- [ ] Verify admissions requirements.
- [ ] Verify application deadlines.
- [ ] Verify tuition and fee information.
- [ ] Verify transfer-credit and non-degree policy language.
- [ ] Verify course lists and credit hours.
- [ ] Verify career outcomes data and methodology.
- [ ] Add real videos.
- [ ] Add captions and transcripts.
- [ ] Review privacy/contact language.
- [ ] Conduct accessibility review.
- [ ] Conduct CU Boulder brand review.
- [ ] Decide on analytics, if any.
- [ ] Assign content owners and review schedule.
- [ ] Final stakeholder approval.

## Known issues / near-term tasks

- Replace obvious placeholder links in `src/data/links.json`.
- Decide whether the registration gate should be required or skippable.
- Decide whether to track only aggregate site behavior or pass a session ID into Qualtrics.
- Decide where videos will be hosted.
- Create a stakeholder review note before broader sharing.
- Configure a custom subdomain before public/prospective-student use.

## License / ownership

License and institutional ownership are not yet specified. Do not assume this prototype has been approved for public reuse or redistribution until CU Boulder / program ownership is clarified.
