import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import {
  Grid,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FilmState } from '../../store/filmsSlice';
import { Film, SortType } from '../../types';
import { RootState } from '../../store/store';
import FilmBox from '../FilmBox/FilmBox';
import SearchInput from '../SearchInput/SearchInput';
import SortSelect from '../SortSelect/SortSelect';

type Props = {
  films: Film[],
};

const useStyles = makeStyles(() => createStyles({
  root: {
    marginTop: '50px',
    marginBottom: '15px',
  },
}));

function SearchList({ films }: Props) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} sm={8}>
          <SearchInput />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SortSelect />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {
          films.map(({
            id,
            title,
            director,
            release_date: releaseDate,
            opening_crawl: openingCrawl,
          }) => (
            <Grid key={id} item xs={12} md={4}>
              <FilmBox
                id={id}
                title={title}
                director={director}
                releaseDate={releaseDate}
                openingCrawl={openingCrawl}
              />
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  );
}

const selectFilms = (state: RootState): FilmState => state.films;
const selectSortType = (state: RootState): SortType => state.films.sortType;
const selectFilteredFilms = createSelector(
  [selectFilms],
  ({ films, filterText }) => {
    if (filterText !== null) {
      return films.filter((film) => (film.title.toLowerCase().indexOf(filterText) !== -1));
    }
    return films;
  },
);
const selectSortedFilms = createSelector(
  [selectSortType, selectFilteredFilms],
  (sortType, films) => {
    const sortedFilms = [...films];
    switch (sortType) {
      case SortType.ascending:
        sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case SortType.descending:
        sortedFilms.sort((b, a) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return sortedFilms;
  },
);
const mapStateToProps = (state: RootState) => ({
  films: selectSortedFilms(state),
});

export default connect(
  mapStateToProps,
)(SearchList);
