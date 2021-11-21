import React from "react";
import Image from "next/image";
import NextLink from 'next/link';
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import SEO from "../components/utility/SEO";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../components/utility/ScrollToTop";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusicRounded";
import CreditCardIcon from "@mui/icons-material/CreditCardRounded";
import DownloadIcon from "@mui/icons-material/DownloadRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartRounded";
import BeatStore from "../components/home/BeatStore";
import LicenseCard from "../components/home/LicenseCard";
import LicenseData from "../components/home/data/LicensingData";
import FaqAccordion from "../components/home/Accordion";
import Carousel from '../components/home/Carousel'
import banner from '../public/images/mindkeyzBanner2.webp'

const StyledStack = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  color: '#fff', 
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: "-0.2rem",
  backgroundImage: `linear-gradient(#6600FF, #413E43)`,
  height: "auto",
}));

const StyledHowToContainer = styled(Grid)(({ theme }) => ({
  paddingTop: "2rem",
  marginBottom: "8rem",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    paddingTop: "3em",
  },
}));

const StyledH6Typo = styled(Typography)(({ theme }) => ({
  marginTop: "0.1em",
  marginBottom: 0,
  fontSize: "0.8em",
  [theme.breakpoints.up("md")]: {
    marginTop: "0.5em",
    marginBottom: "0.2em",
    fontSize: '1.25em'
  },
}));

const StyledH4BannerTypo = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '2em',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    textAlign: 'center'
  }
}))

const StyledH6BannerTypo = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1em',
    marginBottom: '1em'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.50em',
    marginBottom: '1.5em'
  }
}))

const StyledBtn = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "#fff",
  fontSize: "0.9em",
  fontFamily: "Raleway",
  fontWeight: "700",
  textTransform: "capitalize",
  letterSpacing: 1.3,
  borderRadius: "8em",
  padding: "0.7em 1.5em",
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8em'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.6em'
  }
}));

const StyledShoppingCartIcon = styled(ShoppingCartIcon)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem'
  }
}))


const Home = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSMMD = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <div>
      <SEO />
      <div id='back-to-top-anchor' style={{ marginTop: matchesMD ? "4em" : "3.2em" }} />
      <Grid container sx={{position: 'relative'}}>
        <Image
          src={banner}
          alt='company logo'
          quality={100} 
          priority
          placeholder='blur'
          width='8996'
          height='5123'
        />
        <StyledStack alignItems='center' justifyContent='center' md={6}>
          <StyledH4BannerTypo variant='h4' sx={{mb: '0.1em'}}>Best Dancehall & Afrobeats Online</StyledH4BannerTypo>
          <StyledH6BannerTypo variant='h6' sx={{mb: '1.5em'}}>We Provide The Keys To Your Musical Mind</StyledH6BannerTypo>
          <StyledBtn variant='contained' aria-label='scroll to beatstore'>
            <StyledShoppingCartIcon sx={{mr: '0.3em', fontSize: '1.2rem'}} /><NextLink scrollSmooth href='#store'>Buy Beats</NextLink>
          </StyledBtn>
        </StyledStack>
      </Grid>
      <StyledGrid>
        <StyledHowToContainer
          item
          container
          direction={matchesMD ? "row" : "column"}
          wrap={matchesSMMD ? "wrap" : "nowrap"}
          justifyContent='space-evenly'
          alignItems={matchesMD ? "flex-start" : "center"}
          sx={{pb: matchesMD ? '6em' : '4em'}}
          >
          <Grid align='center' sx={{ pb: matchesMD ? undefined : "1.3em" }}>
            <LibraryMusicIcon sx={{ fontSize: matchesMD ? "2.3em" : "1.5em" }} />
            <StyledH6Typo variant='h6'>1. Select Beat</StyledH6Typo>
            <Typography variant='body2' sx={{ fontSize: matchesMD ? undefined : "0.8em" }}>
              Select a beat and license
            </Typography>
          </Grid>
          <Grid align='center' sx={{ pb: matchesMD ? undefined : "1.3em" }}>
            <CreditCardIcon sx={{ fontSize: matchesMD ? "2.3em" : "1.5em" }} />
            <StyledH6Typo variant='h6'>2. Checkout Securely</StyledH6Typo>
            <Typography variant='body2' sx={{ fontSize: matchesMD ? undefined : "0.8em" }}>
              Pay via PayPal
            </Typography>
          </Grid>
          <Grid align='center' sx={{ pb: matchesMD ? undefined : "1.3em" }}>
            <DownloadIcon sx={{ fontSize: matchesMD ? "2.3em" : "1.5em" }} />
            <StyledH6Typo variant='h6'>3. Download Beat</StyledH6Typo>
            <Typography variant='body2' sx={{ fontSize: matchesMD ? undefined : "0.8em" }}>
              Check inbox for the link
            </Typography>
          </Grid>
        </StyledHowToContainer>
      </StyledGrid>
      <BeatStore />
      <Grid
        item
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          pb: "6em",
          width: "100%",
          backgroundColor: theme.palette.common.secondaryDark,
        }}>
        <Stack align='center' sx={{ pt: matchesMD ? "4em" : "3em", mb: matchesMD ? "4em" : "3em" }}>
          <Typography variant='h5' color={`${theme.palette.common.tertiary}`}>
            Licensing Info
          </Typography>
          <Typography variant='body2' color={`${theme.palette.common.tertiary}`}>
            Please read the info before a purchase
          </Typography>
        </Stack>
        <Grid item container alignItems='center' justifyContent='center'>
          {LicenseData.map((item, index) => (
            <LicenseCard
              key={index}
              licenseName={item.licenseName}
              price={item.price}
              contract={item.pdf}
              deal={item.deal}
              licenses={item.license}
            />
          ))}
        </Grid>
      </Grid>
      <Grid sx={{ height: "auto", width: "100%", pb: "6em" }}>
        <Stack align='center' sx={{ pt: matchesMD ? "4em" : "3em", mb: matchesMD ? "4em" : "3em" }}>
          <Typography variant='h5' color={`${theme.palette.common.tertiary}`}>
            Production Credits
          </Typography>
          <Typography variant='body2' color={`${theme.palette.common.tertiary}`}>
            Who we worked with
          </Typography>
        </Stack>
        <Container sx={{ padding: matchesMD ? "0 6em 0 6em" : "0 1.2em 0 1.2em" }}>
          <Carousel />
        </Container>
      </Grid>
      <Grid sx={{ height: "auto", width: "100%", pb: "6em", backgroundColor: theme.palette.common.secondaryDark }}>
        <Stack align='center' sx={{ pt: matchesMD ? "4em" : "3em", mb: matchesMD ? "4em" : "3em" }}>
          <Typography variant='h5' color={`${theme.palette.common.tertiary}`}>
            FAQ
          </Typography>
          <Typography variant='body2' color={`${theme.palette.common.tertiary}`}>
            What you should know
          </Typography>
        </Stack>
        <Container sx={{ padding: matchesMD ? "0 6em 0 6em" : "0 1.2em 0 1.2em" }}>
          <FaqAccordion />
        </Container>
      </Grid>
      <ScrollTop>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Home;
