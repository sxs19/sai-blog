import ArticlesList from '../components/ArticleList';
import articles from './ArticleContent';

const ArticleListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    );
}

export default ArticleListPage;