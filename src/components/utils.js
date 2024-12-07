
async function readMDFile(fileName) {
    const filePath = await import(`../articles/${fileName}`);
    const response = await fetch(filePath.default);
    return await response.text();
}

export default readMDFile;