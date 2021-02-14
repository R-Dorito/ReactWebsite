//import "./inputStyle.css"
import { StyledInputBox, StyledInputSubmit, StyledDivInput} from './inputStyling'

export const TextBox = (props) => {
    const { value, onChange, onSubmit } = props;
    
    return(
        <form onSubmit={onSubmit}>
        <label htmlFor="box">What multiply</label>
        <StyledDivInput>
            <StyledInputBox id="box" type="text" name="randomValue" onChange={onChange} value={value} />
            <StyledInputSubmit type="submit" value="Submit" />
        </StyledDivInput>
        </form>
    );
}