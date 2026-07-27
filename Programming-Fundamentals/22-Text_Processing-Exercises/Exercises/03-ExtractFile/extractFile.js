function extractFile(filePath) {
    let parts = filePath.split('\\');
    let fullFileName = parts[parts.length - 1];

    let dotIndex = fullFileName.lastIndexOf('.');

    let fileName = fullFileName.substring(0, dotIndex);
    let extension = fullFileName.substring(dotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log("--------------------------------");
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');