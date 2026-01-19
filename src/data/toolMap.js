export const toolMap = [
  {
    phase: 'Discover',
    goal: 'Inzichten en trends structureren',
    tools: [
      { name: 'Perplexity / web RAG', type: 'GenAI', output: 'Trend synthese' },
      { name: 'Dovetail AI', type: 'Analytics', output: 'Clustering van quotes' },
      { name: 'LLM agent: Insight Harvester', type: 'Agentic', output: 'Issues + evidence cards' }
    ]
  },
  {
    phase: 'Define',
    goal: 'Requirements, constraints en risico\'s',
    tools: [
      { name: 'Prompt templates (PRD/BRD)', type: 'GenAI', output: 'Design brief' },
      { name: 'LLM + policy checks', type: 'Agentic', output: 'Privacy/IP flags' },
      { name: 'Notion/Confluence AI', type: 'Doc', output: 'Spec drafting' }
    ]
  },
  {
    phase: 'Ideate',
    goal: 'Conceptvarianten genereren en beoordelen',
    tools: [
      { name: 'Vizcom', type: 'GenAI', output: 'Sketch→render varianten' },
      { name: 'Miro AI', type: 'GenAI', output: 'Concept map + flows' },
      { name: 'LLM agent: Concept Critic', type: 'Agentic', output: 'Trade-off analyse' }
    ]
  },
  {
    phase: 'Prototype',
    goal: 'Snel itereren met 3D en engineering constraints',
    tools: [
      { name: 'Meshy', type: 'GenAI', output: 'Text/image→3D block-out' },
      { name: 'Rhino/Grasshopper + scripts', type: 'Engineering', output: 'Parametrische varianten' },
      { name: 'nTopology / CAE assist', type: 'Engineering', output: 'Optimalisatie' }
    ]
  },
  {
    phase: 'Test',
    goal: 'Snelle validatie met gebruikers en data',
    tools: [
      { name: 'Delve AI (synthetic users)', type: 'GenAI', output: 'Persona feedback' },
      { name: 'Maze/Figma AI', type: 'Analytics', output: 'UX test analysis' },
      { name: 'LLM agent: Insight Summarizer', type: 'Agentic', output: 'Issues→actions' }
    ]
  },
  {
    phase: 'Launch',
    goal: 'Documentatie, PLM, DPP evidence',
    tools: [
      { name: 'Copilot', type: 'Doc', output: 'Tech docs' },
      { name: 'n8n + LLM', type: 'Agentic', output: 'Workflow automation' },
      { name: 'PLM/DMS integratie', type: 'Integration', output: 'Traceability + DPP' }
    ]
  }
];
