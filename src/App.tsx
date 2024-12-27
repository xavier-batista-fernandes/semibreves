import {useState} from 'react';
import styled from 'styled-components';
import Button from './components/button';

const Container = styled.div`
    text-align: center;
`;

const Heading = styled.h1`
    margin-bottom: 200px;
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

const App = () => {
    const [count, setCount] = useState(5);

    return (
        <Container>
            <Heading>Semibreves</Heading>
            <Subheading>Música Tradicional Portuguesa</Subheading>

            <FlexContainer>
                <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
                    count is {count}
                </Button>

                <Button variant={'primary'} onClick={() => setCount((prevCount) => prevCount + 1)}>
                    Música
                </Button>

                <Button variant={'primary'} onClick={() => setCount((prevCount) => prevCount + 1)}>
                    História
                </Button>

                <Button variant={'primary'} onClick={() => setCount((prevCount) => prevCount + 1)}>
                    Sobre Nós
                </Button>


            </FlexContainer>
        </Container>
    );
}

export default App;
