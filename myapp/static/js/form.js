$(document).on('submit', '#post-form', function(e) {
    e.preventDefault();

    const Nerror = $('#Nerror');
    const Perror = $('#Perror');
    const Eerror = $('#id_e_error');
    const Aerror = $('#Aerror');
    const divss = $('#suc-msg');

    Nerror.html('');
    Perror.html('');
    Eerror.html('');
    Aerror.html('');
    divss.html('');

    const hotelname = $('#hotelname').val().trim();
    const ph_no = $('#ph_no').val().trim();
    const email = $('#email').val().trim();
    const address = $('#address').val().trim();

    let isValid = true;

    if (!hotelname){
        $('#Nerror').html('Hotel name is required.');
        isValid = false;
    }
    if (!/^\d{10}$/.test(ph_no)){ 
        Perror.html('Enter a valid 10-digit phone number.');
        isValid = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        Eerror.html('Enter a valid email address.');
        isValid = false;
    }

    if (!address){
        Aerror.html('Address is required.');
        isValid = false;
    }
    if (!isValid) return;

    $.ajax({
        type: 'POST',
        url: '/create',
        data: {
            hotelname: hotelname,
            ph_no: ph_no,
            email: email,
            address: address,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        },
        success: function(response) {
            divss.html('Form submitted successfully!');
            $('#post-form')[0].reset();
        },
        error: function(xhr, status, error) {
            Eerror.html("The email already exists");
        }
    });
});

//on click events
$('#hotelname').on('input', function() {
    let hname = this.value.trim();
    if (hname){
        $('#Nerror').html('');
    } 
    else
    {
        $('#Nerror').html('Hotel name is required.');
    }
});

$('#ph_no').on('input', function() {
      let phno = this.value.trim();
      if (/^\d{10}$/.test(phno) == true){
        $('#Perror').html('');
      } 
      else
      {
        $('#Perror').html('Enter a valid 10-digit phone number.');
      }
});

$('#email').on('input', function() {

    let emaal = this.value.trim();

   if ((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(emaal) == true) {
        $("#id_e_error").html("");
   }  
   else
   {
     $("#id_e_error").html("Enter a valid email address.");
   }

});

$('#address').on('input', function() {
    if ($(this).val().trim()){ 
        $('#Aerror').html('');
    }
    else
    {
        $('#Aerror').html('Address is required.');
    }
});