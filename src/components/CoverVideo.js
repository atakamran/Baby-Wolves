import React from 'react'
import styled from 'styled-components'
import ImageComponent from './media/ImageComponent'

const VideoContainer = styled.div`
    width: 100%;

    img{
        border-radius: 15px;
        width: 80%;
        height: auto;
    }

    @media (max-width: 64em) {
      min-width: 40vh;

      img { 
        border-radius: 15% !important;
      }
    }
`

const CoverVideo = () => {
  return (
    <VideoContainer>
      <ImageComponent url="https://s6.uupload.ir/files/bysj5zx_5nmh.gif" /> 
    </VideoContainer>
  )
}

export default CoverVideo