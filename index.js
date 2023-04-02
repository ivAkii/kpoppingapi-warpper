const KpoppingApi = require('./kpoppingapi');

const api = new KpoppingApi();

api.getGpicsImages("newjeans")
  .then(images => {
    console.log(images);
  })
  .catch(error => {
    console.error(error);
  });