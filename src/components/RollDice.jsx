
import styled from "styled-components";

const RollDice = ({rolDice , CurrentDice}) => {
 



  // const 

  return (
    <DiceContainer>
      <div className="dice" onClick={rolDice}>
      <img src={`images/dice/dice_${CurrentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
      <div>

      </div>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 0;
  img{
    width: 250px;
    height: 250px;
  }
  p{
    font-size: 24px;
  }
`


