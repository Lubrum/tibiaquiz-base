import styled from 'styled-components';

const QuizBackground = styled.div`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    height: 0;
    background-size: cover;
    background-position: center;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-color: ${({ theme }) => theme.colors.mainBg};
    flex: 1;
    *:first-child {
      max-height: inherit;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    position: relative;
    width: 100%;
    height: 0;
    background-size: cover;
    background-position: center;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-color: ${({ theme }) => theme.colors.mainBg};
    flex: 1;
    *:first-child {
      max-height: inherit;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;

export default QuizBackground;
