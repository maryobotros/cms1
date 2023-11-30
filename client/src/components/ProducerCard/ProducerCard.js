import './ProducerCard.css';

const ProducerCard = ({producer}) => {
    return ( 
        <div className="ProducerCard">
            <h3>{producer.name}</h3>
            <p>{producer.year}</p>
            <p>{producer.major}</p>
        </div>
     );
}
 
export default ProducerCard;