import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Box,
} from '@material-ui/core';
import emptyPhoto from './emptyPhoto.svg';

type Props = {
  src?: string,
  alt: string
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  box: {
    minHeight: 'calc((100vw - 24px * 2) / 1.25)',
    [theme.breakpoints.up('md')]: {
      minHeight: '228px',
    },
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
