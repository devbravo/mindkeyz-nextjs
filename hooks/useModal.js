import { useEffect } from 'react';

const useModal = (response, setError, setFormData) => {
  useEffect(() => {
    const handleResponse = () => {
      if (response.data !== null && response.errors === null) {
        if (response.data.status === 'success') {
          swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Message was sent succesfully, we will reply asap, thank you!',
            allowOutsideClick: true,
            timer: 4000,
          });
        } else if (response.data.error === 'fail') {
          swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Message failed to sent, sorry for the inconvenience.',
            allowOutsideClick: true,
            timer: 4000,
          });
        }
        response.data = null; // reset as to not re-render the success message
      } else if (response.data === null && response.errors !== null) {
        if (response.errors.message === 'Network Error') {
          swal.fire({
            icon: 'error',
            title: 'Network error!',
            text: 'This service is down for maintenance, sorry for the inconvenience',
            allowOutsideClick: true,
            timer: 4000,
          });
        } else if (response.errors.response.data.errors.length !== 0) {
          response.errors.response.data.errors.forEach(error => {
            if (error.param === 'name') {
              setError(error.param, { type: 'manual', message: error.msg });
            }
            if (error.param === 'subject') {
              setError(error.param, { type: 'manual', message: error.msg });
            }
            if (error.param === 'email') {
              setError(error.param, { type: 'manual', message: error.msg });
            }
            if (error.param === 'message') {
              setError(error.param, { type: 'manual', message: error.msg });
            }
          });
          response.errors = null; // reset as to not re-render the error messages
        }
      }
    };
    handleResponse();

    return () => {
      setFormData({});
    };
  }, [setFormData, response, setError]);
};

export default useModal;
