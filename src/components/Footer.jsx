import React from 'react';
import { Box, Container, Divider, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8 }}>
      <Divider />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          AIPPD Community Hub — toolkit, workflows en praktijkvalidatie rond generatieve en agentic AI in productontwikkeling.
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Deze demo-site is een startpunt. Koppel later authenticatie, forum/Q&A, events en een case-library.
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Link href="#" underline="hover" color="inherit">
            Privacy
          </Link>
          <Link href="#" underline="hover" color="inherit">
            Contact
          </Link>
          <Link href="#" underline="hover" color="inherit">
            GitHub
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
