import styled from "styled-components";

const Titulo = styled.h1`
    color: ${props => props.color ? props.color : 'grey'};
    font-family: 'Fira Code ', Monospace;
`;

export default Titulo;