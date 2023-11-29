const server = require ("./server.js");
 const PORT = process.env.NODE_ENV === "test" ? 4401 : 8080;
  server.listen(PORT, () => { 
    console.log(
      Capstone Project Backend is running on http://localhost:${PORT}
      ); 
    }); 

