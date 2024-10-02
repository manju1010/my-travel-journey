import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Main(props) {
  return (
    <div className="main">
      <section>
        <div>
        <img src={require(`../images/${props.img}`)} alt=""  className="image"/>
        </div>
        <div>
          <div className='location-info'>
        <FontAwesomeIcon icon={faLocationDot} className='location-icon' />
          <p className='location-name'>{props.location}</p><a href={props.link} target="_blank" rel="noopener noreferrer"> View on Google Maps </a>
          </div>
          <h1>{props.name}</h1>
          
          <h3>{props.fromDate} - {props.toDate}</h3>
          <p className="description">{props.description}</p>
        </div>
      </section>
    </div>
  );
}

export default Main;
