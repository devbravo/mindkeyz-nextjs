import Head from "next/head";
import { styled } from "@mui/material/styles";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactForm from '../components/contact/ContactForm'

const StyledContainer = styled(Grid)(({theme}) => ({
  backgroundImage: `linear-gradient(#6600FF, #252228)`,
  // width: '100%',
  // height: '100%',
  // maxWidth: '100%'
}))



export default function Contact() {
  return (
    <div>
      <Head>
        <title>Mindkeyz | Contact us for info on licenses and beats</title>
        <meta name='description' content='We are ready to serve you.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledContainer item container > 
        <Grid item sx={{width: '100%', height: '100%', mb: '3em', mt: '8em', color: '#fff'}} >
          <Typography variant='h4' align='center' >Contact Us</Typography>
          <Typography variant='body1' align='center' >For all inquiries, please email us using the form below</Typography>
        </Grid>
        <Grid item container direction='row' justifyContent='center' alignItems='center' sx={{mb: '10em'}}>
        <ContactForm />
        </Grid>
      </StyledContainer>
    </div>
  );
}
