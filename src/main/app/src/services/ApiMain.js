import axios from "axios";
const baseURL = "http://localhost:8080";


const ApiMain = {
  countPalavras: (request) => {
    return axios({
      method: "POST",
      url: baseURL + "/api/palavras/count",
      data: request,
    });
  }
}



export { ApiMain };
