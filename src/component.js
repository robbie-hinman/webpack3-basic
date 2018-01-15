export default (text = 'Hello world') => {
  const element = document.createElement('div');
  element.className = 'cat';

  element.innerHTML = text;

  return element;
};
