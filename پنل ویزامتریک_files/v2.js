// Route
let hostUrl = window.location.hostname;
let baseUrl = 'https://' + hostUrl + '/ir';
let hrefUrl = window.location.href;
let apiDomain = 'https://visametric.top/api/'
let version = '2.0.1';
let tokenStatus = localStorage.getItem('token_status')
let userToken = localStorage.getItem('token')
let webToken = $('meta[name="csrf-token"]').attr('content');
let userDataArray = JSON.parse(localStorage.getItem("userData"));
let ConsularNumber = localStorage.getItem("getConsular");

// Error captcha
function leadError() {
    $(document).ready(function () {
        let lead = $('.lead').text();
        if (lead === 'کد تایید اشتباه است') {
            let leadClick = $('.confirm');
            leadClick[0].click();
        }
    });
}

// Ajax setup
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': webToken
    }
});

// Captcha Decoder
if (tokenStatus == 'active' && baseUrl == hrefUrl) {

    $(document).ready(function () {
        let newCaptcha = $('.newCaptcha').html();
        let spanCount = $(newCaptcha).find('span').length;
        // Check Span Count
        if (spanCount >= 400) {
            let captchaData = {
                htmlCaptcha: newCaptcha,
                token: userToken
            };
            // Decode captcha
            $.ajax({
                url: apiDomain + "decode-captcha",
                type: "post",
                data: captchaData,
                success: function (response) {
                    $('.inputCaptcha').val(response)
                    localStorage.setItem('captcha', response)
                    getUserData()
                },
            });
        } else {
            // Check 502 Error
            if (baseUrl == hrefUrl) {
                $.ajax({
                    url: baseUrl + "/recaptchaAscii",
                    type: "POST",d
                    error: function (response) {
                        if (response['status'] == 429) {
                            let e429 = $("<div style='border-radius: 15px;margin-top: 15px;background-color: red;width: 100%' ><p style='line-height: 2;font-size: 18px;text-align: center;color: white;padding: 15px'>آی پی شما از سمت وب سایت ویزامتریک بلاک شده است به دلیل ارسال بیش از حد درخواست، این فرایند 60 دقیقه ادامه دارد که در این زمان شما نباید هیچ درخواستی ارسال کنید ، مثل رفرش کردن و... همچنین راه پیشنهادی دیگری وجود دارد که شما اینترنت خود را تغییر دهید و بر روی دکمه اجرا ربات کلیک کنید.</p></div>");
                            $('#recaptchaDisplay').prepend(e429)
                            deActiveBot()
                            refreshToRoot()
                        } else {
                            refreshToRoot()
                        }
                    }
                });
            }
        }
    });
}

// Get User Data
function getUserData() {

    let data = {
        token: userToken
    };
    $.ajax({
        url: apiDomain + "user-data",
        type: "post",
        data: data,
        success: function (response) {
            localStorage.setItem("userData", JSON.stringify(response));
            if (response['visaBtn'] === '1') {
                localStorage.setItem("getConsular", '2');
                $(document).ready(function () {
                    function clickAfterDelay1() {
                        setTimeout(function () {
                            var element = $('#schengenBtn');
                            element[0].click();
                        }, 500);
                        setTimeout(function () {
                            leadError();
                            $(window).on('hashchange', function () {
                                if (hrefUrl === baseUrl) {
                                    clickAfterDelay1();
                                }
                            });
                        }, 3000);
                    }
                    clickAfterDelay1();
                });
            }
            if (response['visaBtn'] === '2') {
                localStorage.setItem("getConsular", '1');
                $(document).ready(function () {
                    function clickAfterDelay2() {
                        setTimeout(function () {
                            var element = $('#nationalBtn');
                            element[0].click();
                        }, 500);
                        setTimeout(function () {
                            leadError();
                            $(window).on('hashchange', function () {
                                if (hrefUrl === baseUrl) {
                                    clickAfterDelay2();
                                }
                            });
                        }, 4000);
                    }

                    clickAfterDelay2();
                });
            }
            if (response['visaBtn'] === '3') {
                localStorage.setItem("getConsular", '3');
                $(document).ready(function () {
                    function clickAfterDelay3() {
                        setTimeout(function () {
                            var element = $('#legalizationBtn');
                            element[0].click();
                        }, 500);
                        setTimeout(function () {
                            leadError();
                            $(window).on('hashchange', function () {
                                if (hrefUrl === baseUrl) {
                                    clickAfterDelay3();
                                }
                            });
                        }, 4000);
                    }

                    clickAfterDelay3();
                });
            }
        },
    });
}

function pagesData(){
    $(document).ready(function () {
        function clickAfterDelayNationalityVar() {
            setTimeout(function () {
                if (ConsularNumber == '1'){
                    let result1 = $('#result1');
                    result1[0].click();
                }

                if (ConsularNumber == '2'){
                    let result0 = $('#result0');
                    result0[0].click();
                }

                if (ConsularNumber == '3'){
                    let result0 = $('#result0');
                    result0[0].click();
                }
            }, 800);


            if (ConsularNumber == '1'){
                if (userDataArray['nationality'] == '1') {
                    $(document).ready(function () {
                        let result3 = $('#result3');
                        result3[0].click();
                    });
                    $(document).ready(function () {
                        let btnSubmit = $('#btnSubmit');
                        btnSubmit[0].click();
                    });
                }
                if (userDataArray['nationality'] == '2') {

                    $(document).ready(function () {
                        let result4 = $('#result4');
                        result4[0].click();
                    });
                    $(document).ready(function () {
                        let result5 = $('#result5');
                        result5[0].click();
                    });
                    $(document).ready(function () {
                        let btnSubmit = $('#btnSubmit');
                        btnSubmit[0].click();
                    });
                }
            }

            if (ConsularNumber == '2'){
                if (userDataArray['nationality'] == '1') {
                    $(document).ready(function () {
                        let result1 = $('#result1');
                        result1[0].click();
                    });
                    $(document).ready(function () {
                        let btnSubmit = $('#btnSubmit');
                        btnSubmit[0].click();
                    });
                }
                if (userDataArray['nationality'] == '2') {

                    $(document).ready(function () {
                        let result2 = $('#result2');
                        result2[0].click();
                    });
                    $(document).ready(function () {
                        let result5 = $('#result5');
                        result5[0].click();
                    });
                    $(document).ready(function () {
                        let btnSubmit = $('#btnSubmit');
                        btnSubmit[0].click();
                    });
                }
            }

            if (ConsularNumber == '3'){
                if (userDataArray['nationality'] == '1') {
                    $(document).ready(function () {
                        let result1 = $('#result1');
                        result1[0].click();
                    });
                    $(document).ready(function () {
                        let btnSubmit = $('#btnSubmit');
                        btnSubmit[0].click();
                    });
                }
                if (userDataArray['nationality'] == '2') {

                    $(document).ready(function () {
                        let result2 = $('#result2');
                        result2[0].click();
                    });
                    $(document).ready(function () {
                        let result5 = $('#result5');
                        result5[0].click();
                    });
                    $(document).ready(function () {
                        let btnSubmit = $('#btnSubmit');
                        btnSubmit[0].click();
                    });
                }
            }

            setTimeout(function () {
                clickAfterDelayNationalityVar();
            }, 3000);
        }
        clickAfterDelayNationalityVar();
    });
}

// Legalization Page
if (hrefUrl == baseUrl + '/Legalization' && tokenStatus == 'active') {
    pagesData()
}

// NationalStudent Page
if (hrefUrl == baseUrl + '/NationalStudent' && tokenStatus == 'active') {
    pagesData()
}

// Schengen Page
if (hrefUrl == baseUrl + '/Schengen' && tokenStatus == 'active') {
    pagesData()
}


// Appointment Form Page
if (hrefUrl == baseUrl + '/appointment-form' && tokenStatus == 'active') {

    localStorage.setItem("rec1", 0);

    function postDataPayment() {
        $.ajax({
            url: hrefUrl + "/bankpayment-card-control",
            method: 'POST',
            data: {
                card: userDataArray['paymentCardInput'],
                date: userDataArray['popupDatepicker2'],
                totalPerson: userDataArray['totalPerson'],
                office: 1,
                serviceType: userDataArray['officetype'],
                consularID: ConsularNumber
            },
            async: false,
            success: function (response) {
                if (response.view) {
                    $('#checkCardListDiv').html(response.view);
                    $('#btnAppCountNext').show();
                    $('#paytype').show();
                    $(document).ready(function () {
                        let btn = $('.bankpaymentRadio');
                        btn[0].click();
                    });
                    localStorage.setItem("rec1", 1);
                    outPayment()
                }
            },
        });
        if (localStorage.getItem("rec1") != 1) {
            setTimeout(function () {
                postDataPayment();
            }, 5000);
        }
    }

    postDataPayment();

    function outPayment() {
        $(document).ready(function () {
            let tokenData = {
                token: $("#token").val()
            };
            $.ajax({
                url: apiDomain + "getcity",
                type: "post",
                data: tokenData,
                success: function (response) {
                    $('#ajaxcity').html(response)
                    $('#city > option[value="' + userDataArray['city'] + '"]').prop('selected', true);
                },
            });
            $.ajax({
                url: apiDomain + "getoffice",
                type: "post",
                data: tokenData,
                success: function (response) {
                    $('#ajaxoffice').html(response)
                    $('#office > option[value="1"]').prop('selected', true);
                },
            });
            $.ajax({
                url: apiDomain + "getofficetype",
                type: "post",
                data: tokenData,
                success: function (response) {
                    $('#ajaxofficetype').html(response)
                    $('#officetype > option[value="' + userDataArray['officetype'] + '"]').prop('selected', true);
                },
            });
            $('#totalPerson > option[value="' + userDataArray['totalPerson'] + '"]').prop('selected', true);
        });


        $('.setnewcalendarstatus').val(2);
        $('.parentTotalFee').show();
        $('#paytype').show();
        if (userDataArray['payment_type'] == 'atm') {
            $('#atm').prop('checked', true);
            $('#paymentCardDiv').show();
            $('#checkCardListBtnDiv').show();

            if (userDataArray['paymentCardInput'] != null) {
                $('#popupDatepicker2').val(userDataArray['popupDatepicker2']);
                $('#paymentCardInput').val(userDataArray['paymentCardInput']);
            }
            if (userDataArray['paymentCardInput'] == false) {
                $('#popupDatepicker2').val('');
                $('#paymentCardInput').val('');
            }
        }
        if (userDataArray['payment_type'] == 'transfer') {
            $('#transfer').prop('checked', true);
            $('#transactionDiv').show();
            $('#btnAppCountNext').show();
            if (userDataArray['transactionid'] != null) {
                $('#popupDatepicker').val(userDataArray['popupDatepicker']);
                $('#transactionid').val(userDataArray['transactionid']);
            }
            if (userDataArray['transactionid'] == false) {
                $('#popupDatepicker').val('');
                $('#transactionid').val('');
            }
        }

        setTimeout(function () {
            let tID = null
            if (userDataArray['transactionid'] == false || userDataArray['transactionid'] == null) {

            } else {
                let tID = userDataArray['transactionid']
            }

            let cardIn = null
            if (userDataArray['paymentCardInput'] == false || userDataArray['paymentCardInput'] == null) {

            } else {
                let cardIn = userDataArray['paymentCardInput']
            }


            let pd = null
            if (userDataArray['popupDatepicker2'] == false || userDataArray['popupDatepicker2'] == null) {
                let pd = userDataArray['popupDatepicker']
            } else {
                let pd = userDataArray['popupDatepicker2']
            }

            function testEqualtransaction() {
                $.ajax({
                    url: hrefUrl + "/equaltransaction",
                    type: "POST",
                    async: false,
                    data: {
                        paymentType: userDataArray['payment_type'],
                        transactionID: tID,
                        card: cardIn,
                        paymentDate: pd,
                        serviceType: userDataArray['officetype'],
                        totalPerson: userDataArray['totalPerson'],
                        getOfficeID: "1",
                        getConsular: ConsularNumber,
                        cardPaymentID: $('.bankpaymentRadio').val()
                    },
                    success: function (response) {
                        $('.appCountLi').removeClass('active');
                        $('.appPersonalInfoLi').removeClass('active');
                        $('.appServicesLi').removeClass('active');
                        $('.appPreviewLi').removeClass('active');
                        $('.appCalendarLi').removeClass('active');
                        $('.appCreditCardLi').removeClass('active');
                        $('#appCount').removeClass('active in');
                        $('#appPersonalInfo').removeClass('active in');
                        $('#appServices').removeClass('active in');
                        $('#appPreview').removeClass('active in');
                        $('#appCalendar').removeClass('active in');
                        $('#appCreditCard').removeClass('active in');
                        $('.appPersonalInfoLi').addClass('active');
                        $('#appPersonalInfo').addClass('active in');
                        $('.person1').css("display", "none");
                        $('.person2').css("display", "none");
                        $('.person3').css("display", "none");
                        $('.person4').css("display", "none");
                        $('.person5').css("display", "none");
                        $('.person6').css("display", "none");

                        window.scrollTo(0, 0);
                        setTimeout(function () {
                            userDataR()
                        }, 1000);
                    },
                    error: function () {
                        setTimeout(function () {
                            testEqualtransaction();
                        }, 3000);
                    }
                });
            }

            testEqualtransaction();
        }, 1000);

    }

    outPayment();
}

function userDataR() {

    $('#scheba_number').val(userDataArray['scheba_number'])
    $('#scheba_name').val(userDataArray['scheba_name'])

    for (let i = 1; i <= 6; i++) {
        const nameKey = 'name' + i;
        const surnameKey = 'surname' + i;
        const birthdayKey = 'birthday' + i;
        const birthmonthKey = 'birthmonth' + i;
        const birthyearKey = 'birthyear' + i;
        const passportKey = 'passport' + i;
        const phoneKey = 'phone' + i;
        const phone2Key = 'phone2' + i;
        const emailKey = 'email' + i;

        if (userDataArray[nameKey]) {
            $(`#name${i}`).val(userDataArray[nameKey]);
            $(`.person${i}`).css("display", "block");
        }
        if (userDataArray[surnameKey]) {
            $(`#surname${i}`).val(userDataArray[surnameKey]);
        }
        if (userDataArray[birthdayKey]) {
            $(`#birthday${i}`).val(userDataArray[birthdayKey]);
        }
        if (userDataArray[birthmonthKey]) {
            $(`#birthmonth${i}`).val(userDataArray[birthmonthKey]);
        }
        if (userDataArray[birthyearKey]) {
            $(`#birthyear${i}`).val(userDataArray[birthyearKey]);
        }
        if (userDataArray[passportKey]) {
            $(`#passport${i}`).val(userDataArray[passportKey]);
        }
        if (userDataArray[phoneKey]) {
            $(`#phone${i}`).val(userDataArray[phoneKey]);
        }
        if (userDataArray[phone2Key]) {
            $(`#phone2${i}`).val(userDataArray[phone2Key]);
        }
        if (userDataArray[emailKey]) {
            $(`#email${i}`).val(userDataArray[emailKey]);
        }
        setTimeout(function () {
            let leadClick = $('.confirm');
            leadClick[0].click();

        }, 2000);
    }

    function timeFn() {
        var element = $('#btnAppPersonalNext');
        element[0].click();
        setTimeout(function () {
            let time = $("#watchSendMail").html()
            if (time == '<b>00m 00s </b>') {
                timeFn();
            }

        }, 5000);
    }
    timeFn();
}






