
import styled from "styled-components"

const NumberSelector = ({ setError , error , Selectednumber , setSelectedNumber}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
   
    const selectNumberHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex1">
                {arrNumber.map((value, i) => (
                    <Box isSelected={
                        value === Selectednumber
                    } key={i} onClick={() => selectNumberHandler(value)}>{value}</Box>
                ))}

            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;
    .flex1{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 600; 
    }
    .error{
        color: red;
        font-size: 20px;
        font-weight: 400;
    }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "#000" : "#fff"};
    color: ${(props) => props.isSelected ? "#fff" : "#000"};

`
