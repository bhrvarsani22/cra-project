import { USER_ADD, USER_DELETE } from "../types/types";

const AddUserAction = (payload: any) => {
    return {
        type: USER_ADD,
        payload
    }
}

const DeleteUserAction = (payload: any) => {
    return {
        type: USER_DELETE,
        payload
    }
}

export { AddUserAction, DeleteUserAction }