import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  @keyframes color-change {
    0% { background-color: ${({ theme }) => theme.colors.secondary}; }
    50% { background-color: ${({ theme }) => theme.colors.primary}; }
    100% { background-color: ${({ theme }) => theme.colors.secondary}; }
  }
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  animation: none;
  cursor: pointer;
  &:hover {
    animation: color-change 0.5s infinite;
    &:active {
      animation: none;
      background-color: #979797;
    }
  }
  &:active {
      animation: none;
      background-color: #979797;
    }
  &:disabled {
    background-color: #979797;
    animation: none;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
