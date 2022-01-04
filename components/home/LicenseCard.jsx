import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "73%",
  marginLeft: 0,
  marginBottom: "2em",
  borderRadius: "0.4em",
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

  return (
    <StyledCard>
      <CardHeader
        sx={{
          backgroundColor: theme.palette.common.tertiary,
          height: "11em",
        }}
        align='center'
        title={
          <Typography variant='h5' color={`${theme.palette.common.mindPurpLight}`} sx={{ mt: "0.5em" }}>
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
      <CardContent sx={{ py: "16px", px: "0em" }}>
        <List>
          {props.licenses.map((info, index) => (
            <ListItem key={index}>
              <Typography variant='body2' color='text.secondary' sx={{ mb: "-0.1em", textTransform: "capitalize" }}>
                {info}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ py: "-1em" }}>
        <Button size='small' sx={{}}>
          <a href={props.contract} target='_blank' rel='noreferrer'>
            Download Contract
          </a>
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default LicenseCard;
