const fs = require('fs');
const path = require('path');

function generateScssMap(basePath, scssMap = {}, currentDirectory = '') {
    try {
        if (!fs.existsSync(basePath) || !fs.statSync(basePath).isDirectory()) {
            console.error(`Error: The specified folder path '${basePath}' does not exist or is not a directory.`);
            return;
        }

        const files = fs.readdirSync(basePath);

        files.forEach(file => {
            const filePath = path.join(basePath, file);
            const relativeFilePath = path.relative(sassFolderPath, filePath);

            try {
                if (fs.statSync(filePath).isDirectory()) {
                    // Recursively generate map for files in subdirectories
                    const newDirectory = path.join(currentDirectory, file);
                    generateScssMap(filePath, scssMap, newDirectory);
                } else if (file.endsWith('.scss')) {
                    const fileContent = fs.readFileSync(filePath, 'utf8');
                    const importRegex = /@import ['"](.+?)['"]/g;
                    const imports = [];

                    while ((match = importRegex.exec(fileContent)) !== null) {
                        const importedFile = match[1];
                        imports.push(importedFile);
                    }

                    const relativePathWithDirectory = currentDirectory ? path.join(currentDirectory, relativeFilePath) : relativeFilePath;
                    scssMap[relativePathWithDirectory] = imports.map(importedFile => {
                        return path.join(path.dirname(relativeFilePath), importedFile).replace(/\\/g, '/');
                    });

                    if (imports.length === 0) {
                        scssMap[relativePathWithDirectory] = ['(No imports)'];
                    }
                }
            } catch (error) {
                console.error(`Error processing ${filePath}: ${error.message}`);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${basePath}: ${error.message}`);
    }
}

function writeScssMapToFile(scssMap, outputFilePath) {
    try {
        const mapAsText = JSON.stringify(scssMap, null, 2);
        fs.writeFileSync(outputFilePath, mapAsText, 'utf8');
        console.log(`Scss map has been generated and saved to ${outputFilePath}`);
    } catch (error) {
        console.error(`Error writing to file ${outputFilePath}: ${error.message}`);
    }
}

// Parse command line arguments
const args = process.argv.slice(2); // skip first two elements (node and script name)

if (args.length !== 1) {
  console.error('Usage: npm run scss.js \'your/folder/path\'');
  process.exit(1);
}

const sassFolderPath = args[0];
const outputFilePath = path.join(process.cwd(), 'scssMap.txt'); // Save in the current working directory

const scssMap = {};
generateScssMap(sassFolderPath, scssMap);
writeScssMapToFile(scssMap, outputFilePath);
