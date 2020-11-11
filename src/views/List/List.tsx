import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  SnackbarContent,
  Container,
} from '@material-ui/core';
import { fetchFilms, filmsSelector } from '../../store/filmsSlice';
import FilmBox from '../../components/FilmBox/FilmBox';
import Loader from '../../components/Loader/Loader';

const useStyles = makeStyles(() => ({
  snackbarContent: {
    width: '100%',
    margin: '20px 0',
  },
}));

export default function List() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { hasErrors, loading, films } = useSelector(filmsSelector);

  console.log('films', films);
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {loading && (<Loader isLoading={loading} />)}
        {hasErrors && (<SnackbarContent className={classes.snackbarContent} message={t('Error occured')} />)}
        {!loading && !hasErrors
          && (
            films.map((film) => (
              <Grid item xs={12} md={4}>
                <FilmBox film={film} />
              </Grid>
            ))
          )}
      </Grid>
    </Container>
  );
}
