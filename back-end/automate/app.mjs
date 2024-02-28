import {readFileSync} from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js'

let fileData, pdfData;

if (process.argv[2]) {
    fileData = readFileSync(process.argv[2]);
}
else {
    console.error('No file specified!');
}
 
pdf(fileData).then(function(data) {
    // console.log(data.text);
});


