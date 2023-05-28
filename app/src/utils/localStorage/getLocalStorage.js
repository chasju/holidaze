export const getStorage = (key) => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
