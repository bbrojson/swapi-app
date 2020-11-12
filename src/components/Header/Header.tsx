import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  Container,
  Grid,
} from '@material-ui/core';
import {
  Link as RouterLink,
} from 'react-router-dom';
import logo from '../../logo.svg';

const useStyles = makeStyles(() => ({
  starJediFont: {
    fontFamily: 'Star Jedi',
  },
  logoLink: {
    display: 'block',
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    width: '100%',
  },
}));

export default function Header() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <header>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Button className={classes.logoLink} color="primary" component={RouterLink} to="/list">
              <img src={logo} alt={t('SW API')} />
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
