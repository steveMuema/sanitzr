/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

// import { Alert } from 'react-native';
// import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* loginAsync() {
  // yield put(loginActions.enableLoader());
  //how to call api
  // try {
  //   yield call(loginUser, action.username, action.password);
  //   // console.log(response.auth);
  // } catch (error) {
  //   // console.log(error);
  //   setTimeout(() => {
  //     Alert.alert('BoilerPlate', error.toString());
  //   }, 200);
  // }
  //mock response
  const response = { success: true, data: { id: 'dummy-token' } };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data.id));
    // yield put(loginActions.disableLoader({}));
    // yield call(navigationActions.navigateToHome);
    // } else {
    //   yield put(loginActions.loginFailed());
    //   yield put(loginActions.disableLoader({}));
    //   setTimeout(() => {
    //     Alert.alert('BoilerPlate', response.Message);
    //   }, 200);
  }
}
