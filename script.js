function generateMetaTags() {
  const title = document.getElementById('siteTitle').value.trim();
  const desc = document.getElementById('siteDesc').value.trim();
  const keywords = document.getElementById('siteKeywords').value.trim();
  const author = document.getElementById('siteAuthor').value.trim();

  if(!title && !desc) {
    alert('Please enter Title or Description');
    return;
  }

  let code = `<!-- Primary Meta Tags -->\n`;
  if(title) code += `<title>${title}</title>\n<meta name="title" content="${title}">\n`;
  if(desc) code += `<meta name="description" content="${desc}">\n`;
  if(keywords) code += `<meta name="keywords" content="${keywords}">\n`;
  if(author) code += `<meta name="author" content="${author}">\n`;
  code += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n`;

  code += `<!-- Open Graph / Facebook Meta Tags -->\n`;
  code += `<meta property="og:type" content="website">\n`;
  if(title) code += `<meta property="og:title" content="${title}">\n`;
  if(desc) code += `<meta property="og:description" content="${desc}">\n\n`;

  code += `<!-- Twitter Meta Tags -->\n`;
  code += `<meta property="twitter:card" content="summary_large_image">\n`;
  if(title) code += `<meta property="twitter:title" content="${title}">\n`;
  if(desc) code += `<meta property="twitter:description" content="${desc}">\n`;

  document.getElementById('generatedCode').value = code;
  document.getElementById('outputSection').style.display = 'block';
}

function copyCode() {
  const codeArea = document.getElementById('generatedCode');
  codeArea.select();
  document.execCommand('copy');
  alert('Meta Tags copied to clipboard!');
}

function clearAll() {
  document.getElementById('siteTitle').value = '';
  document.getElementById('siteDesc').value = '';
  document.getElementById('siteKeywords').value = '';
  document.getElementById('siteAuthor').value = '';
  document.getElementById('generatedCode').value = '';
  document.getElementById('outputSection').style.display = 'none';
}
