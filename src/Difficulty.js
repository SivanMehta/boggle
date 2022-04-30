import React from 'react';

function Link({ children, href }) {
  function onClick() {
    location.href = href;
  }

  return (
    <button onClick={ onClick }>
      {children}
    </button>
  );
}

export default function Difficulty() {
  const url = window.location.origin + window.location.pathname;
  return (
    // <details>
    //   <summary>Difficulties</summary>
      <div>
        <Link href={`${url}?cells=3`}>3x3</Link>
        <Link href={`${url}?cells=4`}>4x4</Link>
        <Link href={`${url}?cells=5`}>5x5</Link>
      </div>
    // </details>
  )
}
