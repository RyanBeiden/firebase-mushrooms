import smash from '../../helpers/data/smash';
import utils from '../../helpers/utils';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  smash.getSingleMycoWithShrooms(mycologistId)
    .then((mycologist) => {
      let domString = `
      <div style="background-color: #FFC60A; padding: 15px; margin: 45px 15px;">
        <h1 style="color: #fff;">Featured Mycologist</h1>
        <h3>${mycologist.name} (Age: ${mycologist.age})</h3>
      <div style="border: 2px solid #fff; padding: 15px;" class="mt-3">
        <h5>Mushroom(s) Owned:</h5>
      `;
      mycologist.mushrooms.forEach((mushroom) => {
        domString += `<p>${mushroom.name}</p>`;
      });
      domString += `
        </div>
      </div>
      `;
      utils.printToDom('#single-myco', domString);
    })
    .catch((err) => console.error('problem with single mycologist and', err));
};

export default { buildMycologist };
