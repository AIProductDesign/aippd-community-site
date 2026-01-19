import { createTheme } from '@mui/material/styles';

// Palette afgeleid uit dominante en verzadigde kleuren in de workshop slides
// (aangevuld met neutrale surfaces). Doel: Material Design 3-gevoel (clean,
// zachte surfaces, pill buttons, grotere radii).
const colors = {
  primary: '#079FE5',     // cyan/blue accent (slides)
  secondary: '#163B5A',   // deep navy (contrast)
  tertiary: '#F52B97',    // magenta accent (slides)
  background: '#F6F8F9',  // light neutral
  surface: '#FFFFFF',
  outline: '#D9DEE3',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onSurface: '#101314'
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: colors.primary, contrastText: colors.onPrimary },
    secondary: { main: colors.secondary, contrastText: colors.onSecondary },
    info: { main: colors.tertiary },
    background: {
      default: colors.background,
      paper: colors.surface
    },
    divider: colors.outline,
    text: {
      primary: colors.onSurface
    }
  },
  shape: {
    borderRadius: 16
  },
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: { fontSize: '2.2rem', fontWeight: 700, letterSpacing: -0.6 },
    h2: { fontSize: '1.6rem', fontWeight: 700, letterSpacing: -0.4 },
    h3: { fontSize: '1.25rem', fontWeight: 650 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.95rem', lineHeight: 1.6 }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'saturate(180%) blur(10px)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.outline}`
        }
      }
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
          paddingLeft: 16,
          paddingRight: 16
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24
        }
      }
    }
  }
});

export default theme;
export { colors };
