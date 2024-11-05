import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <h1>
          <Link href="/">logo</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
