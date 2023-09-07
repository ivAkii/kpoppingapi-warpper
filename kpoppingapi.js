const axios = require('axios');

class KpoppingApi {
  constructor() {
    this.baseUrl = 'https://kpoppingapi.netlify.app/';
  }

  async getIdolpics(idolName, groupName) {
    let url = `${this.baseUrl}/idolpics/${idolName}/${groupName || ''}`;

    const res = await axios.get(url);
    return res.data.images || res.data.message;
  }

  async getGroupImages(groupName) {
    let url = `${this.baseUrl}/groupImages/${groupName}`;

    const res = await axios.get(url);
    return res.data.images  || res.data.message;
  }
  
  async getProfileData(name, group) {
    let url = `${this.baseUrl}/profile/${name}/${group || ''}`;

      const res = await axios.get(url);
      return res.data  || res.data.message;
  }
}


module.exports = KpoppingApi;
