const app = require("./app");
const config = require("./config");
const port = config.PORT || 3000;

// start the server
app.listen(port, () => {
    console.log("Server started on port", port);
});
