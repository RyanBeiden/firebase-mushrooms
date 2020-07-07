import utils from '../../helpers/utils';

const showMycoForm = () => {
  const domString = `
    <form>
      <div class="form-group">
        <label for="myco-name">Name:</label>
        <input type="text" class="form-control" id="myco-name" placeholder="Jerry">
      </div>
      <div class="form-group">
        <label for="myco-age">Age:</label>
        <input type="number" class="form-control" id="myco-age" placeholder="23">
      </div>
      <button type="submit" class="btn btn-warning" id="myco-creator">Add Mycologist</button>
    </form>
  `;

  utils.printToDom('#new-myco', domString);
};

export default { showMycoForm };
