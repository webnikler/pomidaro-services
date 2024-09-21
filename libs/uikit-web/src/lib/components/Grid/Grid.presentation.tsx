import React from 'react';
import Grid from './Grid';

const gridStyles: React.CSSProperties = {
  height: '100%',
};

const gridItemStyles: React.CSSProperties = {
  background: 'rgba(184,184,184,.4)',
};

export const GridPresentation = () => {
  return (
    <Grid style={gridStyles}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Grid.Item col={1} key={i} style={gridItemStyles} />
      ))}
    </Grid>
  );
};
