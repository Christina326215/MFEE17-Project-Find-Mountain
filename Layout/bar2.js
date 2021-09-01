$('.btn-next').on('click', function() {
	
	var currentStepNum = $('#checkout-progress').data('current-step');
	var nextStepNum = (currentStepNum + 1);
	var currentStep = $('.step.step-' + currentStepNum);
	var nextStep = $('.step.step-' + nextStepNum);
	var progressBar = $('#checkout-progress');
	$('.btn-prev').removeClass('disabled');
	if(currentStepNum == 5) {
		return false;
	}
	if(nextStepNum == 5){
		$(this).addClass('disabled');
	}
	$('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (currentStepNum + 1));
	
	currentStep.removeClass('active').addClass('valid');
	currentStep.find('span').addClass('opaque');
	currentStep.find('.fa.fa-check').removeClass('opaque');
	
	nextStep.addClass('active');
	progressBar.removeAttr('class').addClass('step-' + nextStepNum).data('current-step', nextStepNum);
});


$('.btn-prev').on('click', function() {
	
	var currentStepNum = $('#checkout-progress').data('current-step');
	var prevStepNum = (currentStepNum - 1);
	var currentStep = $('.step.step-' + currentStepNum);
	var prevStep = $('.step.step-' + prevStepNum);
	var progressBar = $('#checkout-progress');
	$('.btn-next').removeClass('disabled');
	if(currentStepNum == 1) {
		return false;
	}
	if(prevStepNum == 1){
		$(this).addClass('disabled');
	}
	$('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (prevStepNum));
	
	currentStep.removeClass('active');
	prevStep.find('span').removeClass('opaque');
	prevStep.find('.fa.fa-check').addClass('opaque');
	
	prevStep.addClass('active').removeClass('valid');
	progressBar.removeAttr('class').addClass('step-' + prevStepNum).data('current-step', prevStepNum);
});