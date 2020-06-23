const mushroomMaker = (mushroom) => {
  const domString = `
  <div class="col-3">
    <div class="card">
      <div class="card-body">
        <div class="card-header">${mushroom.name}</div>
        <h5 class="card-title">${mushroom.location}</h5>
        <p class="card-text">This mushroom is <b>${mushroom.size}</b> and weighs <b>${mushroom.weight}</b> grams.</p>
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default { mushroomMaker };
