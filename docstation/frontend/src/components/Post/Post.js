import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="card card-post">
      <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{this.props.subtitle}</h6>
        <p className="card-text">
          {this.props.text}
        </p>
        <a href="/" className="card-link">
        <FontAwesomeIcon icon={faInfoCircle} className="icon"/>&nbsp;&nbsp;Mehr erfahren
        </a>
      </div>
    </div>
    );
  }
}

export default Post;