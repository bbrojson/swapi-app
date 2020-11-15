import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Container,
} from '@material-ui/core';
import { fetchFilms, filmsSelector } from '../../store/filmsSlice';
import SearchList from '../../components/SearchList/SearchList';
import Loader from '../../components/Loader/Loader';
import ErrorInfo from '../../components/ErrorInfo/ErrorInfo';

export default function List() {
  const dispatch = useDispatch();
  const { hasErrors, loading } = useSelector(filmsSelector);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {loading && (<Loader isLoading={loading} />)}
        {hasErrors && (<ErrorInfo />)}
        {!loading && !hasErrors && (<SearchList />)}
      </Grid>
    </Container>
  );
}
