const designerPdfViewer = (h, word) => {
  const letterHeight = [];
  const newWord = word.toUpperCase();

  for (let i = 0; i < newWord.length; i++) {
    const element = Math.abs(64 - newWord.charCodeAt(i));
    letterHeight.push(element);
  }

  const height = letterHeight.map((item) => h[item - 1]);
  const maxHeight = Math.max(...height);

  const highlightedArea = maxHeight * letterHeight.length;
  return highlightedArea;
};
const h = [
  "1",
  "3",
  "1",
  "3",
  "1",
  "4",
  "1",
  "3",
  "2",
  "5",
  "5",
  "5",
  "5",
  "1",
  "1",
  "5",
  "5",
  "1",
  "5",
  "2",
  "5",
  "5",
  "5",
  "5",
  "5",
  "5",
];

console.log(designerPdfViewer(h, "torn"));
