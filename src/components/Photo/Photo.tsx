import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
} from '@material-ui/core';
import emptyPhoto from './emptyPhoto.svg';

type Props = {
  src?: string,
  alt: string
};

const useStyles = makeStyles(() => ({
  box: {
    minHeight: 'calc(180 / 250 * 100vw)',
  },
}));

export default function Photo({
  src = null,
  alt,
}: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.box} display="flex" justifyContent="center" alignItems="center" bgcolor="background.paper">
      <img src={src || emptyPhoto} alt={src ? alt : 'No Photo'} />
    </Box>
  );
}
