import React from 'react'
import * as S from './ListItem.styled'

const ListItem = (props) => {
	const { label, onClick } = props
	return (
		<S.ListItemWrapper onClick={onClick}>
			<S.Label>{label}</S.Label>
		</S.ListItemWrapper>
	)
}

export default ListItem
