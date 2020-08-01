const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9835cc5',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
