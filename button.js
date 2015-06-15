/**
 * Created by naor on 6/15/15.
 */
let propTypes = {
  kind: {
    type: 'string',
    expects: ['submit', 'button']
  }
};

function render (component) {
  let {props, state} = component
  return <button class="Button" type={props.kind}>{props.children}</button>
}

function afterUpdate (component, prevProps, prevState, updateState) {
  let {props, state} = component
  if (!state.clicked) {
    updateState({ clicked: true })
  }
}

export default {propTypes, render, afterUpdate}