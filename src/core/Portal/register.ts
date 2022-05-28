const registerTopLeft = () => {
  const node = window.document.createElement('div');
  node.classList.add('fportal-top-left');
  window.document.body.appendChild(node);
  return node;
};

const registerTopRight = () => {
  const node = window.document.createElement('div');
  node.classList.add('fportal-top-right');
  window.document.body.appendChild(node);
  return node;
};

const registerBottomLeft = () => {
  const node = window.document.createElement('div');
  node.classList.add('fportal-bottom-left');
  window.document.body.appendChild(node);
  return node;
};

const registerBottomRight = () => {
  const node = window.document.createElement('div');
  node.classList.add('fportal-bottom-right');
  window.document.body.appendChild(node);
  return node;
};

const registerTopCenter = () => {
  const node = window.document.createElement('div');
  node.classList.add('fportal-top-center');
  window.document.body.appendChild(node);
  return node;
};

const registerBottomCenter = () => {
  const node = window.document.createElement('div');
  node.classList.add('fportal-bottom-center');
  window.document.body.appendChild(node);
  return node;
};

const {
  rootPortal,
  topLeftNode,
  topRightNode,
  bottomLeftNode,
  bottomRightNode,
  topCenterNode,
  bottomCenterNode,
} = ((): {
  rootPortal: HTMLElement,
  topLeftNode: HTMLElement,
  topRightNode: HTMLElement,
  bottomLeftNode: HTMLElement,
  bottomRightNode: HTMLElement,
  topCenterNode: HTMLElement,
  bottomCenterNode: HTMLElement,
} => {
  const rootPortal = window.document.createElement('div');
  rootPortal.id = 'root-portal';
  Object.assign(rootPortal.style, {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    top: '0px',
    left: '0px',
  });
  const topLeftNode = registerTopLeft();
  const topRightNode = registerTopRight();
  const bottomLeftNode = registerBottomLeft();
  const bottomRightNode = registerBottomRight();
  const topCenterNode = registerTopCenter();
  const bottomCenterNode = registerBottomCenter();

  window.document.body.appendChild(rootPortal);

  return {
    rootPortal,
    topLeftNode,
    topRightNode,
    bottomLeftNode,
    bottomRightNode,
    topCenterNode,
    bottomCenterNode,
  };
})();


export {
  rootPortal,
  topLeftNode,
  topRightNode,
  bottomLeftNode,
  bottomRightNode,
  topCenterNode,
  bottomCenterNode,
};
