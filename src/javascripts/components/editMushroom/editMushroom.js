import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';

const showForm = (mushroomId) => {
  mushroomData.getMushroomById(mushroomId)
    .then((response) => {
      const mushroom = response.data;

      const domString = `
      <form class="edit-mushroom" id="${mushroomId}">
        <div class="form-group">
          <label for="edit-mush-name">Name:</label>
          <input type="text" class="form-control" id="edit-mush-name" placeholder="Cordyceps" value="${mushroom.name}">
        </div>
        <div class="form-group">
          <label for="edit-mush-size">Size:</label>
          <input type="text" class="form-control" id="edit-mush-size" placeholder="XL" value="${mushroom.size}">
        </div>
        <div class="form-group">
          <label for="edit-location">Location:</label>
          <input type="text" class="form-control" id="edit-location" placeholder="Farm" value="${mushroom.location}">
        </div>
        <div class="form-group">
          <label for="edit-weight">Weight (in grams):</label>
          <input type="number" class="form-control" id="edit-weight" placeholder="22" value="${mushroom.weight}">
        </div>
        <button type="submit" class="btn btn-primary" id="mush-editor">Update</button>
      </form>
    `;

      utils.printToDom('#edit-shroom', domString);
    })
    .catch((err) => console.error('get single mushroom failed', err));
};

export default { showForm };
