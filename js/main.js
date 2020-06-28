'strict';
console.log('hi');

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

function handleFileSelect(evt) {
  // files is a FileList of File objects. List some properties.
  const output = [...evt.target.files].map((file) => {
    return `<li><strong>${escape(file.name)}</strong> (${file.type || 'n/a'}) - 
      ${file.size} bytes, last modified: 
      ${file.lastModified ? new Date(file.lastModified).toDateString() : 'n/a'}
      </li>`;
  });
  document.getElementById('list').innerHTML = `<ul>${output.join('')}</ul>`;
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
