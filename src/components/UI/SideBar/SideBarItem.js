import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './SideBarItem.module.scss'

const SideBarItem = ({
  label,
  linkTo
}) => (
  <NavLink
    className={styles.item}
    activeClassName={styles.itemActive}
    to={linkTo}
  >
    {label}
  </NavLink>
)

SideBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
}

export default SideBarItem
