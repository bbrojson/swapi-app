import React from 'react';
import {
  Typography,
} from '@material-ui/core';

type Props = {
  body: string,
  nickname: string,
};

export default function Comments({
  body,
  nickname,
}: Props) {
  return (
    <div>
      <Typography component="strong" variant="h4">
        {nickname}
      </Typography>
      <Typography variant="body2" gutterBottom color="textSecondary">
        {body}
      </Typography>
    </div>
  );
}
