import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, LinkedIn } from "@material-ui/icons"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { mobile } from "../responsive"

const Container = styled.div`
   display: flex;
   justify-content: center;
   ${mobile({flexDirection: 'column'})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
   
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
    letter-spacing: 1.4px;
    width: 300px;
    
`
const SocialMediaContainer = styled.div`
    display: flex;
    margin-top: 15px;
    ${mobile({justifyContent: "center"})}
  
`
const SocialIcon = styled.div`
width: 38px;
height: 38px;
border-radius: 50%;
color: white;
background-color: #${props=> props.color};
margin-right: 20px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:'none'})};
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
     margin: 0;
     padding: 0;
     list-style: none;
     display: flex;
     flex-wrap: wrap;
      

`
const ListItems = styled.li `
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({borderTop: "0.5px solid lightgray"})}
`

const ContactItem = styled.div `
margin-bottom: 15px;
display: flex;
align-items: center;
`

const Payment = styled.img `
width: 50%;
margin-top: 0px;
${mobile({width: "20%"})}

`



const Footer = () => {
  return (
   <Container>
       <Left> 
           <Logo> Home Flora </Logo>
           <Description>
           We love plants, they give us oxygen for the lungs and for the soul !
           </Description>
           <SocialMediaContainer>
               <SocialIcon color='3B5999'>
                   <Facebook style={{fontSize: "24px"}}/>
               </SocialIcon>
               <SocialIcon color='E4405F'>
                   <Instagram style={{fontSize: "24px"}}/>
               </SocialIcon>
               <SocialIcon color='55ACEE'> 
                   <Twitter style={{fontSize: "24px"}}/>
               </SocialIcon>
               <SocialIcon color='006db0'>
                   <LinkedIn style={{fontSize: "25px"}}/>
               </SocialIcon>
               
               

           </SocialMediaContainer>

       </Left>
       <Center>
           <Title>Useful Links</Title>
           <List>
        
               <ListItems> 
                   <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                   Home 
                   </Link>
                   </ListItems>
                   
               <ListItems> 
               <Link to="/cart" style={{textDecoration: "none", color: "inherit"}}>
                   Cart 
                   </Link>
                   </ListItems>

               <ListItems> 
                   <Link to="/products/Low Water and Light Plants" style={{textDecoration: "none", color: "inherit"}}>
                   Low Water and Light Plants
                   </Link>
                   </ListItems>

               <ListItems> 
                   <Link to="/products/Office Plants" style={{textDecoration: "none", color: "inherit"}}>
                   Office Plants 
                   </Link>
                   </ListItems>

               <ListItems> 
               <Link to="/products/Flowering Plants" style={{textDecoration: "none", color: "inherit"}}>
                   Flowering Plants 
                   </Link>
                   </ListItems>
               <ListItems> 
                   My Account 
                   </ListItems>
               <ListItems> 
                   Order Tracking
                   </ListItems>
               <ListItems> 
                   Wishlist
                   </ListItems>
               <ListItems> 
                   Terms 
                   </ListItems>

           </List>

       </Center>
       <Right>
           <Title>Contact</Title>
           <ContactItem> <Room style={{marginRight:'10px'}} /> 878 AlAwali, Makkah 98709, SA</ContactItem>
           <ContactItem> <Phone style={{marginRight:'10px'}} /> +966 123456789</ContactItem>
           <ContactItem> <MailOutline style={{marginRight:'10px'}} /> contact@homeflora.com</ContactItem>

           <Payment src= 'https://i.postimg.cc/RFKBGHGZ/Footer-payment-icons-600x113-copy.png' />


       </Right>

   </Container>
      
    
  )
}

export default Footer
