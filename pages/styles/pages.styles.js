import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';

export const StyledPageGrid = styled(Grid)(({theme}) => ({
  width: '100%',
  height: '100%',
  marginBottom: '4em',
  marginTop: '2em',
  [theme.breakpoints.up('sm')]: {
    marginTop: '3em'
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '4em'
  }
}))