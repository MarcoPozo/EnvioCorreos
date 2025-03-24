const viewAlert = (
  icon = "success",
  title = "¡Mensaje enviado!",
  text = "¡Mensaje enviado correctamente!"
) => {
  Swal.fire({
    icon,
    title,
    text,
    confirmButtonColor: "#3085d6",
  });
};
