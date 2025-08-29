
# Mini Market Backend (API)

## Objetivos Completados

- **GET /api/products**: Devuelve una lista de productos con opciones avanzadas de filtrado (search, available), ordenamiento (sort, order) y paginación (page, limit).✅

- **GET /api/products/:id**: Busca y devuelve los detalles de un solo producto de forma eficiente.✅

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