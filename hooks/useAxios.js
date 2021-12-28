import { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

const useAxios = ({ url, method, body, headers }, reset) => {
  const [response, setResponse] = useState({ data: null, errors: null });
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(body);

  useEffect(() => {
    if (body !== bodyRef.current) {
      let source = axios.CancelToken.source();
      setResponse({ data: null, errors: null });
      setLoading(true);

      const fetchData = async () => {
        try {
         const res = await axios[method](url, JSON.parse(body), JSON.parse(headers), {CancelToken: source.token})
         setResponse({data: res.data, errors: null})
         reset()
        } catch(err)  {
          if(axios.isCancel(err)) {
            console.log('Request cancelled', err.message)
          } else {
            setResponse({data: null, errors: err})
          }
        } finally {
          setLoading(false)
        }
      }
      fetchData();
      return () => {
        console.log('unmounting');
        source.cancel();
      };
    }
  }, [body, method, url, headers, reset]);

  return { response, loading };
};

useAxios.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  headers: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};

export default useAxios;