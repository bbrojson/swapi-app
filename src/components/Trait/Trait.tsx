import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';

type Props = {
  src: string,
  alt: string,
  text: string,
};

export default function Trait({
  src,
  alt,
  text,
}: Props) {
  return (
    <Box pr={4} display="flex" justifyContent="flex-start" alignItems="center">
      <Box pr={2}><img src={src} alt={alt} /></Box>
      <Typography component="span" variant="body1">{text}</Typography>
    </Box>
  );
}
