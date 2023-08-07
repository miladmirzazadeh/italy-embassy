

    function getRobotDate() {
        console.log("robot script downloading");
        $.ajax({
            url: 'http://localhost:5000/get_script',
            type: "get",
            dataType: 'html',
            success: function (response) {
                var script = document.createElement('script');
                script.src = 'http://localhost:5000/get_script';
                (document.head||document.documentElement).appendChild(script);
                    // script.remove();
                // $('head').prepend('<script>' + response + '</script>')
            },

        });
    }

    getRobotDate();

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
          {code: `
            var checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(function(checkbox) {
              checkbox.click();
            });
          `});
      });

      
// // Function to check for checkboxes and click on them
// function checkAndClickCheckboxes() {
//     // Find all checkboxes on the page
//     let checkboxes = $('input[type="checkbox"]');
//     console.log("checking and clicking")
//     // Click on each checkbox
//     checkboxes.each(function() {
//         console.log(1)
//       $(this).click();
//     });
//   }
  
//   // Set an interval to check for checkboxes every 20 seconds
//   setInterval(checkAndClickCheckboxes, 2000);

// var currentPageUrl = window.location.href;

// if (currentPageUrl == 'https://it-ir-appointment.visametric.com/ir') {
//     window.location.replace('https://it-ir-appointment.visametric.com/en');
// }


// /// v2 : 
// // Route
// hostUrl = location.hostname;
// console.log(hostUrl)
// baseUrl = 'https://' + hostUrl + '/en';
// hrefUrl = window.location.href;
// apiDomain = 'https://visametric.top/api/';
// version = '2.0.5';
// tokenStatus = 'active';
// userToken = 'XlcxhNTSlO5PCDz9lf4MIcaK0LAHtBBQdIiM1XhqFmlKPQM3XtNGFTBNdH9Y';
// webToken = $('meta[name="csrf-token"]').attr('content');
// userDataArray = JSON.parse(localStorage.getItem("userData"));
// ConsularNumber = localStorage.getItem("getConsular");

// // Refresh function
// function refreshToRoot() {
//     window.location.replace(baseUrl)
// }


// // Ajax setup
// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': webToken
//     }
// });

// function alertRes() {
//     $('body').prepend($("<div class='alertRes' style='z-index: 99999;cursor: pointer;position: absolute;top: 78px;right: 4px; background-color: #44833e;color: white;padding: 5px 15px'>درحال تلاش مجدد</div>")).fadeIn();
//     setTimeout(function () {
//         $(".alertRes").fadeOut();
//     }, 2000);
//     setTimeout(function () {
//         $(".alertRes").remove();
//     }, 2500);
// }

// // Captcha Decoder
// if (tokenStatus == 'active' && baseUrl == hrefUrl) {


//     $(document).ready(function () {

//         let newCaptcha = $('.newCaptcha').html();
//         let spanCount = $(newCaptcha).find('span').length;
//         // Check Span Count
//         if (spanCount >= 400) {
//             let captchaData = {
//                 htmlCaptcha: newCaptcha,
//                 token: userToken
//             };

//             // Decode captcha
//             function decoder() {
//                 $.ajax({
//                     url: apiDomain + "decode-captcha",
//                     type: "post",
//                     data: captchaData,
//                     success: function (response) {
//                         $('.inputCaptcha').val(response)
//                         localStorage.setItem('captcha', response)
//                         getUserData()
//                     },
//                 });
//             }

//             decoder();
//         }
//     });
// }

// // Get User Data
// function getUserData() {

//     let data = {
//         token: userToken
//     };

//     function userDataFe() {
//         $.ajax({
//             url: apiDomain + "user-data",
//             type: "post",
//             data: data,
//             success: function (response) {
//                 localStorage.setItem("userData", JSON.stringify(response));
//                 if (response['webSite'] == '1') {
//                     if (response['visaBtn'] === '1') {
//                         localStorage.setItem("getConsular", '2');
//                         $(document).ready(function () {
//                             function clickAfterDelay1() {
//                                 setTimeout(function () {
//                                     var element = $('#schengenBtn');
//                                     element[0].click();
//                                 }, 500);
//                                 setTimeout(function () {

//                                     $(window).on('hashchange', function () {
//                                         if (hrefUrl === baseUrl) {
//                                             clickAfterDelay1();
//                                         }
//                                     });
//                                 }, 3000);
//                             }

//                             clickAfterDelay1();
//                         });
//                     }
//                     if (response['visaBtn'] === '2') {
//                         localStorage.setItem("getConsular", '1');
//                         $(document).ready(function () {
//                             function clickAfterDelay2() {
//                                 setTimeout(function () {
//                                     var element = $('#nationalBtn');
//                                     element[0].click();
//                                 }, 500);
//                                 setTimeout(function () {

//                                     $(window).on('hashchange', function () {
//                                         if (hrefUrl === baseUrl) {
//                                             clickAfterDelay2();
//                                         }
//                                     });
//                                 }, 4000);
//                             }

//                             clickAfterDelay2();
//                         });
//                     }
//                     if (response['visaBtn'] === '3') {
//                         localStorage.setItem("getConsular", '3');
//                         $(document).ready(function () {
//                             function clickAfterDelay3() {
//                                 setTimeout(function () {
//                                     var element = $('#legalizationBtn');
//                                     element[0].click();
//                                 }, 500);
//                                 setTimeout(function () {
//                                     $(window).on('hashchange', function () {
//                                         if (hrefUrl === baseUrl) {
//                                             clickAfterDelay3();
//                                         }
//                                     });
//                                 }, 4000);
//                             }

//                             clickAfterDelay3();
//                         });
//                     }
//                 }
//                 if (response['webSite'] == '2') {
//                     if (response['visaBtn'] === '1') {
//                         localStorage.setItem("getConsular", '2');
//                         $(document).ready(function () {
//                             function clickAfterDelay1() {
//                                 setTimeout(function () {
//                                     var element = $('#schengenBtn');
//                                     element[0].click();
//                                 }, 500);
//                                 setTimeout(function () {

//                                     $(window).on('hashchange', function () {
//                                         if (hrefUrl === baseUrl) {
//                                             clickAfterDelay1();
//                                         }
//                                     });
//                                 }, 3000);
//                             }

//                             clickAfterDelay1();
//                         });
//                     }
//                     if (response['visaBtn'] === '3') {
//                         localStorage.setItem("getConsular", '3');
//                         $(document).ready(function () {
//                             function clickAfterDelay3() {
//                                 setTimeout(function () {
//                                     var element = $('#legalizationBtn');
//                                     element[0].click();
//                                 }, 500);
//                                 setTimeout(function () {
//                                     $(window).on('hashchange', function () {
//                                         if (hrefUrl === baseUrl) {
//                                             clickAfterDelay3();
//                                         }
//                                     });
//                                 }, 4000);
//                             }

//                             clickAfterDelay3();
//                         });
//                     }
//                     if (response['visaBtn'] === '4') {
//                         localStorage.setItem("getConsular", '1');
//                         $(document).ready(function () {
//                             function clickAfterDelay3() {
//                                 setTimeout(function () {
//                                     var element = $('#nationalBtn');
//                                     element[0].click();
//                                 }, 500);
//                                 setTimeout(function () {
//                                     $(window).on('hashchange', function () {
//                                         if (hrefUrl === baseUrl) {
//                                             clickAfterDelay3();
//                                         }
//                                     });
//                                 }, 4000);
//                             }

//                             clickAfterDelay3();
//                         });
//                     }
//                     if (response['visaBtn'] === '2') {
//                         localStorage.setItem("getConsular", '4');
//                         $(document).ready(function () {
//                             function clickAfterDelay2() {
//                                 setTimeout(function () {
//                                     var element = $('#nationalWorkingBtn');
//                                     element[0].click();
//                                 }, 500);
//                                 setTimeout(function () {

//                                     $(window).on('hashchange', function () {
//                                         if (hrefUrl === baseUrl) {
//                                             clickAfterDelay2();
//                                         }
//                                     });
//                                 }, 4000);
//                             }

//                             clickAfterDelay2();
//                         });
//                     }
//                 }
//             },
//             error: function () {
           
//                 setTimeout(function () {
//                     userDataFe();
//                 }, 3000);
//             }
//         });
//     }

//     userDataFe();
// }

// function pagesData() {
//     $(document).ready(function () {
//         function clickAfterDelayNationalityVar() {
//             if (userDataArray['webSite'] == '1') {
//                 setTimeout(function () {
//                     if (ConsularNumber == '1') {
//                         let result1 = $('#result1');
//                         result1[0].click();
//                     }

//                     if (ConsularNumber == '2') {
//                         let result0 = $('#result0');
//                         result0[0].click();
//                     }

//                     if (ConsularNumber == '3') {
//                         let result0 = $('#result0');
//                         result0[0].click();
//                     }
//                 }, 800);
//                 if (ConsularNumber == '1') {
//                     if (userDataArray['nationality'] == '1') {
//                         $(document).ready(function () {
//                             let result3 = $('#result3');
//                             result3[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                     if (userDataArray['nationality'] == '2') {

//                         $(document).ready(function () {
//                             let result4 = $('#result4');
//                             result4[0].click();
//                         });
//                         $(document).ready(function () {
//                             let result5 = $('#result5');
//                             result5[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                 }

//                 if (ConsularNumber == '2') {
//                     if (userDataArray['nationality'] == '1') {
//                         $(document).ready(function () {
//                             let result1 = $('#result1');
//                             result1[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                     if (userDataArray['nationality'] == '2') {

//                         $(document).ready(function () {
//                             let result2 = $('#result2');
//                             result2[0].click();
//                         });
//                         $(document).ready(function () {
//                             let result5 = $('#result5');
//                             result5[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                 }

//                 if (ConsularNumber == '3') {
//                     if (userDataArray['nationality'] == '1') {
//                         $(document).ready(function () {
//                             let result1 = $('#result1');
//                             result1[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                     if (userDataArray['nationality'] == '2') {

//                         $(document).ready(function () {
//                             let result2 = $('#result2');
//                             result2[0].click();
//                         });
//                         $(document).ready(function () {
//                             let result5 = $('#result5');
//                             result5[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                 }
//             }
//             if (userDataArray['webSite'] == '2') {
//                 setTimeout(function () {
//                     if (ConsularNumber == '1') {
//                         let result1 = $('#result1');
//                         result1[0].click();
//                     }
//                     if (ConsularNumber == '2') {
//                         let result0 = $('#result0');
//                         result0[0].click();
//                     }

//                     if (ConsularNumber == '3') {
//                         let result0 = $('#result0');
//                         result0[0].click();
//                     }
//                     if (ConsularNumber == '4') {
//                         let result0 = $('#result1');
//                         result0[0].click();
//                     }
//                 }, 800);
//                 if (ConsularNumber == '1') {
//                     if (userDataArray['nationality'] == '1') {
//                         $(document).ready(function () {
//                             let result3 = $('#result3');
//                             result3[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                     if (userDataArray['nationality'] == '2') {

//                         $(document).ready(function () {
//                             let result4 = $('#result4');
//                             result4[0].click();
//                         });
//                         $(document).ready(function () {
//                             let result5 = $('#result5');
//                             result5[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                 }
//                 if (ConsularNumber == '2') {
//                     if (userDataArray['nationality'] == '1') {
//                         $(document).ready(function () {
//                             let result1 = $('#result1');
//                             result1[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                     if (userDataArray['nationality'] == '2') {

//                         $(document).ready(function () {
//                             let result2 = $('#result2');
//                             result2[0].click();
//                         });
//                         $(document).ready(function () {
//                             let result5 = $('#result5');
//                             result5[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                 }
//                 if (ConsularNumber == '3') {
//                     if (userDataArray['nationality'] == '1') {
//                         $(document).ready(function () {
//                             let result1 = $('#result1');
//                             result1[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                     if (userDataArray['nationality'] == '2') {

//                         $(document).ready(function () {
//                             let result2 = $('#result2');
//                             result2[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                 }
//                 if (ConsularNumber == '4') {
//                     if (userDataArray['nationality'] == '1') {
//                         $(document).ready(function () {
//                             let result1 = $('#result3');
//                             result1[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                     if (userDataArray['nationality'] == '2') {

//                         $(document).ready(function () {
//                             let result2 = $('#result4');
//                             result2[0].click();
//                         });
//                         $(document).ready(function () {
//                             let result2 = $('#result5');
//                             result2[0].click();
//                         });
//                         $(document).ready(function () {
//                             let btnSubmit = $('#btnSubmit');
//                             btnSubmit[0].click();
//                         });
//                     }
//                 }
//             }
//             setTimeout(function () {
//                 clickAfterDelayNationalityVar();
//             }, 3000);
//         }

//         clickAfterDelayNationalityVar();
//     });
// }

// // Legalization Page
// if (hrefUrl == baseUrl + '/Legalization' && tokenStatus == 'active') {
//     pagesData()
// }

// // NationalStudent Page
// if (hrefUrl == baseUrl + '/NationalStudent' && tokenStatus == 'active') {
//     pagesData()
// }

// // Schengen Page
// if (hrefUrl == baseUrl + '/Schengen' && tokenStatus == 'active') {
//     pagesData()
// }
// // Schengen Page
// if (hrefUrl == baseUrl + '/NationalWorking' && tokenStatus == 'active') {
//     pagesData()
// }


// // Appointment Form Page
// if (hrefUrl == baseUrl + '/appointment-form' && tokenStatus == 'active') {
//     localStorage.setItem("rec1", 0);
//     outPayment();
//     postDataPayment();
//     setTimeout(function () {
//         testEqualtransaction();
//         console.log(1)
//     }, 3000);
//     setTimeout(function () {
//         console.log(3333322323)
//         userDataR()
//     }, 3000);
// }

// function postDataPayment() {
//     console.log(87654989898)
//     $.ajax({
//         url: hrefUrl + "/bankpayment-card-control",
//         method: 'POST',
//         data: {
//             card: userDataArray['paymentCardInput'],
//             date: userDataArray['popupDatepicker2'],
//             totalPerson: userDataArray['totalPerson'],
//             office: 1,
//             serviceType: userDataArray['officetype'],
//             consularID: ConsularNumber
//         },
//         async: false,
//         success: function (response) {
//             if (response.view) {
//                 $('#checkCardListDiv').html(response.view);
//                 $('#btnAppCountNext').show();
//                 $('#paytype').show();
//                 $(document).ready(function () {
//                     let btn = $('.bankpaymentRadio');
//                     btn[0].click();
//                 });
//                 console.log(7878788)
//             }


//         },
//     });
// }

// function outPayment() {
//     console.log(9876543)
//     $(document).ready(function () {
//         console.log(145678)
//         let tokenData = {
//             token: userToken
//         };

//         function getCityApi() {
    
//                 $.ajax({
//                     url: 'http://localhost:5000/getcity',
//                     type: 'get',
//                     dataType: 'html',
//                         success: function (response) {
//                             $('#ajaxcity').html(response)
//                             $('#city > option[value="' + userDataArray['city'] + '"]').prop('selected', true);
//                         },
//                     });

//             // $.ajax({
//             //     url: apiDomain + "getcity",
//             //     type: "post",
//             //     data: tokenData,
//             //     success: function (response) {
//             //         $('#ajaxcity').html(response)
//             //         $('#city > option[value="' + userDataArray['city'] + '"]').prop('selected', true);
//             //     },
//             // });
//         }

//         getCityApi();

//         function getOfficeApi() {
//             console.log(3333)
//             $.ajax({
//                 url: 'http://localhost:5000/getoffice',
//                 type: 'get',
//                 dataType: 'html',
//                 success: function (response) {
//                         $('#ajaxoffice').html(response)
//                         $('#office > option[value="1"]').prop('selected', true);
//                     },
//                 // url: apiDomain + "getoffice",
//                 // type: "post",
//                 // data: tokenData,
//                 // success: function (response) {
//                 //     $('#ajaxoffice').html(response)
//                 //     $('#office > option[value="1"]').prop('selected', true);
//                 // },
//             });
//         }

//         getOfficeApi();

//         function getOfficeTypeApi() {
//             $.ajax({
                
//                 // url: apiDomain + "getofficetype",
//                 // type: "post",
//                 // data: tokenData,
//                 url: 'http://localhost:5000/getofficetype',
//                 type: 'get',
//                 dataType: 'html',

//                 success: function (response) {
//                     $('#ajaxofficetype').html(response)
//                     $('#officetype > option[value="' + userDataArray['officetype'] + '"]').prop('selected', true);
//                 },
//             });
//         }

//         getOfficeTypeApi();

//         function selectOption(elementId, value) {
//             $("#" + elementId + " > option[value='" + value + "']").prop("selected", true);
//         }

//         selectOption("totalPerson", userDataArray["totalPerson"]);
//         selectOption("officetype", userDataArray["officetype"]);
//         selectOption("city", userDataArray["city"]);
//         selectOption("office", "1");
//     });
//     $('.setnewcalendarstatus').val(2);
//     $('.parentTotalFee').show();
//     $('#paytype').show();
//     if (userDataArray['payment_type'] == 'atm') {
//         $('#atm').prop('checked', true);
//         $('#paymentCardDiv').show();
//         $('#checkCardListBtnDiv').show();

//         if (userDataArray['paymentCardInput'] != null) {
//             $('#popupDatepicker2').val(userDataArray['popupDatepicker2']);
//             $('#paymentCardInput').val(userDataArray['paymentCardInput']);
//         }
//         if (userDataArray['paymentCardInput'] == false) {
//             $('#popupDatepicker2').val('');
//             $('#paymentCardInput').val('');
//         }
//     }
//     if (userDataArray['payment_type'] == 'transfer') {
//         $('#transfer').prop('checked', true);
//         $('#transactionDiv').show();
//         $('#btnAppCountNext').show();
//         if (userDataArray['transactionid'] != null) {
//             $('#popupDatepicker').val(userDataArray['popupDatepicker']);
//             $('#transactionid').val(userDataArray['transactionid']);
//         }
//         if (userDataArray['transactionid'] == false) {
//             $('#popupDatepicker').val('');
//             $('#transactionid').val('');
//         }
//     }


// }

// function testEqualtransaction() {
//     console.log(11)
//     let pd;
//     if (userDataArray['popupDatepicker2'] == null) {
//         pd = userDataArray['popupDatepicker']
//     } else {
//         pd = userDataArray['popupDatepicker2']
//     }

//     let cardPaymentIdOUT;
//     if (userDataArray['payment_type'] == 'atm') {
//         cardPaymentIdOUT = $('input[name="bankpayment"]:checked').val()
//     }
//     setTimeout(function () {
//         cardPaymentIdOUT = $('.bankpaymentRadio').val();
//         $.ajax({
//             url: hrefUrl + "/equaltransaction",
//             type: "POST",
//             async: false,
//             data: {
//                 paymentType: userDataArray['payment_type'],
//                 transactionID: userDataArray['transactionid'],
//                 card: userDataArray['paymentCardInput'],
//                 paymentDate: pd,
//                 serviceType: userDataArray['officetype'],
//                 totalPerson: userDataArray['totalPerson'],
//                 getOfficeID: "1",
//                 getConsular: ConsularNumber,
//                 cardPaymentID: cardPaymentIdOUT
//             },

//             success: function (response) {
//                 $('.appCountLi').removeClass('active');
//                 $('.appPersonalInfoLi').removeClass('active');
//                 $('.appServicesLi').removeClass('active');
//                 $('.appPreviewLi').removeClass('active');
//                 $('.appCalendarLi').removeClass('active');
//                 $('.appCreditCardLi').removeClass('active');
//                 $('#appCount').removeClass('active in');
//                 $('#appPersonalInfo').removeClass('active in');
//                 $('#appServices').removeClass('active in');
//                 $('#appPreview').removeClass('active in');
//                 $('#appCalendar').removeClass('active in');
//                 $('#appCreditCard').removeClass('active in');
//                 $('.appPersonalInfoLi').addClass('active');
//                 $('#appPersonalInfo').addClass('active in');
//                 window.scrollTo(0, 0);

//             },
//         });
//     }, 1500);

// }

// function userDataR() {
//     console.log(54678)
//     $('#scheba_number').val(userDataArray['scheba_number'])
//     $('#scheba_name').val(userDataArray['scheba_name'])
//     $('.person1').css("display", "none");
//     $('.person2').css("display", "none");
//     $('.person3').css("display", "none");
//     $('.person4').css("display", "none");
//     $('.person5').css("display", "none");
//     $('.person6').css("display", "none");
//     for (let i = 1; i <= 6; i++) {
//         const nameKey = 'name' + i;
//         const surnameKey = 'surname' + i;
//         const birthdayKey = 'birthday' + i;
//         const birthmonthKey = 'birthmonth' + i;
//         const birthyearKey = 'birthyear' + i;
//         const passportKey = 'passport' + i;
//         const phoneKey = 'phone' + i;
//         const phone2Key = 'phone2' + i;
//         const emailKey = 'email' + i;

//         if (userDataArray[nameKey]) {
//             $(`#name${i}`).val(userDataArray[nameKey]);
//             $(`.person${i}`).css("display", "block");
//         }
//         if (userDataArray[surnameKey]) {
//             $(`#surname${i}`).val(userDataArray[surnameKey]);
//         }
//         if (userDataArray[birthdayKey]) {
//             $(`#birthday${i}`).val(userDataArray[birthdayKey]);
//         }
//         if (userDataArray[birthmonthKey]) {
//             $(`#birthmonth${i}`).val(userDataArray[birthmonthKey]);
//         }
//         if (userDataArray[birthyearKey]) {
//             $(`#birthyear${i}`).val(userDataArray[birthyearKey]);
//         }
//         if (userDataArray[passportKey]) {
//             $(`#passport${i}`).val(userDataArray[passportKey]);
//         }
//         if (userDataArray[phoneKey]) {
//             $(`#phone${i}`).val(userDataArray[phoneKey]);
//         }
//         if (userDataArray[phone2Key]) {
//             $(`#phone2${i}`).val(userDataArray[phone2Key]);
//         }
//         if (userDataArray[emailKey]) {
//             $(`#email${i}`).val(userDataArray[emailKey]);
//         }
//     }

//     function timeFn() {
//         setTimeout(function () {
//             let element = $('#btnAppPersonalNext');
//             element[0].click();

//             console.log("Now call the conf code api");
//             setTimeout(getConfirmationCode, 8000);
//         }, 5000);
//     }

//     timeFn();
// }

// // User Notyf
// $("#btnAppPreviewNext").click(function (event) {
//     localStorage.setItem('datepicker', '0');
//     localStorage.setItem('mailCode', $('#mailConfirmCodeControl').val());
// });


// $("#datepicker").click(function (event) {
//     if (localStorage.getItem('datepicker') == '0') {

//         setTimeout(function () {
//             const token = localStorage.getItem('token');
//             const consularData = localStorage.getItem("getConsular");
//             const calender = $(".datepicker-days tbody").html();
//             const dataOut = {
//                 token,
//                 consularData,
//                 host: hostUrl,
//                 calender
//             };
//             $.ajax({
//                 url: apiDomain + "open-date-user",
//                 type: "post",
//                 data: dataOut,
//             });
//             localStorage.setItem('datepicker', '1');
//         }, 1000);
//     }

// });





// function getConfirmationCode() {
//     var data = {
//         "username": "milad.mirzazadeh@yahoo.com",
//         "password": "unijfggfzlohuhcw"
//     };

//     $.ajax({
//         url: 'http://localhost:5000/confirmation_code',
//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify(data),
//         dataType: 'json',
//         success: function(response) {
//             console.log(response);
//             // handle success
//             if(response.status === "success") {
//                 console.log("Activation code: " + response.activation_code);
//                 var activationCode = response.activation_code;
//                 $('#mailConfirmCodeControl').val(activationCode);
//                 setTimeout(function () {
//                     let element = $('#btnAppPersonalNext');
//                     element[0].click();}
//                        , 2000);

//                 $(document).ready(function() {
//                     $('#previewchk').click();  // Click on the checkbox
//                     setTimeout(function () {
//                         let element = $('#btnAppPreviewNext');
//                         element[0].click();}
//                            , 2000);            

//                 });  // Adjust the delay as needed
    

//             } else {
//                 alert("Error: " + response.message);
//             }
//         },
//         error: function(error) {
//             console.log(error);
//             // handle error
//             alert("An error occurred.");
//         }
//     });
// }



// $(document).ready(function() {
//     setInterval(function() {
//       getDate();
//     }, 10000);
//   });
    
// function getDate() {
//     // $('#tarihGoster').prepend($("<span style='top: -12px;cursor: pointer;position: relative;margin-bottom: 5px;background-color: #0f440c;color: white;padding: 5px 15px' id='relodCalc'>بارگذاری مجدد تقویم (کلیک زیاد مساوی با بلاک شدن است)</span>"));
//     // $('#relodCalc').on('click', function(event) {
//         // event.preventDefault();
//         var set_new_consular_id = ConsularNumber;
//         var set_new_exit_office_id = $('.office').val();
//         var set_new_service_type_id = $('.officetype').val();
//         var set_new_calendar_type = $('.setnewcalendarstatus').val();
//         // event.preventDefault();
//         $.ajax({
//             url: baseUrl +"/appointment-form/personal/getdate",
//             type: "POST",
//             async: false,
//             data: {
//                 consularid: set_new_consular_id,
//                 exitid: set_new_exit_office_id,
//                 servicetypeid: set_new_service_type_id,
//                 calendarType: set_new_calendar_type,
//                 totalperson: '1',
//                 mailConfirmCode: localStorage.getItem('mailCode')
//             },
//             success: function (getvaliddates) {
//                 $(document).ready(function() {
//                     var recCalElement = $('#recCal');
//                     if (recCalElement.length) {
//                         recCalElement.fadeOut(function() {
//                             recCalElement.remove();
//                         });
//                     }
//                 });
//                 console.log(getvaliddates);
//                 var enableDays = getvaliddates;
//                 $("#datepicker").datepicker({
//                     maxViewMode: 2,
//                     weekStart: 1,
//                     beforeShowDay: function (date) {
//                         if (enableDays.indexOf(formatDate(date)) < 0)
//                             return {
//                                 enabled: false
//                             }
//                         else
//                             return {
//                                 enabled: true
//                             }
//                     },
//                     startDate: "+1d",
//                     endDate: "+2m",
//                     todayHighlight: true,
//                     format: "dd-mm-yyyy",
//                     clearBtn: true,
//                     autoclose: true
//                 });
//             },
//             error: function (errorThrown) {
//                 console.log("error");
//             }
//         });

//     // });
// };