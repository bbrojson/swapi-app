import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Divider,
  Container,
  Grid,
} from '@material-ui/core';
import {
  Link as RouterLink,
} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  starJediFont: {
    fontFamily: 'Star Jedi',
  },
  logoLink: {
    display: 'block',
    color: '#fff',
  },
}));

export default function Header() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <header>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button className={classes.logoLink} color="primary" component={RouterLink} to="/list">
              <Typography align="center" component="h1" variant="h1" className={classes.starJediFont}>
                {t('SW APJ  $ #')}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider light />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
