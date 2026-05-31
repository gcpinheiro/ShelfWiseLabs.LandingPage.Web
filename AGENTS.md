# AGENTS.md

## Project Context

This project is `ShelfWiseLabs.LandingPage.Web`.

It is an Angular 20 landing page with SSR enabled, created as a sibling project to `shelf-wise-labs`.

The landing page presents ShelfWise Labs as a B2B/scientific service for shelf-life intelligence in the food industry.

Important positioning: this landing page must sell the service and the expected client outcomes, not the software itself. The software exists internally to accelerate the shelf-life prediction and laboratory analysis service.

It should communicate the value of the services built around the ShelfWise MVP:

- prediction flow for shelf-life behavior;
- laboratory analysis flow with real experiment inputs;
- what-if simulations based on measured laboratory results;
- technical curves for food components over time;
- business gains from better shelf-life decisions.

The visual tone should be technological, scientific, food/laboratory-oriented, and commercially credible.

## Tech Stack

Use:

- Angular 20
- Angular SSR
- Standalone components
- TypeScript
- SCSS

Avoid:

- Heavy UI libraries
- Backend implementation
- Authentication
- Real API integrations
- NgRx

## Angular Component File Structure

All Angular components must use separated files:

- `.ts` for component logic
- `.html` for template
- `.scss` for styles

Do not use inline `template` or inline `styles` in component decorators.

Use:

```ts
templateUrl: './component-name.html',
styleUrl: './component-name.scss',
```

## Landing Page Direction

Use ChartMogul's homepage as a design and behavior reference:

- clean, confident B2B layout;
- clear hero headline and direct CTA;
- strong emphasis on measurable outcomes;
- sections that read like a business case;
- product-like visual proof, but without making the product the thing being sold;
- calm white/neutral surfaces with technical accent colors;
- high trust, low visual noise;
- smooth animations that support comprehension.

Do not copy ChartMogul branding, wording, colors, or assets. Use it only as a structural and interaction reference.

The landing page should feel like a high-quality technical service website, not a generic SaaS template.

Core themes:

- shelf life
- food science
- laboratory measurements
- mathematical modeling
- technical curves
- prediction and simulation
- B2B decision support

The page should make clear that ShelfWise Labs helps companies get service outcomes:

- understand shelf-life drivers;
- compare technical scenarios;
- reduce uncertainty before costly experiments;
- use laboratory data as a baseline for simulations;
- communicate shelf-life gains with curves and proxy indicators.
- prioritize formulation, packaging, and storage decisions.

Important: do not claim real sensory validation or real machine learning unless implemented. Present the product as technical modeling and proxy-indicator analysis.

## UX/UI Direction

Use a polished, technological visual language:

- scientific dashboard feel;
- laboratory and food-tech references;
- mathematical formulas and curves;
- subtle motion and animated visual systems;
- strong first viewport with the ShelfWise Labs name clearly visible;
- credible B2B copy;
- restrained but modern palette.

Preferred visual cues:

- food/lab imagery or code-native visual scenes;
- technical chart lines;
- data bars;
- formulas;
- glass/lab surfaces;
- green/teal/blue scientific accents;
- clean cards with small radius, preferably 8px or less.

Avoid:

- generic marketing hero cards;
- decorative orbs/blobs;
- one-note purple gradient SaaS style;
- vague claims;
- landing content that hides the actual service.

## Content Priority

Prioritize:

- results of the service;
- technical deliverables;
- business impact;
- examples of shelf-life gains;
- how the laboratory workflow turns into decisions.

Deprioritize:

- software feature lists;
- app screenshots as the primary value proposition;
- generic SaaS copy;
- "platform" claims that make it sound like a self-service software sale.

## Current Landing Structure

The current implementation is a single Angular root component with:

- sticky header;
- animated hero scene;
- services section;
- gains/value section;
- method/process section;
- final CTA section.

Main files:

- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.scss`
- `src/styles.scss`
- `angular.json`

## Services To Communicate

### Fluxo A - Predicao

The user selects:

- company;
- food/product;
- one or more components.

The output is a chart where:

- X axis = time;
- Y axis = selected food component.

Example components:

- moisture;
- packaging;
- temperature;
- relative humidity;
- fat;
- sugar;
- protein;
- fiber.

### Fluxo B - Analise Laboratorial

A company contracts the service.

The team works with real laboratory data or manually entered lab results.

The flow includes:

- experiment registration;
- contracting company linkage;
- food/product linkage;
- laboratory measurement inputs;
- generated charts by component/metric;
- simulation from the measured experimental baseline.

Example laboratory metrics:

- moisture;
- firmness;
- acceptance proxy;
- pH;
- water activity.

### Simulations From Lab Results

After the laboratory baseline is created, users can change variables and generate simulations:

- initial moisture;
- packaging;
- storage temperature;
- relative humidity;
- other controllable product/process variables.

The system should communicate whether the scenario tends to:

- increase shelf life;
- reduce shelf life;
- keep shelf life close to baseline.

## Commands

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run start
```

Build SSR application:

```bash
npm run build
```

Run SSR server after build:

```bash
npm run serve:ssr:shelf-wise-labs-landing-page-web
```

## Current Notes

The project was created with Angular 20 SSR using:

```bash
npx -p @angular/cli@20 ng new shelf-wise-labs-landing-page-web --directory ShelfWiseLabs.LandingPage.Web --routing --style=scss --ssr --skip-git --defaults
```

The first `npm run build` generated browser/server bundles and prerendered the static route, but failed because the default Angular `anyComponentStyle` budget was too small for the animated landing page styles.

`angular.json` was adjusted to:

```json
{
  "type": "anyComponentStyle",
  "maximumWarning": "10kB",
  "maximumError": "14kB"
}
```

Run `npm run build` again in a new session to confirm final build status.

## Quality Rules

- Keep copy concise, technical, and credible.
- Prefer specific service language over vague marketing.
- Keep animations subtle and purposeful.
- Ensure mobile layout does not overlap text or visual elements.
- Preserve SSR compatibility.
- Do not introduce browser-only APIs without guarding them for SSR.
- Keep files separated and easy to scan.
