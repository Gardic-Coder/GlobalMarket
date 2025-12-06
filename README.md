# GlobalMarket Analytics & Search Engine

**Asignatura:** Sistemas de Bases de Datos II (UNEG)  
**Semestre:** 2025-II  
**Profesor:** Clinia Cordero  

## 📋 Descripción del Proyecto
Este proyecto consiste en la migración y optimización del catálogo de productos y registro de ventas de la empresa "GlobalMarket" hacia **MongoDB Atlas**. El objetivo es solucionar problemas de rendimiento de la base de datos relacional anterior mediante un modelado documental, implementación de motores de búsqueda eficientes y análisis de datos en tiempo real.

## 👥 Equipo
* Juan Garcia - 27.957.896
* Alejandro Gonzalez - 30.810.237
* Roxana Moreno - 31.248.475

## 📂 Estructura del Repositorio

```text
├── Colecciones/       # Archivos .json con la data cruda (Clientes, Ordenes, Productos)
├── Validations/       # Scripts de reglas de validación (Schema Validation) para Atlas
├── aggregations/      # Pipelines de agregación exportados (formato Shell)
└── README.md          # Documentación del proyecto
```

## 🚀 Guía de Despliegue e Instalación
Sigue estos pasos para levantar el entorno del proyecto en tu propio clúster de MongoDB Atlas:

### Prerrequisitos
* Cuenta en MongoDB Atlas (Cluster M0 Free Tier).
* MongoDB Compass o MongoDB Shell (mongosh) instalado.
* Herramientas de base de datos (MongoDB Database Tools) para el uso de mongoimport.

### 1. Ingesta de Datos
Los datos iniciales se encuentran en la carpeta Colecciones/. Utiliza mongoimport o MongoDB Compass para cargar los archivos JSON en tu base de datos.

* GlobalMarketDB.Clientes.json -> Colección: clientes
* GlobalMarketDB.Ordenes.json -> Colección: ordenes
* GlobalMarketDB.Productos.json -> Colección: productos

### 2. Aplicación de Validaciones
Para asegurar la integridad de los datos, aplica las reglas definidas en la carpeta Validations/.

* Copia el código JSON/JS de cada archivo.
* En Atlas o Compass, navega a la pestaña Validation de la colección correspondiente y pega la regla.

### 3. Ejecución de Consultas (Aggregations)
Los pipelines complejos para el análisis de negocio se encuentran en la carpeta aggregations/.

* Estos archivos contienen los scripts en formato shell.
* Pueden ser ejecutados directamente en mongosh o copiados en la etapa de Aggregation de MongoDB Compass para visualizar los resultados paso a paso.

### 4. Configuración de Índices y Búsqueda (Performance)
La configuración de rendimiento se divide en dos partes: Índices Tradicionales (para las consultas de agregación) e Índice de Búsqueda (para la barra de búsqueda de la tienda).

### A. Índices Tradicionales (MongoDB Indexes) 💾
Se utiliza el script indexes.js (en la carpeta indexes) para aplicar los índices definidos en la estructura (incluyendo un índice compuesto crucial para Ordenes).

1. Ejecución del Script: Asegúrate de que el archivo indexes.js esté en tu directorio local.
2. Ejecuta el siguiente comando en tu terminal, apuntando a tu clúster de Atlas:

```bash
mongosh "TU_STRING_DE_CONEXION/GlobalMarketDB" < indexes.js
```
**Alternativa:** Copia el contenido del archivo `indexes.js` y pégalo directamente en la consola de la **Shell** en MongoDB Compass.

### B. Motor de Búsqueda (Atlas Search) 🔍
El motor de búsqueda difusa (Fuzzy Search) se configura a través del *Atlas Search Index* en la colección **Productos**.

1. En MongoDB Atlas, navega a tu clúster y haz clic en la pestaña **Search**.
2. Presiona **"Create Search Index"**.
3. Selecciona **"JSON Editor"**.
4. Configura el índice:
    * **Database:** `GlobalMarketDB`
    * **Collection:** `Productos`
    * **Index Name:** Sugerimos `default` o `search_productos`.
5. Borra el contenido JSON por defecto y pega el código del archivo `atlas_search_index.json` incluido en este repositorio.
6. Haz clic en **Next** y luego en **Create Search Index**.

## 📊 Dashboard de Visualización
Como parte del requerimiento de análisis visual, se ha implementado un Dashboard interactivo utilizando MongoDB Atlas Charts.

🔗 Enlace al Dashboard: [[Dashboard](https://charts.mongodb.com/charts-globalmarket-analytics---ixscyev/public/dashboards/fea59eb8-e8e8-4005-9aa4-f5f641be803f)]

Este dashboard muestra métricas clave como el reporte de ventas por categoría y productos mejor calificados en tiempo real.