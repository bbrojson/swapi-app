import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Container,
} from '@material-ui/core';
import { fetchFilm, filmSelector } from '../../store/filmsSlice';
import FilmBox from '../../components/FilmBox/FilmBox';
import Loader from '../../components/Loader/Loader';
import ErrorInfo from '../../components/ErrorInfo/ErrorInfo';

export default function Film() {
  const { id: filmId } = useParams();
  const dispatch = useDispatch();
  const { film, loading, hasErrors } = useSelector(filmSelector(filmId));

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [dispatch]);

  const {
    url: id,
    title,
    director,
    release_date: releaseDate,
    opening_crawl: openingCrawl,
  } = film || {};

  return (
    <div>
      {loading && (<Loader isLoading={loading} />)}
      {hasErrors && (<ErrorInfo />)}
      {film && (
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FilmBox
                id={id}
                title={title}
                director={director}
                releaseDate={releaseDate}
                openingCrawl={openingCrawl}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}
