document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav.navbar");
  const carousel = document.getElementById("carousel");

  function adjustNavbarOpacity() {
    const carouselBottom = carousel.getBoundingClientRect().bottom;
    if (carouselBottom <= 0) {
      navbar.classList.add("opacity-75");
      navbar.style.opacity = ""; // Regresa a la opacidad predeterminada de Bootstrap
    } else {

      navbar.classList.remove("opacity-75");
      navbar.style.opacity = "1"; // Opacidad completa
    }
  }

  window.addEventListener("scroll", adjustNavbarOpacity);
});


// const productos = [
//   {
//     nombre: "Chomba celeste polo Ralph Lauren",
//     descripcion: "Chomba polo, ideal para un look casual y cómodo en cualquier ocasión.",
//     precio: 14000,
//     stock: true,
//     imagenes: [
//       "./img/productos/remera-celeste-polo/adelante.jpeg",
//       "./img/productos/remera-celeste-polo/atras.jpeg",
//       "./img/productos/remera-celeste-polo/polo.jpeg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 0,
//   },
//   {
//     nombre: "Chomba roja polo Ralph Lauren",
//     descripcion: "Remera vintage de algodón roja, perfecta para un toque clásico y urbano.",
//     precio: 21000,
//     stock: true,
//     imagenes: [
//       "./img/productos/remera-roja-polo-etqAzul/adelante.jpg",
//       "./img/productos/remera-roja-polo-etqAzul/atras.jpeg",
//       "./img/productos/remera-roja-polo-etqAzul/polo.jpeg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 1,
//   },
//   {
//     nombre: "Camisa polo assn",
//     descripcion: "Camisa de estilo vintage con detalles únicos, ideal para un look elegante y relajado.",
//     precio: 10000,
//     stock: true,
//     imagenes: [
//       "./img/productos/camisa-negra-polo/adelante.jpg",
//       "./img/productos/camisa-negra-polo/atras.jpg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 2,
//   },
//   {
//     nombre: "Chomba roja polo Ralph Lauren",
//     descripcion: "Remera vintage en color rojo, perfecta para destacar en cualquier ocasión.",
//     precio: 4500,
//     stock: true,
//     imagenes: [
//       "./img/productos/remera-roja-polo-etqNegra/adelante.jpeg",
//       "./img/productos/remera-roja-polo-etqNegra/atras.jpeg",
//       "./img/productos/remera-roja-polo-etqNegra/polo.jpg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 3,
//   },
//   {
//     nombre: "Remera MMA ELITE",
//     descripcion: "Remera con estampado estilo vintage, ideal para un look con personalidad.",
//     precio: 40000,
//     stock: true,
//     imagenes: [
//       "./img/productos/remera-diseño-mma-elite/adelante.jpeg",
//       "./img/productos/remera-diseño-mma-elite/atras.jpeg",
//       "./img/productos/remera-diseño-mma-elite/mma-elite.jpg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 4,
//   },
//   {
//     nombre: "Campera EVISU",
//     descripcion: "Campera negra retro, ideal <strong>para protegerte con elegancia en días frescos.",
//     precio: 40000,
//     stock: true,
//     imagenes: [
//       "./img/productos/campera-negra-EVLSU/adelante.jpg",
//       "./img/productos/campera-negra-EVLSU/atras.jpg",
//       "./img/productos/campera-negra-EVLSU/evlsu.jpg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 5,
//   },
//   {
//     nombre: "Falda de Mezclilla con Costuras Rojas",
//     descripcion: "Falda de mezclilla de corte largo, perfecta para un look casual y versátil.",
//     precio: 25000,
//     stock: true,
//     imagenes: [
//       "./img/productos/bermuda-azul-y-roja/adelante.jpg",
//       "./img/productos/bermuda-azul-y-roja/atras.jpg",
//       "./img/productos/bermuda-azul-y-roja/detalle.jpg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 6,
//   },
//   {
//     nombre: "Falda de Mezclilla con Costuras Verdes",
//     descripcion: "Pantalón de mezclilla con bordados únicos, <strong>para destacar con estilo auténtico.",
//     precio: 60000,
//     stock: true,
//     imagenes: [
//       "./img/productos/bermuda-negra-siveJungle/adelante.jpg",
//       "./img/productos/bermuda-negra-siveJungle/atras.jpg",
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 7,
//   },
//   {
//     nombre: "Chaqueta de Cuero",
//     descripcion: "Chaqueta de cuero moderna negra, ideal para un look urbano y sofisticado.",
//     precio: 70000,
//     stock: true,
//     imagenes: [
//       "./img/productos/chaqueta-negra/adelante.jpeg",
//       "./img/productos/chaqueta-negra/atras.jpeg",
//       "./img/productos/chaqueta-negra/detalle.jpeg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 8,
//   },
//   {
//     nombre: "Bermuda de Jean (desgastada)",
//     descripcion: "Bermuda de jean casual con detalles desgastados, perfecta para un look relajado y moderno.",
//     precio: 20000,
//     stock: true,
//     imagenes: [
//       "./img/productos/bermuda-jean-onaSaez/adelante.jpeg",
//       "./img/productos/bermuda-jean-onaSaez/atras.jpeg",
//       "./img/productos/bermuda-jean-onaSaez/detalle.jpeg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 9,
//   },
//   {
//     nombre: "Camisa a Cuadros",
//     descripcion: "Camisa de manga larga con patrón de cuadros en tonos azules, ideal para un estilo casual y versátil.",
//     precio: 27990,
//     stock: true,
//     imagenes: [
//       "./img/productos/camisa-azul-gap/adelante.jpeg",
//       "./img/productos/camisa-azul-gap/atras.jpeg",
//       "./img/productos/camisa-azul-gap/detalle.jpeg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 10,
//   },
//   {
//     nombre: "Chaqueta Militar Verde con Parches",
//     descripcion: "Chaqueta verde oliva estilo militar con parches y efecto desgastado, ideal para un look urbano casual.",
//     precio: 125000,
//     stock: true,
//     imagenes: [
//       "./img/productos/campera-verde-zara/adelante.jpeg",
//       "./img/productos/campera-verde-zara/atras.jpeg",
//       "./img/productos/campera-verde-zara/detalle.jpeg"
//     ],
//     fechaEntrega: "2 días después de la compra",
//     id: 11,
//   }
// ];