import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Container,
} from '@material-ui/core';
import { fetchFilms } from '../../store/filmsSlice';
import FilmBox from '../../components/FilmBox/FilmBox';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderRadius: 0,
  },
}));

export default function List() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FilmBox />
        </Grid>
      </Grid>
    </Container>
  );
}
