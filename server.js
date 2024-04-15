import express from "express";
import {CorsAllow} from "./cors.js";

const app = express();
app.use(CorsAllow);
app.get('/', function (req, res) {
    res.type('application/json');
    res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et magna consectetur, posuere dolor sit amet, facilisis est. Pellentesque habitant.");
});

const server = app.listen(4000, () => {
    console.log("App is running at http://localhost:%d", 4000)
    console.log("Press CTRL-C to stop\n")
})

export default server