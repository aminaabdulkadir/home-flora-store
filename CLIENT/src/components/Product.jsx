import { Link } from "react-router-dom"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color:rgb(0,0,0,0.07) ;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transition: all 0.5s ease;
cursor: pointer;


`
const Container = styled.div`
flex: 1;
margin: 5px;
min-width:400px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFAF0;
position: relative;
&:hover ${Info}{
    opacity: 1;
};
${mobile({minWidth: '300px'})}
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image = styled.img`
height: 75%;
z-index: 2;

`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color:#FFFFF7;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover{
    background-color: #F8F6F0;
    transform: scale(1.1);
}

`


const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon> 
                <ShoppingCartOutlined/>
            </Icon>
            <Icon> 
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            <Icon> 
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>


    </Container>
      
  )
}

export default Product