const server  = require ("./server.js");

if(process.env.NODE_ENV === "test"){
  server.listen(3000, () => {
    console.log(
      "Capstone Project Backend is running on http://localhost:3000"
    );
  });
}else{
  server.listen(8080, () => {
    console.log(
      "Capstone Project Backend is running on http://localhost:8080"
    );
  });
}


const server = require ("./server.js");
 const PORT = process.env.NODE_ENV === "test" ? 4401 : 8080;
  server.listen(PORT, () => { 
    console.log(
      Capstone Project Backend is running on http://localhost:${PORT}
      ); 
    }); 


