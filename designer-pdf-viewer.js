// When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.
// There is a list of 26 character heights aligned by index to their letters. For example, 'a' is
// at index 0 and 'z' is at index 25. There will also be a string. Using the letter heights given,
// determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.

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
