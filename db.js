
import { readFile } from 'fs/promises';
import { Sequelize } from "sequelize";
//import Config from './config/config.json' assert {type: 'json'};

const Config = JSON.parse(await readFile('./config/config.json', 'utf8'));

const {
    username,
    password,
    database,
    host,
    port

} = Config.development;

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

export { sequelize }