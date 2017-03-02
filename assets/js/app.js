var Modal = (function() {

  var modal = document.querySelector(".c-modal");
  var closeModal = document.querySelector(".c-modal-close");
  var openModal = document.querySelector(".js-modal");

  var open = function(e) {
    e.preventDefault();
    modal.className += ' c-modal--show';
  };

  var close = function(e) {
    e.preventDefault();
    modal.className = 'c-modal';
  }

  var bindActions = function() {
    openModal.addEventListener('click', open, false);
    closeModal.addEventListener('click', close, false);
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

})();

Modal.init();
