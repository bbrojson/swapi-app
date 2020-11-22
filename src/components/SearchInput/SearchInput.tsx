import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { FormControl, InputBase } from '@material-ui/core';
import { setFilter } from '../../store/filmsSlice';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 0,
    background: '#fff',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: theme.palette.text.secondary,
    minHeight: '62px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'auto',
    },
  },
}));

export default function SearchInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function hendleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const string = event.target.value.toLowerCase();
    dispatch(setFilter(string === '' ? null : string));
  }

  return (
    <FormControl className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={t('Search')}
        inputProps={{ 'aria-label': 'search SWAPI films' }}
        onChange={hendleChangeInput}
      />
    </FormControl>
  );
}
