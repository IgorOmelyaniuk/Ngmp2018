import EventEmitter from 'events';
import fs from 'fs';
import csvjson from 'csvjson';

class Importer {
  constructor(emitter) {
    this.emitter = emitter;
  }

  subscribeOnImport(path) {
    this.emitter.on(this.emitter.nameForChanging, file => {
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
