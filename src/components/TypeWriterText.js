import React from 'react'
import styled from 'styled-components'
// import Typewriter from 'typewriter-effect';
import Button from './Button'

const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
    font-family: "dosis", cursive;
    text-transform: capitalize;
    width: 80%;
    color: ${props => props.theme.text};
    align-self: flex-start;

    span {
        color: purple;
    }

    @media (max-width: 70em) {
        font-size: ${(props) => props.theme.fontxl};
    }
    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
    @media (max-width: 40em) {
        width: 90%;
    }
`

const SubTitle = styled.h3`
    font-size: ${props => props.theme.fontxs};
    color: ${props => `rgba(${props.theme.textRgba}, 0.8)`};
    font-weight: 600;
    margin-buttom: 1rem;
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
    @media (max-width: 40em) {
        font-size: ${(props) => props.theme.fontmd};
    }
`

const ButtonContainer = styled.div`
    button{
        color: black;
        background: linear-gradient(84deg, #727272, #ffffff);
        background-size: 400% 400%;
        
        -webkit-animation: AnimationName 43s ease infinite;
        -moz-animation: AnimationName 43s ease infinite;
        animation: AnimationName 43s ease infinite;
        
        @-webkit-keyframes AnimationName {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
        @-moz-keyframes AnimationName {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
        @keyframes AnimationName {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
    }
    align-self: flex-start;
    font-size: 18px;

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;

        button{
            margin-bottom: 20%;
            
        }
    }
`

const TypeWriterText = () => {
  return (
    <Title>
        <h2>Your meta pet <br/></h2>
        {/* <Typewriter
            options={{
                autoStart: true,
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter.typeString('<span>Fluffy</span>')
                .pause(40000)
                .deleteAll()
                .typeString('<span>Cute</span>')
                .pause(40000)
                .deleteAll()
                .typeString('<span>Adorible</span>')
                .pause(40000)
                .deleteAll()
                .start()
            }}
        /> */}
        <SubTitle>
            explore the pack <br/><br/>
        </SubTitle>
        <ButtonContainer>
            <Button text="Discord" link='https://discord.gg/DKptPuNW9H'></Button>
        </ButtonContainer>
    </Title>
  )
}

export default TypeWriterText