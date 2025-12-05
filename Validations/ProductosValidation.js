{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      '_id',
      'nombre',
      'categoria',
      'subcategoria'
    ],
    properties: {
      _id: {
        bsonType: 'string'
      },
      nombre: {
        bsonType: 'string'
      },
      categoria: {
        bsonType: 'string'
      },
      subcategoria: {
        bsonType: 'string'
      }
    }
  }
}