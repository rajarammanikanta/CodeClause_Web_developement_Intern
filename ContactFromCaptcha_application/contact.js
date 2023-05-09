function generateRandomString(length) {
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var result = "";
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      }

      // Refresh the CAPTCHA code
      function refreshCaptcha() {
        var captchaCode = document.getElementById("captcha-code");
        var captchaInput = document.getElementById("captcha");
        captchaCode.textContent = generateRandomString(6);
        captchaInput.value = "";
      }

      // Validate the CAPTCHA code
      function validateCaptcha() {
        var captchaCode = document.getElementById("captcha-code").textContent;
        var captchaInput = document.getElementById("captcha").value;
        if (captchaCode === captchaInput) {
            alert("You have Sucessfully Submitted Form Thank You!!");
          return true;
          
        } else {
          alert("Invalid CAPTCHA code. Please try again.");
          refreshCaptcha();
          return false;
        }
      }

      // Attach event listeners to the form and CAPTCHA elements
      var form = document.getElementById("contact-form");
      var refreshButton = document.getElementById("refresh-captcha");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateCaptcha()) {
            alert("You have Sucessfully Submitted Form Thank You!!");
        }
      });
      refreshButton.addEventListener("click", refreshCaptcha);

      // Initialize the CAPTCHA code on page load
      refreshCaptcha();
