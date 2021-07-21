import React, { useCallback, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import { bottomLeftNode, bottomRightNode, topLeftNode, topRightNode } from '../Portal/register';
import { uniqueId } from '../../utils/helpers';

const mapDefaultNode = {
  'bottom-left': bottomLeftNode,
  'bottom-right': bottomRightNode,
  'top-left': topLeftNode,
  'top-right': topRightNode,
};

const notificationRef = {
  max: 3,
  update: ({ max }) => {
    notificationRef.max = max || notificationRef.max;
  },
  nodes: {},
  instances: new Map(),
  isDuplicate: (id) => {
    return id && notificationRef.instances.has(id);
  },
  keepMax: () => {
    if (notificationRef.instances.size > notificationRef.max - 1) {
      let counter = 0;
      const willClose = [];
      for (const [key, { doClose }] of notificationRef.instances) {
        if (counter <= notificationRef.instances.size - notificationRef.max) {
          willClose.push({
            key,
            doClose,
          });
        }
        counter++;
      }
      willClose.forEach(({ doClose }) => doClose());
    }
  },
  closeAll: () => {
    const willClose = [];
    for (const [key, { doClose }] of notificationRef.instances) {
      willClose.push({
        key,
        doClose,
      });
    }
    willClose.forEach(({ doClose }) => doClose());
  },
  closeById: (id) => {
    const notiInstance = notificationRef.instances.get(id);
    if (notiInstance) {
      notiInstance.doClose();
    }
  },
};

const PusherNotification = ({ id, renderFunc, autoClose, onUnmounted, placement, ...otherProps }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const doClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    if (autoClose) {
      ref.current = setTimeout(() => doClose(), autoClose);
      return () => clearTimeout(ref.current);
    }
  }, [autoClose, doClose, ref]);

  useEffect(() => {
    if (isOpen) {
      notificationRef.instances.set(id, {
        doClose,
      });
    }
  }, [id, isOpen, doClose]);

  useEffect(() => {
    if (!isOpen) {
      notificationRef.instances.delete(id);
    }
    return () => notificationRef.instances.delete(id);
  }, []);

  useEffect(() => {
    if (!isOpen && onUnmounted) {
      onUnmounted();
    }
  }, [isOpen, onUnmounted]);

  if (isOpen) {
    return (
      <Portal {...otherProps} node={mapDefaultNode[placement]}>
        {renderFunc({ doClose })}
      </Portal>
    );
  }
  return null;
};

PusherNotification.propTypes = {
  id: PropTypes.string.isRequired,
  renderFunc: PropTypes.func.isRequired,
  autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onUnmounted: PropTypes.func,
  placement: PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right'])
};
PusherNotification.defaultProps = {
  autoClose: 9000,
  onUnmounted: f => f,
  placement: 'bottom-left',
};

notificationRef.push = (renderFunc, params) => {
  const { id, ...otherProps } = params || {};
  const _id = id || uniqueId();
  const isDuplicate = notificationRef.isDuplicate(_id);
  const node = window.document.createElement('div');
  const onUnmounted = () => ReactDOM.unmountComponentAtNode(node);

  if (isDuplicate) {
    ReactDOM.unmountComponentAtNode(notificationRef.nodes[_id]);
    notificationRef.instances.delete(_id);
  }
  
  notificationRef.keepMax();
  notificationRef.nodes[_id] = node;
  ReactDOM.render((
    <PusherNotification
      renderFunc={renderFunc}
      onUnmounted={onUnmounted}
      id={_id}
      {...otherProps}
    />
  ), node);
};

export { notificationRef };
export default PusherNotification;
