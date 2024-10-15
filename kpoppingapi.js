const axios = require('axios');

class KpoppingApi {
  constructor() {
    this.baseUrl = 'https://kpoppingapi.netlify.app/api';
  }

  async getIdolpics(idolName, groupName) {
    let url = `${this.baseUrl}/idolpics/${idolName}/${groupName || ''}`;

    try {
      const res = await axios.get(url);
      return res.data.images || res.data.message;
    } catch (error) {
      if (error.response) {
       
        console.error(`Server responded with status code ${error.response.status}: ${error.response.data.message}`);
      } else if (error.request) {
  
        console.error('No response received from the server');
      } else {
       
        console.error('Error setting up the request:', error.message);
      }
      throw error; 
    }
  }

  async getGroupImages(groupName) {
    let url = `${this.baseUrl}/groupImages/${groupName}`;

    try {
      const res = await axios.get(url);
      return res.data.images || res.data.message;
    } catch (error) {
      if (error.response) {
        console.error(`Server responded with status code ${error.response.status}: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('No response received from the server');
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  }

  async getProfileData(name, group) {
    let url = `${this.baseUrl}/profile/${name}/${group || ''}`;

    try {
      const res = await axios.get(url);
      return res.data || res.data.message;
    } catch (error) {
      if (error.response) {
        console.error(`Server responded with status code ${error.response.status}: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('No response received from the server');
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  }
}

module.exports = KpoppingApi;