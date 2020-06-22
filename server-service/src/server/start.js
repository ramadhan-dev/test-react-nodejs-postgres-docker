import bodyParser from "body-parser";
import express from "express";
import cors from "#root/utils/cors";
import accessEnv from "#root/helpers/accessEnv";
import setupRoute from "#root/routes/setupRoute"

const PORT = accessEnv("PORT", 7100)["PORT"];
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

cors(app);
setupRoute(app);

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    })
});

app.listen(PORT, "0.0.0.0", () => {
    console.info(`running ${PORT}`);
})
