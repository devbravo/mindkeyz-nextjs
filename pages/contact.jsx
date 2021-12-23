import React, {useState} from 'react';
import Head from "next/head";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { styled } from "@mui/material/styles";
import {useTheme, useMediaQuery} from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {StyledPageGrid} from './styles/pages.styles'
import useAxios from '../hooks/useAxios'
import CircularSpinner from '../components/utility/spinner';
import BasicModal from '../components/utility/modal';

// Schema validation
const schema = yup.object().shape({
  firstName: yup.string().trim().required('First name is required'),
  subject: yup.string().trim().required('Subject is required'),
  email: yup.string().trim().email('Email must be a valid email').required('Email is required'),
  message: yup.string().trim().required('Message is required'),
});

export const StyledTxtField = styled(TextField)(({theme}) => ({
  backgroundColor: theme.palette.common.tertiaryLight,
  marginBottom: '1em',
  marginRight: '1em',
 '&.MuiTextField-root': {
   width: '35%',
   [theme.breakpoints.down('sm')]: {
     width: '63%'
   }
  },
}))

export const StyledBtn = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.common.mindPurpDark,
  padding: '1em 0.5em 1em 0.5em',
  height: '3.35em',
  fontSize: '0.875em',
  textTransform: 'none',
  fontWeight: 300,
  width: '73%',
  [theme.breakpoints.down('sm')]: {
    width: '63%'
  }
}))

const Contact = () => {
  const [formData, setFormData] = useState({});
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    setFormData(data);
  };

  const postData = {
    url: 'https://mindkeyz-api.herokuapp.com/api/contact',
    method: 'post',
    body: JSON.stringify(formData),
    headers: JSON.stringify({ 'Content-Type': 'application/json' }),
  };

    // calling the useAxios custom hook
    const { response, loading } = useAxios(postData, reset);
    console.log(response)

  return (
    <div>
      <Head>
        <title>Mindkeyz | Contact us for info on licenses and beats</title>
        <meta name='description' content='We are ready to serve you.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Grid item container sx={{backgroundColor: theme.palette.common.secondaryDark}} > 
        <StyledPageGrid item>
          <Typography align='center' color={theme.palette.common.tertiary} sx={{fontSize: '1.9em', fontWeight: 600}}>Get In Touch</Typography>
          <Typography variant='body1' align='center' color='text.secondary'>Let us know more about you!</Typography>
        </StyledPageGrid>
        <Grid item container justifyContent='center' alignItems='center' sx={{mb: '10em', }}>
          <Grid item container direction={matchesSM ? 'column' : 'row'} md={8} sx={{boxShadow: '0px 3px 15px rgba(0,0,0,0.7)'}}>
            <Grid
              item
              container
              justifyContent='center'
              component="form"
              sx={{width: matchesSM ? '100%' : '65%', backgroundColor: '#1B1C1E', pt: '5em'}}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              >
              <Grid item container direction={matchesSM ? 'column' : 'row'} justifyContent='center' alignItems={matchesSM ? 'center' : undefined}>
                <StyledTxtField
                  error={(typeof errors.firstName === 'object')}
                  id="filled-multiline-flexible"
                  label={matchesSM ? "Name" : "First Name"}
                  multiline
                  variant='filled'
                  name='firstName'
                  helperText={errors.firstName?.message}
                  {...register('firstName', {required: true})}
                />
                {matchesSM ? 
                '' :
                <StyledTxtField
                  id="filled-multiline-flexible"
                  label="Last Name"
                  multiline
                  variant='filled'
                  name='lastName'
                  helperText=''
                  {...register('lastName', {required: true})}
                />
                }
              </Grid>
              <Grid item container direction={matchesSM ? 'column' : 'row'} justifyContent='center' alignItems={matchesSM ? 'center' : undefined}>
                <StyledTxtField
                  error={(typeof errors.subject === 'object')}
                  id="filled-multiline-flexible"
                  label="Subject"
                  multiline          
                  variant='filled'
                  name='subject'
                  helperText={errors.subject?.message}
                  {...register('subject', {required: true})}
                />
                <StyledTxtField
                  error={(typeof errors.email === 'object')}
                  id="filled-multiline-flexible"
                  label="Email"
                  multiline
                  variant='filled'
                  name='email'
                  helperText={errors.email?.message}
                  {...register('email', {required: true})}
                />
              </Grid> 
              <Grid item container justifyContent='center' sx={{pb: '5em'}}>
                <StyledTxtField
                  error={(typeof errors.message === 'object')}
                  sx={{'&.MuiTextField-root': {
                    width: matchesSM ? '63%' : '73%'},}}
                  id="filled-multiline-static"
                  label="Message"
                  multiline
                  variant='filled'
                  rows={4}
                  name='message'
                  helperText={errors.message?.message}
                  {...register('message', {required: true})}
                />
                <StyledBtn variant="contained" sx={{mr: '1em'}} type='submit'>Send</StyledBtn>
              </Grid>
            </Grid>
            <Grid item container direction='column' alignItems='center' justifyContent='center' sx={{backgroundColor: '#1B1C1E', width: matchesSM ? '100%' : '35%'}}>
              <Grid item container direction={matchesSM ? 'column' : 'row'} alignItems={matchesSM ? 'center' : 'flex-end'} sx={{color: '#fff', mb: matchesSM ? '2em' : '1em', mt: '-3em'}}>
                <Grid item sx={{mr: '1em', }}><AccessTimeIcon/></Grid>
                <Stack align={matchesSM ? 'center' : undefined}>
                  <Typography variant='body2' color='#545557' sx={{mb: '0.3em'}}>Opening Hours</Typography>
                  <Typography sx={{fontSize: '0.8em'}}>Monday - Saturday</Typography>
                  <Typography sx={{fontSize: '0.8em'}}>8am - 5pm (GMT-3)</Typography>
                </Stack>
              </Grid>
              <Grid item container direction={matchesSM ? 'column' : 'row'} alignItems={matchesSM ? 'center' : 'flex-end'} sx={{color: '#fff',mb: matchesSM ? '2em' : '1em'}}>
                <Grid item sx={{mr: '1em', }}><LocationOnIcon/></Grid>
                <Stack align={matchesSM ? 'center' : undefined}>
                  <Typography variant='body2' color='#545557' sx={{mb: '0.3em'}}>Address</Typography>
                  <Typography sx={{fontSize: '0.8em'}}>Paramaribo, Suriname</Typography>
                  <Typography sx={{fontSize: '0.8em'}}>South America</Typography>
                </Stack>
              </Grid>
              <Grid item container direction={matchesSM ? 'column' : 'row'} alignItems={matchesSM ? 'center' : 'flex-end'} sx={{color: '#fff', mb: matchesSM ? '2em' : undefined}}>
                <Grid item sx={{mr: '1em', }}><EmailIcon/></Grid>
                <Stack align={matchesSM ? 'center' : undefined}>
                  <Typography variant='body2' color='#545557' sx={{mb: '0.3em'}}>Support</Typography>
                  <Typography sx={{fontSize: '0.8em'}}>Mindkey@gmail.com</Typography>
                </Stack>
              </Grid>
            </Grid>
            {loading ? <CircularSpinner /> : ''}
          </Grid>
        </Grid>
        <BasicModal />
      </Grid>
    </div>
  );
}

export default Contact
