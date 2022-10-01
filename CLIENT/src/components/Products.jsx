import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { bestProducts } from "../data"
import { mobile } from "../responsive"
import Product from "./Product"

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
${mobile({padding: '0px'})}


`

const Products = ({category, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get( 
          category 
           ?`http://localhost:312/api/products?category=${category}` 
           :"http://localhost:312/api/products"
           );
           setProducts(res.data)
       

      }catch(err){

      }
    };
    getProducts()

  },[category]);

  useEffect(()=>{
    category && 
    setfilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>
      item[key].includes(value)
      ))
    )

  },[products, category,filters])

  useEffect(()=>{
    if((sort === 'Newest')){
      setfilteredProducts((prev)=>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt)
        );
    } else if ((sort === 'asc')){
      setfilteredProducts((prev)=>
        [...prev].sort((a,b)=> a.price - b.price)
        );
    } else {
      setfilteredProducts((prev)=>
        [...prev].sort((a,b)=> b.price - a.price)
        );
    }
  },[sort]);

  return (
    <Container>
        {category 
        ? filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))
        : products.slice(0,9)
        .map((item)=>(
          <Product item={item} key={item.id}/>
      )) }


    </Container>
      
  )
}

export default Products
