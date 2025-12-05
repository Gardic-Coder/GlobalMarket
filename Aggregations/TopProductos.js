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
    $group: {
      _id: {
        categoria: "$producto_info.categoria",
        product_id: "items.product_id",
        nombre: "$producto_info.nombre"
      },
      total_vendido: {
        $sum: "$items.cantidad"
      }
    }
  },
  {
    $match: {
      total_vendido: {
        $gte: 50
      }
    }
  },
  {
    $sort: {
      "_id.categoria": 1,
      total_vendido: -1
    }
  },
  {
    $project: {
      _id: 0,
      categoria: "$_id.categoria",
      product_id: "$_id.product_id",
      nombre: "$_id.nombre",
      total_vendido: 1
    }
  }
]