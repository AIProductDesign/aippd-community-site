export const aiThemes = [
  {
    id: 'tech-now-next',
    title: 'AI-technologieën: nu & binnenkort',
    priority: '15/18',
    prompts: [
      'Welke AI-paradigma\'s zijn relevant (GenAI, agentic, multimodal, on-device)?',
      'Welke maturiteit/TRL per technologie en welke beperkingen?'
    ]
  },
  {
    id: 'tool-mapping',
    title: 'Mapping AI-tools binnen NPD',
    priority: '16/18',
    prompts: [
      'Welke tools passen in welke NPD-fase en waarom?',
      'Welke inputs/outputs, dataformaten en integraties zijn nodig?'
    ]
  },
  {
    id: 'workflows-agent',
    title: 'Workflows: ontwerper + AI-agent',
    priority: '17/18',
    prompts: [
      'Welke taken laat je bij de ontwerper vs. bij de agent?',
      'Welke workflow-architecturen werken (prompting, RAG, multi-agent, human-in-the-loop)?'
    ]
  },
  {
    id: 'privacy-ip',
    title: 'Risico\'s: privacy & IP',
    priority: '12/18',
    prompts: [
      'Welke data mogen wel/niet naar externe modellen (confidentialiteit, GDPR)?',
      'Hoe beheer je IP, licenties en output-rechten?'
    ]
  },
  {
    id: 'roi',
    title: 'ROI & business case',
    priority: '11/18',
    prompts: [
      'Waar zit tijdswinst/kwaliteitswinst in het proces, en hoe meet je dit?',
      'Welke KPI\'s zijn bruikbaar (doorlooptijd, iteraties, scrap, rework)?'
    ]
  },
  {
    id: 'plm-dpp',
    title: 'PLM/DPP: duurzaamheid & data',
    priority: '10/18',
    prompts: [
      'Hoe koppel je AI-tools aan PLM/DMS zonder datalekken?',
      'Hoe automatiseer je DPP-informatie (materialen, reparatie, CO2) betrouwbaar?'
    ]
  }
];

export const workshops = [
  {
    nr: 1,
    title: 'Prompt Engineering: Design Brief to Decision',
    examples: ['ChatGPT vs Gemini']
  },
  {
    nr: 2,
    title: 'AI Trend- & Insight Sprint',
    examples: ['Discover/Define']
  },
  {
    nr: 3,
    title: 'AI-Agent in je NPD Workflow',
    examples: ['Designer + Agent samenwerking']
  },
  {
    nr: 4,
    title: 'Sketch → Render & CMF Variants',
    examples: ['Vizcom']
  },
  {
    nr: 5,
    title: 'Text/Image → 3D Block-out voor snelle prototyping',
    examples: ['Meshy']
  },
  {
    nr: 6,
    title: 'Synthetic Users voor snelle conceptvalidatie',
    examples: ['Delve AI']
  },
  {
    nr: 7,
    title: 'AI voor FTO & Patentability: eerste pass',
    examples: ['Google Patents/Espacenet + LLM']
  },
  {
    nr: 8,
    title: 'DMS/PLM/DPP & ISO/FAGG evidence automation',
    examples: ['n8n + LLM + DMS-integraties']
  }
];

export const organizations = [
  { name: 'Lazer Sport', type: 'Grote onderneming', note: '>250 werknemers' },
  { name: 'Niko', type: 'Grote onderneming', note: '>250 werknemers' },
  { name: 'Signify', type: 'Grote onderneming', note: '>250 werknemers' },
  { name: 'Eqwal Ability NV', type: 'Grote onderneming', note: '>250 werknemers' },
  { name: 'Unilin BV – division flooring', type: 'Grote onderneming', note: '>250 werknemers' },
  { name: 'Novy', type: 'Middelgrote onderneming', note: '>50 en <250 werknemers' },
  { name: 'Comate BV', type: 'Middelgrote onderneming', note: '>50 en <250 werknemers' },
  { name: 'Robberechts', type: 'Middelgrote onderneming', note: '>50 en <250 werknemers' },
  { name: 'Televic', type: 'Middelgrote onderneming', note: '>50 en <250 werknemers' },
  { name: 'Verhaert', type: 'Middelgrote onderneming', note: '>50 en <250 werknemers' },
  { name: 'Pars Pro Toto', type: 'Kleine onderneming', note: '<50' },
  { name: 'Artori', type: 'Kleine onderneming', note: '<50' },
  { name: 'Knight Moves', type: 'Kleine onderneming', note: '<50' },
  { name: 'Voxdale bv', type: 'Kleine onderneming', note: '<50' },
  { name: 'Futurewave', type: 'Kleine onderneming', note: '<50' },
  { name: 'boonendesignstudio', type: 'Kleine onderneming', note: '<50' },
  { name: 'KAN Design', type: 'Kleine onderneming', note: '<50' },
  { name: 'The Argonauts', type: 'Kleine onderneming', note: '<50' },
  { name: 'Fosfor', type: 'Kleine onderneming', note: '<50' },
  { name: 'The Whitebox (Darwin Design)', type: 'Starter', note: '<5 jaar' },
  { name: 'AI-BLOX', type: 'Starter', note: '<5 jaar' },
  { name: 'Flanders DC', type: 'Sectorfederatie', note: 'in kind' },
  { name: 'Agoria', type: 'Sectorfederatie', note: '' },
  { name: 'mict-UGent (design.nexus)', type: 'Partner', note: '' },
  { name: 'mict-UAntwerpen (ProductDevelopment)', type: 'Partner', note: '' },
  { name: 'Thomas More', type: 'Kennisinstelling', note: '' }
];

export const npdPhases = [
  {
    id: 'discover',
    title: 'Discover',
    desc: 'Trend- en insight capture, probleemdefinitie, stakeholders & context.'
  },
  {
    id: 'define',
    title: 'Define',
    desc: 'Requirements, scope, success metrics, risico\'s & governance.'
  },
  {
    id: 'ideate',
    title: 'Ideate',
    desc: 'Conceptvarianten, CMF, flows, evaluatiecriteria & trade-offs.'
  },
  {
    id: 'prototype',
    title: 'Prototype',
    desc: 'Text/Sketch → render, snelle 3D block-outs, parametrische varianten.'
  },
  {
    id: 'test',
    title: 'Test',
    desc: 'Synthetic users, testplannen, analyse van feedback, iteratie.'
  },
  {
    id: 'launch',
    title: 'Launch',
    desc: 'Documentatie, PLM/DPP evidence, kwaliteitsborging en overdracht.'
  }
];
