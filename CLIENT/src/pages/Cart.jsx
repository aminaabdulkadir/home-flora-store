import { Add, Remove, Delete } from "@material-ui/icons"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { reset } from "../redux/cartRedux";
import { removeProduct } from "../redux/cartRedux";

import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import {userRequest} from "../RequestMethods";





const Container = styled.div`
`
const Wrapper = styled.div `
padding: 20px;
${mobile({padding: '10px'})}
`
const Title= styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton= styled.button`
padding: 10px;
font-weight:600;
cursor: pointer;
border: ${props => props.type === 'filled' && 'none'};
background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
color: ${props => props.type === 'filled' && 'white' };
`

const TopTexts = styled.div`
${mobile({display: 'none'})}
`

const TopText = styled.span`
text-decoration: underline;
margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})}
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.p`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span`
`
const ProductId= styled.span`
`
const ProductSize= styled.span`
`
const ProductType= styled.span`
`
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const ProductAmountContainer = styled.div`
display: flex;
align-items:center;
margin-bottom: 20px;
margin-left: 25px;


`
const ProductAmount = styled.div`
font-size: 24px;
margin-right: 5px;
${mobile({margin: '5px 15px'})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
margin-left: 25px;
${mobile({marginBottom: '20px'})}

`
const Hr = styled.hr`
background-color: #EEE;
border: none;
height: 1px;

`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 40vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === 'total' && '500'} ;
font-size: ${props => props.type === 'total' && '24px'} ;
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`
const Response = styled.h1`
display: inline-block;
color: #255625;
padding: 10px 20px;
background: #c0efc0;
border: #aadeab 1px solid;
border-radius: 3px;
margin-bottom: 20px;
`
const Icon  = styled.div`
margin-left: 17px;
cursor: pointer;

`

const Cart = () => {
    const cart= useSelector(state => state.cart);
    const quantity =  useSelector(state=>state.cart.quantity);
    const currentUser = useSelector((state) => state.user.currentUser);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const amount = cart.total ;
    const currency = "USD";
    const style = {"layout":"vertical"};

 const creatOrder = async (data) =>{
     try{
         const res = await userRequest.post("/orders", data);
         if (res.status === 200 ) {
         navigate("/success", {replace: true});
         }
         dispatch(reset());
     }
      catch(error){
         console.log(error)
     }
 };
    // Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: "USD",
            },
        });
    }, [currency, showSpinner]);

    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
         
        </>
    );
}









  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
          <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
        <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
        <TopTexts>
            <TopText>Shopping Bag({quantity})</TopText>
            <TopText>Your Whishlist(0)</TopText>
        </TopTexts>
        <TopButton type='filled' onClick={()=>setOpen(true)}>CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
                <Info> 
                   
                   {cart.products.map(product => (
                   <Product>
                        <ProductDetail> 
                            <Image src={product.img}/>
                            <Details> 
                                <ProductName> <b>Order :</b> {product.title} </ProductName>
                                <ProductId> <b>ID :</b> {product._id} </ProductId>
                                <ProductSize> <b>Category :</b> {product.categories}</ProductSize>
                                <ProductType> <b>Size :</b> {product.size}</ProductType>
                            </Details>
                        </ProductDetail>
                        
                        <PriceDetail> 
                        <ProductAmountContainer>
                            <Add cursor= "pointer"/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove cursor= "pointer"/>
                            <Icon>
                                <Delete onClick={()=> dispatch(removeProduct({...product, quantity }))} /> 
                            </Icon> 
                        </ProductAmountContainer>
                        <ProductPrice> {product.price * product.quantity} SR</ProductPrice>
                        </PriceDetail>
                        
                    </Product> 
                    
                    ))}
                  

                 </Info>
                 
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText> Subtotal </SummaryItemText>
                        <SummaryItemPrice>{cart.total} SR</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText> Estimated Shipping </SummaryItemText>
                        <SummaryItemPrice> 0 SR</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText> Shipping Discount </SummaryItemText>
                        <SummaryItemPrice> 0 SR</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type='total'>
                        <SummaryItemText> Total </SummaryItemText>
                        <SummaryItemPrice> {cart.total }  SR</SummaryItemPrice>
                    </SummaryItem>
                    {open 
                    ? (<PayPalScriptProvider
                options={{
                    "client-id": 
                    "AbUeNq0wC857RklR--YN_LyjdXBIkKS1qwaefokyGBmT_NJlxqdRANE8E_OOH_MJUCodyAKtuWpxv67w",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card"
                }}
            >
				   <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                  }}
                  onApprove={async function (data, actions) {
                    return await actions.order.capture().then(function (details) {
                    const shipping = details.purchase_units[0].shipping;
                    creatOrder({
                        customer: shipping.name.full_name,
                        userId: currentUser._id,
                        products: cart.products.map((item)=> ({
                            productId: item._id,
                            productName: item.title,
                            productImg: item.img,
                            quantity: item._quantity,

                        })),
                        total: cart.total,
                        address: shipping.address.address_line_1, 
                    });       
                    });
                }}      
            />
			</PayPalScriptProvider>) 
            : (<Button onClick={()=>setOpen(true)}>CHECKOUT NOW</Button>
            )}
                    
                   
                </Summary>

            </Bottom>
        </Wrapper>
        <Footer />


    </Container>
  )
}

export default Cart
