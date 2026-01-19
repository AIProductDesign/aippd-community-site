import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SectionHeading from '../components/SectionHeading.jsx';
import { toolMap } from '../data/toolMap.js';

const typeChipColor = (type) => {
  switch (type) {
    case 'GenAI':
      return 'primary';
    case 'Agentic':
      return 'info';
    default:
      return 'default';
  }
};

export default function ToolMapPage() {
  const [query, setQuery] = React.useState('');

  const q = query.trim().toLowerCase();
  const filtered = toolMap.filter((phase) => {
    if (!q) return true;
    if (phase.phase.toLowerCase().includes(q)) return true;
    if (phase.goal.toLowerCase().includes(q)) return true;
    return phase.tools.some(
      (t) => t.name.toLowerCase().includes(q) || t.type.toLowerCase().includes(q) || t.output.toLowerCase().includes(q)
    );
  });

  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: 6, pb: 3 }}>
        <SectionHeading
          overline="NPD mapping"
          title="AI tool map over het productontwikkelingsproces"
          subtitle="Een pragmatische kapstok om tools, outputs en agent-rollen per fase te organiseren. Gebruik dit als startpunt; verfijn later per sector en maturiteit." 
        />

        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek op fase, tool, type of output..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            )
          }}
        />
      </Container>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Grid container spacing={2}>
          {filtered.map((phase) => (
            <Grid item xs={12} md={6} key={phase.phase}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Box>
                      <Typography variant="h3" sx={{ mb: 0.3 }}>
                        {phase.phase}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {phase.goal}
                      </Typography>
                    </Box>
                    <Chip label={`${phase.tools.length} items`} size="small" variant="outlined" />
                  </Stack>

                  <Box sx={{ mt: 2, display: 'grid', gap: 1 }}>
                    {phase.tools.map((t) => (
                      <Box
                        key={`${phase.phase}-${t.name}`}
                        sx={{
                          p: 1.2,
                          borderRadius: 3,
                          bgcolor: 'background.default',
                          border: (theme) => `1px solid ${theme.palette.divider}`
                        }}
                      >
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.3, flexWrap: 'wrap' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                            {t.name}
                          </Typography>
                          <Chip
                            label={t.type}
                            size="small"
                            color={typeChipColor(t.type)}
                            variant={t.type === 'Agentic' ? 'filled' : 'outlined'}
                          />
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                          Output: {t.output}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filtered.length === 0 ? (
          <Box sx={{ py: 6, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 1 }}>
              Geen resultaten
            </Typography>
            <Typography color="text.secondary">
              Pas je zoekterm aan of wis de filter.
            </Typography>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
