const axios = require('axios');

class KpoppingApi {
  constructor() {
    this.baseUrl = 'https://kpoppingapi.netlify.app/';
  }

  /**
   * Fetches pictures of an idol.
   * @param {string} idolName - The name of the idol.
   * @param {string} [groupName] - The name of the group (optional).
   * @returns {Promise<Array|string>} - Returns an array of images or an error message.
   */
  async getIdolpics(idolName, groupName = '') {
    if (typeof idolName !== 'string') {
      throw new Error('idolName must be a string');
    }
    if (groupName && typeof groupName !== 'string') {
      throw new Error('groupName must be a string');
    }

    let url = `${this.baseUrl}/idolpics/${encodeURIComponent(idolName)}/${encodeURIComponent(groupName)}`;

    try {
      const res = await axios.get(url);
      return res.data.images || res.data.message;
    } catch (error) {
      console.error(`Error fetching idol pictures: ${error.message}`);
      throw error;
    }
  }

  /**
   * Fetches images of a group.
   * @param {string} groupName - The name of the group.
   * @returns {Promise<Array|string>} - Returns an array of images or an error message.
   */
  async getGroupImages(groupName) {
    if (typeof groupName !== 'string') {
      throw new Error('groupName must be a string');
    }

    let url = `${this.baseUrl}/groupImages/${encodeURIComponent(groupName)}`;

    try {
      const res = await axios.get(url);
      return res.data.images || res.data.message;
    } catch (error) {
      console.error(`Error fetching group images: ${error.message}`);
      throw error;
    }
  }

  /**
   * Fetches profile data of an idol.
   * @param {string} name - The name of the idol.
   * @param {string} [group] - The name of the group (optional).
   * @returns {Promise<Object|string>} - Returns profile data or an error message.
   */
  async getProfileData(name, group = '') {
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    if (group && typeof group !== 'string') {
      throw new Error('group must be a string');
    }

    let url = `${this.baseUrl}/profile/${encodeURIComponent(name)}/${encodeURIComponent(group)}`;

    try {
      const res = await axios.get(url);
      return res.data || res.data.message;
    } catch (error) {
      console.error(`Error fetching profile data: ${error.message}`);
      throw error;
    }
  }
}

module.exports = KpoppingApi;