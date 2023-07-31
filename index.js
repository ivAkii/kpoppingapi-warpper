const KpoppingApi = require('./kpoppingapi');

const api = new KpoppingApi();

api.getIdolpicsImages("hyein")
  .then(images => {
    console.log(images);
  })
  .catch(err => {
    console.error(err);
  });
