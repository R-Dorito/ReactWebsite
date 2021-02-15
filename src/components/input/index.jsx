//import "./inputStyle.css"
import styled from "styled-components";
import {
  StyledInputBox,
  StyledInputSubmit,
  StyledDivInput,
} from "./inputStyling";

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
          placeholder="Enter a Number"
          type="text"
          name="randomValue"
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
