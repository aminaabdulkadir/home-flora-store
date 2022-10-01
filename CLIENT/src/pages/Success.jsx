import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from "react-router-dom";









const Container = styled.div`
`
const Wrapper = styled.div `
padding: 20px;
${mobile({padding: '10px'})}
`
const Message = styled.div`
height: 450px;
width: 800px;
border: 2px solid green;
border-radius: 10px;
margin-left: 400px;
margin-top: 35px;
margin-bottom: 50px;


`
const Icon = styled.div`
height: 100px;
width: 100px;
margin-left: 360px;
margin-top: 36px;
margin-bottom: 30px;
color: green;
`

const Title = styled.h1`
text-align: center;
margin-bottom: 30px;
color: #9a9a9a;
font-size: 40px;

`
const Thanks = styled.h2`
text-align: center;
margin-bottom: 47px;
font-weight: 500;
color: #a7a7a7;


`
const Details = styled.h3`
text-align: center;
font-weight: 500;
color: #505050;
margin-bottom: 20px;
`

const Button = styled.button`
width: 140px;
height: 50px;
background-color: green;
color: white;
font-size: 17px;
border: 1px solid green;
border-radius: 20px;
margin-left: 340px;
margin-top: 20px;
cursor: pointer;

&:hover{
  background-color: #3d643c;
  color: white;
  border: none;
}
`

const Success = () => {
  
  return (
    <div>
      <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
          <Message>
            <Icon>
             <TaskAltIcon style={{height: "100%", width:"100%"}}/>
            </Icon>
            <Title>
              Transaction Completed Successfully!
            </Title>
            <Thanks>
              THANK YOU for shopping from <b>Home Flora</b>!
            </Thanks>
           <Details>
             We will send you an email with your purchase receipt and order details.
           </Details>
           <Link to="/">
           <Button>Home Page</Button>
           </Link>

          </Message>

        </Wrapper>
        <Footer/>
      </Container>
      
    </div>
  )
}

export default Success
