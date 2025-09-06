const fs = require('fs');
const path = require('path');

const username = 'sabit-hasan';
const repo = 'Frontend-Haven';
const branch = 'main';

const folders = fs.readdirSync('./').filter(f => fs.statSync(f).isDirectory() && f !== '.github');

let table = '| Design | Preview | Demo |\n|--------|---------|------|\n';

folders.forEach(folder => {
    const indexPath = path.join(folder, 'index.html');
    const screenshotPath = path.join(folder, 'screenshot.png');
    if (fs.existsSync(indexPath) && fs.existsSync(screenshotPath)) {
        const imageURL = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${folder}/screenshot.png`;
        const demoURL = `https://${username}.github.io/${repo}/${folder}/`;
        table += `| ${folder.replace(/-/g, ' ')} | ![Preview](${imageURL}) | [Demo](${demoURL}) |\n`;
    }
});

fs.writeFileSync('README.md', `# My Frontend Designs\n\n${table}`);
console.log('README.md updated!');
