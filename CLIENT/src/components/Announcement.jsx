import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
height: 30px;
background-color: #377737;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
${mobile({fontSize: "12px"})}

`

const Announcement = () => {
  return (
   <Container>
       Special Deal!  Free Shipping on Orders Over 500 SR
   </Container>
  )
}

export default Announcement
