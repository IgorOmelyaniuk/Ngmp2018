import minimist from 'minimist';
import config from '../config/config.json';
import through2 from 'through2';

const actionHandler = {
  reverse() {
    process.stdin.on('data', data => {
      const reverseString = data.toString().split('').reverse().join('')
      process.stdout.write(reverseString)
    })
  },

  transform(str) {
    process.stdin.pipe(through2(function(chunk, enc, cb) {
      const str = chunk.toString();
      const upperString = chunk.toString().toUpperCase();
      this.push(upperString);
      cb();
    }))
    .pipe(process.stdout);
  },

  outputFile(filePath) {
    console.log('outputFile', filePath);
  },

  convertFromFile(filePath) {
    console.log('convertFromFile', filePath);
  },

  convertToFile(filePath) {
    console.log('convertToFile', filePath);
  },

  showError() {
    console.log('Please enter correct options');
  }
}

const args = minimist(process.argv.slice(2), config.minimistOptions);
console.log(args)

const streamConsole = args => {
  const keys = Object.keys(args);

  const indexHelp = keys.findIndex(key => key === 'help');
  const indexAction = keys.findIndex(key => key === 'action');
  const indexFile = keys.findIndex(key => key === 'file');
  

  if (indexHelp === 1 || keys.length === 1) {
    console.log(config.helpMessage)
  }

  const action = actionHandler[args.a];
  action('hello');
}

streamConsole(args);

export default streamConsole;