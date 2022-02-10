import { useState } from 'react';

export const useForm = (initalState = {}) => {
  const [values, setValues] = useState(initalState);

  const reset = () => {
    setValues(initalState);
  }

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    setValues({
      ...values,
      [target.name]: target.value
    });
  }

  return [values, handleInputChange, reset];
}
