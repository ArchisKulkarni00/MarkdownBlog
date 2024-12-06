import logo from './logo.svg';
import './App.css';
import Markdown from 'react-markdown';
import article from "./articles/DopamineMotivation.md";

var markdownText = ''

fetch(article).then(response=>response.text()).then(response=>markdownText=response);

console.log(markdownText);

function App() {
  return (
    <Markdown>{markdownText}</Markdown>
  );
}

export default App;
