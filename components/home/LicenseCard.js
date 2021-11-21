import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";


const StyledCard = styled(Card)(({ theme }) => ({
  width: "89%",
  marginLeft: 0,
  marginBottom: "2em",
  [theme.breakpoints.between("sm", "md")]: {
    width: "40%",
    marginLeft: "1.5em",
  },
  [theme.breakpoints.up("md")]: {
    width: "22%",
    marginLeft: "1em",
  },
}));

const LicenseCard = ({ ...props }) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSMMD = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <StyledCard>
      <CardHeader
        sx={{
          backgroundColor: theme.palette.common.tertiary,
          height: "11em",
        }}
        align='center'
        title={
          <Typography
            variant='h6'
            color={`${theme.palette.common.mindPurpLight}`}
            sx={{ mt: "0.5em", textTransform: "uppercase" }}>
            {props.licenseName}
          </Typography>
        }
        subheader={
          <React.Fragment>
            <Typography variant='h4' color='#fff' sx={{ mt: "0.2em", mb: "0.2em" }}>
              {props.price}
            </Typography>
            <Typography variant='body2' color='#fff' sx={{ pb: "0.5em" }}>
              {props.deal}
            </Typography>
          </React.Fragment>
        }
        component={Stack}></CardHeader>
      <CardContent>
        <List>
          {props.licenses.map((info, index) => (
            <ListItemText
              sx={{ mb: "0.8em", textTransform: "capitalize" }}
              key={index}
              primary={
                <Typography variant='body2' color='text.secondary'>
                  {info}
                </Typography>
              }
            />
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ pb: "-1em", pt: "-1em" }}>
        <Button size='small'>
          <a href={props.contract} target='_blank' rel='noreferrer'>
            Learn More
          </a>
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default LicenseCard;
