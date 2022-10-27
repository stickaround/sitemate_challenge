window.onload = () => {
  // Show Modal
  const openModalButton = document.getElementById('open-modal');
  const modalWindowOverlay = document.getElementById('modal-overlay');

  const showModalWindow = () => {
    modalWindowOverlay.style.display = 'flex';
  };
  openModalButton.addEventListener('click', showModalWindow);

  const cancelButton = document.getElementById('cancel-button');
  const yesButton = document.getElementById('yes-button');

  const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
  };

  // Button click event
  yesButton.addEventListener('click', () => {
    hideModalWindow();
    const node = document.createElement('span');
    const textNode = document.createTextNode('You just clicked "Yes"');
    node.appendChild(textNode);
    document.getElementById('button-click-log').appendChild(node);
  });

  cancelButton.addEventListener('click', () => {
    hideModalWindow();
    const node = document.createElement('span');
    const textNode = document.createTextNode('You just clicked "Cancel"');
    node.appendChild(textNode);
    document.getElementById('button-click-log').appendChild(node);
  });

  // Hide On Blur
  const hideModalWindowOnBlur = (e) => {
    if (e.target === e.currentTarget) {
      hideModalWindow();
    }
  };

  modalWindowOverlay.addEventListener('click', hideModalWindowOnBlur);
};
