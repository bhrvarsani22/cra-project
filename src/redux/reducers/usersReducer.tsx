import { USER_ADD, USER_DELETE } from "../types/types";

const initialState = {
    data: [],
}

export default function usersReducer(state = initialState, action: { type: any; payload: any; }) {

    switch (action.type) {
        case USER_ADD: return { ...state, data: action.payload };
        case USER_DELETE: return { ...state, data: [] };
        default: return state;
    }

}
