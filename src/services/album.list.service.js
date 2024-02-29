import api from './api';

export const getUserListsCount = async (username) => {
  const { data } = await api.get(`/album-lists/count/users/${username}`);
  return data;
};

export const getUserListsSummary = async (username) => {
  const { data } = await api.get(`/album-lists/summary/users/${username}`);
  return data;
};

export const getList = async (listName, username) => {
  const { data } = await api.get(`/album-lists/${listName}/users/${username}`);
  return data;
};

export const createList = async (list) => {
  const { data } = await api.post(`/album-lists`, list);
  return data;
};

export const updateList = async ({ listId, list }) => {
  const { data } = await api.put(`/album-lists/${listId}`, list);
  return data;
};

export const deleteList = async (listId) => {
  const { data } = await api.delete(`/album-lists/${listId}`);
  return data;
};
