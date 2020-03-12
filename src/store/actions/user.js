
// 登录
export const LoginIn = obj => {
    return {
        type: "LOGIN_IN",
        ...obj
    }
};

// 退出
export const SignOut = obj => {
    return {
        type: "SIGN_OUT",
        ...obj
    }
};

// 更新数据
export const UpdateUser = obj => {
    return {
        type: "UPDATE_USER",
        ...obj
    }
};
