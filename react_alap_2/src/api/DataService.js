import axios from 'axios';
export default class DataService {
    apiroot = "http://localhost:8000/api/";
    get(link, callback) {
        axios.get(this.apiroot+link)
            .then(function (response) {
                callback(response);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}