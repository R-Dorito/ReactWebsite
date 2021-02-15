//import "./inputStyle.css"
import { StyledInputBox, StyledInputSubmit, StyledDivInput} from './inputStyling'

export const TextBox = (props) => {
    const { value, onChange, onSubmit } = props;
    
    return(
        //<form onSubmit={onSubmit}>
        <>
            <label >What multiply</label>
            <StyledDivInput>
                <StyledInputBox autoComplete="off" placeholder="Enter a Number" type="text" name="randomValue" onChange={onChange} value={value} onKeyDown={(ev) => { if (ev.key === "Enter") onSubmit()}}/>
                <StyledInputSubmit type="button" value="Submit" onClick={onSubmit} />
            </StyledDivInput>
        </>
        //</form>
    );
}