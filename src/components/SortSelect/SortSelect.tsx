import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormHelperText,
  Select,
} from '@material-ui/core';
import { setSorting } from '../../store/filmsSlice';
import { SortType } from '../../types';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '100%',
  },
}));

export default function SortSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function hendleChangeSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value as SortType;
    dispatch(setSorting(value));
  }

  return (
    <FormControl className={classes.root}>
      <Select
        native
        onChange={hendleChangeSelect}
        value={SortType.default}
      >
        {Object.values(SortType).map((type) => <option key={type} value={type}>{t(type)}</option>)}
      </Select>
      <FormHelperText>{t('sort')}</FormHelperText>
    </FormControl>
  );
}
