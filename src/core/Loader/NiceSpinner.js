import React from 'react';

const mColors = Object.freeze({
  primary: 'var(--primary)',
  skeleton: 'var(--skeleton-color)',
});

const NiceSpinner = ({ size, color }) => (
    <div className="floader-nice-spinner"
      style={{
        '--nice-spinner-color': mColors[color] || color,
        '--nice-spinner-size': `${size}px`,
      }}
    />
  );

NiceSpinner.defaultProps = {
  size: 50,
  color: 'primary',
};
export default NiceSpinner;
