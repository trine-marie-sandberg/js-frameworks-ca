import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 1000px;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.color.secondary};
  padding: 5px;
  margin: 5px;
  border-right: 1px solid ${(props) => props.theme.color.light};
  width: 100px;
`;
export const Input = styled.input`
  padding: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.secondary};
  border: none;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.secondary};
  }
`;
export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px;
  border: 1px solid ${(props) => props.theme.color.light};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;
export const TextArea = styled.textarea`
  border: none;
  padding: 5px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-color: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.secondary};
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.secondary};
  }
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.color.dark};
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  color: ${(props) => props.theme.color.secondary};
  border: 1px solid ${(props) => props.theme.color.secondary};
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
`;