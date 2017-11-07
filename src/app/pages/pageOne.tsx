import * as React from 'react';
import Link from 'redux-first-router-link';

const PageOne = () => (
  <div>
    <div>
      Page One
    </div>
    <div><Link to='/'>Go to Home</Link></div>
    <div><Link to='/page-two'>Go to Page Two</Link></div>
  </div>
);

export default PageOne;
