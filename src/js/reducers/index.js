import { 
    FETCH_MOVIES_BEGIN,  
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE
} from "../actions/index";

const initialState = {
    items: [],
    loading: false,
    error: null
};

// function rootReducer(state = initialState, action) {
//     if (action.type === ADD_ARTICLE) {
//         return Object.assign({}, state, {
//             articles: state.articles.concat(action.payload)
//         });
//     }
//     return state;
// };

export default function movieReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.movies
            };
        
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}