import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import Style
import styles from '../assets/css/itemDetail.css';

// Import Actions
import { fetchItem } from '../actions/AppActions';

// Import Selectors
import { getItem } from '../reducers/AppReducer';

// export function ItemDetail(props) {
export class ItemDetail extends Component {
  render() {
    return (
      <div className={`container rounded ${styles.detailBackground}`}>
        <div className="row">
          <div className="col-md-4">
              <img className={`img-fluid ${styles.detailImg}`} src={`${this.props.item.image_url}`} alt={this.props.item.name} />
          </div>
          <div className="col-md-8">
            <p className={`h1 ${styles.detailName}`}>{this.props.item.name}</p>
            <p className={`h3 ${styles.detailTagline}`}>{this.props.item.tagline}</p>
            <p className={`h5 ${styles.detailDescription}`}>{this.props.item.description}</p>
            <Link className="btn btn-warning" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ItemDetail.need = [(params) => {
  let id = (typeof params.id !== 'undefined')?parseInt(params.id, 10):1;
  id = typeof id === 'number' && id ? id : 1;
  return fetchItem(id);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  let id = parseInt(props.match.params.id, 10);
  id = typeof id === 'number' && id ? id : 1;
  return { item: getItem(state, id) };
}

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ItemDetail);
// export default ItemDetail;
