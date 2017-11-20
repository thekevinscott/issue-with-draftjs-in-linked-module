import React, { Component } from 'react';

import {Editor, EditorState} from 'draft-js';

class LinkedModule extends Component {
 constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'blue',
      }}>
        Linked Module
        <h1>Draft.js Editor</h1>
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default LinkedModule;
