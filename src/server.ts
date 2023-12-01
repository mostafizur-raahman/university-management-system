import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

// admin-um
// adminMOSTAFIZ-um
async function server() {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`);
    });
}

server().catch((err) => console.log(err));
server();
