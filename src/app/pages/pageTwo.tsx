import * as React from 'react';
import Link from 'redux-first-router-link';

const PageTwo = () => (
  <div>
    <div>
      Page Two
    </div>
    <div><Link to='/'>Go to Home</Link></div>
    <div><Link to='/page-one'>Go to Page One</Link></div>
  </div>
);

export default PageTwo;
