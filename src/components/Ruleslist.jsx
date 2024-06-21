import styled from 'styled-components'

const Ruleslist = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  )
}

export default Ruleslist


const RulesContainer = styled.div`

    background: #fbf1f1;
    padding: 20px;
    margin-top: 40px!important;
    margin: 0 auto;
    max-width: 800px;
    border-radius: 10px;

    h2{
        font-size: 20px;
    }
    .text{
        margin-top: 20px;
    }


`