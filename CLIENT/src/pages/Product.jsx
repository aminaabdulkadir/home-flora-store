import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { RiTempHotLine } from "react-icons/ri";
import {GiPlantWatering  } from "react-icons/gi";
import {MdOutlineLightMode } from "react-icons/md";
import { Add, Remove } from "@material-ui/icons";
import{mobile} from '../responsive';
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import {publicRequest} from "../RequestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";



const Container = styled.div`

`
const Wrapper = styled.div `
padding: 50px;
display: flex;
${mobile({flexDirection: 'column', padding: '20px 0px 0px 35px', })}


     
`
const ImageContainer = styled.div`
flex: 1;
${mobile({width: "70%", margin: "0 auto"})}

    
`
const Image = styled.img`
width: 90%;




`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 0px;


`
const Title = styled.h1 `
font-weight: 300;
font-size: 40px;
margin-bottom: 20px;
text-emphasis-color: #F5F5F5;
${mobile({fontSize: "33px", marginTop: "5px"})}

`
const Care = styled.div `


`
const CareItem = styled.div `
${mobile({marginBottom: "20px"})}

`

const CareTitle = styled.h2 `
font-weight: 210;
${mobile({fontSize: "20px"})}

`
const Description = styled.p `
margin: 15px 0px;
color: #A9A9A9;
font-family: Verdana, Geneva, Tahoma, sans-serif;
${mobile({margin: '20px 25px', fontSize: "15px", margin: "10px 0px"})}

`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
margin-top: 50px;
${mobile({padding: '10px  10px 0px   30px', fontSize: "35px"})}
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0px;
${mobile({width: '100%'})}

`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid #2E8B57;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`
const Button = styled.button`
padding: 15px;
border: 2px solid #2E8B57;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #2E8B57;
    color: white;
};
${mobile({marginRight: '40px'})}
`
 

   const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);

            }catch { }
        }
        getProduct()
    },[id]);

    const handleQuantity = (type) => {
        if(type ==='dec'){
             quantity >1 && setQuantity(quantity-1)
        } else {
            setQuantity(quantity+1)
        }

    }
    
    const handleClick = () => {
       dispatch(addProduct({...product, quantity}));

    };

   

  

  return (
    <Container>
        <Announcement />
        <Navbar/>
        <Wrapper> 
            <ImageContainer>
                <Image src={product.img}/>
            </ImageContainer>

            <InfoContainer>
                <Title> {product.title} </Title>
                <Care>
                    <CareItem>
                        <GiPlantWatering size='3em' style={{paddingBottom:'5px'}}/> 
                        <CareTitle> Watering </CareTitle>
                        <Description> 
                        {product.watering}
                     </Description>
                    </CareItem>

                    <CareItem>
                     <MdOutlineLightMode size='3em' style={{paddingBottom:'5px'}} /> 
                     <CareTitle> Light </CareTitle> 
                        <Description> 
                        {product.light}
                     </Description>
                    </CareItem>

                    <CareItem>
                     <RiTempHotLine size='3em' style={{paddingBottom:'5px'}}/> 
                       <CareTitle> Temprature </CareTitle>
                       <Description> 
                       {product.temperature}
                     </Description>
                    </CareItem>
                </Care>

                <Price> {product.price} SR</Price>
                <AddContainer> 
                    <AmountContainer>
                        <Remove style={{cursor: 'pointer'}} onClick={()=>handleQuantity('dec')}/>
                        <Amount>{quantity}</Amount>
                        <Add style={{cursor: 'pointer'}} onClick={()=>handleQuantity('inc')}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>

        </Wrapper>
       
        <Newsletter/>
        <Footer />

    </Container>
  )
}

export default Product
