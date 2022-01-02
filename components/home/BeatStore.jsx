import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";
import { StyledIframeStack, BarUnderPlayer } from "../../styles/beatstore/Beatstore";

const BeatStore = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container sx={{ height: matchesMD ? "57em" : "40em", width: "100%" }}>
      <StyledIframeStack id='store'>
        <iframe
          title='beatstore'
          style={{
            borderTopLeftRadius: matchesMD ? "0.7em" : "0.5em",
            borderTopRightRadius: matchesMD ? "0.7em" : "0.5em",
          }}
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
          scrolling='auto'></iframe>
        <BarUnderPlayer item container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item sx={{ fontSize: matchesMD ? "14px" : "10px", ml: "1em" }}>
            <span style={{ color: "#a770ff", fontWeight: 900 }}>CURRENT DEAL</span> Buy 2 For 1
          </Grid>
          <Grid item sx={{ fontSize: matchesMD ? "14px" : "10px", mr: "1em" }}>
            <span style={{ color: "#a770ff", fontWeight: 900 }}>We Accept</span> PayPal
          </Grid>
        </BarUnderPlayer>
      </StyledIframeStack>
    </Container>
  );
};

export default BeatStore;
