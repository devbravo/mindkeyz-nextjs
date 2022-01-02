import React from "react";
import Image from "next/image";
import Link from "../components/utility/Link";
import { useTheme, useMediaQuery } from "@mui/material";
import SEO from "../components/utility/SEO";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../components/utility/ScrollToTop";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusicRounded";
import CreditCardIcon from "@mui/icons-material/CreditCardRounded";
import DownloadIcon from "@mui/icons-material/DownloadRounded";
import BeatStore from "../components/home/BeatStore";
import LicenseCard from "../components/home/LicenseCard";
import LicenseData from "../components/home/data/LicensingData";
import FaqAccordion from "../components/home/FaqAccordion";
import Carousel from "../components/home/Carousel";
import banner from "../public/images/mindkeyzBanner.webp";
import { StyledStack, StyledGrid, StyledHowToContainer, StyledH6Typo } from "./styles/index.styles";
import { StyledH4BannerTypo, StyledH6BannerTypo, StyledBtn, StyledShoppingCartIcon } from "./styles/index.styles";
// import CountDownTimer from "../components/utility/CountdownTimer";

const Home = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSMMD = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <div>
      <SEO
        title='Mindkeyz | Buy dancehall & afrobeats online'
        description='description'
        siteTitle='Purchase & Download Beats Online. Download beats from a hit-making music producer duo. 
                    Mindkeyz brings you more than 250+ dancehall, afrobeat and trap instrumentals.'
      />
      <div id='back-to-top-anchor' style={{ marginTop: matchesMD ? "4em" : "3.2em" }} />
      <Grid container sx={{ position: "relative" }}>
        <Image src={banner} alt='studio banner' quality={100} priority placeholder='blur' width='8996' height='5123' />
        <StyledStack alignItems='center' justifyContent='center' md={6}>
          <StyledH4BannerTypo variant='h4' sx={{ mb: "0.1em" }}>
            Best Dancehall & Afrobeats Online
          </StyledH4BannerTypo>
          <StyledH6BannerTypo variant='h6' sx={{ mb: "1.5em" }}>
            We Provide The Keys To Your Musical Mind
          </StyledH6BannerTypo>
          {/* <StyledH4BannerTypo variant='h4' sx={{mb: '0.5em'}}>Big Christmas and new years sale!!!</StyledH4BannerTypo>
          <StyledH6BannerTypo variant='h4' sx={{mb: '1em'}}>50% off all license types!!!</StyledH6BannerTypo>
          <CountDownTimer /> */}
          <StyledBtn component={Link} href='#store' variant='contained' aria-label='scroll to beatstore'>
            <StyledShoppingCartIcon sx={{ mr: "0.3em", fontSize: "1.2rem" }} />
            Buy Beats
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
          sx={{ pb: matchesMD ? "6em" : "4em" }}>
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
          <Typography variant='body1' color='text.secondary'>
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
          <Typography variant='body1' color='text.secondary'>
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
          <Typography variant='body1' color='text.secondary'>
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
