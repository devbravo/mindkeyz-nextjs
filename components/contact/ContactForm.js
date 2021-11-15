import * as React from 'react';
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';

export const StyledBtn = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.common.mindPurpDark,
  padding: '1em 0.5em 1em 0.5em',
  height: '3.35em',
  fontSize: '0.875em',
  textTransform: 'none',
  fontWeight: 300,
  borderRadius: '0.3em',
  // [theme.breakpoints.down('sm')]: {
  //   width: '25ch !important'
  // }
}))

export default function ContactForm() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid item container md={5} direction='column' justifyContent='center' alignItems='center' sx={{ backgroundColor: '#fff', borderRadius: '0.75em', position: 'relative'}}>
      <Grid item sx={{position: 'absolute', top: 0, left: 0, borderTopLeftRadius: '0.70em', backgroundColor: '#f1f3f5', width: '3.5em', height: '3.5em'}}>
        <EmailIcon sx={{width: '1.8em', height: '1.8em', margin: 'auto'}}/>
      </Grid>
      <Stack
        component="form"
        item
        sx={{'& .MuiTextField-root': {width: '30ch' }}}
        noValidate
        autoComplete="off"
        >
        <TextField
          sx={{mt: '5em', mb: '1.5em'}}
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          value={value}
          onChange={handleChange}
        />
        <TextField
          sx={{mb: '1.5em'}}
          id="outlined-multiline-flexible"
          label="Subject"
          multiline          
          value={value}
          onChange={handleChange}
        />
        <TextField
        sx={{mb: '1.5em'}}
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          value={value}
          onChange={handleChange}
        />     
        <TextField
          sx={{mb: '1.5em'}}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
        />
        <StyledBtn variant="contained" sx={{mb: '4em'}}>Send</StyledBtn>
      </Stack>
    </Grid>
 
  );
}
