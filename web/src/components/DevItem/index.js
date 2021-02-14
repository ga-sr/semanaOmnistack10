import React, {useState} from 'react';
import api from '../../services/api';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import './styles.css';

function DevItem({dev, callback}) {
  const [show, setShow] = useState(false)

  async function handleExclude(dev) {
    await api.delete(`/devs/${dev._id}`);
    callback();
  }

  return(
    <li className="dev-item" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <header>
        <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
        {show && (<button className="exclude" onClick={() => handleExclude(dev)}><DeleteIcon/></button>) }
      </header>
      <p>{dev.bio}</p>

      <footer>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        {show && (
          <a href={`/devs/${dev._id}`}>
            <button className="edit"><EditIcon/></button>
          </a>
        )}
      </footer>
    </li>
  )
}

export default DevItem;
