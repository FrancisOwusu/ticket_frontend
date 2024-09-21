import React from 'react';

const DocumentationText = () => {
  return (
    <div style={styles.docText}>
      <h1>Documentation</h1>
      <p>This is where your documentation content will be displayed.</p>
    </div>
  );
};

const styles = {
  docText: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default DocumentationText;