import * as React from "react";
import { useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaqData1, FaqData2 } from "./data/FaqData";
import Grid from "@mui/material/Grid";

const FaqAccordion = () => {
  const theme = useTheme();

  return (
    <Grid item container columnSpacing={{md: 2}}>
      <Grid item container md={6} direction='column'>
        {FaqData1.map(item => (
          <Accordion key={item.index} sx={{ mb: "0.5em" }}>
            <AccordionSummary
              sx={{
                backgroundColor: theme.palette.common.tertiary,
                pt: "1em",
                pb: "1em",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
              aria-controls='panel1a-contetn'
              id='panel1a-header'>
              <Typography variant='body1' sx={{ color: "#fff" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: theme.palette.common.tertiaryLight,
              }}>
              <Typography variant='body2' sx={{ color: "#fff" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      <Grid item container md={6} direction='column' >
        {FaqData2.map(item => (
          <Accordion key={item.index} sx={{ mb: "0.5em" }}>
            <AccordionSummary
              sx={{
                backgroundColor: theme.palette.common.tertiary,
                pt: "1em",
                pb: "1em",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
              aria-controls='panel1a-contetn'
              id='panel1a-header'>
              <Typography variant='body1' sx={{ color: "#fff" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: theme.palette.common.tertiaryLight,
              }}>
              <Typography variant='body2' sx={{ color: "#fff" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
}

export default FaqAccordion
