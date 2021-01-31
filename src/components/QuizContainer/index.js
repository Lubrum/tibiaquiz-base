import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 30%;
  position: relative; 
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
