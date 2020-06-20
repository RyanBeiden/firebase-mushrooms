import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';

import '../styles/main.scss';

/**
 * Be able to 'log in' to our app
 * Be able to 'log out' of our app
 * See a login button if we are not logged in
 * See a logout if we ARE logged in
 * See a list of mushrooms (like a forest!) if we ARE logged in
 */

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
