import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Box,
  Paper,
  Container,
  Typography,
} from '@material-ui/core';
import { fetchFilms } from '../../store/filmsSlice';
import Photo from '../Photo/Photo';

type Props = {
  src: string,
  alt: string,
  text: string,
};

export default function Trait({
  src,
  alt,
  text,
}: Props) {
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <Box pr={2}><img src={src} alt={alt} /></Box>
      <Typography component="span" variant="body1">{text}</Typography>
    </Box>
  );
}
