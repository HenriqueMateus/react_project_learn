const axios = require("axios");

// import { Container } from './styles';

async function API(Filme) {
  let url = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${Filme}`;
  let finalResposta;
  let resposta = new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: url,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "37caeb190cmsh16264a1c3cabba9p1b7df8jsn16920f2777a9"
      }
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
  await resposta.then(rs => {
    finalResposta = rs.data;
  });
  return finalResposta;
}
export default API;
