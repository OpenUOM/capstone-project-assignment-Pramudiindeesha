const server = require ("./server.js");
 const PORT = (process.env.NODE_ENV === "test")
 {
  server.listen(4401, () => { 
    console.log(
      "Capstone Project Frontend is running on http://localhost:4401"
      );
    });
}

 
