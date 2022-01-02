import Head from "next/head";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../components/utility/ScrollToTop";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import recordingStudio from "../public/images/studioRecording.webp";
import { StyledStack, StyledH4BannerTypo } from "./styles/index.styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import aboutCardData from "./data/aboutCard.data";
import SEO from "../components/utility/SEO";

export const StyledParagraph1Typo = styled(Typography)(({ theme }) => ({
  marginTop: "0.1em",
  marginBottom: 0,
  fontSize: "0.8em",
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    marginTop: "0em",
    marginBottom: "0.2em",
    fontSize: "1em",
    width: "70%",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "0.5em",
    marginBottom: "0.2em",
    fontSize: "1.25em",
    width: "50%",
  },
}));

const About = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <SEO
        title='Mindkeyz | Learn who whe are, what we do and why we do it.'
        description='description'
        siteTitle='Mindkeyz a music production company from Paramaribo, Suriname'
      />
      <div id='back-to-top-anchor' style={{ marginTop: matchesMD ? "1em" : "4em" }} />
      <Grid item container>
        <Grid container sx={{ position: "relative" }}>
          <Image
            src={recordingStudio}
            alt='recording room'
            quality={100}
            priority
            placeholder='blur'
            width='5184'
            height='2916'
          />
          <StyledStack justifyContent='center' alignItems='center' sx={{ mt: matchesSM ? "0%" : "-10%" }}>
            <StyledH4BannerTypo color='#fff' sx={{ fontSize: "1.9em", fontWeight: 600 }}>
              We Are Mindkeyz
            </StyledH4BannerTypo>
            <StyledParagraph1Typo variant='paragraph1' align='center' color='#fff'>
              Whether you&apos;re an upcoming or established artist, having access to high quality instrumentals is
              foundational for the creation of modern music that stands out.
            </StyledParagraph1Typo>
          </StyledStack>
        </Grid>
        <Grid item container justifyContent='center'>
          <Stack align='center' sx={{ pt: matchesMD ? "2em" : "4em", mb: matchesMD ? "2em" : "4em" }}>
            <Typography variant='h5' color={`${theme.palette.common.tertiary}`}>
              What We Do
            </Typography>
            <Grid item md={6} sx={{ mx: matchesMD ? "1.5em" : "auto", mb: "2em" }}>
              <StyledParagraph1Typo
                variant='paragraph1'
                align='center'
                color='text.secondary'
                sx={{ fontSize: matchesSM ? "0.875rem" : undefined }}>
                Mindkeyz is a music production company that started with 2 friends who each had a love for music and
                wanted to make a living with it. Through hard work and persistence the group was able to achieve
                popularity on the internet. We create beats that inspire dancehall & afrobeat artist to make hit songs.
                In 2018 the duo decided to open up their platfrom for other producers and allow for a greater plethora
                and diversity of beats. We added Mood to the team in 2019, Manna and Nikola in 2020 and later Joe Dyce,
                D&apos;Hardest and JoelKxng in 2021.
              </StyledParagraph1Typo>
            </Grid>
          </Stack>
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          sx={{ pb: matchesMD ? "2em" : "8em", backgroundColor: theme.palette.common.secondaryDark }}>
          <Stack align='center' sx={{ pt: matchesMD ? "2em" : "4em", mb: matchesMD ? "2em" : "4em" }}>
            <Typography variant='h5' color={`${theme.palette.common.tertiary}`}>
              How We Do It
            </Typography>
          </Stack>
          <Grid item container direction='row' justifyContent='space-evenly' alignItems='flex-end'>
            {aboutCardData.map(cardData => (
              <Card key={cardData.index} sx={{ maxWidth: 300, mb: matchesMD ? "2em" : 0, borderRadius: "0.4em" }}>
                <CardMedia>
                  <Image src={cardData.image.src} alt={cardData.name + " image"} height='350' width='400' />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div' color={theme.palette.common.tertiary}>
                    {cardData.headerText}
                  </Typography>
                  <Typography variant='paragraph2' color='text.secondary'>
                    {cardData.paragraphText}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
        <Grid item container justifyContent='center'>
          <Stack align='center' sx={{ pt: matchesMD ? "2em" : "4em", mb: matchesMD ? "2em" : "4em" }}>
            <Typography variant='h5' color={theme.palette.common.tertiary}>
              Why We Do It
            </Typography>
            <Grid item md={6} sx={{ mx: matchesMD ? "1.5em" : "auto", mb: "2em" }}>
              <StyledParagraph1Typo
                variant='paragraph1'
                align='center'
                color='text.secondary'
                sx={{ fontSize: matchesSM ? "0.875rem" : undefined }}>
                We do what we do simply because we have passion for music and we want to share that passion with the
                world. We do what we do because we think artist, especially upcoming artist should have access to
                affordable high quality instrumentals. We also do what we do so that young upcoming talented producers
                don&apos;t have to face the same stuggles we faced in trying to make a living with music. Our platform
                is open to them as long as they are talented, hard working, creative and passionate about music
                production.
              </StyledParagraph1Typo>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <ScrollTop>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default About;
