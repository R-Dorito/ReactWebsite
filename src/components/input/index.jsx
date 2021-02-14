//import "./inputStyle.css"
import styled from 'styled-components'


const StyledInputBox = styled.input`
    display: flex;
    padding: 10px;
    text-align: center;
    font: bold 25px Verdana, sans-serif;
    color: #4F6D7A;
`

const StyledInputSubmit = styled.input`
    background-color: #ee9ea1;
    font-weight: bold;
    padding: 10px;
    margin-left: 2.5px;
    
    &:hover{
        background-color: #E56B6F;
    }
`

const StyledDivInput = styled.div`
    display: flex;
    justify-content: right;
`

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