const server = require ("./server.js");
 const PORT = (process.env.NODE_ENV === "test")
  {
  server.listen(PORT, () => { 
    console.log(
      "Capstone Project Backend is running on http://localhost:4401"
      );
    });
  }
   

