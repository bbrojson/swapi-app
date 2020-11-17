import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Grid,
  Divider,
  Typography,
  Box,
} from '@material-ui/core';
import { commentSelector } from '../../store/commentsSlice';
import Comment from '../Comment/Comment';

type Props = {
  filmId: string,
};

export default function CommentsList({
  filmId,
}: Props) {
  const { comments } = useSelector(commentSelector(filmId));
  const { t } = useTranslation();

  // * no need: comments are in sessionStorage
  // useEffect(() => {
  //   dispatch(fetchComments(filmId));
  // }, [dispatch]);

  if (!comments) {
    return null;
  }

  return (
    <div>
      <Box pb={2}>
        <Typography component="strong" variant="h5">
          {t('User comments')}
        </Typography>
      </Box>
      <Divider light />
      {comments.map(({
        id,
        body,
        nickname,
      }) => (
        <Grid key={id} item xs={12} md={4}>
          <Comment
            body={body}
            nickname={nickname}
          />
        </Grid>
      ))}
    </div>
  );
}
