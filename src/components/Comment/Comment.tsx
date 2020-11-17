import React from 'react';
import {
  Box,
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
      <Box pt={2}>
        <Typography component="strong" variant="h5">
          {nickname}
        </Typography>
        <Typography variant="body2" gutterBottom color="textSecondary">
          {body}
        </Typography>
      </Box>
    </div>
  );
}
