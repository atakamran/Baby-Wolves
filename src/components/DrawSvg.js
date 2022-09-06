import React from 'react'
import styled from 'styled-components'
import Vector from '../Icons/Vector'

const VectorContainer = styled.div `
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hiddden;

    svg{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 48em){
        left: 1rem;
    }
`

const DrawSvg = () => {
    
    return (
        <VectorContainer>
            <Vector />
        </VectorContainer>
    )
}

export default DrawSvg