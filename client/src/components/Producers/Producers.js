import './Producers.css';
import ProducerCard from '../ProducerCard/ProducerCard';

function Producers(){
    // Array of producer data
    const producers = [
        {
            name: "Haider Hassan",
            year: "Junior",
            major: "Music"
        },
        {
            name: "Ariel Lashinsky",
            year: "Senior",
            major: "Sociology"
        },
        {
            name: "Sela Dingpontsawa",
            year: "Junior",
            major: "English"
        }

    ];

    return(
        <div className="Producers">
            <h1>Producers</h1>
            {producers.map((producer, index) => (
                <ProducerCard key={index} producer={producer} />
            ))}
        </div>
    );
}

export default Producers;