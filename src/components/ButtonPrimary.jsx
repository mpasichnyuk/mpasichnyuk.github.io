import React from 'react';
import styled from 'styled-components';

const Buttonprimary = ({title}) => {
    return (
        <ButtonPrimaryStyled>
            {title}
        </ButtonPrimaryStyled>
    );
}

const ButtonPrimaryStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    &::after{
        transition: all .4s ease-in-out;
        content: "";
        position: absolute;
        width: 0;
        height: 5%;
        background-color: white;
        left: 0;
        bottom: 0;
        opacity: .9;
            }
    &:hover::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 5%;
        background-color: white;
        left: 0;
        bottom: 0;
            }
`;

export default Buttonprimary;
