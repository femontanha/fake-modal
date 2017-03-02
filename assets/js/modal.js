var Modal = (function() {

  var modal = document.querySelector('.c-modal');
  var closeModal = document.querySelector('.c-modal-close');
  var openModal = document.querySelector('.js-modal');
  var form = document.querySelector('.c-form');
  var feedback = document.querySelector('.c-modal-feedback');

  var modalClassList = 'c-modal--opend';
  var feedbackClassList = 'c-modal-feedback--opend';

  var open = function(e) {
    e.preventDefault();
    modal.classList.add(modalClassList);
  };

  var close = function(e) {
    if( !!e ) e.preventDefault();
    reset();
    modal.classList.remove(modalClassList);
  };

  var reset = function() {
    form.reset();
    feedback.classList.remove(feedbackClassList);
    feedback.innerHTML = '';
  };

  var submit = function(e) {
    e.preventDefault();
    var action = e.target.action;

    $.post(action, function (data) {
      if( !!data && data.status === 'success') {
        feedback.innerHTML = data.message;
        feedback.classList.add(feedbackClassList);
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
