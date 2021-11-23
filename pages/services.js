import * as React from 'react';
import Head from "next/head";
import {useTheme, useMediaQuery} from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import serviceData from './data/serviceCard.data'



export default function Services() {
  const theme = useTheme()
  const matchesMD = theme.breakpoints.up('md')
  const matchesLG = theme.breakpoints.down('lg')

  return (
    <div>
      <Head>
        <title>Mindkeyz | Mixing & Master, Custom Beats, Consultation</title>
        <meta name='description' content='We offer a range of musical services.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Grid item container sx={{backgroundColor: theme.palette.common.secondaryDark}} > 
        <Grid item sx={{width: '100%', height: '100%', mb: '4em', mt: matchesMD ? '8em' :'6em'}} align='center'>
          <Typography variant='h5' align='center' color={theme.palette.common.tertiary}>Our Services</Typography>
          <Typography variant='body2' align='center' color={theme.palette.common.tertiary}>
            A few services for your musical needs.
          </Typography>
        </Grid>
        <Grid 
          item
          container
          direction={matchesMD ? 'row' : 'column'}
          justifyContent='space-evenly'
          alignItems='center'
          sx={{mb: '5em', ml: 'auto', mr: 'auto', height: matchesMD ? 'auto' : '30em'}} 
          md={10} 
          wrap='flexWrap'
        >
          {serviceData.map((data) => (
            <Stack key={data.index} align='center' sx={{width: '20em', mb: matchesLG ? '4em' : 0}}>
              <Grid item sx={{color: theme.palette.primary.main}}>{data.icon}</Grid>
              <Grid item>
                <Typography variant='h6' color={theme.palette.common.tertiary} sx={{fontWeight: 600}} align='center' >
                  {data.service}
                </Typography>
              </Grid>
              <Grid item sx={{width: '15em', mr: 'auto', ml: 'auto'}}><Typography variant='body2' align='center' color='text.secondary'>{data.info}</Typography></Grid>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

