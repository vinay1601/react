import styled  from "styled-components";

const Totalscore = ({ Score }) => {
  return (

      <ScoreContainer>
      <h1>{Score}</h1>
      <p>total scrore</p>
    </ScoreContainer>

  )
}

export default Totalscore


const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        
        font-size: 100px;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`
