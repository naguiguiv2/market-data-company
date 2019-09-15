import React from 'react'
import Button from '../button'
import * as S from './StartDownloadForm.styled'

const StartDownloadForm = (props) => {
	const { onRequestClose, pdfForm, onSubmit } = props
	return (
		<S.StartDownloadFormWrapper>
			<S.ImageWrapper>
				<S.CloseIcon
					src="/static/images/closeIcon.png"
					srcSet="/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x,
								 /static/images/closeIcon@3x.png 3x"
					onClick={onRequestClose}
				/>
			</S.ImageWrapper>
			<S.ContentWrapper>
				<S.Title>Start your download</S.Title>
				<S.Description>
					After reading, If you'd like to learn more about how we can help you
					optimize your data spend, get in touch with our team and we'd be happy
					to help you.
				</S.Description>
				<S.ButtonWrapper>
					<S.StyledAnchor href={pdfForm} target="_blank">
						<Button btnText="Download" onClick={onSubmit} />
					</S.StyledAnchor>
				</S.ButtonWrapper>
			</S.ContentWrapper>
		</S.StartDownloadFormWrapper>
	)
}

export default StartDownloadForm
