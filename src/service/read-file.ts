import readline from 'readline'
import fs from 'fs'

export class ReadFileService {
  constructor(private fileName: string) {}

  async execute() {

    const rl = readline.createInterface({
      input: fs.createReadStream(`./files/${this.fileName}`),
      crlfDelay: Infinity
    })

    const data: { [index: number]: string[] } = {}; // Array associativo
    let currentIndex = 0; 

    let isFirstLine = true;

    rl.on('line', (line) => {
      if (isFirstLine) {
        isFirstLine = false;
        return;
      }
      
      const elements = line.split('|')
      data[currentIndex] = elements
      currentIndex++    
    })

    rl.on('close', () => {
      console.log(data)
    })
  }
}