alert("Hit Generate Password button to retrieve your most secured password");

        function generate() {

            

            // Ask user about password length

            var digits = prompt("How many password digits would you like to generate ? ");

            if (digits >=8 && digits <=128) {

                var value = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz1234567890!@#$%^&*()_+" ;

                var password = "" ;

                //create for loop to choose password character

                for (var i=1; i <= digits; i++)
                {
                    password = password + value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1 ))) ;
                
                }

                // add password to textbox

                document.getElementById("display").value = password;

            }

            
            else {
            alert("Please select password from 8 to 128 digits length");
            }

      
        }

        function myFunction() {
            var copyText = document.getElementById("display");

            copyText.select();
            document.execCommand('copy');

            alert("Copied the password to clipboard: " + copyText.value);
        }