import React, { createContext, useReducer, useContext } from 'react'
import { USER_SIGNED_UP } from './actionTypes'

const initialState = {}

const StoreContext = createContext(initialState)

const userReducer = (state, action) => {
	switch (action.type) {
		case USER_SIGNED_UP:
			return { user: action.payload }
		default:
			return state
	}
}

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialState)
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}

export const useStore = (store) => {
	const { state, dispatch } = useContext(StoreContext)
	return { state, dispatch }
}
