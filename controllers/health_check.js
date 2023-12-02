import os from 'os';
/**
 * HealthCheckController
 */
class HealthCheckController {
  /**
   * ping - pong
   * @param {Request} req
   * @param {Response} res
   */
  ping(req, res) {
    res.status(200);
    res.json({
      host: req.hostname,
      message: 'pong'
    });
  }

  /**
   * systemInfo - get system info
   * @param {Request} req
   * @param {Response} res
   */
  systemInfo(req, res) {
    res.status(200);
    res.json({
      os: os.platform(),
      release: os.release(),
      type: os.type(),
      cpu: os.cpus().map((cpu) => cpu.model),
      memory: os.totalmem()/1024/1024/1024 + ' GB',
    });
  }
}

export { HealthCheckController };
