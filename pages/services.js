import * as React from 'react';
import Head from "next/head";
import { styled } from "@mui/material/styles";
import {useTheme} from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import serviceData from './data/serviceCard.data'

const StyledGrid = styled(Grid)(({theme}) => ({
  width: '100%',
  height: '100%',
  marginBottom: '4em',
  marginTop: '2em',
  [theme.breakpoints.up('sm')]: {
    marginTop: '3em'
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '4em'
  }
}))

const Services = () => {
  const theme = useTheme()

  return (
    <div>
      <Head>
        <title>Mindkeyz | Mixing & Master, Custom Beats, Consultation</title>
        <meta name='description' content='We offer a range of musical services.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Grid item container sx={{backgroundColor: theme.palette.common.secondaryDark}} > 
        <StyledGrid item align='center'>
          <Typography align='center' color={theme.palette.common.tertiary} sx={{fontSize: '1.9em', fontWeight: 600}}>Our Services</Typography>
          <Typography variant='body1' align='center' color='text.secondary'>
            A few services for your musical needs.
          </Typography>
        </StyledGrid>
        <Grid 
          item
          container
          direction='row'
          justifyContent='space-evenly'
          alignItems='center'
          sx={{mb: '5em', ml: 'auto', mr: 'auto', height: 'auto'}} 
          md={10} 
        >
          {serviceData.map((data) => (
            <Stack key={data.index} align='center' sx={{width: '20em', mb: '4em'}}>
              <Grid item sx={{color: theme.palette.primary.main}}>{data.icon}</Grid>
              <Grid item>
                <Typography variant='h6' color={theme.palette.common.tertiary} sx={{fontWeight: 600}} align='center' >
                  {data.service}
                </Typography>
              </Grid>
              <Grid item sx={{width: '15em', mr: 'auto', ml: 'auto'}}>
                <Typography variant='body2' align='center' color='text.secondary'>{data.info}</Typography>
              </Grid>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Services

