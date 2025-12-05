{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      '_id',
      'fecha_orden',
      'fecha_envio',
      'modo_envio',
      'prioridad',
      'costo_envio',
      'cliente_id',
      'items'
    ],
    properties: {
      _id: {
        bsonType: 'string'
      },
      fecha_orden: {
        bsonType: 'string'
      },
      fecha_envio: {
        bsonType: 'string'
      },
      modo_envio: {
        bsonType: 'string'
      },
      prioridad: {
        bsonType: 'string'
      },
      costo_envio: {
        bsonType: [
          'double',
          'int'
        ]
      },
      cliente_id: {
        bsonType: 'string'
      },
      items: {
        bsonType: 'array',
        minItems: 1,
        items: {
          bsonType: 'object',
          required: [
            'product_id',
            'cantidad',
            'descuento',
            'ganancia',
            'precio_unitario'
          ],
          properties: {
            product_id: {
              bsonType: 'string'
            },
            cantidad: {
              bsonType: [
                'int',
                'double'
              ],
              minimum: 1
            },
            descuento: {
              bsonType: [
                'double',
                'int'
              ],
              minimum: 0
            },
            ganancia: {
              bsonType: [
                'double',
                'int'
              ]
            },
            precio_unitario: {
              bsonType: [
                'double',
                'int'
              ],
              minimum: 0
            }
          }
        }
      }
    }
  }
}