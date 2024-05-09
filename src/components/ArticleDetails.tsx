import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import IArticle from "../interface/IArticle";

const ArticleDetails = () => {
  const [article, setArticle] = useState<IArticle>();
  const { id } = useParams();

  const fetchArticles = async () => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
      if (resp.ok) {
        const articleData = await resp.json();
        setArticle(articleData);
      } else {
        throw new Error("Errore nel reperire i dettagli dell'articolo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Dettagli Articolo</h2>
      {article && (
        <Card>
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
            {/* <Card.Text>{props.article.published_at}</Card.Text>
            <Card.Text>{props.article.updated_at}</Card.Text> */}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ArticleDetails;
