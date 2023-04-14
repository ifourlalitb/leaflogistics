import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTopNews, clearTopNews } from "../redux/actions/news";
import NewsList from "../components/NewsList";
import CategorySourceSearchBox from "../components/CategorySourceSearchBox";
import { Container } from "react-bootstrap";

const Home = ({ setTopNews, news, clearTopNews }) => {
  const [page, setPage] = useState(1);
  const [categorySourceUrl, setCategorySourceUrl] = useState("");

  const handleCategorySourceSearch = (categorySourceUrl) => {
    setPage(1);
    setCategorySourceUrl(categorySourceUrl);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (categorySourceUrl) {
      const url = `${categorySourceUrl}`;
      setTopNews(url, page);
    }
    return () => {
      clearTopNews();
    };
  }, [categorySourceUrl, page]);

  return (
    <>
      <Container>
        <h3>Top news from Great Britain:</h3>
      </Container>
      <CategorySourceSearchBox
        onCategorySourceSearch={(categorySourceUrl) => {
          handleCategorySourceSearch(categorySourceUrl);
        }}
      />
      <NewsList
        newsItemsTotal={news?.newsItemsTotal ? news.newsItemsTotal : 0}
        loading={news?.newsLoading}
        newsItems={news?.newsItems}
        theme={news?.theme}
        loadMore={() => handleLoadMore()}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { setTopNews, clearTopNews })(Home);
