export const removeFromStorage = (key, value) => {
  localStorage.removeItem(key, JSON.stringify(value));
};
