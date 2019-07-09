import React from 'react'
import ListItem from '../list-item'
import * as S from './HamburgerMenuContent.styled'

const HamburgerMenuContent = (props) => {
	const { onCloseModal } = props
	return (
		<S.HamburgerMenuContentWrapper>
			<S.Header>
				<div>
					<img
						src="../../static/images/mdc-logo-horizontal-black.png"
						srcSet="../../static/images/mdc-logo-horizontal-black@1x.png 1x, ../../static/images/mdc-logo-horizontal-black@2x.png 2x,
                                  ../../static/images/mdc-logo-horizontal-black@3x.png 3x"
					/>
				</div>
				<div onClick={onCloseModal}>
					<img
						src="../../static/images/closeIcon.png"
						srcSet="../../static/images/closeIcon.png 1x, ../../static/images/closeIcon@2x.png 2x,
								 ../../static/images/closeIcon@3x.png 3x"
					/>
				</div>
			</S.Header>
			<ListItem label="Research" />
			<ListItem label="Our team" />
			<ListItem label="Contact us" />
		</S.HamburgerMenuContentWrapper>
	)
}

export default HamburgerMenuContent
