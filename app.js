/**
 * Created by naor on 6/15/15.
 */
import Button from './button'
import {tree,render,renderString} from 'deku'

let app = tree(
  <Button kind="submit">Hello World!</Button>
)
window.onload = function () {
  render(app, document.querySelector('#base'));
};

