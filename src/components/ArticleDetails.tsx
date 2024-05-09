import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import IArticle from "../interface/IArticle";

const ArticleDetails = () => {
  const [article, setArticle] = useState<IArticle | null>(null);
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
    <div className="card-details">
      <div className="card-wrapper">
        <h2 className="text-white text-center mb-4">Dettagli Articolo</h2>
        {article && (
          <Card className="custom-card">
            <Card.Img className="custom-card-img" variant="top" src={article.image_url} />
            <Card.Body className="custom-card-body">
              <Card.Title className="card-title">{article.title}</Card.Title>
              <Card.Text className="card-text">{article.summary}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
