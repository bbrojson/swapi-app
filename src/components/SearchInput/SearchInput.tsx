import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Paper, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 0,
    background: '#fff',
    margin: '50px 0 15px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: theme.palette.text.secondary,
    minHeight: '62px',
  },
}));

export default function SearchInput() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={t('Search')}
        inputProps={{ 'aria-label': 'search SWAPI films' }}
      />
    </Paper>
  );
}
