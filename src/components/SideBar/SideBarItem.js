import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './SideBarItem.module.scss'

const SideBarItem = ({
  clickHandler,
  label,
  linkTo
}) => (
  <NavLink
    className={styles.item}
    activeClassName={styles.itemActive}
    to={linkTo}
    onClick={clickHandler ? () => clickHandler() : null}
  >
    {label}
  </NavLink>
)

SideBarItem.propTypes = {
  clickHandler: PropTypes.func,
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
}

export default SideBarItem
