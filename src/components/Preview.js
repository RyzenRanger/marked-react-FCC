import '../styles/Preview.scss';
import Markdown from 'marked-react';

function Preview (props) {
  return (
    <div className='preview-container'>
      <h1 id='title'>Preview</h1>
      <div id='preview'>
        <Markdown
          value  = {props.content}
          breaks = {true}
          gfm    = {true}
        />
      </div>
    </div>
  )
}

export default Preview;
