import styled from "styled-components";

function Topo (source) {
    return (
        <Header>
            <h2>TrackIt</h2>
            <img src={source} alt=""/>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    
    h2 {
        color: #ffffff;
        font-size: 39px;
        line-height: 48.73px;
        font-family: 'Playball', cursive;
        margin-left: 20px;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        margin-right: 20px;
    }
`;

export default Topo;