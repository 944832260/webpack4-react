const InitState = {};



export default function user(state=InitState, action) {

  let obj = JSON.parse(JSON.stringify(action));
  delete obj.type;

  switch (action.type) {
    // 用户登录
    case 'LOGIN_IN':
      return obj;

    // 用户退出
    case 'SIGN_OUT':
      return {};

    // 更新数据
    case 'UPDATE_USER':
      return obj;

    default:
      return state;
  }
}
