import { Button } from "../styled/Button"
import styled from "styled-components"


const Startgame = ({ toggle }) => {
  return (
    <div>
      <Container>
      <div className="imag_data">
          <img src="/images/dice.png" alt="" />
        </div>
        <div className="contant">
          <h5>DICE GAME</h5>
          <Button onClick={toggle}  >Submit</Button>
        </div>
      </Container>
    </div>
  )
}

export default Startgame

const Container = styled.div`
  max-width: 1180px;
  /* border: 2px solid red; */
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .contant{
    /* border: 2px solid red; */
    h5{
      /* border: 2px solid brown; */
      font-size: 96px;
      white-space: nowrap;
    }
  }

  .imag_data{
    /* border: 2px solid red; */
    padding: 20px;
    img{
      width: 525px;
    }
  }
`
const Page_contain = styled.div`
/* border: 2px solid red; */
`