const axios = require('axios');

class KpoppingApi {
  constructor() {
    this.baseUrl = 'https://kpoppingapi.netlify.app/api';
  }

  async getIpicsImages(idolName, groupName) {
    let url = `${this.baseUrl}/ipics/${idolName}`;
    if (groupName) {
      url += `/${groupName}`;
    }

    const response = await axios.get(url);
    return response.data.images;
  }


  async getGpicsImages(groupName) {
    let url = `${this.baseUrl}/gpics/${groupName}`;
    const response = await axios.get(url);
    return response.data.images;
  }
}
module.exports = KpoppingApi;