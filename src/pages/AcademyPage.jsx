import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import SectionHeading from '../components/SectionHeading.jsx';
import { workshops } from '../data/workshopData.js';

const contactMoments = [
  '6 contactmomenten met begeleidingsgroep (3/jaar)',
  'Focus op strategische AI thema\'s en kennis-overdracht',
  'Projectstatus en lessons learned',
  'Peer learning of demo (2–3 bedrijven)',
  'Combinatie theorie-overzicht + praktijkupdate van use-cases',
  'Extra: receptie en netwerking'
];

export default function AcademyPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: 6, pb: 3 }}>
        <SectionHeading
          overline="Learning"
          title="Academy: workshops en leerpaden"
          subtitle="Hands-on sessies die tool-vaardigheden koppelen aan ontwerpcompetenties. Gebruik deze pagina als basis voor een publiek programma en een interne leerlijn voor partners."
        />
      </Container>

      <Container maxWidth="lg" sx={{ pb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Begeleidingsgroep ritme
                </Typography>
                {contactMoments.map((c) => (
                  <Typography key={c} variant="body2" color="text.secondary" sx={{ mb: 0.6 }}>
                    • {c}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Format voor workshops
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Publiek (gratis voor een aantal personen per partner). Focus op AI-tools, met directe link naar ontwerp- en engineering skills.
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label="Hands-on" variant="outlined" />
                  <Chip label="Templates" variant="outlined" />
                  <Chip label="Case based" variant="outlined" />
                  <Chip label="Human-in-the-loop" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <SectionHeading
          overline="Workshops"
          title="De 8 verdiepende workshops (startset)"
          subtitle="Elke workshop kan eindigen met een gepubliceerde template: prompts, checklists, output formats en een mini-case." 
        />

        <Grid container spacing={2}>
          {workshops.map((w) => (
            <Grid item xs={12} md={6} key={w.nr}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Box>
                      <Typography variant="h3" sx={{ mb: 0.6 }}>
                        {w.nr}. {w.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Voorbeelden: {w.examples.join(' · ')}
                      </Typography>
                    </Box>
                    <Chip label="Hands-on" color="primary" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
