import React, {useState, useEffect} from 'react'
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const StyledClockContainer = styled(Container)(({theme}) => ({
  backgroundColor: '#000',
  width: '9em',
  height: '9em',
  [theme.breakpoints.down('md')]: {
    width: '7em',
    height: '7em'
  },
  [theme.breakpoints.down('sm')]: {
    width: '4em',
    height: '4em'
  }
}))

const Styledh1ClockTypo = styled(Typography)(({theme}) => ({
  fontSize: '6em',
  [theme.breakpoints.down('md')]: {
    fontSize: '5em',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.8em',
  }
}))

const Styledh6ClockTypo = styled(Typography)(({theme}) => ({
  fontWeight: 300,
  fontSize: '2em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em'
  }
}))

const calculateTimeLeft = () => {
  let year = new Date().getFullYear()
  const difference = +new Date(`12/31/${year}`) - +new Date()

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft
}

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div >
      <Grid item container alignItems='center' justifyContent='space-between'>
        <Stack>
          <StyledClockContainer disableGutters>
            <Styledh1ClockTypo suppressHydrationWarning={true} variant='h1' align='center'>{timeLeft.days}</Styledh1ClockTypo>
          </StyledClockContainer>
          <Styledh6ClockTypo variant='h6' align='center'>Days</Styledh6ClockTypo>
        </Stack>
        <Stack>
          <StyledClockContainer disableGutters sx={{ml: '0.5em'}}>
            <Styledh1ClockTypo suppressHydrationWarning={true} variant='h1' align='center'>{timeLeft.hours}</Styledh1ClockTypo>
          </StyledClockContainer>
          <Styledh6ClockTypo variant='h6' align='center'>Hours</Styledh6ClockTypo>
        </Stack>
        <Stack>
          <StyledClockContainer disableGutters sx={{ml: '0.5em'}}>
            <Styledh1ClockTypo suppressHydrationWarning={true} variant='h1' align='center'>{timeLeft.minutes}</Styledh1ClockTypo>
          </StyledClockContainer>
          <Styledh6ClockTypo variant='h6' align='center'>Min</Styledh6ClockTypo>
        </Stack>
        <Stack>
          <StyledClockContainer disableGutters sx={{ml: '0.5em'}}>
            <Styledh1ClockTypo suppressHydrationWarning={true} variant='h1' align='center'>{timeLeft.seconds}</Styledh1ClockTypo>
          </StyledClockContainer>
          <Styledh6ClockTypo variant='h6' align='center'>Sec</Styledh6ClockTypo>
        </Stack>
      </Grid>
    </div>
    )
}

export default CountDownTimer
