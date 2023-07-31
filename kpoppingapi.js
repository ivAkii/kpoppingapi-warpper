const axios = require('axios');

class KpoppingApi {
  constructor() {
    this.baseUrl = 'https://kpoppingapi.netlify.app/api';
  }

  async getIdolpicsImages(idolName, groupName) {
    let url = `${this.baseUrl}/idolpics/${idolName}`;
    if (groupName) {
      url += `/${groupName}`;
    }

    const response = await axios.get(url);
    return response.data.images;
  }


  async getGrouppicsImages(groupName) {
    let url = `${this.baseUrl}/grouppics/${groupName}`;
    const response = await axios.get(url);
    return response.data.images;
  }
}
module.exports = KpoppingApi;
