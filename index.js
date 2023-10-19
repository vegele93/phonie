  // Code for carrier detection

  const phoneNumberInput = document.getElementById('phone_number');
  const inputContainer = document.querySelector('.input-container select');
  const carrierIcon = document.getElementById('carrier-icon');

  phoneNumberInput.addEventListener('input', function () {
      const phoneNumber = this.value;
/*      const countryCode = detectCountryCode(phoneNumber); */
      const carrier = detectCarrier(phoneNumber);
      displayCarrierIcon(carrier);
  });

/*  function detectCountryCode(phoneNumber) {
      const matches = phoneNumber.match(/(\+?\d{1,4})\s?\d{3,15}/);
      if (matches && matches[1]) {
          return matches[1];
      }
      return null;
  } */

  function detectCarrier(phoneNumber) {
      // Check prefixes of phone number
      if (phoneNumber.startsWith('0803') || phoneNumber.startsWith('0806') || phoneNumber.startsWith('0703') || phoneNumber.startsWith('0903') || phoneNumber.startsWith('0906') || phoneNumber.startsWith('0806') || phoneNumber.startsWith('0706') || phoneNumber.startsWith('0813') || phoneNumber.startsWith('0810') || phoneNumber.startsWith('0814') || phoneNumber.startsWith('0816') || phoneNumber.startsWith('0913') || phoneNumber.startsWith('0916')) {
          return 'mtn.png';
      } else if (phoneNumber.startsWith('0805') || phoneNumber.startsWith('0705') || phoneNumber.startsWith('0905') || phoneNumber.startsWith('0807') || phoneNumber.startsWith('0815') || phoneNumber.startsWith('0811') || phoneNumber.startsWith('0915')) {
          return 'glo.png';
      } else if (phoneNumber.startsWith('0802') || phoneNumber.startsWith('0902') || phoneNumber.startsWith('0701') || phoneNumber.startsWith('0808') || phoneNumber.startsWith('0708') || phoneNumber.startsWith('0812') || phoneNumber.startsWith('0901') || phoneNumber.startsWith('0907')) {
          return 'airtel.png';
      } else if (phoneNumber.startsWith('0809') || phoneNumber.startsWith('0909') || phoneNumber.startsWith('0817') || phoneNumber.startsWith('0818') || phoneNumber.startsWith('0908')) {
          return '9mobile.png';
      }
      return null;
  }

  function displayCarrierIcon(carrier) {
      if (carrier) {
          carrierIcon.style.display = 'inline'; // Display the icon
          carrierIcon.src = carrier; // Set the icon source
      } else {
          carrierIcon.style.display = 'none'; // Hide the icon if no carrier is detected
      }
  }
