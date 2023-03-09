import axios from "axios";

const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

const strapi = axios.create({
  baseURL: "https://api.avalano.at/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`,
  },
});

export const getStrapi = async (path) => {
  const { data } = await strapi.get(path);
  return data;
};

export const postStrapi = async (path, data) => {
  const response = await strapi.post(path, { data: data });
  return response.data;
};

export const putStrapi = async (path, data) => {
  const response = await strapi.put(path, data);
  return response.data;
};

export const deleteStrapi = async (path) => {
  const response = await strapi.delete(path);
  return response.data;
};

const newUser = async (user) => {
  const res = await postStrapi("/users-data", {
    firebaseUid: user.uid,
    data: {
      email: user.email,
      provider: user.providerData[0].providerId,
    },
  });
  return res;
};

const updateUser = async (user, id) => {
  const res2 = await putStrapi(`/users-data/${id}`, {
    firebaseUid: user.uid,
    data: {
      email: user.email,
      provider: user.providerData[0].providerId,
    },
  });
  return res2;
};

export const addOrUpdateUser = async (user) => {
  const res = await getStrapi(`/users-data`);
  const id = res.data.filter(
    (item) => item.attributes.firebaseUid === user.uid
  )[0]?.id;
  if (id) {
    return await updateUser(user, id);
  } else {
    return await newUser(user);
  }
};
