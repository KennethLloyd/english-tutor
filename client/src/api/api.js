const api = async (route) => {
  try {
    const response = await fetch(route);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default api;
