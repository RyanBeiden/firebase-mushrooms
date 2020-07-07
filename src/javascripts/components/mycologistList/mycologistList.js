import Prando from 'prando';
import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';
import mycologistComponent from '../mycologist/mycologist';
import singleMycologist from '../singleMycologist/singleMycologist';
import newMycologist from '../newMycologist/newMycologist';
import './mycologistList.scss';

const addMycoFormData = (e) => {
  e.preventDefault();
  const rng = new Prando();

  const newMyco = {
    name: $('#myco-name').val(),
    age: $('#myco-age').val() * 1,
    uid: rng.nextInt(0, 1000000000000000000000),
  };

  mycologistData.addMyco(newMyco)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildHut();
      utils.printToDom('#new-myco', '');
    })
    .catch((err) => console.error('could not add mycologist', err));
};

const buildHut = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
        <h2 class="text-center mb-2 mt-5">Mycologist Hut</h2>
          <div class="d-flex justify-content-center mb-4 mt-4">
            <button class="btn btn-warning" id="show-myco-form">New Mycologist <i class="fas fa-plus-circle"></i></button>
          </div>
        <div class="d-flex justify-content-center flex-wrap">
      `;
      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });
      domString += '</div>';
      utils.printToDom('#hut', domString);

      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
      $('body').on('click', '#show-myco-form', newMycologist.showMycoForm);
      $('body').one('click', '#myco-creator', addMycoFormData);
    })
    .catch((err) => console.error('something broke here:', err));
};

export default { buildHut };
