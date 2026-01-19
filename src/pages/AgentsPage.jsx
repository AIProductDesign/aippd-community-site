import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeading from '../components/SectionHeading.jsx';
import { Link as RouterLink } from 'react-router-dom';

const patterns = [
  {
    title: 'Prompting → Templates',
    tag: 'Baseline',
    desc: 'Start met gestandaardiseerde prompts en outputs (brief, requirements, concept review). Goed voor snelle adoptie en consistentie.'
  },
  {
    title: 'RAG (Retrieval-Augmented Generation)',
    tag: 'Enterprise-ready',
    desc: 'Koppel de LLM aan je eigen kennisbronnen (DMS, PLM, guidelines) met controleerbare bronnen en citaten.'
  },
  {
    title: 'Tool-using Agents',
    tag: 'Agentic',
    desc: 'Agents die stappenplannen uitvoeren en tools aanroepen (CAD scripts, spreadsheets, testplan generators) met human-in-the-loop.'
  },
  {
    title: 'Multi-agent workflows',
    tag: 'Scale',
    desc: 'Rollen zoals Researcher, Critic, Planner, Compliance... die elkaar controleren en iteratief verbeteren.'
  }
];

const buildSteps = [
  {
    title: '1) Taakafbakening',
    bullets: ['Welke NPD-beslissing wil je versnellen?', 'Welke input is minimaal nodig?', 'Welke output is "done"?']
  },
  {
    title: '2) Data & context',
    bullets: ['Welke documenten zijn relevant (DMS/PLM)?', 'Welke dataklassen zijn gevoelig?', 'Wat mag naar cloud vs on-prem?']
  },
  {
    title: '3) Evaluatie',
    bullets: ['Definieer KPI\'s (doorlooptijd, iteraties, kwaliteit)', 'Test met edge cases', 'Log prompts, bronnen en beslissingen']
  },
  {
    title: '4) Governance',
    bullets: ['Privacy/IP checks', 'Prompt/output policies', 'Audit trail (traceability)']
  }
];

export default function AgentsPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: 6, pb: 3 }}>
        <SectionHeading
          overline="Agentic Design"
          title="Leer agents bouwen voor product design"
          subtitle="Van prompt templates naar tool-using agents en (op termijn) world-model geïnspireerde simulaties. Dit deel is de leer- en experimenteerruimte van de community."
        />
      </Container>

      <Container maxWidth="lg" sx={{ pb: 2 }}>
        <Grid container spacing={2}>
          {patterns.map((p) => (
            <Grid item xs={12} md={6} key={p.title}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Box>
                      <Typography variant="h3" sx={{ mb: 0.5 }}>
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {p.desc}
                      </Typography>
                    </Box>
                    <Chip label={p.tag} variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <SectionHeading
          overline="Blueprint"
          title="Een minimal viable agent in 4 stappen"
          subtitle="Ontwerp het systeem als een reproduceerbare workflow met meetbare prestaties, niet als een losse prompt."
        />

        <Grid container spacing={2}>
          {buildSteps.map((s) => (
            <Grid item xs={12} md={6} key={s.title}>
              <Card>
                <CardContent>
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {s.title}
                  </Typography>
                  {s.bullets.map((b) => (
                    <Typography key={b} variant="body2" color="text.secondary" sx={{ mb: 0.6 }}>
                      • {b}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h3" sx={{ mb: 1 }}>
              Vooruitblik: world models
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Voor complexere productarchitecturen en validatie is een volgende stap het combineren van agentic workflows met
              simulaties en "world models" (interne representaties van systeemgedrag) om ontwerpbeslissingen sneller te toetsen.
              Denk aan: scenario-simulatie, probabilistische onzekerheid en constraint-checking.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2}>
              <Button component={RouterLink} to="/academy" variant="contained" endIcon={<ArrowForwardIcon />}>
                Workshop: AI-agent in je workflow
              </Button>
              <Button component={RouterLink} to="/governance" variant="outlined">
                Governance & risico's
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
