import * as React from "react";
import Image from "next/image";
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
        maxWidth: 300,
        mb: "4em",
        mx: 'auto',
        color: theme.palette.common.tertiary,
        backgroundColor: theme.palette.common.secondaryDark,
        borderRadius: '0.4em'
      }}>
      <CardMedia>
        <Image src={props.image.src} alt={props.name} height='400' width='400'/>
      </CardMedia>
      <CardContent>
        <Typography variant='body2' color='text.primary' align='left'>
          {`${props.name} - ${props.song}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ color: theme.palette.common.tertiary, backgroundColor: theme.palette.common.secondaryDark }}>
        <Button size='small' color='primary'>
          <a href={props.url} target='_blank' rel='noreferrer'>
            Listen
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Carousel;
