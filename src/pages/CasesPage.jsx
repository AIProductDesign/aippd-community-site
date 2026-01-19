import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SectionHeading from '../components/SectionHeading.jsx';

const demoCases = [
  {
    title: 'Conceptvarianten in 2 uur (Sketch→Render)',
    tags: ['Ideate', 'Vizcom', 'CMF'],
    impact: 'Snellere variatie + vroege stakeholder alignment.'
  },
  {
    title: 'Synthetic users voor snelle concept screening',
    tags: ['Test', 'Delve AI', 'UX'],
    impact: 'Snelle signalen vóór fysieke prototypes.'
  },
  {
    title: 'Eerste FTO pass met LLM + patent databases',
    tags: ['Define', 'IP', 'RAG'],
    impact: 'Sneller risico-inschatten en zoekrichtingen aanscherpen.'
  }
];

export default function CasesPage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: 6, pb: 3 }}>
        <SectionHeading
          overline="Case library"
          title="Case studies: van tool naar workflow"
          subtitle="Documenteer cases als reproduceerbare recepten: context → input → workflow → output → KPI's → lessons learned."
        />
      </Container>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Grid container spacing={2}>
          {demoCases.map((c) => (
            <Grid item xs={12} md={4} key={c.title}>
              <Card>
                <CardContent>
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    {c.title}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
                    {c.tags.map((t) => (
                      <Chip key={t} label={t} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {c.impact}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h3" sx={{ mb: 0.8 }}>
              Voeg een case toe (placeholder)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              In een volgende iteratie: login, submissions, peer review en publicatie naar de toolkit.
            </Typography>
            <Button variant="contained" startIcon={<AddIcon />}>Case indienen</Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
