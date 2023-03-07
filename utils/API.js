import axios from "axios";

// const baseApi = "http://admin.avalano.at/api";
// const base = "http://admin.avalano.at";

const baseApi = "http://127.0.0.1:1337/api";
const base = "http://127.0.0.1:1337";

export const getAllMedia = async () => {
  const response = await axios.get(`${baseApi}/articles?populate=*`);
  // const response = await api.get("articles");
  console.log(response.data);
  return response.data.data.map((article) => {
    article.attributes.pictureUrl =
      base + article.attributes.picture.data.attributes.url;
    delete article.attributes.picture;
    return article.attributes;
  });
};

export const getTeam = async () => {
  const response = await axios.get(`${baseApi}/teams?populate=*`);
  // const response = await api.get("articles");
  console.log(response.data);
  return response.data.data.map((article, index) => {
    article.attributes.pictureUrl =
      base + article.attributes.picture.data.attributes.url;
    delete article.attributes.picture;
    article.attributes.isShifted = index % 2 === 1;
    return article.attributes;
  });
};

export const getQuotes = async () => {
  const response = await axios.get(`${baseApi}/quotes`);
  // const response = await api.get("articles");
  return response.data.data.map((quote) => {
    return quote.attributes;
  });
};
