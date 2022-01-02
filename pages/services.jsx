import * as React from "react";
import Head from "next/head";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import serviceData from "./data/serviceCard.data";
import { StyledPageGrid } from "./styles/pages.styles";
import SEO from "../components/utility/SEO";

const Services = () => {
  const theme = useTheme();

  return (
    <div>
      <SEO
        title='Mindkeyz | Mixing & Master, Custom Beats, Beat Hosting.'
        description='description'
        siteTitle='We offer a range of musical services.'
      />
      <Grid item container sx={{ backgroundColor: theme.palette.common.secondaryDark }}>
        <StyledPageGrid item align='center'>
          <Typography align='center' color={theme.palette.common.tertiary} sx={{ fontSize: "1.9em", fontWeight: 600 }}>
            Our Services
          </Typography>
          <Typography variant='body1' align='center' color='text.secondary'>
            A few services for your musical needs.
          </Typography>
        </StyledPageGrid>
        <Grid
          item
          container
          direction='row'
          justifyContent='space-evenly'
          alignItems='center'
          sx={{ mb: "5em", mx: "auto", height: "auto" }}
          md={10}>
          {serviceData.map(data => (
            <Stack key={data.index} align='center' sx={{ width: "20em", mb: "4em" }}>
              <Grid item sx={{ color: theme.palette.primary.main }}>
                {data.icon}
              </Grid>
              <Grid item>
                <Typography variant='h6' color={theme.palette.common.tertiary} sx={{ fontWeight: 600 }} align='center'>
                  {data.service}
                </Typography>
              </Grid>
              <Grid item sx={{ width: "15em", mx: "auto" }}>
                <Typography variant='paragraph2' align='center' color='text.secondary'>
                  {data.info}
                </Typography>
              </Grid>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
