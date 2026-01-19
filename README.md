# AIPPD Community Hub (demo)

Eerste, werkende code-versie van een community-website rond **AI Powered Product Design (AIPPD)**, in een moderne, cleane stijl (Material Design 3-geïnspireerd) met een kleurpalet afgeleid uit de workshoppresentatie.

## Stack
- React + Vite
- Material UI (MUI)
- React Router

## Lokale installatie

1. Vereisten: Node.js 18+ (of 20+)
2. Installeren en starten:

```bash
npm install
npm run dev
```

Open vervolgens de URL die Vite toont (standaard: http://localhost:5173).

## Build / preview

```bash
npm run build
npm run preview
```

## Structuur
- `src/pages/*` — pagina’s (Visie, Tool Map, Workflows & Agents, Cases, Academy, Governance, Community)
- `src/data/*` — startdata voor cards en tool mapping
- `src/styles/theme.js` — MUI theme met MD3-gevoel en workshop-kleuren

## Next steps (voor de volgende iteratie)
- Auth (SSO / magic links), rollen en profielen
- Community features: Q&A, tags, upvotes, moderated submissions
- Case library: template + peer review + export naar PDF
- Events kalender + inschrijving
- “Agent templates” repository + evaluatie harness (KPI’s, traceability)
- Integratie met PLM/DMS (RAG) en governance controls
