# GlobalMarket Analytics & Search Engine

**Asignatura:** Sistemas de Bases de Datos II (UNEG)  
**Semestre:** 2025-11  
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

### 1. Ingesta de Datos
Los datos iniciales se encuentran en la carpeta Colecciones/. Utiliza mongoimport o MongoDB Compass para cargar los archivos JSON en tu base de datos.

* clientes.json -> Colección: clientes
* ordenes.json -> Colección: ordenes
* productos.json -> Colección: productos

### 2. Aplicación de Validaciones
Para asegurar la integridad de los datos, aplica las reglas definidas en la carpeta Validations/.

* Copia el código JSON/JS de cada archivo.
* En Atlas o Compass, navega a la pestaña Validation de la colección correspondiente y pega la regla.

### 3. Ejecución de Consultas (Aggregations)
Los pipelines complejos para el análisis de negocio se encuentran en la carpeta aggregations/.

* Estos archivos contienen los scripts en formato shell.
* Pueden ser ejecutados directamente en mongosh o copiados en la etapa de Aggregation de MongoDB Compass para visualizar los resultados paso a paso.

## 📊 Dashboard de Visualización
Como parte del requerimiento de análisis visual, se ha implementado un Dashboard interactivo utilizando MongoDB Atlas Charts.

🔗 Enlace al Dashboard: [[Dashboard](https://charts.mongodb.com/charts-globalmarket-analytics---ixscyev/public/dashboards/fea59eb8-e8e8-4005-9aa4-f5f641be803f)]

Este dashboard muestra métricas clave como el reporte de ventas por categoría y productos mejor calificados en tiempo real.