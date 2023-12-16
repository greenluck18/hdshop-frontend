// Description: This file contains the router class which is responsible for routing the requests to the appropriate controller.
import express from 'express';
import { HealthCheckController } from './controllers/health_check.js';
import { ItemsController } from './controllers/items.js';

/**
 * @class Router
 */
class Router {
  /**
   * @param {express.Application} app
   * @param {string} path
   */
  constructor() {
    this.app = express();
    this.healthCheckController = new HealthCheckController();
    this.itemsController = new ItemsController();
  }

  init() {
    this.app.use(express.json());
    this.app.get('/ping', this.healthCheckController.ping.bind(this.healthCheckController));
    this.app.get('/system_info', this.healthCheckController.systemInfo.bind(this.healthCheckController));
    
    this.app.get('/items', this.itemsController.getItems.bind(this.itemsController));
    this.app.post('/create_item', this.itemsController.createItem.bind(this.itemsController));

    this.app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
}

export { Router };
