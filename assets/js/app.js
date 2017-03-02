var Modal = (function() {

  var modal = document.querySelector(".c-modal");
  var closeModal = document.querySelector(".c-modal-close");
  var openModal = document.querySelector(".js-modal");
  var form = document.querySelector('.c-form');
  var feedback = document.querySelector('.c-modal-feedback');

  var open = function(e) {
    e.preventDefault();
    modal.className += ' c-modal--show';
  };

  var close = function(e) {
    if( !!e ) e.preventDefault();
    reset();
    modal.className = 'c-modal';
  };

  var reset = function() {
    form.reset();
    feedback.className = 'c-modal-feedback';
    feedback.innerHTML = '';
  };

  var submit = function(e) {
    e.preventDefault();
    var action = e.target.action;
    var _self = this;

    $.post(action, function (data) {
      if( !!data && data.status === 'success') {
        feedback.innerHTML = data.message;
        feedback.className += ' c-modal-feedback--show';
        setTimeout(close, 2000);
      } else {
        feedback.innerHTML = 'Aconteceu algum erro :/';
      }
    });
  };

  var bindActions = function() {
    openModal.addEventListener('click', open, false);
    closeModal.addEventListener('click', close, false);
    form.addEventListener('submit', submit, false);
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };

})();

Modal.init();
