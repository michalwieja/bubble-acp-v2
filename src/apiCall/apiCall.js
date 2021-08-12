import axios from 'axios';

export const apiCall = (config, router) => async (service, action, query) => {

  const configArray = Object.entries(config);

  const endpointOption = configArray.find((element) => {
    // eslint-disable-next-line no-unused-vars
    const [k, v] = element;
    return v.service === service && v.action === action;
  });

  if (!endpointOption) {
    return {
      success: false,
      error: 'endpoint does not exist',
    };
  }

  try {
    const url = 'https://api.bubble.casa';
    const result = await axios.post(url, {
      id: endpointOption[0],
      query,
    }, { withCredentials: true });

    return result.data;
  }
  catch (error) {
    if (error.response.status === 401) {
      router.push({ name: 'login' });
    }
    return { success: false };
  }
};
