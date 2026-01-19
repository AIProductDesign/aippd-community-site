import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Visie', to: '/' },
  { label: 'NPD Tool Map', to: '/toolmap' },
  { label: 'Workflows & Agents', to: '/agents' },
  { label: 'Case Studies', to: '/cases' },
  { label: 'Academy', to: '/academy' },
  { label: 'Governance', to: '/governance' },
  { label: 'Community', to: '/community' }
];

export default function TopNav() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: (t) => `1px solid ${t.palette.divider}` }}
    >
      <Toolbar disableGutters>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <Box
              aria-hidden
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2.5,
                bgcolor: 'primary.main',
                display: 'grid',
                placeItems: 'center'
              }}
            >
              <Typography sx={{ color: 'primary.contrastText', fontWeight: 800 }}>A</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                AIPPD
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.1 }}>
                AI Powered Product Design
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                color="inherit"
                sx={{
                  px: 1.2,
                  '&.active': {
                    bgcolor: 'action.selected'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Open menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 320, p: 1 }} role="presentation">
          <Typography sx={{ p: 2, fontWeight: 800 }}>Navigatie</Typography>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.to} component={NavLink} to={item.to}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
