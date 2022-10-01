import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #F5F5DC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Tittle = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({fontSize: "50px"})}
    
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: 'center', fontSize:"20px", marginTop: "10px"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid #E8E4C9;
    ${mobile({width: '80%', marginTop: "35px"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 0.9;
    border: none;
    background-color: #F3E5AB;
    color: white;
    cursor: pointer;
`

export default function Newsletter() {
  return (
    <Container>
        <Tittle>Newsletter</Tittle>
        <Description>Get timely updates from your favoriate collection!</Description>
        <InputContainer>
        <Input placeholder='Kindly enter your email'
        onFocus={(e) => e.target.placeholder = ""}
        onBlur={(e) => e.target.placeholder = 'Kindly enter your email'}/>
        <Button>
           <Send /> 
        </Button>
        </InputContainer>
    </Container>
      
    
  )
}
