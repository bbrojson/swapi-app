import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {
  Grid,
} from '@material-ui/core';
import { FilmState } from '../../store/filmsSlice';
import { Film } from '../../types';
import { RootState } from '../../store/store';
import FilmBox from '../FilmBox/FilmBox';
import SearchInput from '../SearchInput/SearchInput';

type Props = {
  films: Film[],
};

function SearchList({ films }: Props) {
  return (
    <>
      <Grid item xs={12}>
        <SearchInput />
      </Grid>
      {films.map(({
        episode_id: id,
        title,
        director,
        release_date: releaseDate,
        opening_crawl: openingCrawl,
      }) => (
        <Grid key={id} item xs={12} md={4}>
          <FilmBox
            title={title}
            director={director}
            releaseDate={releaseDate}
            openingCrawl={openingCrawl}
          />
        </Grid>
      ))}
    </>
  );
}

const selectFilms = (state: RootState): FilmState => state.films;
const selectFilteredFilms = createSelector(
  [selectFilms],
  ({ films, filterText }) => {
    if (filterText !== null) {
      return films.filter((film) => (film.title.toLowerCase().indexOf(filterText) !== -1));
    }
    return films;
  },
);
const mapStateToProps = (state: RootState) => ({
  films: selectFilteredFilms(state),
});

export default connect(
  mapStateToProps,
)(SearchList);
