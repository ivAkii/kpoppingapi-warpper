const KpoppingApi = require('./kpoppingapi');

const api = new KpoppingApi();

api.getGrouppicsImages("red velvet")
  .then(images => {
    console.log(images);
  })
  .catch(error => {
    console.error(error);
  });
