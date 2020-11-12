import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  Divider,
} from '@material-ui/core';
import Photo from '../Photo/Photo';
import Trait from '../Trait/Trait';
import cameraSVG from './camera.svg';

type Props = {
  title: string,
  director: string,
  releaseDate: string,
  openingCrawl: string,
};

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '14px',
  },
  typoHeader: {
    margin: '35px 0 4px',
  },
  typoBody2: {
    margin: '0 0 14px',
  },
}));

export default function FilmBox({
  title,
  director,
  releaseDate,
  openingCrawl,
}: Props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Photo alt={title} />
      <Typography className={classes.typoHeader} component="h3" variant="h3">{title}</Typography>
      <Typography className={classes.typoBody2} variant="body2" gutterBottom color="textSecondary">
        {openingCrawl}
      </Typography>
      <Divider light />
      <Box pt={2} pb={2} display="flex" justifyContent="flex-start" alignItems="center">
        <Trait src={cameraSVG} alt={t('Director')} text={director} />
        <Trait src={cameraSVG} alt={t('Year of production')} text={releaseDate} />
      </Box>
    </div>
  );
}
