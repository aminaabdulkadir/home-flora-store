import { useState } from "react"
import { useLocation } from "react-router"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div`
    
`
const Title = styled.h1 `
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div `
    margin: 20px;
    ${mobile({margin: '0px 17px  0px  17px', display: 'flex', flexDirection: 'column'})};
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: '0px', fontSize: '17px'})};
`
const Select = styled.select `
padding: 10px;
margin-right: 20px;
${mobile({marginTop: '10px', marginBottom: '10px' , marginRight: '5px'})}

`
const Option = styled.option `
`

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value,
        });

    };
    
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title> {category.replaceAll('%20', ' ')} </Title>
        <FilterContainer>
            <Filter> <FilterText> Filter Products: </FilterText> 
            <Select name="size" onChange={handleFilters}>
                <Option disabled > Plant Size </Option>
                <Option> Small Plants </Option>
                <Option> Large Plants </Option>
            </Select>
            <Select name="type" onChange={handleFilters}>
                <Option disabled > Plant Type</Option>
                <Option> Summer Plants </Option>
                <Option> Fall Plants </Option>
                <Option> Cactus and Succulents </Option>
                <Option> Climbing Plants </Option>
                <Option> Tree Type Plants </Option>
            </Select>
            </Filter>
            <Filter> <FilterText> Sort Products: </FilterText> 
            <Select onChange={(e)=> setSort(e.target.value)}>
                <Option value="Newest"> Newest</Option>
                <Option value="asc">  Price (asc)</Option>
                <Option value="desc"> Price (desc)</Option>
            </Select>
            </Filter>

            
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />

    </Container>
      
  )
}


export default ProductList
