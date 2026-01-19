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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HubIcon from '@mui/icons-material/Hub';
import ShieldIcon from '@mui/icons-material/Shield';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading.jsx';
import { aiThemes } from '../data/workshopData.js';
import { colors } from '../styles/theme.js';

function HeroArt() {
  // Lightweight inline SVG – avoids external assets.
  return (
    <Box
      aria-hidden
      sx={{
        width: '100%',
        height: 320,
        borderRadius: 6,
        border: (t) => `1px solid ${t.palette.divider}`,
        bgcolor: 'background.paper',
        overflow: 'hidden'
      }}
    >
      <svg viewBox="0 0 900 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.22" />
            <stop offset="60%" stopColor={colors.secondary} stopOpacity="0.18" />
            <stop offset="100%" stopColor={colors.tertiary} stopOpacity="0.16" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <rect x="0" y="0" width="900" height="420" fill="url(#g)" />
        <circle cx="210" cy="120" r="90" fill={colors.primary} opacity="0.18" filter="url(#blur)" />
        <circle cx="610" cy="170" r="120" fill={colors.secondary} opacity="0.15" filter="url(#blur)" />
        <circle cx="460" cy="320" r="100" fill={colors.tertiary} opacity="0.14" filter="url(#blur)" />

        <g opacity="0.9">
          <rect x="110" y="90" width="240" height="170" rx="28" fill="#FFFFFF" opacity="0.65" />
          <rect x="395" y="70" width="250" height="190" rx="28" fill="#FFFFFF" opacity="0.62" />
          <rect x="680" y="120" width="170" height="150" rx="28" fill="#FFFFFF" opacity="0.6" />

          <path d="M350 160 L395 155" stroke={colors.secondary} strokeWidth="3" opacity="0.35" />
          <path d="M645 175 L680 190" stroke={colors.tertiary} strokeWidth="3" opacity="0.35" />

          <circle cx="330" cy="160" r="10" fill={colors.primary} opacity="0.7" />
          <circle cx="410" cy="155" r="10" fill={colors.secondary} opacity="0.7" />
          <circle cx="665" cy="175" r="10" fill={colors.tertiary} opacity="0.7" />
        </g>

        <text x="120" y="315" fontFamily="system-ui, -apple-system, Segoe UI, Roboto" fontSize="18" fill="#0C1B1D" opacity="0.65">
          Designer + AI-agent workflows, tool mapping, en praktijkcases.
        </text>
      </svg>
    </Box>
  );
}

export default function HomePage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: 6, pb: 5 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Chip
                label="TETRA: AI Powered Product Design (AIPPD)"
                color="primary"
                variant="outlined"
                sx={{ alignSelf: 'flex-start', bgcolor: 'background.paper' }}
              />
              <Typography variant="h1">
                Bouw een community rond AI Powered Product Design
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Een online hub voor Vlaamse organisaties om generatieve en agentic AI praktisch inzetbaar te maken in het
                New Product Development (NPD)-proces: van tool-mapping en workflows tot gevalideerde case studies.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
                <Button
                  component={RouterLink}
                  to="/toolmap"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                >
                  Verken de tool map
                </Button>
                <Button component={RouterLink} to="/agents" variant="outlined">
                  Leer agents bouwen
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroArt />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 2 }}>
        <SectionHeading
          overline="Projectfocus"
          title="Van generatieve naar agentic AI — in concrete NPD workflows"
          subtitle="De hub structureert de kennis rond drie kernlijnen: technologietransfer, praktijkcases, en kritische reflectie (privacy/IP, ROI en PLM/DPP)."
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <AutoAwesomeIcon color="primary" />
                  <Typography variant="h3">Technologietransfer</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Vertaal AI-tools naar bruikbare patronen en templates voor requirements, conceptontwikkeling, engineering en validatie.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <HubIcon color="primary" />
                  <Typography variant="h3">Praktijkcases</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Verzamel en documenteer use-cases in echte ontwerp- en R&D-omgevingen, met reproduceerbare inputs/outputs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <ShieldIcon color="primary" />
                  <Typography variant="h3">Kritische reflectie</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Do’s & Don’ts: privacy/IP, data-deling, governance, ROI-meetbaarheid en integratie met PLM en digitale productpaspoorten.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <SectionHeading
          overline="Thema’s"
          title="De 6 inhoudelijke lijnen die de community structureren"
          subtitle="Elke lijn wordt uitgewerkt in workshops, case templates en agent patterns."
        />

        <Grid container spacing={2}>
          {aiThemes.map((t) => (
            <Grid item xs={12} md={6} key={t.id}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
                    <Box>
                      <Typography variant="h3" sx={{ mb: 0.5 }}>
                        {t.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Prioriteit: {t.priority}
                      </Typography>
                    </Box>
                    <Chip label="Roadmap" size="small" variant="outlined" />
                  </Stack>
                  <Box sx={{ mt: 1.5 }}>
                    {t.prompts.map((p) => (
                      <Typography key={p} variant="body2" color="text.secondary" sx={{ mb: 0.6 }}>
                        • {p}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Button component={RouterLink} to="/academy" variant="outlined" endIcon={<ArrowForwardIcon />}>
            Bekijk de workshopreeks
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Card>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h3" sx={{ mb: 0.5 }}>
                  Output richting een online toolkit
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Naar analogie met bestaande design toolkits: vertrek vanuit de ontwerper, toon welke AI-tools per NPD-fase passen,
                  en illustreer met case studies en scenario’s.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={1.2} justifyContent="flex-end">
                  <Button component={RouterLink} to="/cases" variant="contained" endIcon={<ArrowForwardIcon />}>
                    Naar cases
                  </Button>
                  <Button component={RouterLink} to="/community" variant="outlined">
                    Word lid
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
