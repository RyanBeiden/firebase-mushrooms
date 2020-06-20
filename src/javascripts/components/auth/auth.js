import utils from '../../helpers/utils';

const signMeIn = () => {
  console.warn('Yea, I\'ll sign you in, just hold up one sec');
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google"></i> LOG ME IN</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
