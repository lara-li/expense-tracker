import './Card.css';
function Card(props) {
    return <div className="expense-wrapper">{props.children}</div>;
}
export default Card;