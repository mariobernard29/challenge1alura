function encriptar() {
  procesarTexto(true);
}

function desencriptar() {
  procesarTexto(false);
}

function procesarTexto(esEncriptar) {
  const { value: texto } = document.getElementById("texto");
  const tituloMensaje = document.getElementById("titulo-mensaje");
  const parrafo = document.getElementById("parrafo");
  const muñeco = document.getElementById("muñeco");

  if (texto.length === 0) {
    actualizarInterfaz(
      "./img/muñeco.png",
      "Ningún mensaje fue encontrado",
      "Ingresa el texto que deseas encriptar o desencriptar",
      true
    );
    return;
  }

  const reglas = [
    { original: /e/gi, cifrado: "enter" },
    { original: /i/gi, cifrado: "imes" },
    { original: /a/gi, cifrado: "ai" },
    { original: /o/gi, cifrado: "ober" },
    { original: /u/gi, cifrado: "ufat" }
  ];

  let textoTransformado = texto;

  reglas.forEach(({ original, cifrado }) => {
    textoTransformado = esEncriptar
      ? textoTransformado.replace(original, cifrado)
      : textoTransformado.replace(new RegExp(cifrado, "gi"), original.source);
  });

  document.getElementById("texto").value = textoTransformado;

  actualizarInterfaz(
    esEncriptar ? "./img/encriptado.jpg" : "./img/desencriptado.jpg",
    esEncriptar ? "Texto encriptado con éxito" : "Texto desencriptado con éxito",
    "",
    false
  );
}

function actualizarInterfaz(srcImg, titulo, mensaje, mostrarAlerta) {
  document.getElementById("muñeco").src = srcImg;
  document.getElementById("titulo-mensaje").textContent = titulo;
  document.getElementById("parrafo").textContent = mensaje;

  if (mostrarAlerta) {
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
