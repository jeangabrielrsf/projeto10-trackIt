import styled from "styled-components";

function AddHabitButton () {
    return (
        <Button>
            +
        </Button>
    );
}

const Button = styled.span`
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    border-radius: 4.5px;
    color: #FFFFFF;
    font-size: 27px;

    &:hover{
        cursor: pointer;
    }
`;

export default AddHabitButton;