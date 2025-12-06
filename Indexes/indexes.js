// Configuración de la base de datos: GlobalMarketDB
const db = db.getSiblingDB('GlobalMarketDB');

// 1. Índices para la colección 'Clientes'
// Implementa el índice sobre 'pais' (Ascendente)
// (El índice sobre _id es automático)
db.Clientes.createIndex({ pais: 1 });

// 2. Índices para la colección 'Ordenes'
// Implementa el índice compuesto: cliente_id (Ascendente) y fecha_orden (Descendente)
// (Esto optimiza la búsqueda de "las últimas órdenes de un cliente")
db.Ordenes.createIndex({ cliente_id: 1, fecha_orden: -1 });

// 3. Colección 'Productos'
// (El único índice es el _id automático, y el motor de búsqueda se gestiona con Atlas Search)

print("✅ Índices personalizados creados exitosamente en GlobalMarketDB.");