import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
    static async getbyLimitAndPage(page=1, limit=10) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        return response;
    }
}
