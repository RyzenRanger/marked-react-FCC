import '../styles/App.scss';
import Preview from '../components/Preview';
import Editor from '../components/Editor';
import { useEffect, useState } from 'react';
import defaultText from '../variables/defaultText'

function App() {
  const [content, setContent] = useState('');

  const changeContent = (e) => {
    setContent(e.target.value)
  }

  useEffect(() => {
    setContent(defaultText)
  }, [])

  return (
    <div className="App">
      <Editor onHandleChange = {changeContent} />
      <Preview content = {content}/>
    </div>
  );
}

export default App;
