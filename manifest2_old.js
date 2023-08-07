
var personCount = 0;
var ct = 0;
var qtallvertval = 0;
var set_price_for_cc = 0;
var responseMail = 0;
var responseConfirmCode = 0;
var btnAppPersonalNextClick = 0;
var timerBtnActive = 0;

$(document).ready(function () {


    passiveTab('appCountLi', 'appCount');

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    function passiveTab(valLi, valTab) {
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

        $('.' + valLi + '').addClass('active');
        $('#' + valTab + '').addClass('active in');

        window.scrollTo(0, 0);
    }

    $('#btnAppCountNext').click(function () {
        if ($('#city').val() == 0) {
            swal({
                title: "خطا",
                text: "Lütfen ikametagh ettiğiniz ili seçiniz!",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else if ($('#office').val() == 0) {
            swal({
                title: "خطا",
                text: "Lütfen gitmek istediğiniz iDATA ofisini seçiniz!",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else if ($('#officetype').val() == 0) {
            swal({
                title: "خطا",
                text: "Lütfen hizmet türünü seçiniz!",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else if ($('#totalPerson').val() == 0) {
            swal({
                title: "خطا",
                text: "Kişi Sayısı Seçiniz",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else if ($('#transactionid').val() != '' && $('#paymentCardInput').val() != '') {
            swal({
                title: "خطا",
                text: "Kişi Sayısı Seçiniz",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else {
            personCount = $('#totalPerson').val();
            hidePersonInfo();
            showPersonInfo(personCount);


            let getOfficeID = $('.office').val();
            let totalPerson = $('.totalPerson').val();
            let serviceType = $('.officetype').val();
            var cardPaymentID = -1;
            switch (payTypeVal) {
                case "transfer":
                    var transactionID = $('#transactionid').val();
                    var paymentDateInput = $('#popupDatepicker').val();
                    break;
                case "atm":
                    serviceTypeVal = "transfer";
                    cardPaymentID = $('input[name="bankpayment"]:checked').val()
                    var card = $('#paymentCardInput').val();

                    var paymentDateInput = $('#popupDatepicker2').val();
                    break;
            }
            if (payTypeVal == 'atm' && (cardPaymentID == -1 || cardPaymentID == '' || cardPaymentID == null || cardPaymentID === undefined)) {
                swal({
                    title: "خطا",
                    text: "لطفاً پرداختی را با مبلغ صحیح انتخاب کنید",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });
                return false;
            }
            $('.paymentAlert').hide();
            $('.paymentDateAlert').hide();
            $.ajax({
                url: "https://it-ir-appointment.visametric.com/ir/appointment-form/equaltransaction",
                type: "POST",
                async: false,
                data: {
                    paymentType: payTypeVal,
                    transactionID: transactionID,
                    card: card,
                    paymentDate: paymentDateInput,
                    serviceType: serviceType,
                    totalPerson: totalPerson,
                    getOfficeID: getOfficeID,
                    getConsular: '1',
                    cardPaymentID: '' + cardPaymentID + ''
                },
                success: function (response) {

                    if (response.error) {

                        $('.paymentDateAlert').fadeOut("slow");
                        $('.paymentDateAlert').fadeIn("slow");
                    } else if (!response.data) {


                        $('.paymentAlert').fadeOut("slow");
                        $('.paymentAlert').fadeIn("slow");
                    } else {
                        passiveTab('appPersonalInfoLi', 'appPersonalInfo');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                }
            });

        }
    });

    function hidePersonInfo() {
        for (var i = 1; i <= 6; i++) {
            $('.person' + i + '').css('display', 'none');
        }
    }

    function showPersonInfo(personCountVal) {
        for (var i = 1; i <= personCountVal; i++) {
            $('.person' + i + '').css('display', 'block');
        }
    }


    function getUnique(array) {
        var uniqueArray = [];

        for (i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return (uniqueArray.length);
    }

    function appPersonalNextPassportControl() {
        var passportArray = [];
        for (var i = 1; i <= personCount; i++) {
            passportArray.push($('#passport' + i).val());
        }

        var count_pass_array = getUnique(passportArray);

        if (count_pass_array < passportArray.length) {
            return ['x', 'x', 'x']
            return false;
        }
        var passportControlStatus = null;
        var sira = null;
        var passportResponse = null;
        var set_country_for_passport = '1';

        $.ajax({
            url: "https://it-ir-appointment.visametric.com/ir/appointment-form/personal/passport-control",
            type: "POST",
            async: false,
            dataType: "json",
            data: {
                passport: passportArray,
                country_id: set_country_for_passport
            },
            success: function (response) {
                passportControlStatus = response.status;
                sira = response.sira;
                passportResponse = response.passport;

            },
            error: function (jqXHR, textStatus, errorThrown) {
                // console.log(textStatus, errorThrown);
            }
        });
        return [passportControlStatus, sira, passportResponse];
    }

    function appPersonalEmailControl() {
        var emailArray = [];

        for (var i = 1; i <= personCount; i++) {
            emailArray.push($('#email' + i).val());
        }
        // var count_pass_array = getUnique(emailArray);
        //
        // if (count_pass_array < emailArray.length) {
        //     return ['x', 'x', 'x']
        //     return false;
        // }
        var emailControlStatus = null;
        var sira = null;
        var emailResponse = null;
        var set_country_for_email = '1';

        $.ajax({
            url: "https://it-ir-appointment.visametric.com/ir/appointment-form/personal/email-control",
            type: "POST",
            async: false,
            dataType: "json",
            data: {
                email: emailArray,
                country_id: set_country_for_email
            },
            success: function (response) {
                emailControlStatus = response.status;
                sira = response.sira;
                emailResponse = response.email;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // console.log(textStatus, errorThrown);
            },
        });

        return [emailControlStatus, sira, emailResponse];

    }

    function appPersonalPhoneControl() {
        var phoneArray = [];

        for (var i = 1; i <= personCount; i++) {
            phoneArray.push($('#phone' + i).val());
        }
        // var count_pass_array = getUnique(phoneArray);
        //
        // if (count_pass_array < phoneArray.length) {
        //     return ['x', 'x', 'x']
        //     return false;
        // }
        var emailControlStatus = null;
        var sira = null;
        var emailResponse = null;
        var set_country_for_phone = '1';

        $.ajax({
            url: "https://it-ir-appointment.visametric.com/ir/appointment-form/personal/phone-control",
            type: "POST",
            async: false,
            dataType: "json",
            data: {
                phone: phoneArray,
                country_id: set_country_for_phone
            },
            success: function (response) {
                phoneControlStatus = response.status;
                sira = response.sira;
                phoneResponse = response.phone;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // console.log(textStatus, errorThrown);
            },
        });

        return [phoneControlStatus, sira, phoneResponse];

    }


    $('#btnAppPersonalNext').click(function () {


        if ($('#scheba_name').val().length < 3) {
            swal({
                title: "خطا",
                text: "لطفا نام صاحب شبای معتبر وارد نمایید!",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;

        } else if ($('#scheba_number').val().substring(5, 8) == '560' || $('#scheba_number').val().substring(5, 8) == '730' || $('#scheba_number').val().substring(5, 8) == '520' || $('#scheba_number').val().substring(5, 8) == '790' || $('#scheba_number').val().substring(5, 8) == '630' || $('#scheba_number').val().substring(5, 8) == '650') {

            swal({
                title: "خطا",
                text: "شماره شبای وارد شده معتبر نمی باشد.",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else if (!IBAN.isValid($('#scheba_number').val())) {
            swal({
                title: "خطا",
                text: "لطفا شماره شبای معتبر وارد نمایید!",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        }

        var appPersonalNextResult = inputControl();

        if (appPersonalNextResult) {
            var passportControl = appPersonalNextPassportControl();
            if (passportControl[0] == "x") {

                swal({
                    title: "خطا",
                    text: "Bir veya birden fazla aynı pasaport numarası girdiniz.",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });

                return false;
            }
            var emailDublicateControl = appPersonalEmailControl();

            if (emailDublicateControl[0] == "x") {

                swal({
                    title: "خطا",
                    text: "Bir veya birden fazla aynı pasaport numarası girdiniz.",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });

                return false;
            }
            var phoneDublicateControl = appPersonalPhoneControl();

            if (phoneDublicateControl[0] == "x") {

                swal({
                    title: "خطا",
                    text: "Bir veya birden fazla aynı pasaport numarası girdiniz.",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });

                return false;
            }
            /**
             * Confirmation Code Start
             */
            if (btnAppPersonalNextClick == 1) {

                if ($('#mailConfirmCodeControl').val().length == "8") {
                    mailConfirmCodeControlVal = $('#mailConfirmCodeControl').val();
                    confirmCodeSendMail(mailConfirmCodeControlVal);
                } else {
                    swal({
                        title: "خطا",
                        text: " Lütfen mailinize gönderilen onaylama kodunu doğru giriniz.",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "تایید",
                        type: 'warning'
                    });
                    return false;
                }
            } else {
                timer.start(1000);

                $('#email1').removeAttr("readonly");
                $('#mailConfirmCodeControl').val('');
                var mailConfirmCodeControlVal = 0;
                $.ajax({
                    url: "https://it-ir-appointment.visametric.com/ir/appointment-form/jky45fgd",
                    type: "POST",
                    async: false,
                    data: {
                        emailCheck: $('#email1').val(),
                        personalinfo: 'eyJpdiI6Im13dE1aZ2s4S084QzJDbHh2S21yUHc9PSIsInZhbHVlIjoiV2FrVDM4azU2M1RQWXF6M015VWxwQT09IiwibWFjIjoiMjJhNjU4MjRlM2U2NDVkOThjMzViOTVmZjA2NWZmOGJlNmNkYWRmZWNlNDJjNWIxZGIwN2U0NDc4NWM4ZWQ4YSJ9'
                    },
                    success: function (response) {
                        responseMail = response;

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus, errorThrown);
                    }
                });


            }
            /**
             * Confirmation Code Finish
             */


            if (!passportControl[0]) {
                if (!phoneDublicateControl[0]) {
                    if (!emailDublicateControl[0]) {

                        if (responseMail == "1") {
                            confirmCodeSendMail(mailConfirmCodeControlVal);
                        } else {
                            /**
                             * Error sayfasına yönlendirme
                             */

                        }
                    } else {
                        btnAppPersonalNextClick = 0;
                        timer.stop();
                        swal({
                            title: "خطا",
                            text: emailDublicateControl[2] + " \n " + " Email address has been used. Please check again.",
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: "تایید",
                            type: 'warning'
                        });
                        return false;

                    }
                } else {
                    btnAppPersonalNextClick = 0;
                    timer.stop();
                    swal({
                        title: "خطا",
                        text: phoneDublicateControl[2] + " \n " + " Phone number has been used. Please check again.",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "تایید",
                        type: 'warning'
                    });
                    return false;
                }
            } else {
                btnAppPersonalNextClick = 0;
                timer.stop();
                swal({
                    title: "خطا",
                    text: passportControl[2] + " \n " + " شماره پاسپورت قبلا استفاده شده است ، لطفا مجددا کنترل نمایید.",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });
                return false;
            }

            if (responseConfirmCode == 2) {
                $('.preview').html('');
                $('.preview').html($('.personalInfoDiv').clone());
                $('.preview input').attr('disabled', 'disabled');
                $('.preview select').attr('disabled', 'disabled');
                $('.preview input').css('border', 'none');
                $('.preview select').css('border', 'none');

                var set_app_country_view = '1';
                var set_app_city_view = $(".city option:selected").html();
                var set_app_office_view = $(".office option:selected").html();
                var set_app_service_type_view = $(".officetype option:selected").html();
                var set_app_person_count_view = $(".totalPerson option:selected").html();

                if (set_app_country_view == "1") {
                    set_app_country_view = "National-Student";
                } else if (set_app_country_view == "2") {
                    set_app_country_view = "Schengen";
                } else if (set_app_country_view == "3") {
                    set_app_country_view = "Legalization";
                } else if (set_app_country_view == "4") {
                    set_app_country_view = "National-Working";
                }

                $(".set_app_country_view").html("<b>نوع درخواست:</b> " + set_app_country_view + "");
                $(".set_app_city_view").html("<b>شهر محل زندگی:</b> " + set_app_city_view + "");
                $(".set_app_office_view").html("<b>مرکز دریافت مدارک:</b> " + set_app_office_view + '');
                $(".set_app_service_type_view").html("<b>نوع خدمات:</b> " + set_app_service_type_view + '');
                $(".set_app_person_count_view").html("<b>تعداد متقاضیان:</b> " + set_app_person_count_view + '');

                passiveTab('appPreviewLi', 'appPreview');
            }

        }
    });

    /**
     * Confirmation Code Function Start
     */
    function confirmCodeSendMail(mailConfirmCodeControlVal) {
        $.ajax({
            url: "https://it-ir-appointment.visametric.com/ir/appointment-form/confirmCodeSendMail",
            type: "POST",
            async: false,
            data: {
                confirmCode: mailConfirmCodeControlVal,
                emailValControl: 'eyJpdiI6IkVydDlHdXRaU0lhcGJhZmVjQkYzMXc9PSIsInZhbHVlIjoiRHVpUTYrekFaYysrYlRnU0RQRXhHU1g0WkJ5QkdJdTRjOEE1VzJ3UjlhTT0iLCJtYWMiOiIyYTE5ZDk4MjI1YzU3Yzg2YTYwMDRlYWM1YWRmYWJmMGRiZmM4MGY2ZDEyNDc3NjJmYWNmODIxMGMwZjc5N2FmIn0='
            },
            success: function (response) {
                if (response == 3) {
                    btnAppPersonalNextClick = 0;

                    $('#stopTimer').val('0');

                    setTimeout(function () {
                        $('#email1').removeAttr("readonly");
                        $('#mailConfirmCodeControlDiv').css({
                            "animation": "fadeInUp",
                            "animation-duration": "1s"
                        });
                        $('#mailConfirmCodeControlDiv').hide();
                    }, 100);

                    swal({
                        title: "خطا",
                        text: "Size verilen süre içerisinde giriş yapmadınız. Lütfen işleminizi yeniden yapınız.",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "تایید",
                        type: 'warning'
                    });
                    return false;
                } else if (response == 2) {


                    $('#stopTimer').val('1');
                    responseConfirmCode = response;
                } else if (response == 1) {

                    btnAppPersonalNextClick = 1;

                    $('#stopTimer').val('0');

                    setTimeout(function () {
                        $('#email1').attr("readonly", "true");
                        $('#mailConfirmCodeControlDiv').css({
                            "animation": "fadeInDown",
                            "animation-duration": "1s"
                        });
                        $('#mailConfirmCodeControlDiv').show();
                    }, 100);

                } else if (response == 0) {

                    btnAppPersonalNextClick = 1;

                    $('#stopTimer').val('0');

                    setTimeout(function () {
                        $('#email1').attr("readonly", "true");
                        $('#mailConfirmCodeControlDiv').css({
                            "animation": "fadeInDown",
                            "animation-duration": "1s"
                        });
                        $('#mailConfirmCodeControlDiv').show();
                    }, 100);
                    swal({
                        title: "خطا",
                        text: "Girdiğiniz kod hatalı. Lütfen kontrol ediniz.",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "تایید",
                        type: 'warning'
                    });
                    return false;

                } else {
                    btnAppPersonalNextClick = 0;

                    $('#stopTimer').val('0');

                    swal({
                        title: "خطا",
                        text: "Teknik bir aksaklıktan dolayı onay maili gönderilemedi. Lütfen tekrar deneyiniz.",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "تایید",
                        type: 'warning'
                    });
                    return false;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    /**
     * Confirmation Code Function Finish
     */
    $('#btnAppPersonalPrev').click(function () {
        $('.paymentAlert').hide();
        $('.paymentDateAlert').hide();
        responseMail = 0;
        btnAppPersonalNextClick = 0;
        responseConfirmCode = 0;

        $('#stopTimer').val('0');
        setTimeout(function () {
            $('#email1').removeAttr("readonly");
            $('#mailConfirmCodeControlDiv').css({
                "animation": "fadeInUp",
                "animation-duration": "1s"
            });
            $('#mailConfirmCodeControlDiv').hide();
        }, 100);
        timer.reset(120);
        passiveTab('appCountLi', 'appCount');
    });

    $('#btnAppPreviewPrev').click(function () {


        responseMail = 0;
        btnAppPersonalNextClick = 0;
        responseConfirmCode = 0;

        $('#stopTimer').val('0');
        setTimeout(function () {
            $('#email1').removeAttr("readonly");
            $('#mailConfirmCodeControlDiv').css({
                "animation": "fadeInUp",
                "animation-duration": "1s"
            });
            $('#mailConfirmCodeControlDiv').hide();
        }, 100);
        timer.reset(120);
        passiveTab('appPersonalInfoLi', 'appPersonalInfo');
    });


    $('#btnAppPreviewNext').click(function () {
        var isapprovedprevchk = $('#previewchk');

        if (!isapprovedprevchk.is(':checked')) {
            swal({
                title: "خطا",
                text: "لطفا محل مربوط را انتخاب کنید",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else {

            var getcalendaractive = '1';
            if (2 > 1) {
                var set_new_consular_id = '1';
                var set_new_exit_office_id = $('.office').val();
                var set_new_service_type_id = $('.officetype').val();
                var set_new_calendar_type = $('.setnewcalendarstatus').val();


                if (($('.setnewcalendarstatus').val() == "1" || $('.setnewcalendarstatus').val() == "2" || $('.setnewcalendarstatus').val() == "3") && (getcalendaractive == "1")) {
                    $.ajax({
                        url: "https://it-ir-appointment.visametric.com/ir/appointment-form/personal/getdate",
                        type: "POST",
                        async: false,
                        data: {
                            consularid: set_new_consular_id,
                            exitid: set_new_exit_office_id,
                            servicetypeid: set_new_service_type_id,
                            calendarType: set_new_calendar_type,
                            totalperson: personCount,
                            mailConfirmCode: $('#mailConfirmCodeControl').val()
                        },
                        success: function (getvaliddates) {

                            var enableDays = getvaliddates;
                            $("#datepicker").datepicker({
                                maxViewMode: 2,
                                weekStart: 1,
                                beforeShowDay: function (date) {
                                    if (enableDays.indexOf(formatDate(date)) < 0)
                                        return {
                                            enabled: false
                                        }
                                    else
                                        return {
                                            enabled: true
                                        }
                                },
                                startDate: "+1d",
                                endDate: "+2m",
                                todayHighlight: true,
                                format: "dd-mm-yyyy",
                                clearBtn: true,
                                autoclose: true
                            });

                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            // console.log(textStatus, errorThrown);
                        }
                    });

                }
                var get_office_calendar_status = ($('.setnewcalendarstatus').val());

                if ((get_office_calendar_status == "1" || get_office_calendar_status == "2" || get_office_calendar_status == "3") && getcalendaractive == "1") {
                    $('.calendar_office_open').show();
                    $('.calendar_office_close').hide();
                } else {
                    $('.calendar_office_open').hide();
                    $('.calendar_office_close').show();
                    $('.setcalendarinfo').hide();
                }


                var set_app_country = '1';
                var set_app_city = $(".city option:selected").html();
                var set_app_office = $(".office option:selected").html();
                var set_app_service_type = $(".officetype option:selected").html();
                var set_app_person_count = $(".totalPerson option:selected").html();

                if (set_app_country == "1") {
                    set_app_country = "National-Student";
                } else if (set_app_country == "2") {
                    set_app_country = "Schengen";
                } else if (set_app_country == "3") {
                    set_app_country = "Legalization";
                } else if (set_app_country == "4") {
                    set_app_country = "National-Working";
                }

                $(".set_app_country").html("<b>نوع درخواست:</b> " + set_app_country + '');
                $(".set_app_city").html("<b>شهر محل زندگی:</b> " + set_app_city + '');
                $(".set_app_office").html("<b>مرکز دریافت مدارک:</b> " + set_app_office + '');
                $(".set_app_service_type").html("<b>نوع خدمات:</b> " + set_app_service_type + '');
                $(".set_app_person_count").html("<b>تعداد متقاضیان:</b> " + set_app_person_count + '');

                $(".set_app_date").html("<b>تاریخ:</b>");
                $(".set_app_time").html("<b>زمان:</b>");

                var country_id_service = '1';
                var office_id_service = $('.office').val();
                var service_type_id_service = $('.officetype').val();

                $.ajax({
                    url: "https://it-ir-appointment.visametric.com/ir/appointment-form/personal/getservices",
                    type: "POST",
                    async: false,
                    data: {
                        country_id: country_id_service,
                        service_type_id: service_type_id_service,
                        office_id: office_id_service,
                        languageID: '1'
                    },
                    success: function (response) {
                        if (response) {
                            $('.getajaxservice').html(response);
                        }

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        // console.log(textStatus, errorThrown);
                    }
                });
                passiveTab('appCalendarLi', 'appCalendar');
            }
        }

    });

    $('#btnAppServicesNext').click(function () {

        // var country_id_for_price = $('.country').val();
        // var service_type_id_for_price = $('.officetype').val();
        // var service_type_id_for_price = $('.officetype').val();
        // var office_id_for_price = $('.office').val();

        var serviceArray = new Array();
        $.each($("input[name='additionalservices[]']:checked"), function () {
            serviceArray.push($(this).val());
            // or you can do something to the actual checked checkboxes by working directly with  'this'
            // something like $(this).hide() (only something useful, probably) :P
        });


        $('.view_set_app_country').val('1');
        $('.view_set_app_office').val($('.office option:selected').html());
        $('.view_set_app_service_type').val($('.officetype option:selected').html());

        if (grecaptcha.getResponse().length < 1) {
            swal({
                title: "خطا",
                text: "لطفا محل مربوط را انتخاب کنید",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        } else {
            $('#personalForm').submit();
            $('#btnAppServicesNext').hide();
        }
        // passiveTab('appCreditCardLi', 'appCreditCard');

    });

    $('#btnAppCalendarNext').click(function () {
        $('#btnAppCalendarNext').css("display", "none");
        var getcalendaractive2 = '1';

        if (($('.setnewcalendarstatus').val() == "1" || $('.setnewcalendarstatus').val() == "2" || $('.setnewcalendarstatus').val() == "3") && (ct == "0")) {
            $('#btnAppCalendarNext').css("display", "block");
            swal({
                title: "خطار",
                text: "لطفاً یک تاریخ انتخاب کنید",
                confirmButtonColor: '#3085d6',
                confirmButtonText: "تایید",
                type: 'warning'
            });
            return false;
        }


        if (($('.setnewcalendarstatus').val() == "1" || $('.setnewcalendarstatus').val() == "2" || $('.setnewcalendarstatus').val() == "3") && (getcalendaractive2 == "1")) {
            if (ct.length > 25 && qtallvertval.length > 25) {
                $.ajax({
                    url: "https://it-ir-appointment.visametric.com/ir/appointment-form/controldate",
                    type: "POST",
                    async: false,
                    data: {
                        dateall: qtallvertval,
                        personCountTotal: personCount,
                        mailConfirmCode: $('#mailConfirmCodeControl').val()
                    },
                    success: function (response) {
                        if (response == "1") {
                            $('#btnAppCalendarNext').css("display", "none");
                            passiveTab('appServicesLi', 'appServices');
                        } else {
                            ct = 0;
                            qtallvertval = 0;
                            $('.xt5dk3ce').hide('slow');
                            $('#btnAppCalendarNext').css("display", "block");
                            swal({
                                title: "خطار",
                                text: "!لطفا تاریخ ملاقات دیگری انت",
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: "تایید",
                                type: 'warning'
                            });
                            return false;
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        // console.log(textStatus, errorThrown);
                    }
                });

            } else {
                $('#btnAppCalendarNext').css("display", "block");
                swal({
                    title: "خطار4",
                    text: "لطفاً یک تاریخ انتخاب کنید",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });
            }
        } else if ($('.setnewcalendarstatus').val() !== "1" || $('.setnewcalendarstatus').val() !== "2" || $('.setnewcalendarstatus').val() !== "3" || getcalendaractive2 !== "1") {
            $.ajax({
                url: "https://it-ir-appointment.visametric.com/ir/appointment-form/withoutcalendarquota",
                type: "POST",
                async: false,
                data: {dateall: 0, personCountTotal: personCount},
                success: function (response) {
                    if (response == "1") {
                        passiveTab('appServicesLi', 'appServices');
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // console.log(textStatus, errorThrown);
                }
            });
        }

    });


    $("#phone1").keyup(function (event) {
        $("#phone2").val($("#phone1").val());
        $("#phone3").val($("#phone1").val());
        $("#phone4").val($("#phone1").val());
        $("#phone5").val($("#phone1").val());
        $("#phone6").val($("#phone1").val());
    });

    $("#email1").keyup(function (event) {
        $("#email2").val($("#email1").val());
        $("#email3").val($("#email1").val());
        $("#email4").val($("#email1").val());
        $("#email5").val($("#email1").val());
        $("#email6").val($("#email1").val());
    });

    function inputControl() {
        for (i = 1; i <= personCount; i++) {
            var bgun = $('#birthday' + i).val();
            var bay = $('#birthmonth' + i).val();
            var byil = $('#birthyear' + i).val();

            if (byil % 4 === 0) {
                var dayCheck = 29;
            } else {
                var dayCheck = 28;
            }


            if (bgun > dayCheck & bay == 2) {
                swal({
                    title: "خطا",
                    text: i + "." + ".لطفا یک تاریخ تولد معتبر وارد کنید",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });
                return false;
            } else if (bgun > 30 & (bay == 4 || bay == 6 || bay == 9 || bay == 11)) {
                swal({
                    title: "خطا",
                    text: i + "." + ".لطفا یک تاریخ تولد معتبر وارد کنید",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: "تایید",
                    type: 'warning'
                });
                return false;
            }
        }
        var fieldArray = ['', 'name', 'surname', 'birthday', 'birthmonth', 'birthyear', 'passport', 'phone', 'email'];
        var fieldArrayDetail = {
            name_min: 2,
            name_max: 50,
            name_type: 'text',
            surname_min: 2,
            surname_max: 50,
            surname_type: 'text',
            birthday_min: 2,
            birthday_max: 5,
            birthday_type: 'text',
            birthmonth_min: 2,
            birthmonth_max: 5,
            birthmonth_type: 'text',
            birthyear_min: 2,
            birthyear_max: 5,
            birthyear_type: 'text',
            passport_min: 7,
            passport_max: 10,
            passport_type: 'passport',
            phone_min: 10,
            phone_max: 20,
            phone_type: 'text',
            email_min: 5,
            email_max: 100,
            email_type: 'email',
        };
        var i, k;
        loop1:
            for (i = 1; i <= personCount; i++) {

                if ($('#name' + i + '').val().match(/[^a-zA-Z iİıI]/g)) {
                    swal({
                        title: "خطا",
                        text: i + ".لطفا نام متقاضی را وارد نمایید!",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "تایید",
                        type: 'warning'
                    });
                    return false;
                    break loop1;
                }


                loop2:
                    for (k = 1; k <= fieldArray.length - 1; k++) {
                        if ($('#' + fieldArray[k] + '' + i + '').val() != undefined) {
                            var detailMin = fieldArray[k] + '_min';
                            var detailMax = fieldArray[k] + '_max';
                            var detailType = fieldArray[k] + '_type';

                            if (fieldArray[k] == 'birthyear') {
                                var bgun = $('#birthday' + i).val();
                                var bay = $('#birthmonth' + i).val();
                                var byil = $('#birthyear' + i).val();
                                var bfullbirthdate = (byil) + '' + (bay) + '' + (bgun);

                                var nowDate = new Date();
                                var nGun = nowDate.getDate();
                                var nAy = nowDate.getMonth() + 1;
                                var nYil = nowDate.getFullYear();
                                var nFullYear = (nYil + '' + (nAy < 10 ? 0 : '') + '' + nAy + '' + nGun);
                                // alert(nFullYear + ' - ' + bfullbirthdate);
                                if (nFullYear <= bfullbirthdate) {
                                    swal({
                                        title: "خطا",
                                        text: i + ".Kişinin doğum tarihi bugünden büyük olamaz!",
                                        confirmButtonColor: '#3085d6',
                                        confirmButtonText: "تایید",
                                        type: 'warning'
                                    });
                                    return false;
                                    break loop1;
                                    break loop2;
                                }

                            }

                            if ($('#' + fieldArray[k] + i).val().length < fieldArrayDetail[detailMin]) {
                                var fieldnameforemail1 = "" + fieldArray[k] + "";

                                var fieldControl = fieldArray[k];
                                var alertContent = null;
                                switch (fieldControl) {
                                    case 'name':
                                        alertContent = 'لطفا نام متقاضی را وارد نمایید!'
                                        break;
                                    case 'surname':
                                        alertContent = 'لطفا نام خانوادگی متقاضی را وارد نمایید!'
                                        break;
                                    case 'birthday':
                                        alertContent = 'لطفا روز تولد خود را وارد نمایید !'
                                        break;
                                    case 'birthmonth':
                                        alertContent = 'لطفا ماه تولد خود را وارد نمایید !'
                                        break;
                                    case 'birthyear':
                                        alertContent = 'لطفا سال تولد خود را وارد نمایید !'
                                        break;
                                    case 'passport':
                                        alertContent = 'لطفا شماره پاسپورت معتبر وارد نمایید !'
                                        break;
                                    case 'phone':
                                        alertContent = 'لطفا شماره تلفن معتبر خود را وارد نمایید !'
                                        break;
                                    case 'email':
                                        alertContent = 'آدرس ایمیل خود را وارد نمایید!'
                                        break;
                                }

                                if (fieldnameforemail1 !== "email") {
                                    $('#' + fieldArray[k] + '' + i + '').focus();
                                    swal({
                                        title: "خطا",
                                        text: "" + i + ". " + alertContent + "",
                                        confirmButtonColor: '#3085d6',
                                        confirmButtonText: "تایید",
                                        type: 'warning'
                                    });

                                    return false;
                                    break loop1;
                                    break loop2;
                                }
                            }
                            if ($('#' + fieldArray[k] + i).val().length > fieldArrayDetail[detailMax]) {
                                var fieldnameforemail2 = "" + fieldArray[k] + "";
                                var fieldControl2 = fieldArray[k];
                                var alertContent2 = null;
                                switch (fieldControl2) {
                                    case 'name':
                                        alertContent2 = 'لطفا نام متقاضی را وارد نمایید!'
                                        break;
                                    case 'surname':
                                        alertContent2 = 'لطفا نام خانوادگی متقاضی را وارد نمایید!'
                                        break;
                                    case 'birthday':
                                        alertContent2 = 'لطفا روز تولد خود را وارد نمایید !'
                                        break;
                                    case 'birthmonth':
                                        alertContent2 = 'لطفا ماه تولد خود را وارد نمایید !'
                                        break;
                                    case 'birthyear':
                                        alertContent2 = 'لطفا سال تولد خود را وارد نمایید !'
                                        break;
                                    case 'passport':
                                        alertContent2 = 'لطفا شماره پاسپورت معتبر وارد نمایید !'
                                        break;
                                    case 'phone':
                                        alertContent2 = 'لطفا شماره تلفن معتبر خود را وارد نمایید !'
                                        break;
                                    case 'email':
                                        alertContent2 = 'آدرس ایمیل خود را وارد نمایید!'
                                        break;
                                }
                                if (fieldnameforemail2 !== "email") {
                                    $('#' + fieldArray[k] + '' + i + '').focus();
                                    swal({
                                        title: "خطا",
                                        text: "" + i + ". " + alertContent2 + "",
                                        confirmButtonColor: '#3085d6',
                                        confirmButtonText: "تایید",
                                        type: 'warning'
                                    });
                                    return false;
                                    break loop1;
                                    break loop2;
                                }
                            }

                            // Email ve Pasaport için type kontrol yapılıyor.
                            if (fieldArrayDetail[detailType] == 'email') {
                                var emailControlResult = emailControl($('#' + fieldArray[k] + i).val());

                                if (!emailControlResult) {
                                    $('#' + fieldArray[k] + '' + i + '').focus();
                                    swal({
                                        title: "خطا",
                                        text: "" + i + ". " + "آدرس ایمیل خود را وارد نمایید!" + "",
                                        confirmButtonColor: '#3085d6',
                                        confirmButtonText: "تایید",
                                        type: 'warning'
                                    });
                                    return false;
                                    break loop1;
                                    break loop2;
                                }
                            }

                            if (fieldArrayDetail[detailType] == 'passport') {
                                var passportControlResult = passportControl($('#' + fieldArray[k] + i).val());

                                if (!passportControlResult) {
                                    $('#' + fieldArray[k] + '' + i + '').focus();
                                    swal({
                                        title: "خطا",
                                        text: "" + i + ". " + "لطفا شماره پاسپورت معتبر وارد نمایید !" + "",
                                        confirmButtonColor: '#3085d6',
                                        confirmButtonText: "تایید",
                                        type: 'warning'
                                    });
                                    return false;
                                    break loop1;
                                    break loop2;
                                }
                            }


                        }
                    }
            }
        return true;
    }


    function phoneControl(phone) {
        var regex = /^\d+$/;
        return regex.test(phone);
    }

    function emailControl(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function passportControl(passport) {
        var regex = /^([A-Za-z])([a-zA-Z0-9])+$/;

        return regex.test(passport);
    }

    $('.phoneNumberPath').on('keydown keyup', function (e) {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }

        var itemUp = this.value.turkishToUpper();

        $(this).val(itemUp);
    });


});
