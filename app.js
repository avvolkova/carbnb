const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require('hbs');
const connection = require('./db/connection')

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const serviceRouter = require("./routes/service");
const session = require('express-session');

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(session({
    secret: '45454545', // случайный набор символов для шифрования сессионных куков
    resave: true, // пересохранять сессию даже если ничего не изменилось
    saveUninitialized: true, // сохранять сессию при первом обращении к сайту
    cookie: { secure: false, maxAge: 1000000000000000 }, // опции сессонных куков ( secure - это httpS )
}));

app.use((req, res, next) => {
    if (req.session.userID) {
        res.locals.userID = req.session.userID // записываем в локалс имя юзера из сессии
    }
    if (req.session.username) {
        res.locals.username = req.session.username // записываем в локалс имя юзера из сессии
    }
    next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/service", serviceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});


module.exports = app;
