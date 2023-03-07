const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://etaipassword:etaipassword@feedbackdb.d8kfkvp.mongodb.net/?retryWrites=true&w=majority").then(
    () => {
        console.log("DB connected");
    }
).catch(
    () => {
        console.log("DB failed");
    }
);

const uModel = mongoose.model("updb", new mongoose.Schema({}));


app.get("/", async (req, res) => {
    await uModel.find({}).then(
        (data) => {
            res.render("index",{result:data});
        }
    );
});

app.use(express.json());

app.get("/", () => { });

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
