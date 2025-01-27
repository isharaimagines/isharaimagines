import { mkdirSync, writeFileSync } from 'fs';
export const OUTPUT_FOLDER = './profile-3d-contrib';
export const writeFile = (fileName, content) => {
    mkdirSync(OUTPUT_FOLDER, { recursive: true });
    writeFileSync(`${OUTPUT_FOLDER}/${fileName}`, content);
};
