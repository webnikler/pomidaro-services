import React from 'react';
import Grid from './Grid';
import { useMediaQuery } from '@react-hook/media-query';
import { MediaQueries } from '@shared/enums';

const gridStyles: React.CSSProperties = {
  height: '100%',
};

const gridItemStyles: React.CSSProperties = {
  background: 'rgba(184,184,184,.4)',
};

export const GridPresentation = () => {
  const isXs = useMediaQuery(MediaQueries.xs);
  const isSm = useMediaQuery(MediaQueries.sm);
  const length = isXs ? 4 : isSm ? 8 : 12;

  return (
    <Grid style={gridStyles}>
      {Array.from({ length }).map((_, i) => (
        <Grid.Item col={1} key={i} style={gridItemStyles} />
      ))}
    </Grid>
  );
};
