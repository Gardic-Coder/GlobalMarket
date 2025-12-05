{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      '_id',
      'nombre',
      'segmento',
      'ciudad',
      'estado',
      'pais',
      'mercado',
      'region'
    ],
    properties: {
      _id: {
        bsonType: 'string'
      },
      nombre: {
        bsonType: 'string'
      },
      segmento: {
        bsonType: 'string'
      },
      ciudad: {
        bsonType: 'string'
      },
      estado: {
        bsonType: 'string'
      },
      pais: {
        bsonType: 'string'
      },
      codigo_postal: {
        bsonType: [
          'string',
          'null'
        ],
        description: 'Puede ser null si no se proporciona'
      },
      mercado: {
        bsonType: 'string'
      },
      region: {
        bsonType: 'string'
      }
    }
  }
}