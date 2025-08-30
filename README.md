
# Mini Market Backend (API) ⚙️

## Objetivos Completados

- **GET /api/products**: Devuelve una lista de productos con opciones avanzadas de filtrado (search, available), ordenamiento (sort, order) y paginación (page, limit).✅

- **GET /api/products/:id**: Busca y devuelve los detalles de un solo producto de forma eficiente.✅

- **GET /api/products/cheapest/top**: A new endpoint that implements the utility algorithm to return the top 3 cheapest available products.
- Conexión a MongoDB.✅

## Pasos a seguir

1. **Instalar dependencias**
`npm install`
2. **Configurar env**
`Renombra de .env.template a .env y rellena las variables`
3. **Iniciar server**
`npm run dev`
4. **Poblar la DB con productos**
`npm run seed`

## Estructura del Proyecto

- **src/**: Contiene todo el código fuente.

- **index.ts**: Entrada del servidor, donde se configura la conexión a la base de datos y se inicializan las rutas.

- **products.router.ts**: Define la lógica de los dos endpoints de productos.

- **database/db.ts**: Carpeta que contiene la función para conectar a MongoDB.

- **models/ProductModel.ts**: Define el esquema de los productos y permite interactuar con la base de datos.

- **types.ts**: Interfaces para dar forma a los objetos.

- **.env**: Almacena variables.

# Mini Market Frontend (Web) 🖼️

## Objetivos Completados

- **Páginas Requeridas**: La aplicación tiene las páginas /products (lista de productos) y /products/[id] (detalle del producto).

- **Funcionalidades**: El frontend implementa correctamente la búsqueda, filtros, paginación y el badge de stock, consumiendo los endpoints del backend.

- **UI/UX aceptable**: UI implementada con tailwind a mano. Para el poco tiempo se logró realizar los requisitos.

- **Consumo del Algoritmo**: La página principal muestra una sección dedicada a los productos más baratos, obtenidos a través del nuevo endpoint del backend.

## Estructura del Proyecto

- Aquí simplemente se utilizó la estructura sugerida pero con ciertas modificaciones, implementando carpeta de hooks, components y shared.

## Pasos a seguir

1. **Instalar dependencias**
`npm install`
2. **Configurar env**
`Renombra de .env.template a .env y rellena las variables`
3. **Iniciar server**
`npm run dev`

# Resumen 🅰️

## Objetivos Extras

- Se logró implementar el controller para poder filtrar el top 3 de productos más baratos.
- En el front se hizo un hook personal para manejar los filtros por medio de las queries de la URL del browser.
- Se logró implementar el Git Flow requerido.
- Correcta documentación y explicación a través del archivo README.

## Tareas Pendientes

- Realizar Testing, tanto en el Backend como en el Frontend (Se tendría planeado usar Jest).
- Implementar un manejo de errores más complejo y detallado.
- Mejorar UI, aunque a nivel UI es accesible y amigable, se puede mejorar.
- Implementar un mejor fetching mediante de tecnologías como Axios, Tanstack Query o SWR.