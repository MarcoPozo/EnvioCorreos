const viewAlert = (message = "¡Mensaje enviado correctamente!") => {
  Swal.fire({
    icon: "success",
    title: "Enviado ✅",
    text: message,
    confirmButtonColor: "#3085d6",
  });
};