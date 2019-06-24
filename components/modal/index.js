import React from 'react'
import Modal from 'react-modal'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
}

const MDCModal = (props) => {
	const { children, modalVisible, onRequestClose } = props
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
