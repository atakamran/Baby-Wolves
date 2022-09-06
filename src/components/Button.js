import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`

    display: inline-block;
    color: white;
    font-weight: bold;
    outline: none;
    border: none;
    
    font-size: ${props => props.theme.fontsm};
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 1s ease;
    position: relative;
    
    
    background: linear-gradient(90deg, #ff0000, #ffd800);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 20s ease infinite;
    -moz-animation: AnimationName 20s ease infinite;
    animation: AnimationName 20s ease infinite;
    
    
    @-webkit-keyframes AnimationName {
        0%{background-position:91% 0%}
        50%{background-position:10% 100%}
        100%{background-position:91% 0%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:91% 0%}
        50%{background-position:10% 100%}
        100%{background-position:91% 0%}
    }
    @keyframes AnimationName {
        0%{background-position:91% 0%}
        50%{background-position:10% 100%}
        100%{background-position:91% 0%}
    }
`

const Button = ({text, link}) => {
  return (
    
        <a href={link} target={"_blank"} aria-label={text} rel="noreferrer">
            <Btn>{text}</Btn>
        </a>
  )
}

export default Button