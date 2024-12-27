import styled from "styled-components";

const Button = styled.button<{ variant?: 'primary' }>`
    padding: 12px 24px;
    font-size: 1.25rem;
    min-width: 200px;
    border: none;
    cursor: pointer;

    background: linear-gradient(to top, #FFECC8 50%, #FFD09B 50%) bottom;
    background-size: 100% 300%;
    transition: background-position 0.2s linear;

    position: relative;
    text-transform: uppercase;
    font-family: "Andale Mono", "Adelle Sans Devanagari", serif;


    &:hover {
        background-position: top;

    }

    &:before {
        content: "";
        border: 2px solid black;
        border-bottom: none;
        position: absolute;
        top: -2px;
        left: -2px;
        width: 100%;
        height: 50%;
    }
`;

export default Button;