import fs from 'fs';

const json = fs.readFileSync('package.json', {
    encoding: 'utf-8'
});

const packageJson = JSON.parse(json);
delete packageJson.devDependencies;
delete packageJson.scripts;
delete packageJson.private;

fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2), {
    encoding: 'utf-8'
});