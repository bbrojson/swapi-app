import React from 'react';
import { useSelector } from 'react-redux';
import {
  Grid,
} from '@material-ui/core';
import { commentSelector } from '../../store/commentsSlice';
import Comment from '../Comment/Comment';

type Props = {
  filmId: string,
};

export default function CommentsList({
  filmId,
}: Props) {
  const comments = useSelector(commentSelector(filmId));

  // * no need: comments are in sessionStorage
  // useEffect(() => {
  //   dispatch(fetchComments(filmId));
  // }, [dispatch]);

  return (
    <div>
      {comments && comments.map(({
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
