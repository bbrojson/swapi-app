import React from 'react';
import { useSelector } from 'react-redux';
import {
  Grid,
} from '@material-ui/core';
import { filmsSelector } from '../../store/filmsSlice';
import FilmBox from '../FilmBox/FilmBox';
import SearchInput from '../SearchInput/SearchInput';

export default function SearchList() {
  const { films } = useSelector(filmsSelector);

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
