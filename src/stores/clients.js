import axios from "axios/index";
import _ from "lodash";
import humps from "humps";

import { AUTH_URL, UNSPLASH_API_URL, UNSPLASH_API_ACCESS_KEY } from "../constants/apis";

const authClient = (baseUrl) => (
  axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    transformResponse: [
      data => humps.camelizeKeys(JSON.parse(data)),
    ],
  })
);

const unsplashClient = (baseUrl, apiKey) => (
  axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Client-ID ${apiKey}`
    },
    transformResponse: [
      rawdata => {
        const CONCERN_ATTRIBS = ['id', 'username', 'name', 'profile_image']
        const data = JSON.parse(rawdata);
        // TODO: parse error handling
        if (data.errors) {
          throw new Error(data.errors.toString());
        }

        if (data.results) {
          return data.results.map(result => _.pick(result, CONCERN_ATTRIBS))
        } else {
          return data;
        }
      }
    ],
  })
);

const clients = {
  default: {
    client: authClient(AUTH_URL),
  },
  unsplash: {
    client: unsplashClient(UNSPLASH_API_URL, UNSPLASH_API_ACCESS_KEY)
  }
};

export default clients;