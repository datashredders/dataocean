import express from "express";
import postgresClient from "./config/db.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/", userRouter);
app.use("/haberdata", userRouter);
app.use("/muzikdata", userRouter);
app.use("/spordata", userRouter);
app.use("/egitimdata", userRouter);
app.use("/teknolojidata", userRouter);
app.use("/belgeseldata", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  postgresClient.connect((err) => {
    if (err) {
      console.log("connection error", err.stack);
    } else {
      console.log("veritabani baglantisi basarili");
    }
  });
});
