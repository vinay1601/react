import React, { useState } from 'react'
import Totalscore from './Totalscore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';
import { Button, OutlineBtn } from '../styled/Button';
import Ruleslist from './Ruleslist';

const GamePlay = () => {
  const [Score , setScore] = useState(0);
  const [Selectednumber, setSelectedNumber] = useState();
  const [CurrentDice , SetCurrDice] = useState(1);
  const [error , setError] = useState("");
  const [ShowRules , setShowRules] = useState(false);

  const RestScore = () => {
    setScore(0);
  }

  const randomNumberGenerate = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rolDice = () => {
    if(!Selectednumber) {
      setError("You have not selected any number");
      return
    };
    const randomNumber = randomNumberGenerate(1,7);

    SetCurrDice((prev) => randomNumber);

  

    if(Selectednumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined);
  }

  return (
    <MainContainer>
      <div className='top_selection'>
      <Totalscore Score={Score} />
      <NumberSelector error={error} setError={setError} Selectednumber={Selectednumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice CurrentDice={CurrentDice} rolDice={rolDice}  />
      <div className="btns">
        <OutlineBtn onClick={RestScore}>Reset</OutlineBtn>
        <Button
        onClick={() => setShowRules(prev => !prev)}
        >{
        ShowRules  ? " hide " : " show "          
          } Rules</Button>
      </div>

      {ShowRules && <Ruleslist />}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 40px;
  .top_selection{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 0 20px 0;
  } 

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 10px;
  }
`
