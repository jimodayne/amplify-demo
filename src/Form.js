import { Link } from 'react-router-dom';
import { FactoryCreateForm } from './ui-components';

const Form = () => {
  return (
    <>
      <h1> Form </h1>
      <Link to="/">Back</Link>
      <FactoryCreateForm />
    </>
  );
};

export default Form;
