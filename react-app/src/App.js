import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let t of props.topics) {
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            //props.onChangeMode(event.target.id);
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>,
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  //const mode = 'WELCOME';
  const [mode, setMode] = useState('WELCOME');
  const [id, setID] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];

  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === 'READ') {
    //content = <Article title="Welcome" body="Hello, Read" />;
    let title,
      body = null;
    for (let topic of topics) {
      console.log(topic.id, id);
      if (topic.id === id) {
        title = topic.id;
        body = topic.body;
      }
    }
    content = <Article title={title} body={body} />;
  }
  return (
    <div className="App">
      <Header
        title="react"
        onChangeMode={() => {
          //mode = 'WELCOME';
          setMode('WELCOME');
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          //mode = 'READ';
          setMode('READ');
          setID(id);
        }}
      />
      {content}
    </div>
  );
}

export default App;
