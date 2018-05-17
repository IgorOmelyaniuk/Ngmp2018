import config from './config/config.json';
import path from 'path';
import { User, Product } from './models';
import { Dirwatcher, Importer } from './modules';

const user = new User();
const product = new Product();

const dirwatcher = new Dirwatcher();
const importer = new Importer(dirwatcher);

const dataPath = path.join(__dirname, 'data');

dirwatcher.watch(dataPath, 3000);
importer.subscribeOnImport(dataPath);
