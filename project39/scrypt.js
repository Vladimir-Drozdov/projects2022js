
const express = require("express");
const fs = require("fs");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const { send } = require("process");
const app = express();
/*app.use(function (request, response, next) {//Создание middleware
   console.log("Middleware");
   response.send("Middleware");
   next();
});*/

/*app.use("/home/foo", express.static(__dirname + "/public"), function (req, res) {
 
   let data=`${req.method} ${req.url} ${req.get("user-agent")}`
   fs.appendFile("server.log", data + "\n", function () { });
});*/
/*app.use("/", function (req, res) {
   res.send("<h1>Главная страница2</h1>")
});*/
app.use("/bokk", function (req, res) {
   res.send("<h1>Главная 3</h1>")
})


app.get("/about", function (request, response, next) {
   console.log("Middleware2");
   response.send("Middleware 2");
   let data=`${request.method} ${request.url} ${request.get("user-agent")}`
   fs.appendFile("server.log", data + "\n", function () { });
  
});
app.get("/sending",function (req, res) {
   console.log(1);
   res.sendFile(__dirname + "/index.html");
})
app.get("/", function (req, res) {
   res.send("<h1>Привет Express</h1>");
});
app.get("/about", function (req, res) {
   res.send("<h1>Response</h1>");
});
app.get("/response", function (req, res) {
   res.send({
      id: 6, 
      name:"Tom"
   })
})
app.use("/home/foo", function (req, res) {
   console.log(1);
   res.setHeader("Location", "/response");
   console.log(2);
   res.sendStatus(302);
   
   console.log(3);
})

app.use('/not', function (req, res) {
   res.status(404).send(`Ресурс не найден`);
})
//Переадресация
app.use("/index", function (req, res) {
   res.redirect(301, "/not");
   
})
//query(строка запроса)
app.use("/about/1", function (req, res) {
   let id = req.query.id;
   let userName = req.query.name;
   res.send("<h1>Информация</h1><p>id=" + id + "</p><p>name=" + userName + "</p>")
})
//создаем парсер для данных из формы
const parser = express.urlencoded({ extended: false });
const jsonParser = express.json();
app.get("/", function (req, res) {
   
   res.sendFile(__dirname + "/index.html");
})
app.post("/user", jsonParser, function (req, res) {
   
   if (!req.body) return res.sendStatus(400);
   console.log(req.body);
  // res.redirect(302, "/");
   res.send(`${req.body.userName}-${req.body.userAge}`);
   console.log(`${req.body.userName}-${req.body.userAge}`);
   
})
app.use("/tt/:products/:productId", function (req, res) {
   res.send("productId: " + req.params["products"]+" "+ req.params["productId"]);
})
const product = express.Router();
app.use("/product", product);
product.use("/:id", function (req, res) {
   res.send(`Product number ${req.params.id}`);
})
//headlers
/*app.engine("hbs", expressHbs.engine(
   {
      layoutsDir: "templates/layouts",
      defaultLayout: "layout",
      extname:"hbs"
   }
))*/
hbs.registerHelper("getTime", function () {
   const myDate = new Date();
   const hour = myDate.getHours();
   const minute = myDate.getMinutes();
   const second = myDate.getSeconds();
   return new hbs.SafeString(`<div>Current time: ${hour}:${minute}:${second}</div>`);
   //return `Current time: ${hour}:${minute}:${second}`;
});
app.set("view engine", "hbs");
app.set("views", "templates");
hbs.registerPartials(__dirname + "/templates/partials");

app.get("/contact/1", function (_, response) {
   response.render("contact.hbs", {
      title: "Мои контакты",
      emailsVisible:true,
      emails: ["gav@my.com", "mi@you.ru"],
      phone:"+79"
   });
})
app.get("/contact", function (_, response) {
   response.render("home.hbs");
})
app.listen(4000);