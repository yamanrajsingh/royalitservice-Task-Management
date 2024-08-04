const http = require("http");
const app = require("./app");
const dotenv = require("dotenv")
const connectDB = require("./Database/connect");
dotenv.config();

http.createServer(app);
app.listen(3000, () => {
  
  connectDB( 
    process.env.MONOGO_URL
  );
  console.log("http://localhost:3000/");
});
