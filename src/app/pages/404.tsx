import * as React from 'react';
import Link from 'redux-first-router-link';

const NotFound = () => (
  <div>
    <div>
      Page could not be found
    </div>
    <div><Link to='/'>Go to Home</Link></div>
  </div>
);

export default NotFound;
