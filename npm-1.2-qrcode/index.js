/* 
    Problem
    Problem
    to the previous npm project
    install a QR code library on the project locally
    it should reflect on the package.json after installing
    import QRcode library and write code that will output a file for you with the text
    use commander library and take the QRcode text and output file from the CLI ( play around for this and figure out )
    for example from the CLI I should be able to write in this format:
    node index.js <text_for_qrcode> --output filename.png
    add .gitignore file and add /node_module to ignore any node_module files
    Note:
    if git is not taught yet, you can attempt this after that
*/

const QRCode = require('qrcode');
const { Command } = require('commander');
const program = new Command();

QRCode.toString('I am Aditya Neve', { type: 'terminal' }, function (err, url) {
    // console.log(url);
});

QRCode.toDataURL('I am Aditya Neve', { type: 'terminal' }, function (err, url) {
    // console.log(url);
});

// node index.js < text_for_qrcode > --output filename.png
program
    .option('-s, --string <string>', 'enter string for qrcode')
    .option('-o, --output <.png>', 'get qr code output file');
program.parse(process.argv);

const options = program.opts();

console.log(options.string);
console.log(options.output);

if (options.string != undefined && options.output != undefined) {
    QRCode.toString(options.string, { type: 'file' }, function ( err, url){
        

    })
}




