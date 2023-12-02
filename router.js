import express from 'express';
import { HealthCheckController } from './controllers/health_check.js';

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
  }

  init() {
    this.app.get('/ping', this.healthCheckController.ping.bind(this.healthCheckController));
    this.app.get('/system_info', this.healthCheckController.systemInfo.bind(this.healthCheckController));
    
    this.app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
}

export { Router };
