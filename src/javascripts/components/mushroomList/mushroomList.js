import mushroomData from '../../helpers/data/mushroomData';
import newMushroom from '../newMushroom/newMushroom';
import utils from '../../helpers/utils';
import mushroomComponent from '../mushroom/mushroom';
import smash from '../../helpers/data/smash';
import mycologistMushroomData from '../../helpers/data/mycologistMushroomData';
import editMushroom from '../editMushroom/editMushroom';

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

const showShroomForm = (e) => {
  editMushroom.showForm(e.target.closest('.card').id);
};

const editShroomEvent = (e) => {
  e.preventDefault();
  const mushroomId = e.target.closest('.edit-mushroom').id;

  const editedMush = {
    name: $('#edit-mush-name').val(),
    size: $('#edit-mush-size').val(),
    location: $('#edit-location').val(),
    weight: $('#edit-weight').val() * 1,
  };

  mushroomData.updateMushroom(mushroomId, editedMush)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#edit-shroom', '');
    })
    .catch((err) => console.error('could not edit mushroom', err));
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

const mycoMushroomController = (e) => {
  if (e.target.checked) {
    const newMycologistMushroom = {
      mushroomId: e.target.closest('.card').id,
      mycologistUid: e.target.dataset.mycologistUid,
    };

    mycologistMushroomData.addMycologistMushroom(newMycologistMushroom)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildForest();
        utils.printToDom('#single-myco', '');
        utils.printToDom('#new-shroom', '');
      })
      .catch((err) => console.error('could not create myco mushrom', err));
  } else {
    mycologistMushroomData.deleteMycoMushroom(e.target.id)
      .then(() => {
        // eslint-disable-next-line no-use-before-define
        buildForest();
        utils.printToDom('#single-myco', '');
        utils.printToDom('#new-shroom', '');
      })
      .catch((err) => console.error('delete myco mushroom failed', err));
  }
};

const buildForest = () => {
  smash.getMushroomsWithOwners()
    .then((mushrooms) => {
      let domString = `
        <h2 class="text-center m-4">Forest</h2>
          <div class="d-flex justify-content-center mb-4">
            <button class="btn btn-success" id="show-add-mush">New Shroom <i class="fas fa-plus-circle"></i></button>
          </div>
        <div class="d-flex flex-wrap">
      `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';
      utils.printToDom('#forest', domString);
    })
    .catch((err) => console.error('get mushrooms broke...', err));
};

const forestEvents = () => {
  $('body').on('click', '.delete-shroom', removeShroomEvent);
  $('body').on('click', '.edit-shroom', showShroomForm);
  $('body').on('click', '#mush-editor', editShroomEvent);
  $('body').on('click', '#show-add-mush', newMushroom.showForm);
  $('body').on('click', '#mush-creator', addShroomEvent);
  $('body').on('click', '.myco-shroom-checkbox', mycoMushroomController);
};

export default { buildForest, forestEvents };
