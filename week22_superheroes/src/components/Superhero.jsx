import './Superhero.css';

function Superhero(props) {
    return (
        <div className="superhero-card">
            <img src={props.url}/>
            <div className="superhero-name">{props.name}</div>
            <div className="superhero-universe">Вселенная: {props.universe}</div>
            <div className="superhero-alterego">Альтер-эго: {props.alterego}</div>
            <div className="superhero-occupation">{props.occupation}</div>
            <div className="superhero-friends">Друзья: {props.friends}</div>
            <div className="superhero-superpowers">Суперсилы: {props.superpowers}</div>
            <div className="superhero-info">{props.info}</div>
        </div>
    );
}

export default Superhero;