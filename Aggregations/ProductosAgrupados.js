[
  {
    $unwind: {
      path: "$items"
    }
  },
  {
    $lookup: {
      from: "Productos",
      localField: "items.product_id",
      foreignField: "_id",
      as: "producto_info"
    }
  },
  {
    $unwind: {
      path: "$producto_info"
    }
  },
  {
    $bucket:
      /*
  Bajo es 0 a 50
  Medio es 50 a 200
  Alto es 200 en adelante
  */
      {
        groupBy: "$items.precio_unitario",
        boundaries: [0, 50, 200, 10000],
        default: "Desconocido",
        output: {
          productos: {
            $push: "$producto_info.nombre"
          },
          total_items: {
            $sum: "$items.cantidad"
          }
        }
      }
  }
]