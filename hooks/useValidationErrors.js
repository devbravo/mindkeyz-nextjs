import {useEffect} from 'react'
import {useSelector } from 'react-redux';

const UseValidationErrors = (setError) => {
  const {receivedValidationErrors} = useSelector(state => state.form.list)
  useEffect(() => {
    if(receivedValidationErrors.errors === undefined) return
    
    receivedValidationErrors.errors.forEach(error => {
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
  }, [receivedValidationErrors.errors, setError])
}

export default UseValidationErrors