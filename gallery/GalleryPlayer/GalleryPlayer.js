import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '@fork-ui/core/Portal';
import Button from '@fork-ui/core/Button';
import { ChevronLeft, ChevronRight, PlayerPlay, Download, X } from '@fork-ui/icons/lazy';


const GalleryPlayer = ({
  isOpen,
  backDropClass,
  onClose,
  className
}) => {
  return (
    <React.Fragment>
      {isOpen && (
        <Portal>
          <div className={cn('fgallery-player-backdrop', backDropClass)}
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg)`
            }}
          >
            <div className={cn('fgallery-player', className)}>
              <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                margin: 10,
              }}>
                <Button rounded icon={<Download />} />
                <Button rounded icon={<PlayerPlay />} className="ml-2" />
                <Button rounded icon={<X />} className="ml-2" onClick={onClose} />
              </div>
              <img className="fgallery-player-image" src="https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg" />
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default GalleryPlayer;
