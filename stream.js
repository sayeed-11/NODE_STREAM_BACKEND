const {Readable, Writable} = require('stream')

const readableStream = new Readable({
    highWaterMark : 18,
    read () {}
})

const writableStream = new Writable({
    highWaterMark : 5,
    write (s) {console.log(s.toString())}
})

readableStream.on('data', (chunk) => {
    writableStream.write(chunk.toString().toUpperCase());
})

const result = readableStream.push('i am sayeed anwar and i am a developer');

// console.log(result);

// const result = writableStream.write('i am SAYEED')
// console.log(result)
