//import "./inputStyle.css"
import styled from "styled-components";
import {
  StyledInputBox,
  StyledInputSubmit,
  StyledDivInput,
} from "./input-styling";

const StyledTextBox = styled.div`
  margin: 0;
`;

export const TextBox = (props) => {
  const { value, onChange, onSubmit } = props;

  return (
    //<form onSubmit={onSubmit}>
    <StyledTextBox>
      <StyledDivInput>
        <StyledInputBox
          autoComplete="off"
          type="text"
          name="textBox"
          placeholder="Enter a number~"
          onChange={onChange}
          value={value}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") onSubmit();
          }}
        />
        <StyledInputSubmit type="button" value="Submit" onClick={onSubmit} />
      </StyledDivInput>
    </StyledTextBox>
    //</form>
  );
};
