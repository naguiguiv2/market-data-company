import React from 'react'
import AnimatedFooterLink from '../../../components/animated-footer-link'
import * as S from './VideoLibrary.styled'

const VideoLibrary = () => {
    return (
        <div>
            <S.VideoWrapper>
                <iframe src="https://player.vimeo.com/video/389039609" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                {/* <p><a href="https://vimeo.com/389039609">Market Data Digital Compliance</a> from <a href="https://vimeo.com/user108216748">Market data company</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
            </S.VideoWrapper>
            <S.VideoWrapper>
                <iframe src="https://player.vimeo.com/video/445628814" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                {/* <p><a href="https://vimeo.com/389039609">Market Data Digital Compliance</a> from <a href="https://vimeo.com/user108216748">Market data company</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
            </S.VideoWrapper>
            <S.VideoWrapper>
                <iframe src="https://player.vimeo.com/video/423775429" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                {/* <p><a href="https://vimeo.com/389039609">Market Data Digital Compliance</a> from <a href="https://vimeo.com/user108216748">Market data company</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
            </S.VideoWrapper>
        </div>
    )
}

export default VideoLibrary
