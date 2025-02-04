const puppeteer = require('puppeteer');
const { marked } = require('marked');
const fs = require('fs').promises;
const path = require('path');

async function convertToPDF(markdownFile, pdfFile) {
    // Read markdown content
    const markdownContent = await fs.readFile(markdownFile, 'utf-8');
    
    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);
    
    // Create styled HTML
    const styledHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                code {
                    background-color: #f4f4f4;
                    padding: 2px 5px;
                    border-radius: 3px;
                }
                pre {
                    background-color: #f4f4f4;
                    padding: 15px;
                    border-radius: 5px;
                    overflow-x: auto;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f4f4f4;
                }
                h1, h2, h3 {
                    color: #333;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
        </head>
        <body>
            ${htmlContent}
        </body>
        </html>
    `;

    // Launch browser and create PDF
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(styledHtml);
    await page.pdf({
        path: pdfFile,
        format: 'A4',
        margin: {
            top: '20mm',
            right: '20mm',
            bottom: '20mm',
            left: '20mm'
        }
    });

    await browser.close();
}

async function main() {
    const files = [
        ['website-owner-guide.md', 'website-owner-guide.pdf'],
        ['quick-reference-guide.md', 'quick-reference-guide.pdf']
    ];

    for (const [markdown, pdf] of files) {
        console.log(`Converting ${markdown} to ${pdf}...`);
        await convertToPDF(markdown, pdf);
        console.log(`Successfully created ${pdf}`);
    }
}

main().catch(console.error);
