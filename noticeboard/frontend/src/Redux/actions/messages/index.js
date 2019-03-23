//ERRORS
export const getErrors = (error) => {
    return {
        type: GET_ERRORS,
        msg: error
    }
}

//MESSAGES
export const getMessages = (msg) => {
    return {
        type: SUCCESS_MESSAGE,
        msg: msg
    }
}