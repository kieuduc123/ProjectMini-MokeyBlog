import React from 'react';
import  styled from 'styled-components';

const LoadingStyled= styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border :${(props) => props.borderSize} solid white;
    border-top: 5cap solid transparent;
    border-bottom :5px solid transparent;
    border-radius: 100rem;
    display: inline-block;
    animation: spinner 1s infinite linear;
    @keyframes spinner {
        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadingSpinner = ({size = "40px", borderSize= "5px"}) => {
    return (
        <LoadingStyled  size= {size} borderSize= {borderSize}>
        </LoadingStyled>
    );
};

export default LoadingSpinner;