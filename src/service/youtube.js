import axios from 'axios';

class Youtube {
  constructor(key) {
    // this.key = key;
    // this.getRequestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    this.youtube =axios.create({
      baseURL:'https://www.googleapis.com/youtube/v3',
      params:{key:key},
    });
    };
  

  async mostPopular() {
    const response = await this.youtube.get('videos',{
      params: {
        part:'snippet',
        chart:'mostPopular',
        maxResults:25,
      },
    })
    return response.data.items;
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items;
  }

  async search(query) {
    const response = await this.youtube.get('videos',{
      params: {
        type:'video',
        part:'snippet',
        maxResults:25,
        q:query,
      },
    })
    return response.data.items;

    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
