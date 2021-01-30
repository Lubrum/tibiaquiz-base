import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    @keyframes color-change-warning {
      0% { background-color: ${({ theme }) => theme.colors.wrong}; }
      50% { background-color: ${({ theme }) => theme.colors.primary}; }
      100% { background-color: ${({ theme }) => theme.colors.wrong}; }
    }
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        animation: color-change-warning 0.5s infinite;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
