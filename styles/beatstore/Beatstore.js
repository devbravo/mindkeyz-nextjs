import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export const StyledIframeStack = styled(Stack)(({theme}) => ({
  width: '98%', 
  height: '89%', 
  margin: '-11.15em auto 0 auto', 
  zIndex: 10,
}))

export const BarUnderPlayer = styled(Grid)(({theme}) => ({
  width: '100%',
  color: '#fff',
  borderBottomLeftRadius: '0.3em', 
  borderBottomRightRadius: '0.3em', 
  padding: '0.6em 0 0.5em 0',
  fontSize: '1.65em',
  backgroundColor: theme.palette.common.tertiaryLight2,
  [theme.breakpoints.up('md')]: {
    borderBottomLeftRadius: '0.5em', 
    borderBottomRightRadius: '0.5em', 
    padding: '0.75em',
  }
}))