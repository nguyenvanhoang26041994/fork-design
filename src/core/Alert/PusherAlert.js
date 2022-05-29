import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import { uniqueId } from '../../utils/helpers';
import {
  bottomLeftNode,
  bottomRightNode,
  topLeftNode,
  topRightNode,
  topCenterNode,
  bottomCenterNode,
} from '../Portal/register';

const mapDefaultNode = {
  'bottom-left': bottomLeftNode,
  'bottom-right': bottomRightNode,
  'top-left': topLeftNode,
  'top-right': topRightNode,
  'top-center': topCenterNode,
  'bottom-center': bottomCenterNode,
};

const alertRef = {
  max: 9,
  update: ({ max }) => {
    alertRef.max = max || alertRef.max;
  },
  nodes: {},
  instances: new Map(),
  isDuplicate: (id) => id && alertRef.instances.has(id),
  keepMax: () => {
    if (alertRef.instances.size > alertRef.max - 1) {
      let counter = 0;
      const willClose = [];
      for (const [key, { doClose }] of alertRef.instances) {
        if (counter <= alertRef.instances.size - alertRef.max) {
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
    for (const [key, { doClose }] of alertRef.instances) {
      willClose.push({
        key,
        doClose,
      });
    }
    willClose.forEach(({ doClose }) => doClose());
  },
  closeById: (id) => {
    const alertInstance = alertRef.instances.get(id);
    if (alertInstance) {
      alertInstance.doClose();
    }
  },
};

const PusherAlert = ({ id, renderFunc, placement, onUnmounted, autoClose, ...otherProps }) => {
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
      alertRef.instances.set(id, {
        doClose,
      });
    }
  }, [id, isOpen, doClose]);

  useEffect(() => {
    if (!isOpen) {
      alertRef.instances.delete(id);
    }
    return () => alertRef.instances.delete(id);
  }, []);

  useEffect(() => {
    if (!isOpen && onUnmounted) {
      onUnmounted();
    }
  }, [isOpen, onUnmounted]);

  if (isOpen) {
    return (
      <Portal {...otherProps} node={mapDefaultNode[placement]}>
        <div className="fpusher-alert-wrapper">
          {renderFunc({ doClose })}
        </div>
      </Portal>
    );
  }
  return null;
};

PusherAlert.propTypes = {
  id: PropTypes.string.isRequired,
  renderFunc: PropTypes.func.isRequired,
  autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onUnmounted: PropTypes.func,
  placement: PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right', 'top-center', 'bottom-center']),
};
PusherAlert.defaultProps = {
  autoClose: 9000,
  onUnmounted: f => f,
  placement: 'top-center',
};

alertRef.push = (renderFunc, params) => {
  const { id, ...otherProps } = params || {};
  const _id = id || uniqueId();
  const isDuplicate = alertRef.isDuplicate(_id);
  const node = window.document.createElement('div');
  const onUnmounted = () => ReactDOM.unmountComponentAtNode(node);

  if (isDuplicate) {
    ReactDOM.unmountComponentAtNode(alertRef.nodes[_id]);
    alertRef.instances.delete(_id);
  }
  alertRef.keepMax();
  alertRef.nodes[_id] = node;
  ReactDOM.render((
    <PusherAlert
      id={_id}
      renderFunc={renderFunc}
      onUnmounted={onUnmounted}
      {...otherProps}
    />
  ), node);
};

export { alertRef };
export default PusherAlert;
