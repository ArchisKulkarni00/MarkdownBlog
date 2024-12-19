
export async function readMDFile(fileName) {
    const filePath = await import(`../articles/${fileName}`);
    const response = await fetch(filePath.default);
    const markdownContent = await response.text();
    const processedMarkdown = preprocessMarkdown(markdownContent);
    return processedMarkdown;
}

const images = require.context('../images', false, /\.(png|jpe?g|gif|svg)$/);
const preprocessMarkdown = (markdownContent) => {
    // Match Markdown image syntax: ![alt](relative/path)
    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  
    return markdownContent.replace(imageRegex, (match, alt, src) => {
        if (src.startsWith('./') || src.startsWith('../')) {
            try {
                const resolvedPath = images(`./${src.split('/').pop()}`);
                return `![${alt}](${resolvedPath})`;
            } catch (error) {
              console.error(`Image not found: ${src}`);
              return match; // Return original if not found
            }
          }
          else {
            // For external URLs, leave them untouched
            return match;
        }
    });
  };