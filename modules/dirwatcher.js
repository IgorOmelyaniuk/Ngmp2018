import EventEmitter from 'events';
import fs from 'fs';
import path from 'path';

const DIR_CHANGED = 'dirwatcher:changed';

class Dirwatcher extends EventEmitter {
  watch(path, delay) {
    let files = [];
    
    setInterval(() => {
      fs.readdir(path, (error, result) => {
        if (error) throw error;

        if (files.length < result.length) {
          let newFiles = result.filter(file => !files.includes(file));
          files = result;
          newFiles.forEach(file => this.emit(DIR_CHANGED, file));
        }

        if (files.length > result.length) {
          files = result;
        }
      });
    }, delay);
  }
}

export default Dirwatcher;
