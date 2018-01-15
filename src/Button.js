/**
 * Created by rhinman on 1/14/18.
 */
// a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a>

export default (text = 'Button') => {
  const element = document.createElement('a');
  element.className = 'btn btn-primary btn-lg';
  element.innerHTML = text;
  return element;
};
