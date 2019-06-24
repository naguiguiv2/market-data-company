import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
	width: 100%;
	background-color: ${(props) => props.theme.colors.white};
	z-index: 2;
	${breakpoint('desktop')`
    max-width: 724px;
  `}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 48px 23px;
	${breakpoint('desktop')`
    padding: 67px 86px;
  `}
`

export const InputWrapper = styled.div`
	margin-bottom: 20px;
`

export const ButtonWrapper = styled.div`
	align-self: center;
`
