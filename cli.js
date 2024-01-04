#!/usr/bin/env node

const path = require('path');
const scssMapGenerator = require('./scssMapGenerator');

// Parse command line arguments
const args = process.argv.slice(2); // skip first two elements (node and script name)

if (args.length !== 1) {
    console.error('Usage: npx scss-structure-mapper \'your/folder/path\'');
    process.exit(1);
}

const sassFolderPath = args[0];
const outputFilePath = path.join(process.cwd(), 'scssMap.txt'); // Save in the current working directory

const scssMap = {};
scssMapGenerator.generateScssMap(sassFolderPath, scssMap);
scssMapGenerator.writeScssMapToFile(scssMap, outputFilePath);
