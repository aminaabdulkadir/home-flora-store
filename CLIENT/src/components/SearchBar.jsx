import { Search, Clear } from '@material-ui/icons'
import { useEffect, useState } from "react";
import styled from "styled-components"
import { publicRequest } from '../RequestMethods';
import { mobile } from '../responsive';

const Container = styled.div`
position: relative;
${mobile({padding: "0px 10px 0px 0px", justifyContent:'flex-start', width: "60px",})}

`
const SearchArea = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
border: 0.5px solid lightgray;
padding: 5px;
margin-left: 25px; 
align-items: center;
${mobile({width: "100%",height: "20px" , alignItems: "flex-start", paddingLeft: "20px"})}

`
const SearchInputs = styled.div`
display: flex;
${mobile({width: "100%", height: "100%"})}


`

const Input = styled.input`
 border: none;
 outline: none;
 background-color: transparent;
 &::placeholder{
  font-size: 10px;
  }
  ${mobile({width: "100%", height: "100%", fontSize: "10px", padding: "0px"})}
 
 
`
const SearchIcon = styled.div`
cursor: pointer;
${mobile({width: "70%"})}
    
`

const DataResult = styled.div`
position: absolute;
top: 23px;
right: 5px;
margin-top: 13px;
width: 181.5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
overflow: hidden;
overflow-y: auto;
z-index: 4;
::-webkit-scrollbar{ display: none;}

${mobile({right: "-45px", width: "90px"})}
`

const DataItem = styled.a`
     width: 100%;
     height: 50px;
     display: flex;
     align-items: center;
     color: black;
     background-color: white;
    text-decoration: none;
     &:hover {
    background-color: lightgrey;
   }
   ${mobile({fontSize: "10px", height: "30px"})}
`
const ItemTitle = styled.p`
margin-left: 10px; 
`

const SearchBar = () => {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await publicRequest.get("/products");
                setProducts(res.data)
            }catch(err){

            }
        }
        getProducts()

    },[])

    const handleFilter = (e)=>{
        const searchWord = e.target.value;
        setWordEntered(searchWord);
       const newFilter = products.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
       
        if(searchWord === ""){
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }

    };

    const clearInput = () =>{
        setFilteredData([]);
        setWordEntered("");
    };


  return (
    <Container>
       <SearchArea>
          <SearchInputs>
          <Input
          type="text" 
          placeholder= {"Search.."}
          value={wordEntered}
          onChange={handleFilter}
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Search.."}
          />
           <SearchIcon>
               {filteredData.length === 0 
                ? 
                    ( <Search style={{color: "gray"} } /> )
                :   (<Clear style={{color: "gray"}} onClick={clearInput}/> )
                }
          </SearchIcon>
          </SearchInputs>

         {filteredData.length !==0 && (
          <DataResult>
          {filteredData.slice(0, 5).map((value)=>{
              return(
           <DataItem key={value._id}  href={`/product/${value._id}`} target="_blank" rel="noreferrer">
              <ItemTitle >{value.title} </ItemTitle >
            </DataItem>
              );
            })}
          </DataResult>
         )}
        </SearchArea>  
        </Container>
    
  )
}

export default SearchBar