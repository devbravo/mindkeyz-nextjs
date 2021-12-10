import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { useTheme } from "@mui/material";

const Carousel = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 250,
        mb: "4em",
        mx: 'auto',
        color: theme.palette.common.tertiary,
        backgroundColor: theme.palette.common.secondaryDark,
      }}>
      <CardMedia component='img' height='200' image={props.image.src} alt={props.name} />
      <CardContent>
        <Typography variant='body2' color='text.primary' align='left'>
          {`${props.name} - ${props.song}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ color: theme.palette.common.tertiary, backgroundColor: theme.palette.common.secondaryDark }}>
        <Button size='small' color='primary'>
          <a href='dfdf' target='_blank' rel='noreferrer'>
            Listen
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Carousel;
