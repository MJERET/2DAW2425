$(document).ready(function () {
    // Helper function for validation
    function showError(input, message) {
      const formGroup = input.closest(".form-group");
      const helpBlock = formGroup.find(".help-block");
  
      formGroup.addClass("has-error");
      helpBlock.text(message);
    }
  
    function clearError(input) {
      const formGroup = input.closest(".form-group");
      const helpBlock = formGroup.find(".help-block");
  
      formGroup.removeClass("has-error");
      helpBlock.text("");
    }
  
    // Validation rules
    function validateName(name) {
      return name.trim() !== "" && name.length <= 100;
    }
  
    function validateLastname(lastname) {
      return lastname.trim() !== "" && lastname.length <= 100;
    }
  
    function validateOrigin(origin) {
      return origin.trim().length >= 3 && origin.trim().length <= 100;
    }
  
    function validateDate(date) {
      return !isNaN(Date.parse(date));
    }
  
    function validateDestination(destination) {
      return destination.trim().length >= 3 && destination.trim().length <= 100;
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email) && email.length <= 50;
    }
  
    // Event listener for form submission
    $("form").on("submit", function (event) {
      event.preventDefault();
  
      // Get form values
      const form = $(this);
      const firstname = form.find("[name='firstname']");
      const lastname = form.find("[name='lastname']");
      const origin = form.find("[name='origin']");
      const departureDate = form.find("[name='departureDate']");
      const destination = form.find("[name='destination']");
      const arrivalDate = form.find("[name='arrivalDate']");
      const email = form.find("[name='email']");
  
      // Clear all previous errors
      form.find(".form-group").removeClass("has-error");
      form.find(".help-block").text("");
  
      // Validate each field
      let isValid = true;
  
      if (!validateName(firstname.val())) {
        showError(firstname, "Nombre requerido y máximo 100 caracteres.");
        isValid = false;
      }
  
      if (!validateLastname(lastname.val())) {
        showError(lastname, "Apellidos requeridos y máximo 100 caracteres.");
        isValid = false;
      }
  
      if (!validateOrigin(origin.val())) {
        showError(origin, "Origen requerido, mínimo 3 caracteres y máximo 100 caracteres.");
        isValid = false;
      }
  
      if (!validateDate(departureDate.val())) {
        showError(departureDate, "Fecha de salida requerida y en formato válido.");
        isValid = false;
      }
  
      if (!validateDestination(destination.val())) {
        showError(destination, "Destino requerido, mínimo 3 caracteres y máximo 100 caracteres.");
        isValid = false;
      }
  
      if (!validateDate(arrivalDate.val())) {
        showError(arrivalDate, "Fecha de llegada requerida y en formato válido.");
        isValid = false;
      }
  
      if (!validateEmail(email.val())) {
        showError(email, "Correo electrónico requerido, válido y máximo 50 caracteres.");
        isValid = false;
      }
  
      if (isValid) {
        alert("Formulario enviado correctamente.");
        form.off("submit").submit();
      }
    });
  });
  