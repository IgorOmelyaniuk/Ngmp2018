import EventEmitter from 'events';
import fs from 'fs';
import csvjson from 'csvjson';

const DIR_CHANGED = 'dirwatcher:changed';

class Importer extends EventEmitter {
  constructor(emitter) {
    super();
    this.emitter = emitter;
  }

  subscribeOnImport(path) {
    this.emitter.on(DIR_CHANGED, file => {
      this.import(`${path}/${file}`)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    });
  }

  import(file) {
    return new Promise((resolve, reject) => {
      return fs.readFile(file, 'utf-8', (error, data) => {
        if (error) reject(error);

        resolve(csvjson.toObject(data));
      });
    });
  }

  importSync(file) {
    const data = csvjson.toObject(fs.readFileSync(file, 'utf-8'));
    console.log(data);
    return data;
  }
}

export default Importer;
