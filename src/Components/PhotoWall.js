import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) {

    return  <div>
            <Link className="add_icon" to="/AddPhoto"></Link>
                <div className="photo_grid">
                        {props.posts
                        .sort(function(x,y) {
                            return y.id - x.id
                        })
                        .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
                </div>
            </div>
}

PhotoWall.propType = {
    posts: PropTypes.array.isRequired,
}

export default PhotoWall