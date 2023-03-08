import logo from './logo.svg';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'

function App() {
  return (
    <BrowserRouter>
          <div className="App">
          <h1>Welcome to Saisiva's Blog</h1>
            <div id="page-body">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/articles" element={<ArticleListPage />} />
                <Route path="/articles/:articleId" element={<ArticlePage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
  );
}

export default App;
