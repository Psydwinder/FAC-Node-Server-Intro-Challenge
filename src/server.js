const express = require("express");

const server = express();

module.exports = server;

//CHALLENGE 1
// server.get("/", (request, response) => {
//     response.send(`<h1>Hello Express</h1>`);
//   });

//CHALLENGE 2
// server.get("/color", (request, response) => {
//     const hex = request.query.hex || "ffffff"; 
//     const html = `
//       <style>
//         body {
//           background-color: #${hex};
//         }
//       </style>
//     `;
//     response.send(html);
//   });

  //CHALLENGE 3
  server.get("/color", (request, response) => {
    const hex = request.query.hex || "ffffff"; 
    const html = `
      <style>
        body {
          background-color: #${hex};
        }
      </style>
      <form>
        <label for="hex">Enter hex</label>
        <input name="hex" value="${hex}">
      </form>
    `;
    response.send(html);
  });