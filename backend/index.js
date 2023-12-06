const server  = require ("./server.js");

if(process.env.NODE_ENV === "test"){
  server.listen(8080, () => {
    console.log(
      "Capstone Project Frontend is running on http://localhost:8080"
    );
  });
}else{
  
 const PORT = process.env.NODE_ENV === "test" ? 4401 : 8080;
  server.listen(PORT, () => { 
    console.log(
      "Capstone Project Backend is running on http://localhost:${PORT}"
      ); 
    }); 
  }

