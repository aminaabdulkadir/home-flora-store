import React from 'react';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import {mobile} from '../responsive';
import {useSelector, useDispatch} from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import {logout} from "../redux/apiCalls";
import SearchBar from './SearchBar';



const Container = styled.div`
  height: 60px;
  ${mobile({height:'58px'})};
 
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   ${mobile({padding:'10px 0px'})};

`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
${mobile({flex: 2, alignItems: "flex-start", width: "100px"})}


`
const Language= styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: 'none'})};
`


const Center = styled.div`
flex: 1;
text-align: center;
${mobile({flex: 3, justifyContent: "center", alignItems:"center"})};
`

const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize:'15px'})};

`



const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent:'flex-end', gap: "7px", marginRight: "10px"})};
`
const MenuIttem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:'10px', fontWeight: 500, marginLeft: '0px', })};
`


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector(state=>state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    logout(dispatch);
    navigate("/", {replace: true});
  }
 

  return (
     <Container>
       <Wrapper>
           <Left>
             <Language>EN</Language>
             <SearchBar />
           </Left> 
           <Center>
             <Link to= "/" style={{textDecoration: "none", color: "inherit"}} >
             <Logo>
             Home Flora
             </Logo>
             </Link>
             </Center>
           <Right>
             <Link to="/register" style={{textDecoration: "none", color: "inherit"}}>
             <MenuIttem>Register</MenuIttem>
             </Link>
             { user ?  
             <MenuIttem onClick={handleLogout} >Logout</MenuIttem>
                     : 
              <Link to="/login" style={{textDecoration: "none", color: "inherit"}}>
              <MenuIttem>sign in</MenuIttem>
              </Link>
             }
             <Link to="/cart" style={{textDecoration: "none", color: "inherit"}}>
             <MenuIttem> <Badge badgeContent={quantity} color="primary" overlap="rectangular">
                <ShoppingCartOutlined />
                         </Badge> 
            </MenuIttem>
            </Link>
           </Right>
      </Wrapper>
      </Container>
    
  )
}

export default Navbar
