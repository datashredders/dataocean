function Database(){
    const { Client } = require("pg");
var kanallar;
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "kahramanbingol",
  database: "data_ocean",
});

client.connect();


 let query = `Select * from "kanallar"`;

 client.query(query, (err, res) => {
   if (!err) {
     kanallar = res.rows;
   } else {
     console.log(err.message);
   }
   client.end;
 });
}


 export default Database;