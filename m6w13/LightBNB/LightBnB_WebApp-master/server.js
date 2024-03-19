const path = require("path");
const express = require("express");
const cookieSession = require("cookie-session");

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

// app.get('/', (req, res)=> {
//   res.render('index');
// })


// Express router
const apiRoutes = require("./routes/apiRoutes");
// Instead of storing routes in server.js, we store them individually in their own files
const userRoutes = require("./routes/userRoutes");
// const orderRoutes = require("./routes/orderRoutes");

// /api/endpoints
app.use("/api", apiRoutes);
// app.use("/order", orderRoutes);

// /user/endpoints
app.use("/users", userRoutes);



app.get("/test", (req, res) => {
  res.send("🤗");
});

app.listen(port, (err) => {
  console.log(err || `listening on port ${port} 😎`);
});
