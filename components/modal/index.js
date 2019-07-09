import React, { useEffect } from 'react'
import Modal from 'react-modal'

const customStyles = {
	content: {
		padding: '20px 20px 0 20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: '724px',
		maxHeight: '600px',
		marginLeft: 'auto',
		marginRight: 'auto',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	overlay: {
		top: 0,
		left: 0,
		right: 0,
		margin: '20px',
		backgroundColor: 'none'
	}
}

const MDCModal = (props) => {
	const { children, modalVisible, onRequestClose } = props

	useEffect(() => {
		Modal.setAppElement('body')
	}, [])
	return (
		<Modal
			isOpen={modalVisible}
			onRequestClose={onRequestClose}
			style={customStyles}
		>
			{children}
		</Modal>
	)
}

export default MDCModal
