/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Image from 'next/image';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto;
  background-color: #00000070;
  padding: 20px;
  align-items: center;
  border-radius: 4px; 
  .text-alura {
    grid-column: 2 / 3;
    padding: 10px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  img {
    width: 58px;
    margin-right: 23px;
  }
  .link-alura {
    grid-column: 1 / 2;
    justify-self: center;
    padding: 10px;
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a className="link-alura" href="https://www.alura.com.br/">
        <Image src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p className="text-alura">
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
