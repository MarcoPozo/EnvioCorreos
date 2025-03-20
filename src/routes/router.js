import { Router } from "express";
import { transporter } from "../config/nodemailer.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Inicio" });
});

router.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    await transporter.sendMail({
      from: `"Contacto desde MoonStudio 👻" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje desde el formulario de contacto",
      html: `
        <h1>Formulario de Contacto: </h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    });
    res.status(200).send("Mensaje enviado correctamente");;
  } catch (error) {
    console.error("Error al enviar el mensaje: ", error);
    res.status(500).send("Error al enviar el mensaje ❌");
  }
});

export default router;
