const api = async (route, options = {}) => {
  try {
    const response = await fetch(route, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default api;
