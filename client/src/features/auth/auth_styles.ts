import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    div {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
    }

    input {
      margin: 5px 0;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.text__primary};
      background-color: ${({ theme }) => theme.colors.background__input};
    }

    label {
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.text__primary};
    }

    button {
      margin: 5px 0;
      padding: 5px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.button__text};
      background-color: ${({ theme }) => theme.colors.button__background};
    }

    .checkbox {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        margin: 0 5px;
        cursor: pointer;
      }

      label {
        color: ${({ theme }) => theme.colors.text__primary};
      }
    }

    .error {
      margin-top: 5px;
      color: ${({ theme }) => theme.colors.text__warning};
    }
  }
`

export default FormContainer
