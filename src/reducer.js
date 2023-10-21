export const initialState = Array(9).fill(null);

export const reducer = (state = initialState, action) => {

const {type, payload} = action;

switch (type){

	case 'SET_FIELDITEMS': {
		return payload;
	}
	default:
	return state;
}

};
