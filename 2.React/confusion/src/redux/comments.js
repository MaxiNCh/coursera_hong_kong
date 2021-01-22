import * as ActionTypes from './ActionTypes.js'

export const Comments = (state = {errMess: null, comments:[]}, action) => {
	switch (action.type) {
		case ActionTypes.ADD_COMMENT: 
			let comment = action.payload;
			comment.id = state.length;
			comment.date = new Date().toISOString();
			return {...state, comments: state.comments.concat(comment)}

		case ActionTypes.ADD_COMMENTS:
			return {
				...state,
				errMess: null,
				comments: action.payload
			}
		case ActionTypes.COMMENTS_FAILED:
			return {
				...state,
				errMess: action.payload,
				comments: []
			}
		default:
			return state;
	}
}