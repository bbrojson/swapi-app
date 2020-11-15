import React, { useState, useEffect, ReactEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  SnackbarContent,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { fetchAddComment } from '../../store/commentsSlice';
import { Comment } from '../../types';

type Props = {
  id: string,
};
type SetStateInputs = { [x: string]: string; };

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  snackbar: {
    color: theme.palette.secondary.contrastText,
    fontWeight: 500,
    backgroundColor: theme.palette.success.main,
  },
}));

export default function CommentsForm({ id }: Props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isCommented, setIsCommented] = useState(false);
  const [set, setState] = useState({
    nickname: '',
    comment: '',
  });

  function handleTextField(
    { target: { name, value } }: React.ChangeEvent<HTMLInputElement>,
  ) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmitComment() {
    setIsCommented(true);
    dispatch(fetchAddComment({
      id: 'newly added',
      filmId: id,
      body: set.comment,
      nickname: set.nickname,
    }));
  }

  if (isCommented) {
    return <SnackbarContent className={classes.snackbar} message={t('Thank you for your comment.')} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('Was it your favorite movie too?')}
        </Typography>
        <form onSubmit={handleSubmitComment} className={classes.form}>
          <TextField
            value={set.nickname}
            onChange={handleTextField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nickname"
            label={t('Your name')}
            name="nickname"
            autoComplete="off"
          />
          <TextField
            value={set.comment}
            onChange={handleTextField}
            multiline
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="comment"
            label={t('Share a thoughts with us')}
            type="comment"
            id="comment"
            autoComplete="off"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {t('Submit')}
          </Button>
        </form>
      </div>
    </Container>
  );
}
