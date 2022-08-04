import styled from "styled-components";

function PageTitle({title}) {
    return (
        <Title>
            {title}
        </Title>
    );
}

const Title = styled.h3`
    color: #126BA5;
    font-size: 23px;
    line-height: 28.72px;
`;

export default PageTitle;


