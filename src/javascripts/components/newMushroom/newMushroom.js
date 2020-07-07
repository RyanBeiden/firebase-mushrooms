import utils from '../../helpers/utils';

const showForm = () => {
  const domString = `
    <form>
      <div class="form-group">
        <label for="mush-name">Name:</label>
        <input type="text" class="form-control" id="mush-name" placeholder="Cordyceps">
      </div>
      <div class="form-group">
        <label for="mush-size">Size:</label>
        <input type="text" class="form-control" id="mush-size" placeholder="XL">
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input type="text" class="form-control" id="location" placeholder="Farm">
      </div>
      <div class="form-group">
        <label for="weight">Weight (in grams):</label>
        <input type="number" class="form-control" id="weight" placeholder="22">
      </div>
      <button type="submit" class="btn btn-primary" id="mush-creator">Submit</button>
    </form>
  `;

  utils.printToDom('#new-shroom', domString);
};

export default { showForm };
