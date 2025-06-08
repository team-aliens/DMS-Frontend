export const getFileNameFromContentDisposition = (encodedText: string) => {
  const decoded = decodeURI(encodedText || '');
  const match = decoded.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);

  if (match && match[1]) {
    return match[1].replace(/['"]/g, '').trim();
  }
  return 'download.xlsx'; // fallback
};
