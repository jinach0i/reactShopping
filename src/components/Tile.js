import { Card } from "react-bootstrap";
export default function Tile(props) {
  return (
    <Card
      onClick={() => {
        props.navi("/products");
      }}
    >
      <Card.Img
        variant="top"
        src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`}
      />
      <Card.Body>
        <Card.Title>{props.shoes.title}</Card.Title>
        <Card.Text>{props.shoes.content}</Card.Text>
        <Card.Title>{props.shoes.price.toLocaleString("ko-KR")}원</Card.Title>
      </Card.Body>
      <button className="addCartBtn">add to cart</button>
      <Card.Footer>
        <small className="text-muted">
          Last updated {props.i + 15} mins ago
        </small>
      </Card.Footer>
    </Card>
  );
}
