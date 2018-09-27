import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const PostCard = (props) => {
  return (
    <Link to={props.slug} className={classnames('PostCard', {
        'PostCard_feature': props.size === 'feature',
        'PostCard_primary': props.color === 'red'
      })}>
      <div className="PostCard__image">
        { props.image && <img src={props.image} className="img-fluid" alt={props.title} />}
      </div>
      <div className="PostCard__content">
        <span className="PostCard__pre">
          {props.pre}
        </span>
        <h3 className="PostCard__title">
          {props.title}
        </h3>
        <span className="PostCard__excerpt">
          {props.excerpt}
        </span>
        <div className="btn PostCard__button">Read More</div>
      </div>
    </Link>
  )
}

PostCard.propTypes = {
  image: PropTypes.string,
  slug: PropTypes.string,
  pre: PropTypes.string,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string
}

export default PostCard
