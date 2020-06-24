import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  smash.getSingleMycoWithShrooms(mycologistId)
    .then((mycologist) => {
      console.warn('here is your mycologist:', mycologist);
      const domString = `
      <div style="background-color: yellow; padding: 15px; margin: 45px 15px;">
        <h1>Featured Mycologist</h1>
        <h3>${mycologist.name} (Age: ${mycologist.age})</h3>
      </div>
      `;
      utils.printToDom('#single-myco', domString);
    })
    .catch((err) => console.error('problem with single mycologist and', err));
};

export default { buildMycologist };
