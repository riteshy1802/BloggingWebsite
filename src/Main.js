import React, { useState, useRef,useEffect } from 'react';
import Nav from './Nav';
import JoditEditor from 'jodit-react';
import "./JoditStyles.css"
// import {Editor} from '@toast-ui/react-editor';
// import 'codemirror/lib/codemirror.css'; // Import the codemirror styles
// import '@toast-ui/editor/dist/toastui-editor.css'; // Import the Toast UI Editor styles

function Main() {

  const editor = useRef(null);
  const [content,setContent] = useState("")


  return (
    <div className='main--div'>
      <Nav />
      <div className='child--div'>
        <div className='title'>
          <h1 className='ask'>What's going on in your Mind?</h1>
          <div className='topic--input'>
            <label className='label'>Topic of Blog</label>
            <input type="text" placeholder='Write your Blog Title' className='input' maxLength="70"/>
          </div>
        </div>
        <div className='textEditingDiv'>
          <JoditEditor
            ref={editor}
            value={content}
            placeholder = "Enter the text here..."
            className='jodit-editor-container'
            onChange={newContent => setContent(newContent)}
          />
          {/* <Editor
            // initialValue="Hello, world!"
            previewStyle="vertical"
            autofocus={false}
            usageStatistics = {false}
            height="70vh"
            initialEditType="markdown"
            
          /> */}

        </div>

        <div className='buttons'>
          <button type='button' className='publish'>Publish</button>
        </div>

      </div>
    </div>
  );
}

export default Main;
