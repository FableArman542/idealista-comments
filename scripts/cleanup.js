const fs = require('fs');
const path = require('path');

const files = [
    path.join(__dirname, '../dist/popup.js'),
    path.join(__dirname, '../dist/auth.js')
];

const replacements = [
    { from: 'https://apis.google.com/js/api.js', to: '' },
    { from: 'https://www.google.com/recaptcha/api.js', to: '' },
    { from: 'https://www.google.com/recaptcha/enterprise.js?render=', to: '' }
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;
        replacements.forEach(r => {
            if (content.includes(r.from)) {
                content = content.split(r.from).join(r.to);
                changed = true;
                console.log(`Removed ${r.from} from ${path.basename(file)}`);
            }
        });
        
        if (changed) {
            fs.writeFileSync(file, content);
            console.log(`Updated ${file}`);
        } else {
            console.log(`No forbidden strings found in ${file}`);
        }
    }
});

