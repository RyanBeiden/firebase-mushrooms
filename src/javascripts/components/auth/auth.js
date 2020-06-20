import firebase from 'firebase/app';
import 'firebase/auth';

import utils from '../../helpers/utils';

const signMeIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
};

const loginButton = () => {
  const domString = `
  <div class="d-flex justify-content-center mt-5">
    <button id="google-auth" class="btn btn-warning"><i class="fab fa-google"></i> - Login</button>
  </div>
  `;
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
