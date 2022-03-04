const apiRequest = async (url = "", optionsObj = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("please reload the app");
    return response.json();
  } catch (error) {
    throw error;
  }
};
export default apiRequest;
