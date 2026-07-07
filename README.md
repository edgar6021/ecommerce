# NeoCommerce

NeoCommerce es una aplicacion ecommerce construida con React. Incluye una experiencia de tienda moderna con catalogo filtrable, busqueda, carrito persistente, checkout simulado, autenticacion con Firebase y paginas complementarias de soporte e historial de pedidos.

## Caracteristicas

- Home comercial con hero, producto destacado, beneficios y colecciones.
- Catalogo de productos con busqueda, filtros por categoria y ordenamiento.
- Tarjetas de producto con imagen, marca, rating, especificaciones, precio y descuento.
- Carrito global con Redux Toolkit y persistencia en `localStorage`.
- Control de cantidades, eliminacion de items, resumen de compra, envio y descuento.
- Checkout simulado con formulario de confirmacion.
- Autenticacion con Firebase por email/password y Google.
- Header responsive con contador real del carrito y estado de sesion.
- Pagina de contacto con canales de atencion y formulario.
- Historial de pedidos de demostracion.
- Estilos modulares con Sass Modules.
- Prueba automatizada base con React Testing Library.

## Stack Tecnologico

| Area | Tecnologia |
| --- | --- |
| UI | React 18 |
| Routing | React Router DOM 6 |
| Estado global | Redux Toolkit, React Redux |
| Autenticacion | Firebase Auth |
| Base de datos / storage preparado | Firebase Firestore, Firebase Storage |
| Estilos | Sass, CSS Modules |
| Iconos | React Icons |
| Notificaciones | React Toastify |
| Testing | Jest, React Testing Library |
| Build | Create React App / React Scripts |

## Estructura Principal

```text
src/
  components/
    footer/
    header/
    loader/
  data/
    products.js
  firebase/
    config.js
  pages/
    auth/
    cart/
    contact/
    home/
    orderHistory/
  redux/
    slice/
      authSlice.js
      cartSlice.js
    store.js
```

## Requisitos

- Node.js 16 o superior.
- npm 8 o superior.

## Instalacion

```bash
npm install
```

## Ejecutar en Desarrollo

```bash
npm start
```

La aplicacion queda disponible en:

```text
http://localhost:3000
```

## Scripts Disponibles

```bash
npm start
```

Inicia el servidor de desarrollo.

```bash
npm test -- --watchAll=false
```

Ejecuta la suite de pruebas una sola vez.

```bash
npm run build
```

Genera la version optimizada de produccion en la carpeta `build/`.

```bash
npm run eject
```

Expone la configuracion interna de Create React App. Es una operacion irreversible y no se recomienda para el flujo normal del proyecto.

## Configuracion de Firebase

La configuracion actual esta en:

```text
src/firebase/config.js
```

El proyecto utiliza:

- `getAuth` para autenticacion.
- `getFirestore` preparado para datos persistentes.
- `getStorage` preparado para archivos o imagenes.

Para produccion, se recomienda mover la configuracion a variables de entorno y mantener reglas de Firebase alineadas con los permisos reales de la tienda.

## Flujo de Compra

1. El usuario explora el catalogo desde la home.
2. Puede buscar, filtrar por categoria y ordenar productos.
3. Al agregar un producto, el item se guarda en Redux y se persiste en `localStorage`.
4. El carrito permite sumar, restar o eliminar productos.
5. El resumen calcula subtotal, envio, descuento y total.
6. El checkout simulado confirma el pedido y limpia el carrito.

## Estado Global

El store combina dos slices principales:

- `authSlice`: estado de sesion del usuario autenticado.
- `cartSlice`: items del carrito, cantidades, subtotal y persistencia local.

La persistencia del carrito se gestiona desde `src/redux/store.js` usando la clave:

```text
edgarshop-cart
```

## Testing

La prueba principal valida que la storefront renderice correctamente:

```bash
npm test -- --watchAll=false
```

El entorno de Jest incluye un polyfill para `TextEncoder` y `TextDecoder`, necesario por dependencias de Firebase en Node.

## Build de Produccion

```bash
npm run build
```

Si el build finaliza correctamente, la carpeta `build/` queda lista para desplegar en servicios como Netlify, Vercel, Firebase Hosting o cualquier servidor estatico.

## Notas de Mantenimiento

- Los productos de demostracion viven en `src/data/products.js`.
- Las rutas principales se declaran en `src/App.js`.
- Los estilos de cada vista estan separados por modulo Sass.
- Create React App puede mostrar advertencias de dependencias antiguas de `react-scripts`; no bloquean el build.
- Antes de publicar, conviene conectar checkout, pedidos y catalogo a una API o a Firestore.

## Roadmap Sugerido

- Integrar productos reales desde Firestore.
- Crear detalle de producto por ruta dinamica.
- Implementar checkout real con pasarela de pago.
- Guardar pedidos por usuario autenticado.
- Agregar panel administrativo para crear, editar y pausar productos.
- Incorporar tests de carrito, filtros y checkout.

## Licencia

Proyecto privado para fines academicos o comerciales internos.
