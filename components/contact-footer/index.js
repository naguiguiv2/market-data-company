import React from 'react'
import Router from 'next/router'
import Button from '../button'
import * as S from './ContactFooter.styled'

const ContactFooter = () => {
	return (
		<S.ContactFooterWrapper>
			<S.Content>
				<S.Title>See how we can help</S.Title>
				<S.Description>
					Reach out to us to explore our services or hear our ideas about the
					industry in greater detail
				</S.Description>
			</S.Content>
			<S.ButtonWrapper>
				<Button
					btnText="Contact us"
					onClick={() => {}}
					isDefault={false}
					onClick={() => Router.push('/contact')}
				/>
			</S.ButtonWrapper>
		</S.ContactFooterWrapper>
	)
}

export default ContactFooter
