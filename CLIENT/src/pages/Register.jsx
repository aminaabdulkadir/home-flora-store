import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: url('https://i.postimg.cc/zGP1b6hN/background.jpg' ) center no-repeat ;
background-size: 100%;
display: flex;
align-items: center;
justify-content: center;
${mobile({backgroundSize: 'cover'})}

`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background: #FBFBF9;
${mobile({width: '75%' , padding: '15px'})}

`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.span `
font-size: 14px;
margin: 20px 0px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #2E8B57;
color: white;
cursor: pointer;
`



const Register = () => {
  return (
   <Container>
     <Wrapper>
    <Title> CREATE AN ACCOUNT </Title>
     <Form>
       <Input placeholder='First name'/>
       <Input placeholder='Last name'/>
       <Input placeholder='Username'/>
       <Input placeholder='Email'/>
       <Input placeholder='Password'/>
        <Input placeholder='Confirm your password'/>

       <Agreement>
  By creating an account, I consent to the processing of my personal data in accordance with  <b>PRAIVACY POLICY</b>
      </Agreement>
      <Button>CREATE</Button>
       </Form>
       </Wrapper>
   </Container>
      
  )
}

export default Register
