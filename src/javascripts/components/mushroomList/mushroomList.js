import mushroomData from '../../helpers/data/mushroomData';
import newMushroom from '../newMushroom/newMushroom';
import utils from '../../helpers/utils';
import mushroomComponent from '../mushroom/mushroom';
import smash from '../../helpers/data/smash';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;

  smash.totallyRemoveShroomie(mushroomId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#single-myco', '');
    })
    .catch((err) => console.error('could not delete mushroom', err));
};

const addShroomEvent = (e) => {
  e.preventDefault();

  const newMush = {
    name: $('#mush-name').val(),
    size: $('#mush-size').val(),
    location: $('#location').val(),
    weight: $('#weight').val() * 1,
  };

  mushroomData.addMushroom(newMush)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#new-shroom', '');
    })
    .catch((err) => console.error('could not add mushroom', err));
};

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      let domString = `
        <h2 class="text-center m-4">Forest</h2>
          <div class="d-flex justify-content-center mb-4">
            <button class="btn btn-success" id="show-add-mush">New Shroom <i class="far fa-plus-square"></i></button>
          </div>
        <div class="d-flex flex-wrap">
      `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';
      utils.printToDom('#forest', domString);
      $('body').on('click', '.delete-shroom', removeShroomEvent);
      $('body').on('click', '#show-add-mush', newMushroom.showForm);
      $('body').one('click', '#mush-creator', addShroomEvent);
    })
    .catch((err) => console.error('get mushrooms broke...', err));
};

export default { buildForest };
