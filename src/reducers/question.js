import * as types from '../constants/ActionTypes';

export default function question(state ={
	currentQuestion: 1,
	totalQuestion: 10,
	selectedAnswer: null,
	submittedAnswer: {}
}, action) {
	switch(action.type){
		case types.NEXT_QUESTION:
			return Object.assign({}, prevState, {
				currentQuestion: (prevState.currentQuestion + 1) % prevState.totalQuestion
			});

		case types.PREV_QUESTION:
			return Object.assign({}, prevState, {
				currentQuestion: (prevState.currentQuestion === 1  ) ? 1 : prevState.currentQuestion - 1
			})

		default:
			return state;
	}

}