import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionHeading({ overline, title, subtitle }) {
  return (
    <Box sx={{ mb: 2 }}>
      {overline ? (
        <Typography variant="overline" color="text.secondary">
          {overline}
        </Typography>
      ) : null}
      <Typography variant="h2" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}
