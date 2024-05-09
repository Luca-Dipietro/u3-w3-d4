import { Card, Col } from "react-bootstrap";
import IArticle from "../interface/IArticle";
import { Link } from "react-router-dom";

interface SingleArticleProps {
  article: IArticle;
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <Col xs={12} md={4} className="text-center">
      <Link to={`/ArticleDetails/${props.article.id}`}>
        <Card>
          <Card.Img variant="top" src={props.article.image_url} />
          <Card.Body>
            <Card.Title>{props.article.title}</Card.Title>
            <Card.Text>{props.article.summary}</Card.Text>
            {/* <Card.Text>{props.article.published_at}</Card.Text>
          <Card.Text>{props.article.updated_at}</Card.Text> */}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
export default SingleArticle;
