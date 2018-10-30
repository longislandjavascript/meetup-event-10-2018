const convertOptions = [
  {
    name: 'UPPER CASE',
    tip:
      'Transforms all letters to UPPER CASE and keeps all special characters.',
  },
  {
    name: 'lower case',
    tip:
      'Transforms all letters to lower case and keeps all special characters.',
  },
  {
    name: 'Sentence case',
    tip:
      'Transforms the first letter of each sentence to UPPER CASE and keeps all special characters.',
  },

  {
    name: 'Title Case',
    tip:
      'Transforms the first letter of each word to UPPER CASE and removes all special characters.',
  },
  {
    name: 'camelCase',
    tip:
      'Transforms the letters to camelCase and removes all special characters.',
  },
  {
    name: 'PascalCase',
    tip:
      'Transforms the letters to PascalCase and removes all special characters.',
  },
  {
    name: 'Header-Case',
    tip:
      'Transforms the letters to Header-Case and removes all special characters.',
  },
  {
    name: 'kebab-case',
    tip:
      'Transforms the letters to kebab-case and removes all special characters.',
  },
  {
    name: 'snake_case',
    tip:
      'Transforms the letters to snake_case and removes all special characters.',
  },
  {
    name: 'CONSTANT_CASE',
    tip:
      'Transforms the letters to CONSTANT_CASE and removes all special characters.',
  },
  {
    name: 'dot.case',
    tip:
      'Transforms the letters to dot.case and removes all special characters.',
  },

  {
    name: 'path/case',
    tip:
      'Transforms the letters to path/case and removes all special characters.',
  },
  {
    name: 'reverse',
    tip: 'Reverses the text exactly as typed.',
  },
  {
    name: 'Column List',
    tip:
      'Converts a delimited list to a column list and removes all special characters.',
  },
];

const delimiterOptions = [
  { name: 'comma', char: ',' },
  { name: 'comma, space', char: ', ' },
  { name: 'semicolon', char: ';' },
  { name: 'semicolon, space', char: '; ' },
  { name: 'pipe', char: '|' },
  { name: 'padded pipe', char: ' | ' },
  { name: 'space', char: '" "' },
];

export { convertOptions, delimiterOptions };
