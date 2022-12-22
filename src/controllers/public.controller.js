import ItemModel from '../models/Item.model';

export const createItem = async (req, res) => {
  try {
    const newItem = await new ItemModel({
      name: req.body.name,
      type: req.body.type,
      values: req.body.values,
      result: req.body.result,
      date: req.body.date,
    }).save();
    if (newItem) {
      return res.status(201).json({
        status: "success",
        message: "Item created successfully",
        data: newItem._id,
      });
    };
    return res.status(400).json({
      status: "error",
      message: "Item not created",
      data: null,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: err,
    });
  };
};

export const readItemById = async (req, res) => {
  try {
    const { itemId } = req.params;
    if (itemId) {
      const item = await ItemModel.findById(itemId);
      if (item) {
        return res.json({
          status: 'success',
          message: 'Item found',
          data: {
            name: item.name,
            type: item.type,
            result: item.result,
            date: item.date
          },
        });
      };
      return res.status(404).json({
        status: 'error',
        message: 'Item not found',
        data: null,
      });
    };
    return res.status(400).json({
      status: 'error',
      message: 'Item id is required',
      data: null,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      data: err,
    });
  };
};