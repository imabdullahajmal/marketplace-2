import { Card } from "react-bootstrap";

type ItemProps = {
    id: number
    name: string
    price: number
    desc: string

}
//Store item card
export function Item({ id, name, price, desc }: ItemProps) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }