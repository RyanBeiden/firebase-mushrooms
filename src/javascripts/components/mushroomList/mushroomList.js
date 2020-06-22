import mushroomData from '../../helpers/data/mushroomData';
// import utils from '../../helpers/utils';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => console.warn('Get mushrooms works!!', mushrooms))
    .catch((err) => console.error('get mushrooms broke...', err));
  // const domString = 'I SEE!!!';
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
