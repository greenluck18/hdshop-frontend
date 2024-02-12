// Description: This file contains the router class which is responsible for routing the requests to the appropriate controller.
import express from 'express';
import cors from 'cors'; 
import { HealthCheckController } from './controllers/health_check.js';
import { ItemsController } from './controllers/items.js';
import { AuthController } from './controllers/auth.js';
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
    this.authController = new AuthController();
  }

  init() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.get('/ping', this.healthCheckController.ping.bind(this.healthCheckController));
    this.app.get('/system_info', this.healthCheckController.systemInfo.bind(this.healthCheckController));
    
    this.app.get('/items',
      this.itemsController.getItems.bind(this.itemsController)
    );

    this.app.get('/my_items',
      this.authController.authenticateToken.bind(this.authController),
      this.itemsController.userItems.bind(this.itemsController)
    );
    this.app.get('/items/:id', 
      this.authController.authenticateToken.bind(this.authController),
      this.itemsController.findById.bind(this.itemsController)
    );
    this.app.post('/create_item', 
      this.authController.authenticateToken.bind(this.authController),
      this.itemsController.createItem.bind(this.itemsController)
    );
    this.app.get('/items/name/:name',
     this.itemsController.findItemByName.bind(this.itemsController)
    );
    this.app.delete('/items/delete/:id',
      this.authController.authenticateToken.bind(this.authController),
      this.itemsController.deleteItem.bind(this.itemsController)
     );  
    this.app.put('/items/update/:id', 
      this.itemsController.updateItem.bind(this.itemsController)
    );    
    this.app.post('/register', 
      this.authController.createUser.bind(this.authController)
    );
    this.app.post('/login', 
      this.authController.login.bind(this.authController)
    );

    this.app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  }
}

export { Router };
