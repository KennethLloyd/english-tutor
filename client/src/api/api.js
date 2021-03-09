const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api`;

const api = async (route, options = {}) => {
  try {
    const response = await fetch(`${apiUrl}${route}`, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default api;
