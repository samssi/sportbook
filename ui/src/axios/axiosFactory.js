import axios from "axios";

function createSportbookRestClient() {
    return axios.create({
        baseURL: __SPORTBOOK_API_URL__
    });
}

module.exports = { createSportbookRestClient }

