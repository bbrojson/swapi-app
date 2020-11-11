import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CircularProgress,
  Box,
} from '@material-ui/core';

type Props = {
  isLoading: boolean,
};

const useStyles = makeStyles(() => ({
  box: {
    width: '100%',
    minHeight: '150px',
  },
}));

export default function Loader({
  isLoading,
}: Props) {
  const classes = useStyles();
  return (
    isLoading
      ? (
        <Box className={classes.box} display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      ) : null
  );
}
