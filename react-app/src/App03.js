import logo from './logo.svg';
import './App.css';

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
  // for (let i = 0, cnt = props.topics.length; i < cnt; i++) {
  for (let t of props.topics) {
    // let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
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
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  return (
    <div className="App">
      <Header title="react" onChangeMode={() => alert('Header')} />
      <Nav topics={topics} onChangeMode={(id) => alert(id)} />
      <Article title="Welcome" body="Hello, Web" />
      <Article title="Hi" body="Hello, React" />
    </div>
  );
}

export default App;
