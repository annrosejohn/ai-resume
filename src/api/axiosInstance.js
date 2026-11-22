import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log("api request received")
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response){
        const status= error.response.status
        if(status===401){
            console.log("unauthorised error");
            
        }
        else if(status===404){
            console.log("API not found");
            
        }
        else if(status===500){
            console.log("Something went wrong on server");
            
        }
         else if(error.request){
            console.log("No respense from the server");
            
        }

    }
    else{
        console.log("error",error.message);
        
    }
    
  }
);
export default axiosInstance