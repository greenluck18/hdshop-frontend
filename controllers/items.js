// create and get the Item 
import { Items } from '../models/items.js';
/**
 * Items
 */
// create application/json parser

class ItemsController {
  /**
    * ping - pong
    * @param {Request} req
    * @param {Response} res
    */
  async createItem(req, res) {
    try {
      const item = await Items.create(req.body);
      res.status(201);
      res.json(item);
    } catch (err) {
      res.status(500);
      res.json(err);
    }
  }
  async getItems(req, res) {
    try {
      const items = await Items.findAndCountAll();
      res.status(201);
      res.json(items);
    } catch (err) {
      res.status(500);
      res.json(err);
    }

  }
  async findItemByName(req, res) {  
    try {
      const item = await Items.findAll({
        where: {
          name: req.params.name
        }
      });
      res.status(201);
      res.json(item);
    } catch (err) {
      res.status(500);
      res.json(err);
    }
  }
  async findById(req, res) {
    try {
      const item = await Items.findByPk(req.params.id);
      res.status(201);
      res.json(item);
    } catch (err) {
      res.status(500);
      res.json(err);
    }
  }
  async deleteItem(req, res) {
    try {
      const item = await Items.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(201);
      res.json(item);
    } catch (err) {
      res.status(500);
      res.json(err);
    }
  }
  async updateItem(req, res) {
   try {
    const {
      id,
      name,
      description,
      price,
      trade_id
    } = req.body;
    const existingItem = await Items.findByPk(req.params.id);
    if (!existingItem) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }
    if(!!id && existingItem.id !== id){ 
      res.status(404).json({ error: 'Can`t change item id' });
      return;
    }
    const updatedItem = await existingItem.update({
      name,
      description,
      price,
      trade_id,
    });

    res.status(201).json(updatedItem);
    }
    catch (err) {
      res.status(500);
      res.json(err);
    }
  }
}

export { ItemsController };
