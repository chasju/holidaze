export const removeFromStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  }
};
