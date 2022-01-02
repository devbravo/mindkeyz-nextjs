import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaqData1, FaqData2 } from "../../data/faq/Faq";
import Grid from "@mui/material/Grid";

const FaqAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid item container columnSpacing={{ md: 2 }}>
      <Grid item container md={6} direction='column'>
        {FaqData1.map(item => (
          <Accordion
            expanded={expanded === item.index}
            onChange={handleChange(item.index)}
            key={item.index}
            sx={{
              mb: "0.5em",
              "&.MuiPaper-root": { borderRadius: "0.4em" },
              "&.MuiAccordion-root": { borderRadius: "0.4em" },
            }}
            disableGutters
            square={false}>
            <AccordionSummary
              sx={{
                backgroundColor: theme.palette.common.tertiary,
                pt: "1em",
                pb: "1em",
                borderTopLeftRadius: "0.4em",
                borderTopRightRadius: "0.4em",
                borderBottomLeftRadius: `${expanded === item.index ? 0 : "0.4em"}`,
                borderBottomRightRadius: `${expanded === item.index ? 0 : "0.4em"}`,
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
                backgroundColor: theme.palette.common.tertiaryLight2,
                borderBottomLeftRadius: "0.4em",
                borderBottomRightRadius: "0.4em",
              }}>
              <Typography variant='body2' sx={{ color: "#fff" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      <Grid item container md={6} direction='column'>
        {FaqData2.map(item => (
          <Accordion
            expanded={expanded === item.index}
            onChange={handleChange(item.index)}
            key={item.index}
            sx={{
              mb: "0.5em",
              "&.MuiPaper-root": { borderRadius: "0.4em" },
              "&.MuiAccordion-root": { borderRadius: "0.4em" },
            }}
            disableGutters
            square={false}>
            <AccordionSummary
              sx={{
                backgroundColor: theme.palette.common.tertiary,
                pt: "1em",
                pb: "1em",
                borderTopLeftRadius: "0.4em",
                borderTopRightRadius: "0.4em",
                borderBottomLeftRadius: `${expanded === item.index ? 0 : "0.4em"}`,
                borderBottomRightRadius: `${expanded === item.index ? 0 : "0.4em"}`,
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
                backgroundColor: theme.palette.common.tertiaryLight2,
                borderBottomLeftRadius: "0.4em",
                borderBottomRightRadius: "0.4em",
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
};

export default FaqAccordion;
