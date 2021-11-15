import React from 'react'
import Image from "next/image";
import { styled } from "@mui/material/styles";
import {useTheme, useMediaQuery} from '@mui/material'
import SEO from "../components/utility/SEO";
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../components/utility/ScrollToTop'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Banner from '../components/home/Banner'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicRounded';
import CreditCardIcon from '@mui/icons-material/CreditCardRounded';
import DownloadIcon from '@mui/icons-material/DownloadRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartRounded';

const StyledStack = styled(Stack)(({theme}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  marginTop: '18em',
  marginBottom: 'auto',
  marginLeft: 'auto',
  marginRight: 'auto'
}))

const StyledGrid = styled(Grid)(({theme}) => ({
  marginTop: '-0.2rem',
  backgroundImage: `linear-gradient(#6600FF, #413E43)`,
  height: '16em',
  [theme.breakpoints.down('sm')]: {
    height: '22em'
  }
}))

const StyledBtn = styled(Button)(({theme}) => ({
  color: 'black',
  backgroundColor: '#fff',
  fontSize: '0.9em',
  fontFamily: 'Raleway',
  fontWeight: '700',
  textTransform: 'capitalize',
  letterSpacing: 1.3,
  borderRadius: '8em',
  padding: '0.7em 1.5em'
}))

const StyledHowToContainer = styled(Grid)(({theme}) => ({
  paddingTop: '3rem',
  marginBottom: '8rem',
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '2em'
  }
}))

const StyledH6Typo = styled(Typography)(({theme}) => ({
  marginTop: '0.5em',
  marginBottom: '0.2em',
  [theme.breakpoints.down('sm')]: {
    marginTop: '0.1em',
    marginBottom: 0,
    fontSize: '0.8em'
  }
}))

const StyledIframeStack = styled(Stack)(({theme}) => ({
  width: '98%', 
  height: '89%', 
  margin: '-3.1em auto 0 auto', 
  zIndex: 10,
  // boxShadow: `0 1px 5px black`,
}))

const BarUnderPlayer = styled(Grid)(({theme}) => ({
  // width: '100%',
  color: '#fff',
  borderBottomLeftRadius: '1em', 
  borderBottomRightRadius: '1em', 
  padding: '1.3em',
  backgroundColor: theme.palette.common.tertiaryLight2,
  // margin: '0 auto 0 auto',
  [theme.breakpoints.down('sm')]: {
    borderBottomLeftRadius: '0.5em', 
    borderBottomRightRadius: '0.5em', 
    padding: '0.5em 0 0.5em 0',
    fontSize: '1.65em'
  }
}))

 const Home = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <SEO />
      <div id="back-to-top-anchor" style={{marginTop:  matchesSM ? '3.2em' : '4em'}}/>
      <Banner style={{position: 'relative'}} />
      {/* <StyledStack alignItems='center' sx={{color: '#fff'}}>
        <Typography variant='h4' sx={{mb: '0.1em'}}>Best Dancehall & Afrobeats Online</Typography>
        <Typography variant='h6' sx={{mb: '1.5em'}}>We Provide The Keys To Your Musical Mind</Typography>
        <StyledBtn variant='contained'><ShoppingCartIcon sx={{mr: '0.3em', fontSize: '1.2rem'}} />Buy Beats</StyledBtn>
      </StyledStack> */}
      <StyledGrid>
        <StyledHowToContainer
          item 
          container 
          direction={matchesSM ? 'column' : 'row'} 
          justifyContent='space-evenly' 
          alignItems={matchesSM ? 'center' : 'flex-start'}
          >
          <Grid align='center' sx={{pb: matchesSM ? '1.3em' : undefined}} >
            <LibraryMusicIcon sx={{fontSize: matchesSM ? '1.5em' : '2.3em'}}  />
            <StyledH6Typo variant='h6'>1. Select Beat</StyledH6Typo>
            <Typography variant='body2' sx={{fontSize: matchesSM ? '0.8em' : undefined }}>Select a beat and license</Typography>
          </Grid>
          <Grid align='center' sx={{pb: matchesSM ? '1.3em' : undefined}}>
            <CreditCardIcon sx={{fontSize: matchesSM ? '1.5em' : '2.3em'}} />
            <StyledH6Typo variant='h6'>2. Checkout Securely</StyledH6Typo>
            <Typography variant='body2' sx={{fontSize: matchesSM ? '0.8em' : undefined }}>Pay via PayPal</Typography>
          </Grid>
          <Grid align='center' sx={{pb: matchesSM ? '1.3em' : undefined}}>
            <DownloadIcon sx={{fontSize: matchesSM ? '1.5em' : '2.3em'}}/>
            <StyledH6Typo variant='h6'>3. Download Beat</StyledH6Typo>
            <Typography variant='body2' sx={{fontSize: matchesSM ? '0.8em' : undefined }}>Check inbox for the link</Typography>
          </Grid>
        </StyledHowToContainer>
      </StyledGrid>
      <Container sx={{height: matchesSM ? '40em' : '57em', width: '100%'}}>
        <StyledIframeStack >
          <iframe
            title='beatstore'
            style={{
              borderTopLeftRadius: matchesSM ? '0.5em' : '1em', 
              borderTopRightRadius: matchesSM ? '0.5em' : '1em'}}
            id='airbit_infinity'
            src={`https://Mindkeyz.infinity.airbit.com?config_id=8072&embed=1`}
            rel='prefetch'
            same-site='None'
            sandbox='allow-same-origin allow-scripts allow-top-navigation'
            allow='fullscreen'
            width='100%'
            height='100%'
            frameBorder='0'
            loading='lazy'
            seamless
            scrolling='auto'>
          </iframe>
          <BarUnderPlayer item container direction='row' justifyContent='space-between' alignItems='center'>
            <Grid item sx={{fontSize: matchesSM ? '10px' : '14px', ml: '1em' }}>
              <span style={{color: '#a770ff', fontWeight: 900}}>CURRENT DEAL</span>  Buy 2 For 1
            </Grid>
            <Grid item sx={{fontSize: matchesSM ? '10px' : '14px', mr: '1em'}}>
              <span style={{color: '#a770ff', fontWeight: 900}}>We Accept</span>  PayPal
            </Grid>
          </BarUnderPlayer>
        </StyledIframeStack>
      </Container>
      <Grid sx={{height: '50em', width: '100%', backgroundColor: theme.palette.common.secondaryDark}}>
        <Stack align='center' sx={{pt: '4em', mb: '6em'}}>
          <Typography variant='h5' sx={{color: theme.palette.common.tertiary}}>Licensing Info</Typography>
          <Typography variant='body2' sx={{color: theme.palette.common.tertiary}}>Please read the info before a purchase</Typography>
        </Stack>
      </Grid>
      <Grid sx={{height: '50em', width: '100%'}}>
        <Stack align='center' sx={{pt: '4em', mb: '6em'}}>
          <Typography variant='h5' sx={{color: theme.palette.common.tertiary}}>Production credits</Typography>
          <Typography variant='body2' sx={{color: theme.palette.common.tertiary}}>Who we worked with</Typography>
        </Stack>
      </Grid>
      <Grid sx={{height: '40em', width: '100%', backgroundColor: theme.palette.common.secondaryDark}}>
        <Stack align='center' sx={{pt: '4em', mb: '6em'}}>
          <Typography variant='h5' sx={{color: theme.palette.common.tertiary}}>FAQ</Typography>
          <Typography variant='body2' sx={{color: theme.palette.common.tertiary}}>What you should know</Typography>
        </Stack>
      </Grid>
      <ScrollTop>
        <Fab color='primary' size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export default Home
