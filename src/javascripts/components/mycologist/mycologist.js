const mycologistMaker = (mycologist) => {
  const domString = `
    <div class="card text-white bg-info m-3 pl-4 pr-4 text-center">
      <div class="card-header">${mycologist.name}</div>
      <div class="card-body text-center">
        <h3>Age:</h3>
        <h5 class="card-title">${mycologist.age}</h5>
      </div>
    </div>
  `;

  return domString;
};

export default { mycologistMaker };
