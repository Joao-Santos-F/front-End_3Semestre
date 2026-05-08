import './Subtitle.css'

function Subtitle(props) {
    return (
        <h2>
            {props.Texto}
            {props.Jao}
        </h2>
    );
}

export default Subtitle;