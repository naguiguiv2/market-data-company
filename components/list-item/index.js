import React from 'react'
import * as S from './ListItem.styled'

const ListItem = (props) => {
	const { label } = props
	return (
		<S.ListItemWrapper>
			<S.Label>{label}</S.Label>
		</S.ListItemWrapper>
	)
}

export default ListItem
