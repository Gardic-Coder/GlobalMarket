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
    $addFields: {
      "items.total": {
        $multiply: [
          "$items.cantidad",
          "$items.precio_unitario"
        ]
      }
    }
  },
  {
    $group: {
      _id: {
        categoria: "$producto_info.categoria",
        mes: {
          month: {
            $dateFromString: {
              dateString: "$fecha_orden",
              format: "%d-%m-%Y"
            }
          }
        }
      },
      total_ventas: {
        $sum: "$items.total"
      }
    }
  },
  {
    $project: {
      _id: 0,
      categoria: "$_id.categoria",
      mes: "$_id.mes",
      total_ventas: {
        $round: ["$total_ventas", 2]
      }
    }
  },
  {
    $sort: {
      categoria: 1,
      mes: 1
    }
  }
]