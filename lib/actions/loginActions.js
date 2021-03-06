var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.requestLogin=requestLogin;exports.loginFailed=loginFailed;exports.onLoginResponse=onLoginResponse;exports.enableLoader=enableLoader;exports.disableLoader=disableLoader;var types=_interopRequireWildcard(require("./types"));function requestLogin(username,password){return{type:types.LOGIN_REQUEST,username:username,password:password};}function loginFailed(){return{type:types.LOGIN_FAILED};}function onLoginResponse(response){return{type:types.LOGIN_RESPONSE,response:response};}function enableLoader(){return{type:types.LOGIN_ENABLE_LOADER};}function disableLoader(){return{type:types.LOGIN_DISABLE_LOADER};}