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
      const items = await Items.findAll();
      res.status(201);
      res.json(items);
    } catch (err) {
      res.status(500);
      res.json(err);
    }

  }
  // }
}

export { ItemsController };
