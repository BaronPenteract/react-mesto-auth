import React from 'react';

import avatar from '../images/avatar.png';

export const CurrentUserContext = React.createContext({
  name: '',
  about: '',
  avatar,
});
