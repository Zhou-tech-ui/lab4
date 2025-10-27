fetch('book.xml')
  .then(r => r.text())
  .then(xmlText => {
    const xmlDoc = new DOMParser().parseFromString(xmlText, 'text/xml');
  });