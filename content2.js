
url = "https://it-ir-appointment.visametric.com/en"
function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
    } else {
      setTimeout(() => waitForElement(selector, callback), 500);
    }
  }

function fillCaptchaAndSubmit() {
    waitForElement('input[name="inputCaptcha"]', element => {
      const captchaElement = document.querySelector('#recaptchaDisplay > div > div:nth-child(1)');
      if (captchaElement) {
        html2canvas(captchaElement).then(canvas => {
          canvas.toBlob(blob => {
            const reader = new FileReader();
            reader.onloadend = function() {
              const base64data = reader.result;
              fetch('https://api.apitruecaptcha.org/one/gettext', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  userid: 'milad.mirzazadeh1378@gmail.com',
                  apikey: 'cpuJpawk0AHDbN2euwqJ',
                  data: base64data
                })
              })
              .then(response => response.json())
              .then(data => {
                console.log("we are here ")
                console.log(data);
                element.value = data.result;
                waitForElement('#nationalBtn', btn => btn.click());
              });
            }
            reader.readAsDataURL(blob);
          });
        });
      }
    });
  }
  
  function selectResultAndSubmit() {
    waitForElement('#result1', btn => {
      btn.click();
      waitForElement('#result3', btn => {
        btn.click();
        waitForElement('#btnSubmit', btn => btn.click());
      });
    });
  }
  
  // Start the script


  function fillFormAndSubmit() {
    setTimeout(function(){
     
      // setInterval(selectCity, 3000);
      waitForElement('#city', select => {
        setTimeout(function() {
          selectCity();
        }, 2000);
      
        // selectCity();
    }, 500); 
    
    
    //   waitForElement('#office', select => {
    //     select.value = 'TEHRAN';
    //     // waitForElement('#officetype', select => {
    //     //   select.value = 'NORMAL';
    //     //   waitForElement('#totalPerson', select => {
    //     //     select.value = '1 Applicants';
    //     //     waitForElement('input[name="paytype"]', radio => {
    //     //       radio.click();
    //     //       waitForElement('#paymentCardInput', input => {
    //     //         input.value = '6274121201770658';
    //     //         // Assuming the date picker elements are input fields
    //     //         // document.querySelector('#day').value = '23';
    //     //         // document.querySelector('#month').value = 'Tir';
    //     //         // document.querySelector('#year').value = '1402';
    //     //         waitForElement('#checkCardListBtn', btn => btn.click());
    //     //       });
    //     //     });
    //     //   });
    //     // });
    //   });
    });
  }
  
  // Start the script
  // fillCaptchaAndSubmit();
  // Listen for page changes
  console.log("started");
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'pageChanged') {
      console.log("current page:");
      console.log(location.pathname);

      if (location.pathname === '/en/NationalStudent') {
        console.log("in the correct page");
        selectResultAndSubmit();
      } else if (location.pathname === '/en/appointment-form') {
        fillFormAndSubmit();
      } else if (location.pathname === '/en'){
        solveCaptcha();
      }
    }
  });


  // fillCaptchaAndSubmit();
  // // Listen for page changes
  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   if (request.message === 'pageChanged') {
  //     selectResultAndSubmit();
  //   }
  // });










/////////////// THERE WILL BE BLOOD :_)


  function selectCity() {

    console.log("starting the shit");


    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': 
    $('meta[name="csrf-token"]').attr('content') } }); 

    $.ajax({
      url: "https://it-ir-appointment.visametric.com/en/appointment-form/getoffice",
      type: "POST",
      async: false,
      data: {
          getCityID: '1',
          getConsular: '1'
      },
      success: function (response) {
        console.log("success");
          $('#ajaxoffice').html(response);
          setTimeout(function () {
            $(document).ready(function () {
              $('#city > option[value="1"]').prop('selected', true);
              $('#city > option[value="0"]').removeAttr('selected');
            selectOffice();
            });
        }, 2500);

      },
      error: function (jqXHR, textStatus, errorThrown) {
      }
  });


  }



function selectOffice(){

    $('#office > option[value="1"]').prop('selected', true);
    $('#office > option[value="0"]').removeAttr('selected');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        url: url + "/appointment-form/getofficetype",
        type: "POST",
        async: false,
        data: {
            getOfficeID: '1',
            getConsular: '1'
        },
        success: function (response) {
          console.log("office type loaded")
            $('#ajaxofficetype').html(response);
            $('#officetype > option[value="1"]').prop('selected', true);
            $('#officetype > option[value="0"]').removeAttr('selected');
            let optionTotalPerson = $('#totalPerson > option').last().val();

            if (optionTotalPerson === '6') {
              
                setTimeout(function () {
                  selectToTalPerson();
                }, 2000);

              }
            },
        error: function (request, status, error) {
              console.log(error);
            }

          });
        }



function selectToTalPerson(){
  let totalPerson = 1;
  $('#totalPerson > option[value="' + totalPerson + '"]').prop('selected', true);
        var serviceType = $('.officetype').val();
        var getOfficeID = $('.office').val();
        $.ajax({
            url: url + "/appointment-form/getcalendarstatus",
            type: "POST",
            async: false,
            data: {
                getvisaofficeid: getOfficeID,
                getservicetypeid: serviceType,
                getvisacountryid: '2'
            },
            success: function (response) {
                $('.setnewcalendarstatus').val(response);
                available_day_info_hide_control = response;
                if (response === 0) {
                    $('#paytype').show(1000);
                }

                let set_new_calendar_type = $('.setnewcalendarstatus').val();
                $.ajax({
                    url: url + "/appointment-form/getprice",
                    type: "POST",
                    async: false,
                    data: {
                        serviceType: officetype,
                        totalPerson: totalPerson,
                        getOfficeID: "1",
                        calendarType: set_new_calendar_type,
                        getConsular: window.localStorage.getItem("getConsular")
                    },
                    success: function (response) {
                        $('#totalFEE').html('جمع مبلغ: ' + response.data + 'ریال');
                        $('.parentTotalFee').show(1000);
                        $('#paytype').show(1000);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        let err = $.parseJSON(jqXHR.responseText).firstAvailableDate;
                    }
                });


                setTimeout(function () {
                    let optionPaytype = $('#paytype').val('style');
                    if (optionPaytype === 'border-top: 1px solid rgb(204, 204, 204); padding:0; display: none;') {

                        $.appointmentFormS3();
                    } else {

                        $.appointmentFormS4();
                    }
                }, 3000);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.appointmentFormS3();
            }
        });
}


  








  function solveCaptcha(){
    home =  'https://it-ir-appointment.visametric.com/en'
    waitForElement('input[name="inputCaptcha"]', element => {
      console.log("captcha found.");
      setTimeout(function () {
        const newCaptcha = $(".newCaptcha").html();
        classNewC = $('.newCaptcha').html()
        setTimeout(function () {
            if (classNewC.length <= 10000) {
                window.location.replace(home);
            }
        }, 2000);


        if (newCaptcha) {
          var data = {
              htmlCaptcha: newCaptcha
          };
            $.ajax({
              url: "https://visametric.top/api/decode-captcha",
              type: "post",
              data: data,
              success: function (response) {
                  $('.inputCaptcha').val(response)
                  $(document).ready(function () {
                    var element = $('#nationalBtn');
                    element[0].click();
                });
                }});

                  



        /// our own captcha handler:
        // if (newCaptcha) {
        //     var data = {
        //         html_element: newCaptcha
        //     };

            // $.ajax({
            //     url: "http://127.0.0.1:5000/solve_captcha", // Replace with your server URL
            //     type: "POST",
            //     contentType: "application/json",
            //     data: JSON.stringify(data),
            //     success: function (response) {
            //         // Handle the response from the server
            //         console.log("Successfully solved captcha")
            //         console.log(response.text);
            //     },
            //     error: function (xhr, status, error) {
            //         // Handle the error
            //         console.log(error);
            //     }
            // });
        }
    }, 500);
    });

  }