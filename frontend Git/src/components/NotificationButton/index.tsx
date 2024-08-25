import axios from 'axios';
import Icon from '../../assets/img/react.svg'
import './styles.css'
import { BASE_URL } from '../../utils/request';


type Props = {
    saleId: number;
}

function handleClick(id :number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Chegou")
        });
}


function NotificationButton( {saleId} : Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={Icon} alt="Notificar" />
        </div>
    ) 
}
  
export default NotificationButton
  