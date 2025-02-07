import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ChangeTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = `MessageLock | ${location.pathname.slice(1).replace(/-/g, " ").toUpperCase()}`;
  }, [location]);

  return null;
}

export default ChangeTitle