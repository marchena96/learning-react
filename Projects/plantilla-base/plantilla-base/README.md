# Examen: React Basics + Router (Plantilla base)

## Contexto

Esta plantilla contiene una app de catálogo de productos.
El objetivo es completar INSTRUCCIONES y mejorar la organización del código sin cambiar el comportamiento esperado del enunciado.

## Objetivo general

Implementar una vista de productos con:

- listado de productos desde API
- filtro por título
- paginación
- detalle de producto por ruta
- uso de `Context` para estado compartido de paginación

## Reglas del examen

- Resolver los puntos solicitados manteniendo el estilo del proyecto.
- Extraer lógica cuando el enunciado lo pida (ejemplo: hooks o componentes de presentación).
- Evitar librerías nuevas.

## Tareas esperadas

1. **ProductsPage**
   - Cargar productos desde API.
   - Aplicar filtro por `title`.
   - Reiniciar página al cambiar filtro.
   - Mostrar resultados en `ProductGrid`.
   - Conectar paginación en `PaginationControls`.
   - Cada producto en la grilla debe incluir un enlace que navegue al detalle del producto usando React Router (`<Link to={`/products/${product.id}`}>`).

2. **PaginationContext**
   - Comportamiento de `prevPage` para página anterior.
   - Comportamiento de `resetPage` para volver a la primera página.
   - Comportamiento de `nextPage` para página siguiente.

3. **ProductDetailPage**
   - Validar parámetro de ruta.
   - Cargar producto por `id`.
   - Revisar dependencias de `useEffect`.
   - Extraer bloque de UI a componente si se solicita.

## Navegación con React Router

La aplicación usa **React Router** para manejar la navegación entre páginas. Las rutas están definidas en `App.tsx` (o `main.tsx`), y la estructura esperada es la siguiente:

```
/products        → ProductsPage (listado con filtro y paginación)
/products/:id    → ProductDetailPage (detalle de un producto)
```

### Cómo navegar del listado al detalle

Desde `ProductsPage`, al renderizar cada producto en la grilla, se debe incluir un `<Link>` de React Router que lleve al detalle:

```tsx
import { Link } from 'react-router-dom';

// Dentro del componente que renderiza cada producto:
<Link to={`/products/${product.id}`}>
  Ver detalle
</Link>
```

Esto permite que al hacer clic en un producto, React Router navegue a `/products/123` (donde `123` es el `id` del producto), y `ProductDetailPage` reciba ese `id` como parámetro de ruta.

### Cómo leer el parámetro en ProductDetailPage

En `ProductDetailPage`, se puede utilizar el hook `useParams` para obtener el `id` de la URL:

```tsx
import { useParams } from 'react-router-dom';

const { id } = useParams();
```

Con ese `id`, se puede hacer el fetch al endpoint de detalle: `GET /products/{id}`.

> **Importante:** se debe verificar que el `id` exista antes de hacer el fetch, y que las dependencias del `useEffect` incluyan el `id` correctamente.

## API oficial para este examen

Documentación:

`https://fakeapi.platzi.com/en/rest/products/`


Base URL:

`https://api.escuelajs.co/api/v1/products`

### Endpoints que se deben usar

- **Listar productos**
  - `GET /products`
- **Paginación por offset/limit**
  - `GET /products?offset=0&limit=10`
- **Filtrar por título**
  - `GET /products/?title=Generic`
- **Detalle por id**
  - `GET /products/{id}`

### Notas de paginación

- `offset`: cuántos elementos se omiten antes de empezar a devolver resultados.
- `limit`: cantidad máxima de elementos devueltos.
- Para cambiar de página, se puede incrementar `offset` según el tamaño de página (`limit`).

Ejemplo:

- página 1 con 10 items: `offset=0&limit=10`
- página 2 con 10 items: `offset=10&limit=10`
- página 3 con 10 items: `offset=20&limit=10`

## Criterios de evaluación sugeridos

- Cumplimiento funcional de los requerimientos.
- Uso correcto de hooks y dependencias.
- Estructura y legibilidad del código.
- Manejo correcto de estado y rendering.
- Integración correcta con API (paginación + filtro).
- Navegación correcta entre listado y detalle usando React Router.

## Tabla de evaluación con puntajes (100 puntos)

| Criterio | Qué se espera | Puntaje |
|---|---|---:|
| Listado de productos | Se renderiza el listado en pantalla con datos reales de la API. | 10 |
| Fetch de productos | La consulta de listado funciona, maneja carga y usa el endpoint correcto. | 15 |
| Filtro por `title` | El input de filtro funciona correctamente y actualiza los resultados esperados. | 10 |
| Fetch de detalle de producto | El detalle por `id` se obtiene con la ruta correcta y muestra información válida. | 15 |
| Navegación con React Router | Se navega desde el listado al detalle con `Link` y rutas configuradas correctamente. | 15 |
| Uso correcto de la paginación | Se respeta `offset/limit`, avance/retroceso y reinicio de página cuando corresponde. | 15 |
| Uso correcto de hooks/custom hooks | Dependencias correctas en `useEffect`, lógica reutilizable y sin efectos colaterales. | 10 |
| Extracción a componentes individuales | Se separa UI y/o lógica en componentes claros cuando se solicita. | 10 |
| Calidad de código | Legibilidad, orden, nombres claros y consistencia con el estilo del proyecto. | 5 |
| **Total** |  | **100** |

## Checklist de evaluación por estudiante

| Ítem | Cumple | Puntaje obtenido | Observaciones |
|---|:---:|---:|---|
| Listado de productos | ☐ Sí / ☐ No | /10 |  |
| Fetch de productos | ☐ Sí / ☐ No | /15 |  |
| Filtro por `title` | ☐ Sí / ☐ No | /10 |  |
| Fetch de detalle de producto | ☐ Sí / ☐ No | /15 |  |
| Navegación con React Router | ☐ Sí / ☐ No | /15 |  |
| Uso correcto de la paginación | ☐ Sí / ☐ No | /15 |  |
| Uso correcto de hooks/custom hooks | ☐ Sí / ☐ No | /10 |  |
| Extracción a componentes individuales | ☐ Sí / ☐ No | /10 |  |
| Calidad de código | ☐ Sí / ☐ No | /5 |  |
| **Total obtenido** |  | **/100** |  |

### Escala sugerida de calificación

- 90-100: desempeño sobresaliente.
- 80-89: desempeño bueno.
- 70-79: desempeño aceptable.
- 60-69: desempeño básico.
- Menor a 60: requiere refuerzo.
