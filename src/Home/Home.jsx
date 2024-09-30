//import styled from 'styled-components';

/*const Container = styled.div`
  padding: 20px;
  color: #555;
`; */

import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();  // Hook from react-router-dom

  const handleNavigate = () => {
    navigate('/Test');  // Navigate to the /about route
  };

  return <div><button onClick={handleNavigate}>Go to About</button><p>Welcome to the Home Page!</p></div>;
}

export default Home;
