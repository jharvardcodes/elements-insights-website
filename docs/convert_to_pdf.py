import markdown
import pdfkit
import os

def convert_markdown_to_pdf(markdown_file, pdf_file):
    # Read markdown content
    with open(markdown_file, 'r', encoding='utf-8') as f:
        markdown_content = f.read()
    
    # Convert markdown to HTML
    html_content = markdown.markdown(
        markdown_content,
        extensions=['tables', 'fenced_code', 'codehilite']
    )
    
    # Add some basic styling
    styled_html = f"""
    <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }}
                code {{ background-color: #f4f4f4; padding: 2px 5px; border-radius: 3px; }}
                pre {{ background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }}
                table {{ border-collapse: collapse; width: 100%; margin: 20px 0; }}
                th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
                th {{ background-color: #f4f4f4; }}
                h1, h2, h3 {{ color: #333; }}
                img {{ max-width: 100%; height: auto; }}
            </style>
        </head>
        <body>
            {html_content}
        </body>
    </html>
    """
    
    # Convert HTML to PDF
    pdfkit.from_string(styled_html, pdf_file)

# Convert both files
files_to_convert = [
    ('website-owner-guide.md', 'website-owner-guide.pdf'),
    ('quick-reference-guide.md', 'quick-reference-guide.pdf')
]

for markdown_file, pdf_file in files_to_convert:
    if os.path.exists(markdown_file):
        print(f"Converting {markdown_file} to {pdf_file}...")
        convert_markdown_to_pdf(markdown_file, pdf_file)
        print(f"Successfully created {pdf_file}")
