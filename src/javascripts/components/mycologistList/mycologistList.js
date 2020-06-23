import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';
import mycologistComponent from '../mycologist/mycologist';

const buildHut = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = `
        <h2 class="text-center mb-2 mt-5">Mycologist Hut</h2>
        <div class="d-flex justify-content-center flex-wrap">
      `;
      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });
      domString += '</div>';
      utils.printToDom('#hut', domString);
    })
    .catch((err) => console.error('something broke here', err));
};

export default { buildHut };