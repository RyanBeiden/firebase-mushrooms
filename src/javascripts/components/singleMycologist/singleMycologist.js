import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      const domString = `<h1>${mycologist.name}</h1>`;
      utils.printToDom('#single-myco', domString);
    })
    .catch((err) => console.error('problem with single mycologist and', err));
};

export default { buildMycologist };
