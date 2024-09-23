#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const templatePath = path.join(__dirname, 'template');

const targetPath = process.cwd();

fs.copy(templatePath, targetPath)
    .then(() => console.log('Template copied successfully!'))
    .catch(err => console.error('Error copying template:', err));
