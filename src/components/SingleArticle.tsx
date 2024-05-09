import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import IArticle from "../interface/IArticle";

interface SingleArticleProps {
  article: IArticle;
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <Col xs={12} md={4} className="text-center mb-4">
      <Card className="h-100 card-homepage">
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/ArticleDetails/${props.article.id}`} className="btn btn-primary">
            Dettagli
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleArticle;
