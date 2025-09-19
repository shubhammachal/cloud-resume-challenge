import React from 'react';

const Footer = ({ visitorCount }) => {
  return (
    <footer>
      <div>
        This page has been viewed: <span id="visitors">
          {visitorCount === 0 ? <span className="loading"></span> : visitorCount}
        </span> times
      </div>
    </footer>
  );
};

export default Footer;
