import axios from 'axios';

const KEY = 'AIzaSyBc14fzgamUR3_8YO_PKizzu3Fq259D8pY';

export default axios.create({

  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});