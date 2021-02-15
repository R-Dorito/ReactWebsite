import styled from 'styled-components'

export const StyledNavList = styled.ul`
  background-color: #e0f1f5;
  // position: absolute;
  margin: 3px;
  margin-left: 0px;
  padding: 0px 0px 10px 0px; 
  border: 2px solid black;
  border-radius: 5px;
  list-style-type: none;
  width: 200px;
  max-width: 200px;
  transition: background-color 0.2s ease-in-out; 
  transform: translate(0px, 0px);


  &:hover{
    background-color: #aeebd3;
    box-shadow: 10px 10px 8px #ced5d6;
    transform: translate(-1px, -1px);
  }
`

export const StyledListItem = styled.li`
  padding: 0px 20px 0px 20px;
  font: bold 15px Verdana, sans-serif;
  
` 
export const MathBody = styled.div`  
`

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Exit = styled.div`
  display: flex;
  margin: 0px;
  //padding: 10px;
`
export const Close = styled.h1`
  margin: 0px;
  margin-right: 2px;
  margin-left: auto;
  padding: 2px;
  font:  20px Verdana, sans-serif;
  color: #4F6D7A;
  &:hover{
    cursor: pointer;
    color: white;
  }
`
export const Variable = styled.h1`
  padding: 0px 0px 5px 20px;
  margin: 0px;
  
`