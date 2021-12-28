import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { responseDeleted } from '../../store/slices/form';
import { useDispatch, useSelector } from 'react-redux'
import { handleOpen, handleClose } from '../../store/slices/modal';
import { Divider } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:  350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({reset}) => {
  const dispatch = useDispatch()
  const {receivedResponse} = useSelector(state => state.form.list)
  const open = useSelector(state => state.modal.value)
  const {receivedValidationErrors} = useSelector(state => state.form.list)

  let disclaimer;

  // Don't open the modal if the errors are validation erros
  if(receivedValidationErrors.length !== 0) {
    open = false
  }
  
  // Check if the response object is not empty,
  // if response is 'network error' add a disclaimer
  else if(Object.keys(receivedResponse).length !== 0) {
    dispatch(handleOpen(true))
   if(receivedResponse === 'Network Error') {
     disclaimer = 'This service is down for maintenance, sorry for the inconvenience.'
   }
  }

  // Function for closing the modal
  const close = () => {
    dispatch(handleClose(false))
    dispatch(responseDeleted())
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item container justifyContent='center' sx={{mt: '-1em', mb: '0.5em'}}>
            {receivedResponse.status === 'Success'
             ? <CheckCircleOutlineIcon sx={{fontSize: '3em'}} color='success'/>  
             : <CancelOutlinedIcon sx={{fontSize: '3em'}} color='error' />}
          </Grid>
          <Typography id="modal-modal-title" variant="h5" color='#000' align='center'>
            {typeof(receivedResponse) === 'object' ? receivedResponse.status : receivedResponse}
          </Typography>
            <Divider sx={{my: '1em'}} />
          <Typography id="modal-modal-description" variant='body1' sx={{mb: 2 }} color='text.secondary' align='center'>
            {typeof(receivedResponse) === 'object' ? receivedResponse.resMessage : disclaimer}
          </Typography>
          <Grid item container justifyContent='center'>
            <Button variant='outlined' onClick={close} sx={{fontSize: '1.1em'}}>OK</Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal
