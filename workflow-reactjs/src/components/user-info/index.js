'use strict'

import React, { PropTypes } from 'react'
import Stylus from './use-info.css'

const UserInfo = ({ userinfo }) => (
  <div className={Stylus.userInfo}>

    <img src={userinfo.photo} />

    <h1 className='username'>
      <a href={`https://api.github.com/users/${userinfo.login}`}>{userinfo.username}</a>
    </h1>

    <ul className={Stylus.reposInfo}>
      <li>- Repositórios: {userinfo.repos}</li>
      <li>- Seguidores: {userinfo.followers}</li>
      <li>- Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.is
  })
}

export default UserInfo
