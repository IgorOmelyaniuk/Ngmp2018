import EventEmitter from 'events';
import fs from 'fs';
import path from 'path';

class Dirwatcher extends EventEmitter {
  static get nameForChanging() {
    return 'dirwatcher:changed';
  }

  watch(path, delay) {
    let files = [];
    
    setInterval(() => {
      fs.readdir(path, (error, result) => {
        if (error) throw error;

        if (files.length < result.length) {
          let newFiles = result.filter(file => !files.includes(file));
          files = result;
          newFiles.forEach(file => this.emit(this.nameForChanging, file));
        }

        if (files.length > result.length) {
          files = result;
        }
      });
    }, delay);
  }
}

export default Dirwatcher;
