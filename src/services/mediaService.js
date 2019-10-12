import axios from 'axios'

export default {
    getYoutubeResults,
    getwikiInfo
}

const API_KEY = 'AIzaSyB3b5W1eSevtki-h8Q-64gx6PRngGhWgrc'



async function getYoutubeResults(term) {    
    try {
        const res = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}&key=${API_KEY}`
        );
        return res.data;
    } catch (err) {
        throw err;
    }

}

async function getwikiInfo(term) {    
    try {
        const res = await axios.get(
            `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=5`
        );
        return res.data;
    } catch (err) {
        throw err;
    }

}