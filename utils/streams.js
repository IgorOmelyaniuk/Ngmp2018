import minimist from 'minimist';
import config from '../config/config.json';
import through from 'through2';
import fs from 'fs';
import path from 'path';
import csvjson from 'csvjson';

const actionHandlers = {
  reverse() {
    process.stdin.on('data', data => {
      const reverseString = data.toString().split('').reverse().join('');
      process.stdout.write(reverseString);
    });
  },

  transform() {
    const stream = through(write, end);

    function write(buffer, encoding, next) {
      const chunk = buffer.toString().toUpperCase();
      this.push(chunk);
      next();
    }

    function end(done) {
      done();
    }

    process.stdin.pipe(stream).pipe(process.stdout);
  },

  outputFile(path) {
    const readStream = fs.createReadStream(path);
    readStream.on('data', chunk => process.stdout.write(chunk.toString()));
  },

  convertFromFile(path) {
    const readStream = fs.createReadStream(path);
    let result;

    readStream.on('data', chunk => result += chunk);
    readStream.on('end', () => {
      const json = csvjson.toObject(result);
      process.stdout.write(JSON.stringify(json));
    });
  },

  convertToFile(path) {
    const readStream = fs.createReadStream(path);
    const writeStream = fs.createWriteStream(path.replace('.csv', '.json'));
    const json = csvjson.stream.toObject();
    const stringify = csvjson.stream.stringify();
    readStream.pipe(json).pipe(stringify).pipe(writeStream);
  },

  cssBundler(dirPath) {
    const writer = fs.createWriteStream(path.join(dirPath, 'bundle.css'));

    fs.readdir(dirPath, (err, files) => {
      if (err) throw err;

      if (files.length) {
        const cssFiles = files.filter(file => file.match(/.css/));

        cssFiles.forEach(file => {
          fs.readFile(path.join(dirPath, file), 'utf-8', (err, data) => {
            if (err) throw err;
            writer.write(`${data}\n`);
          });
        });
      } else {
        showMsg('Directory is empty');
      }
    });
  }
}

const showMsg = msg => {
  console.log(msg);
  process.exit()
}

const args = minimist(process.argv.slice(2), config.minimistOptions);
console.log(args)
const streamConsole = args => {
  const keys = Object.keys(args);

  const indexHelp = keys.findIndex(key => key === 'h' || key === 'help');
  const indexAction = keys.findIndex(key => key === 'a' || key === 'action');
  const indexFile = keys.findIndex(key => key === 'f' || key === 'file');
  const indexPath = keys.findIndex(key => key === 'p' || key === 'path');

  const action = actionHandlers[args.a];

  if (indexHelp === 1 || keys.length === 1) {
    showMsg('Options: \n -a, --action - start action \n -h, --help - show all commands \n -f, --file - select file');
  }

  if (args.a === 'outputFile' || args.a === 'convertFromFile' || args.a === 'convertToFile') {
    if (indexFile < 0) {
      showMsg('Action requires file as argument');
    } else if (indexFile < indexAction) {
      showMsg('Invalid argument order');
    }
  }

  if (indexAction < 0) {
    showMsg('You should specify action');
  }

  if (!action) {
    showMsg('Action does not exist');
  }

  if (args.a === 'cssBundler' && indexPath < 0) {
    showMsg('Action requires path as argument');
  }

  if (args.p) {
    action(path.join(__dirname, args.p));
  } else if (args.f) {
    const filePath = path.join(__dirname, args.f);
    fs.existsSync(filePath) ? action(filePath) : showMsg('File does not exist');
  } else {
    action();
  }  
}

streamConsole(args);

export default streamConsole;
