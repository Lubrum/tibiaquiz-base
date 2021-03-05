import styled from 'styled-components';

const QuizContainer = styled.div`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 90%;
    position: relative; 
    left: 50%;
    transform: translateX(-50%);
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 80%;
    position: relative; 
    left: 50%;
    transform: translateX(-50%);
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 70%;
    position: relative; 
    left: 50%;
    transform: translateX(-50%);
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 50%;
    position: relative; 
    left: 50%;
    transform: translateX(-50%);
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width: 30%;
    position: relative; 
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default QuizContainer;
