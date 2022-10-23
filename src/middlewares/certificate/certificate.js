// const fs = require("fs");
// const moment = require("moment");
// const PDFDocument = require("pdfkit");
// const images=require("./images/certificate.png")
// const doc = new PDFDocument({
//     layout: "landscape",
//     size: "A4",
// });

// const name = "fawzi shiyyab"
// const course ="java script"
// const signature ="Ruba"

// doc.pipe(fs.createWriteStream(`${name}.pdf`));
// doc.pipe(fs.createWriteStream(`${course}.pdf`));
// doc.pipe(fs.createWriteStream(`${signature}.pdf`));

// doc.image("./images/certificate.png", 0, 0, { width: 842 });

// doc.fontSize(60).text(name, 20, 320, {
//     align: "center"
// });
// doc.fontSize(20).text(course, 250, 202, {
//     align: "center"
// });
// doc.fontSize(17).text(signature, 275, 480, {
//     align: "center"
// });


// doc.fontSize(17).text(moment().format("MMMM Do YYYY"), -275, 480, {
//     align: "center"
// });

// doc.end();