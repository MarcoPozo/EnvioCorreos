import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/router.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

const app = express();

/* Settings */
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

/* Middlewares y archivos estaticos */
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
app.use(indexRouter);

/* Manejo de errores */
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Error",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
