import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarContent } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  snackbarContent: {
    width: '100%',
    margin: '20px 0',
  },
}));

export default function ErrorInfo() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <SnackbarContent className={classes.snackbarContent} message={t('Error occured')} />
  );
}
