import readline from 'readline'
import fs from 'fs'

export async function dailyUserJob() {

  const rl = readline.createInterface({
    input: fs.createReadStream('./files/user.txt'),
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