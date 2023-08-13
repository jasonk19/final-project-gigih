import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function AccountProtector({ children }) {
  const accessToken = localStorage.getItem('jkplay_access_token');

  if (accessToken) {
    return <Navigate to={'/'} />
  } else {
    return <>{children}</>
  }
}

AccountProtector.propTypes = {
  children: PropTypes.element
}