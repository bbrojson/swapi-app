import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
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
  film: any,
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
  film,
}: Props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Photo alt="" />
      <Typography className={classes.typoHeader} component="h3" variant="h3">Heading 1</Typography>
      <Typography className={classes.typoBody2} variant="body2" gutterBottom color="textSecondary">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Divider light />
      <Box pt={2} pb={2} display="flex" justifyContent="flex-start" alignItems="center">
        <Trait src={cameraSVG} alt={t('Director')} text="George Lucas" />
        <Trait src={cameraSVG} alt={t('Year of production')} text="1977" />
      </Box>
    </div>
  );
}
