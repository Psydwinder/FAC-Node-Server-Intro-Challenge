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
//   server.get("/color", (request, response) => {
//     const hex = request.query.hex || "ffffff"; 
//     const html = `
//       <style>
//         body {
//           background-color: #${hex};
//         }
//       </style>
//       <form>
//         <label for="hex">Enter hex</label>
//         <input name="hex" value="${hex}">
//       </form>
//     `;
//     response.send(html);
//   });

  //CHALLENGE 4
  const cheeses = [];

server.get("/cheese", (req, res) => {
  const list = cheeses.map((cheese) => {
    return `<li>${cheese.name} | ${cheese.rating} stars</li>`;
  });
  const html = `
    <form method="POST">
      <p>
        <label for="name">Cheese name</label>
        <input name="name">
      </p>
      <p>
        <label for="rating">Cheese rating</label>
        <input name="rating" type="range" min="0" max="5" step="0.5">
      </p>
      <button>Rate cheese</button>
    </form>
    <ul>
      ${list.join("")}
    </ul>
  `;
  res.send(html);
});

//CHALLENGE 5
server.post("/cheese", express.urlencoded({ extended: false }), (req, res) => {
  const name = req.body.name;
  const rating = req.body.rating;
  cheeses.push({ name, rating });
  res.redirect("/cheese");
});