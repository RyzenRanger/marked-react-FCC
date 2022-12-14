import '../styles/Editor.scss';
import defaultText from '../variables/defaultText'

function Editor (props) {
  return (
    <div className='editor-container'>
      <h1 id='title'>Editor</h1>
      <textarea
        id           = 'editor'
        type         = 'text' 
        onChange     = {props.onHandleChange}
        defaultValue = {defaultText}
      >
      </textarea>
    </div>
  )
}
  
export default Editor;
