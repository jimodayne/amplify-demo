import { Link } from 'react-router-dom';
import { FactoryCardCollection, NavBar } from './ui-components';

const Home = () => {
  return (
    <>
      <NavBar />
      <h1> Home </h1>

      <Link to="/form">Go to Form</Link>

      <FactoryCardCollection />
    </>
  );
};

export default Home;
