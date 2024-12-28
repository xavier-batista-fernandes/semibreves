import styled from "styled-components";
import Button from "../components/button.tsx";

const Container = styled.div`
    text-align: center;
`;

const Heading = styled.h1`
    margin: 50px;
`;

const Subheading = styled.h3`
    font-size: 1.5rem;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 30px;
`

const Home = () => {
    return (
        <Container>
            <Heading>Semibreves</Heading>
            <Subheading>Música Tradicional Portuguesa</Subheading>
            <FlexContainer>
                <Button variant={'primary'}>
                    Música
                </Button>

                <Button variant={'primary'}>
                    História
                </Button>

                <Button variant={'primary'}>
                    Sobre Nós
                </Button>
            </FlexContainer>
        </Container>
    );
}

export default Home;