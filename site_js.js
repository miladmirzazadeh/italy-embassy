<!DOCTYPE html>
<!--[if IE 8 ]>
<html class="ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="ir"
      lang="ir"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ir" lang="ir"><!--<![endif]-->
<head>
    <meta charset="utf-8">
    <!--[if IE]>
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <![endif]-->
    <title>Visametric - Visa Application Center</title>
    <meta name="description"
          content="VisaMetric is the visa application center approved by the relevant diplomatic missions.">
    <meta name="keywords"
          content="Visametric, visa, application, Germany, Italy">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="csrf-token" content="VygBemLyzEc74u8qZrzAeX5EAnoHnHYSzIqUWHB1"/>
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/bootstrap-rtl.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/jquery-ui.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/style.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/mobile.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/responsive.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/animate.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/datepicker.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/css/sweetalert.css">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/plugins/fancybox/source/jquery.fancybox.css?v=2.1.5">
    <link href="https://it-ir-appointment.visametric.com/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700' rel='stylesheet' type='text/css'>
    <link href="https://it-ir-appointment.visametric.com/front/images/common/favicon.png" rel="shortcut icon">
    <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/css/jvns-cookie.css">
    <!--[if IE]>
    <link rel="stylesheet" type="text/css" href="https://it-ir-appointment.visametric.com/css/jvns-cookie-ie.css"/>
    <![endif]-->
    <style>
        .sweet-overlay {
            z-index: 980 !important;
        }

        @-webkit-keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
            }
        }

        @keyframes  fadeInDown {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fadeInDown {
            -webkit-animation-name: fadeInDown;
            animation-name: fadeInDown;
        }

        th, td {
            font-size: 14px !important;
            text-align: center !important;
        }


                .dropdown-menu {
            left: unset !important;
            direction: rtl !important;
        }
        
    </style>
        <link rel="stylesheet" href="https://it-ir-appointment.visametric.com/front/stylesheets/pagetab.css">
    <link media="all" type="text/css" rel="stylesheet"
          href="https://it-ir-appointment.visametric.com/js/persian-datepicker/css/persian-datepicker.css">
    <style>
        .tooltip-image {
            z-index: -1;
        }

        .visibledt {
            z-index: 999;
            margin-top: -120px !important;
            right: -262px;
            opacity: 1 !important;
        }

        .visible-innerdt {
            max-width: unset;
            width: 600px;
        }

        input[type=checkbox] {
            /* Double-sized Checkboxes */
            -ms-transform: scale(2); /* IE */
            -moz-transform: scale(2); /* FF */
            -webkit-transform: scale(2); /* Safari and Chrome */
            -o-transform: scale(2); /* Opera */
            transform: scale(2);
            padding: 10px;
        }

        input::placeholder {
            text-transform: none;
        }

        /* Might want to wrap a span around your checkbox text */
        .checkboxtext {
            /* Checkbox text */
            font-size: 110%;
            display: inline;
        }

        .personalInfoDiv input {
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .tooltip {
            font-size: 15px !important;
            top: -22px !important;
        }

        .alert-warning > div > ul {
            padding-left: 20px !important;
            padding-right: 20px !important;
        }

    </style>
</head>
<body class="header02 left-sidebar">

<div class="topbar sticky-topbar">
    <div class="container">
        <div class="row">
            <div>
                <div class="col-sm-10 col-xs-9 left">
                    <p id="logo" class="logo02">
                        <a href="https://it-ir-appointment.visametric.com/ir" rel="home">
                            <img src="https://it-ir-appointment.visametric.com/front/images/common/logo.png" alt="iDATA"/>
                        </a>
                    </p>
                    <ul>
                        <li>
                            <div class="visaauth" style="width:265px !important">
                                <a href="#">
                                    .ویزامتریک مرکز درخواست ویزا می باشد که توسط هیئت های مربوطه دیپلماتیک تصویب شده است
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-2 col-xs-3 right" style="top: 0px !important; ">
                    <img class="flag" src="https://it-ir-appointment.visametric.com/front/images/common/en-flag.gif" alt="ir"/>
                    <select name="language" id="language" class="language" style="cursor: pointer;">
                                                    <option value="ir" selected>
                                فارسی
                            </option>
                                                    <option value="en" >
                                English
                            </option>
                                                    <option value="it" >
                                Italiano
                            </option>
                                            </select>

                </div>
            </div>
        </div>
    </div>
</div>
<header id="header" class="header header-sticky">
    <div class="header-wrap">
        <div class="header-nav">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="btn-menu"></div>
                        <nav id="mainnav" class="mainnav menufloatright">
                            <ul class="menu">
                                <div class="  menufloatright">
                                    <a href="https://it-ir-appointment.visametric.com/ir/home">
                                        خانه
                                    </a>
                                </div>





                                <div class="  menufloatright">
                                    <a href="https://it-ir-appointment.visametric.com/ir/editappointment">
                                        کنسل کردن قرار ملاقات / تغییر تاریخ قرارملاقات
                                    </a>
                                </div>
                                <div class="  menufloatright" >
                                    <a href="https://it-ir-appointment.visametric.com/ir/faq">
                                        سوالات متداول  (FAQ)
                                    </a>
                                </div>
                                <div class="  menufloatright" >
                                    <a href="https://it-ir-appointment.visametric.com/ir/support">
                                        فرم پشتیبانی
                                    </a>
                                </div>


                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="origin">
    
        <div style="background:#fff; clear: both">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div style="margin-top:35px;">
                        <ul style="padding:0">
                            شما جهت تکمیل اطلاعات درخواست ملاقات 10 دقیقه فرصت خواهید داشت ، لطفا مطمئن شوید همه اطلاعات شخصی خود را به درستی وارد نموده اید .
                        </ul>
                    </div>
                </div>

                <div class="container">
                    <div class="col-md-12" style="padding: 0">
                        زمان باقی مانده : <span id="watch"></span>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="boardc">
                        <div class="board-inner">
                            <ul class="nav nav-tabs" id="myTab">
                                <div class="liner"></div>

                                <li class="appCountLi" data-toggle="tooltip" data-toggle="tooltip" data-placement="top"
                                    title="جزئیات ملاقات"
                                    data-original-title="جزئیات ملاقات">
                                    <a href="javascript:void(0)" data-toggle=""
                                       title="جزئیات ملاقات">
                                        <span class="round-tabs one"
                                              title="جزئیات ملاقات">
                                            <i class="fa fa-users" aria-hidden="true"
                                               title="جزئیات ملاقات"></i>
                                        </span>
                                    </a>
                                </li>

                                <li class="appPersonalInfoLi" data-toggle="tooltip" data-toggle="tooltip"
                                    data-placement="top" title="اطلاعات شخصی"
                                    data-original-title="اطلاعات شخصی">
                                    <a href="javascript:void(0)" data-toggle=""
                                       title="اطلاعات شخصی">
                                        <span class="round-tabs two"
                                              title="اطلاعات شخصی">
                                            <i class="fa fa-user" aria-hidden="true"
                                               title="اطلاعات شخصی"></i>
                                        </span>
                                    </a>
                                </li>

                                <li class="appPreviewLi" data-toggle="tooltip" data-toggle="tooltip"
                                    data-placement="top" title="پیش نمایش"
                                    data-original-title="پیش نمایش">
                                    <a href="javascript:void(0)" data-toggle=""
                                       title="پیش نمایش">
                                        <span class="round-tabs four"
                                              title="پیش نمایش">
                                            <i class="fa fa-eye"
                                               title="پیش نمایش"></i>
                                        </span>
                                    </a>
                                </li>

                                <li class="appCalendarLi" data-toggle="tooltip"
                                    data-toggle="tooltip"
                                    data-placement="top" title="تقویم"
                                    data-original-title="تقویم">
                                    <a href="javascript:void(0)" data-toggle=""
                                       title="تقویم">
                                        <span class="round-tabs five"
                                              title="تقویم">
                                            <i class="fa fa-calendar"
                                               title="تقویم"></i>
                                        </span>
                                    </a>
                                </li>

                                <li class="appServicesLi" data-toggle="tooltip"
                                    data-toggle="tooltip"
                                    data-placement="top" title="خدمات اضافی"
                                    data-original-title="خدمات اضافی">
                                    <a href="javascript:void(0)" data-toggle=""
                                       title="خدمات اضافی">
                                        <span class="round-tabs three"
                                              title="خدمات اضافی">
                                            <i class="fa fa-puzzle-piece"
                                               title="خدمات اضافی"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <form action="https://it-ir-appointment.visametric.com/ir/appointment-form/personal/create" method="POST"
                              name="personalForm" id="personalForm">
                            <input type="hidden" name="_token" value="VygBemLyzEc74u8qZrzAeX5EAnoHnHYSzIqUWHB1">                            <div class="tab-content">
                                <div class="tab-pane fade in active" id="appCount">
                                    <h3 class="head text-center formTabHeadTitle">
                                        جزئیات ملاقات
                                    </h3>

                                    <div class="alert alert-warning jvnsMt20 divtotalamount" role="alert"
                                         style="display:none">
                                        <div class="totalprice"></div>
                                    </div>

                                    <div class="alert alert-warning jvnsMt20" role="alert">
                                        <div><ul><li>لطفا از پاسپورت و مدارک شناسایی خود&nbsp; برای تکمیل مرحله بعد استفاده نمایید ، اطلاعات هویتی خود را مطابق آنچه در پاسپورت شما ثبت شده است و با</li><li>حروف لاتین وارد نمایید.</li><li>درستی و صحت اطلاعات خود را کنترل نمایید .</li><li>اطلاعات وارد شده توسط شما قابل تغییر نمی باشد .</li><li>جزئیات قرار ملاقات برای شما از طریق ایمیل ارسال خواهد شد .</li></ul></div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="col-md-12" style="margin-top: 5vh">
                                                <input type="hidden"
                                                       value="1"
                                                       name="applicationType">
                                            </div>

                                            <div class="col-md-12">
                                                <div id="ajaxcity">
                                                    <select name="city" id="city" class="form-control jvnsMt20 city">
                                                        <option value="0" selected="selected">
                                                            شهر محل زندگی
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div id="ajaxoffice">
                                                    <select name="office" id="office" class="form-control jvnsMt20">
                                                        <option value="0" selected="selected">
                                                            مرکز دریافت مدارک
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div id="ajaxofficetype">
                                                    <select name="officetype" id="officetype"
                                                            class="form-control jvnsMt20 officetype">
                                                        <option value="0" selected="selected">
                                                            نوع خدمات
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <select name="totalPerson" id="totalPerson"
                                                        class="form-control jvnsMt20 totalPerson" style="width: 100%">
                                                    <option
                                                        value="0">تعداد متقاضیان</option>
                                                    <option value="1">1
                                                        متقاضی
                                                    </option>
                                                    <option value="2">2
                                                        متقاضی
                                                    </option>
                                                    <option value="3">3
                                                        متقاضی
                                                    </option>
                                                    <option value="4">4
                                                        متقاضی
                                                    </option>
                                                    <option value="5">5
                                                        متقاضی
                                                    </option>
                                                    <option value="6">6
                                                        متقاضی
                                                    </option>
                                                </select>
                                            </div>

                                            <input type="hidden" id="rawTotalFEE">

                                            <div class="col-md-12 parentTotalFee"
                                                 style="margin-top: 10px; display:none">
                                                <div class="alert alert-success">
                                                    <p id="totalFEE"></p>
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="col-md-12 text-center" id="paytype"
                                                     style="border-top: 1px solid rgb(204, 204, 204); padding:0; display: none;">
                                                    <p>نوع پرداخت</p>
                                                    <div class="col-sm-6">
                                                        <input style="" type="radio" name="paytype" value="transfer"
                                                               class="paytype" id="transfer">
                                                        <label
                                                            for="transfer"> حواله بانکی</label>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input type="radio" name="paytype" value="atm"
                                                               class="paymentpay" id="atm">
                                                        <label
                                                            for="atm"> کارت و مبایل بانک</label>
                                                    </div>
                                                    <p id="uyari9"></p>

                                                </div>
                                            </div>
                                            <div class="col-sm-12 text-center" id="xavailableDayInfox"
                                                 style="border-top: 1px solid #ccc; padding-top: 15px; padding-bottom: 15px; display: none;">
                                            </div>

                                        </div>

                                        <div class="col-md-6 col-xs-12 karsilama-metin leftmaincontent">
                                                                                            <div>ویزای ملی ( فقط برای متقاضیان ویزای دانشجویی)</div>
<br>
<div>مبلغ رزرو قرار ملاقات خود را بر اساس نوع درخواست خود به ازای هر نفر به حساب زیر واریز نمایید ، لطفا به ازای هر نفر مبلغ کامل پرداخت گردد.</div>
<br>
<div>هزینه رزرو قرار ملاقات به شرح ذیل است</div>
<div>ویزای ملی (عادی/اختصاصی): 14.000.000 ریال</div>
<br>
<div>نام صاحب حساب : رهیاب گذر آرتا</div>
<div>نام بانک : سامان</div><div><br></div>
<div><div>شماره حساب : 80981027883032</div><div>6219867000117305 : شماره کارت<br></div></div><div><br></div>
<div>پس از 24 ساعت مبلغ واریزی شما جهت رزرو قرار ملاقات قابل استفاده خواهد بود ، برای پرداخت بانکی لطفا شماره پیگیری و تاریخ پرداخت و برای پرداخت با کارت شماره کارت و تاریخ پرداخت را در محل مربوط رزرو آنلاین وقت ملاقات وارد نمایید . </div>
                                                                                        
                                        </div>
                                    </div>


                                    <div class="row" style="margin: 0; display: none;" id="transactionDiv">
                                        <div class="col-sm-6 text-center" style="padding:0">
                                            <div class="col-md-12 linejvns" style="margin-bottom: 10px"></div>
                                            <div class="col-md-6">
                                                <div class="form-group text-center">
                                                    <div class="tooltip tooltip-image top" role="tooltip"
                                                         style="padding-top: 10px">
                                                        <div class="tooltip-arrow"></div>
                                                        <div class="tooltip-inner" style="background-color: unset;">
                                                            <img src="https://it-ir-appointment.visametric.com/assets/images/transaction.jpg">
                                                        </div>
                                                    </div>
                                                    <input type="text" class="togtooltip form-control"
                                                           name="transactionid"
                                                           id="transactionid" placeholder="Transaction ID"
                                                           data-toggle="tooltip" title="Transaction ID !!">
                                                    <i style="cursor:pointer;font-size:20px; margin-top: 5px"
                                                       data-toggle="tooltip-image"
                                                       class="togtooltip fa fa-question-circle">
                                                    </i>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group date">
                                                    <input type="text" name="transactionDatePicker" id="popupDatepicker"
                                                           readonly="true"
                                                           class="form-control datepicker is-calendarsPicker">
                                                    <span class="input-group-addon"><i
                                                            class="fa fa-calendar pers1calendar"
                                                            aria-hidden="true"></i></span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row" style="margin: 0; display: none;" id="paymentCardDiv">
                                        <div class="col-sm-6 text-center" style="padding:0">
                                            <div class="col-md-12 linejvns" style="margin-bottom: 10px"></div>
                                            <div class="col-md-6">
                                                <div class="form-group text-center">
                                                    <input type="text" class="togtooltip form-control"
                                                           name="card"
                                                           id="paymentCardInput"
                                                           placeholder="شماره کارت"
                                                           data-toggle="tooltip" title="Card" value="">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="input-group date">
                                                    <input type="text" name="cardDatepicker" id="popupDatepicker2"
                                                           class="form-control datepicker is-calendarsPicker"
                                                           readonly="readonly">
                                                    <span class="input-group-addon"><i
                                                            class="fa fa-calendar pers2calendar"
                                                            aria-hidden="true"></i></span>

                                                </div>
                                            </div>
                                            <div class="col-md-12" id="checkCardListBtnDiv"
                                                 style="margin-top: 10px; display: none;">
                                                <a href="javascript:void(0)" class="btn btn-block btn-primary"
                                                   id="checkCardListBtn">
                                                    <i class="fa fa-refresh"></i>
                                                    بررسی
                                                </a>

                                            </div>
                                        </div>
                                        <div class="col-md-12" id="checkCardListDiv" style="margin-top: 20px">
                                        </div>
                                    </div>

                                    <p class="text-center btnNextJvns col-md-12">
                                        <a href="javascript:void(0)" id="btnAppCountNext" style="display:none"
                                           class="btn btn-success green col-md-12">
                                            بعدی
                                            <span style="margin-left:10px;" class="fa fa-angle-double-right"></span></a>
                                    </p>
                                    <div class="col-md-12">
                                        <p class="alert alert-danger paymentAlert"
                                           style="display:none;"> انتقال وجه شما یافت نشد ، لطفا کنترل نمایید مبلغ صحیح رزرو قرار ملاقات واریز شده باشد یا عملیات انتقال وجه موفقیت آمیز بوده است و یا مبلغ واریز شده جهت رزرو قرار ملاقات یکبار استفاده شده باشد . در صورتی که موارد بالا به درستی انجام شده باشد لطفا از طریق فرم پشتیبانی سایت برای ما درخواست ارسال نمایید ، فراموش نکنید رسید انتقال خود را پیوست فرم درخواست پشتیبانی نمایید . </p>
                                    </div>
                                    <div class="col-md-12">
                                        <p class="alert alert-danger paymentDateAlert"
                                           style="display:none;">../../.. tarihinden önceki ödemeler kabul edilmektedir. 5000/00/00</p>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="appPersonalInfo">
                                    <h3 class="head text-center formTabHeadTitle">
                                        اطلاعات شخصی
                                    </h3>

                                    <div class="alert alert-warning" style="margin-top: 30px" role="alert">
                                        <p>
                                            متقاضی تایید و اظهار می نماید ، جمع آوری و نگهداری مدارک ایشان جهت انجام فرایندهای ویزا ، ارسال آن به بخش های مختلف سفارت جهت رسیدگی ها تا 90 روز مورد تایید ایشان می باشد . متقاضی موظف است اطلاعات کامل و صحیح شخصی خود را جهت ثبت قرار ملاقات در سیستم درج نماید ، متقاضی در خصوص اطلاعات ناقص ، اطلاعات غلط ، توضیحات و شرایط نادرست و نتایج تابعه از آن شخصا پاسخگو خواهد بود و ویزامتریک در این خصوص مسئولیتی نخواهد داشت .
                                        </p>
                                    </div>

                                    <div class="col-md-12 linejvns"></div>

                                    <div class="row personalInfoDiv">
                                        <div class="col-md-6">
                                            <input type="text" class="form-control" name="sheba_number"
                                                   style="text-transform:uppercase"
                                                   placeholder=" شماره شبا ( بانک های سامان ، کوثر ، قوامین ، انصار ، مهر مورد تایید نمی باشد.) (*)"
                                                   id="scheba_number" maxlength="26">
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control upperCaseJvns" name="sheba_name"
                                                   placeholder=" نام صاحب شماره شبا به فارسی (*)"
                                                   id="scheba_name" maxlength="50">
                                        </div>


                                                                                <div class="col-md-4 person1">
                                            <div class="person_title">
                                                <h3>
                                                    1
                                                    .متقاضی
                                                                                                            (اصلی)
                                                                                                    </h3>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="name1"
                                                       id="name1"
                                                       placeholder="نام (*)">
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="surname1"
                                                       id="surname1"
                                                       placeholder="نام خانوادگی (*)">
                                            </div>
                                            <div style="margin-bottom: 8px; display: table-row">
                                                <select name="birthday1" id="birthday1"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">

                                                    <option value="0" selected="selected">
                                                        روز تولد (*)
                                                    </option>

                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                            <option value="13">13</option>                                                                                                            <option value="14">14</option>                                                                                                            <option value="15">15</option>                                                                                                            <option value="16">16</option>                                                                                                            <option value="17">17</option>                                                                                                            <option value="18">18</option>                                                                                                            <option value="19">19</option>                                                                                                            <option value="20">20</option>                                                                                                            <option value="21">21</option>                                                                                                            <option value="22">22</option>                                                                                                            <option value="23">23</option>                                                                                                            <option value="24">24</option>                                                                                                            <option value="25">25</option>                                                                                                            <option value="26">26</option>                                                                                                            <option value="27">27</option>                                                                                                            <option value="28">28</option>                                                                                                            <option value="29">29</option>                                                                                                            <option value="30">30</option>                                                                                                            <option value="31">31</option>                                                                                                    </select>
                                                <select name="birthmonth1" id="birthmonth1"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        ماه تولد (*)
                                                    </option>
                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                    </select>
                                                <select name="birthyear1" id="birthyear1"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        سال تولد (*)
                                                    </option>
                                                                                                                <option value="1900">1900</option>                                                                                                            <option value="1901">1901</option>                                                                                                            <option value="1902">1902</option>                                                                                                            <option value="1903">1903</option>                                                                                                            <option value="1904">1904</option>                                                                                                            <option value="1905">1905</option>                                                                                                            <option value="1906">1906</option>                                                                                                            <option value="1907">1907</option>                                                                                                            <option value="1908">1908</option>                                                                                                            <option value="1909">1909</option>                                                                                                            <option value="1910">1910</option>                                                                                                            <option value="1911">1911</option>                                                                                                            <option value="1912">1912</option>                                                                                                            <option value="1913">1913</option>                                                                                                            <option value="1914">1914</option>                                                                                                            <option value="1915">1915</option>                                                                                                            <option value="1916">1916</option>                                                                                                            <option value="1917">1917</option>                                                                                                            <option value="1918">1918</option>                                                                                                            <option value="1919">1919</option>                                                                                                            <option value="1920">1920</option>                                                                                                            <option value="1921">1921</option>                                                                                                            <option value="1922">1922</option>                                                                                                            <option value="1923">1923</option>                                                                                                            <option value="1924">1924</option>                                                                                                            <option value="1925">1925</option>                                                                                                            <option value="1926">1926</option>                                                                                                            <option value="1927">1927</option>                                                                                                            <option value="1928">1928</option>                                                                                                            <option value="1929">1929</option>                                                                                                            <option value="1930">1930</option>                                                                                                            <option value="1931">1931</option>                                                                                                            <option value="1932">1932</option>                                                                                                            <option value="1933">1933</option>                                                                                                            <option value="1934">1934</option>                                                                                                            <option value="1935">1935</option>                                                                                                            <option value="1936">1936</option>                                                                                                            <option value="1937">1937</option>                                                                                                            <option value="1938">1938</option>                                                                                                            <option value="1939">1939</option>                                                                                                            <option value="1940">1940</option>                                                                                                            <option value="1941">1941</option>                                                                                                            <option value="1942">1942</option>                                                                                                            <option value="1943">1943</option>                                                                                                            <option value="1944">1944</option>                                                                                                            <option value="1945">1945</option>                                                                                                            <option value="1946">1946</option>                                                                                                            <option value="1947">1947</option>                                                                                                            <option value="1948">1948</option>                                                                                                            <option value="1949">1949</option>                                                                                                            <option value="1950">1950</option>                                                                                                            <option value="1951">1951</option>                                                                                                            <option value="1952">1952</option>                                                                                                            <option value="1953">1953</option>                                                                                                            <option value="1954">1954</option>                                                                                                            <option value="1955">1955</option>                                                                                                            <option value="1956">1956</option>                                                                                                            <option value="1957">1957</option>                                                                                                            <option value="1958">1958</option>                                                                                                            <option value="1959">1959</option>                                                                                                            <option value="1960">1960</option>                                                                                                            <option value="1961">1961</option>                                                                                                            <option value="1962">1962</option>                                                                                                            <option value="1963">1963</option>                                                                                                            <option value="1964">1964</option>                                                                                                            <option value="1965">1965</option>                                                                                                            <option value="1966">1966</option>                                                                                                            <option value="1967">1967</option>                                                                                                            <option value="1968">1968</option>                                                                                                            <option value="1969">1969</option>                                                                                                            <option value="1970">1970</option>                                                                                                            <option value="1971">1971</option>                                                                                                            <option value="1972">1972</option>                                                                                                            <option value="1973">1973</option>                                                                                                            <option value="1974">1974</option>                                                                                                            <option value="1975">1975</option>                                                                                                            <option value="1976">1976</option>                                                                                                            <option value="1977">1977</option>                                                                                                            <option value="1978">1978</option>                                                                                                            <option value="1979">1979</option>                                                                                                            <option value="1980">1980</option>                                                                                                            <option value="1981">1981</option>                                                                                                            <option value="1982">1982</option>                                                                                                            <option value="1983">1983</option>                                                                                                            <option value="1984">1984</option>                                                                                                            <option value="1985">1985</option>                                                                                                            <option value="1986">1986</option>                                                                                                            <option value="1987">1987</option>                                                                                                            <option value="1988">1988</option>                                                                                                            <option value="1989">1989</option>                                                                                                            <option value="1990">1990</option>                                                                                                            <option value="1991">1991</option>                                                                                                            <option value="1992">1992</option>                                                                                                            <option value="1993">1993</option>                                                                                                            <option value="1994">1994</option>                                                                                                            <option value="1995">1995</option>                                                                                                            <option value="1996">1996</option>                                                                                                            <option value="1997">1997</option>                                                                                                            <option value="1998">1998</option>                                                                                                            <option value="1999">1999</option>                                                                                                            <option value="2000">2000</option>                                                                                                            <option value="2001">2001</option>                                                                                                            <option value="2002">2002</option>                                                                                                            <option value="2003">2003</option>                                                                                                            <option value="2004">2004</option>                                                                                                            <option value="2005">2005</option>                                                                                                            <option value="2006">2006</option>                                                                                                            <option value="2007">2007</option>                                                                                                            <option value="2008">2008</option>                                                                                                            <option value="2009">2009</option>                                                                                                            <option value="2010">2010</option>                                                                                                            <option value="2011">2011</option>                                                                                                            <option value="2012">2012</option>                                                                                                            <option value="2013">2013</option>                                                                                                            <option value="2014">2014</option>                                                                                                            <option value="2015">2015</option>                                                                                                            <option value="2016">2016</option>                                                                                                            <option value="2017">2017</option>                                                                                                            <option value="2018">2018</option>                                                                                                            <option value="2019">2019</option>                                                                                                            <option value="2020">2020</option>                                                                                                            <option value="2021">2021</option>                                                                                                            <option value="2022">2022</option>                                                                                                            <option value="2023">2023</option>                                                                                                    </select>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control upperCasePassport jvnsPassportRegex turkishReplaceJvns"
                                                       maxlength="10"
                                                       name="passport1"
                                                       id="passport1"
                                                       placeholder="شماره پاسپورت (*)">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone1"
                                                       id="phone1"
                                                       placeholder="شماره تماس (*)">
                                            </div>

                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone21"
                                                       id="phone21"
                                                       placeholder="اطلاعات تماس اضطراری">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="email1"
                                                       id="email1"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>
                                            <div style="display: none">
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="alternativeemail1"
                                                       id="email1"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>

                                        </div>


                                                                                <div class="col-md-4 person2">
                                            <div class="person_title">
                                                <h3>
                                                    2
                                                    .متقاضی
                                                                                                    </h3>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="name2"
                                                       id="name2"
                                                       placeholder="نام (*)">
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="surname2"
                                                       id="surname2"
                                                       placeholder="نام خانوادگی (*)">
                                            </div>
                                            <div style="margin-bottom: 8px; display: table-row">
                                                <select name="birthday2" id="birthday2"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">

                                                    <option value="0" selected="selected">
                                                        روز تولد (*)
                                                    </option>

                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                            <option value="13">13</option>                                                                                                            <option value="14">14</option>                                                                                                            <option value="15">15</option>                                                                                                            <option value="16">16</option>                                                                                                            <option value="17">17</option>                                                                                                            <option value="18">18</option>                                                                                                            <option value="19">19</option>                                                                                                            <option value="20">20</option>                                                                                                            <option value="21">21</option>                                                                                                            <option value="22">22</option>                                                                                                            <option value="23">23</option>                                                                                                            <option value="24">24</option>                                                                                                            <option value="25">25</option>                                                                                                            <option value="26">26</option>                                                                                                            <option value="27">27</option>                                                                                                            <option value="28">28</option>                                                                                                            <option value="29">29</option>                                                                                                            <option value="30">30</option>                                                                                                            <option value="31">31</option>                                                                                                    </select>
                                                <select name="birthmonth2" id="birthmonth2"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        ماه تولد (*)
                                                    </option>
                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                    </select>
                                                <select name="birthyear2" id="birthyear2"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        سال تولد (*)
                                                    </option>
                                                                                                                <option value="1900">1900</option>                                                                                                            <option value="1901">1901</option>                                                                                                            <option value="1902">1902</option>                                                                                                            <option value="1903">1903</option>                                                                                                            <option value="1904">1904</option>                                                                                                            <option value="1905">1905</option>                                                                                                            <option value="1906">1906</option>                                                                                                            <option value="1907">1907</option>                                                                                                            <option value="1908">1908</option>                                                                                                            <option value="1909">1909</option>                                                                                                            <option value="1910">1910</option>                                                                                                            <option value="1911">1911</option>                                                                                                            <option value="1912">1912</option>                                                                                                            <option value="1913">1913</option>                                                                                                            <option value="1914">1914</option>                                                                                                            <option value="1915">1915</option>                                                                                                            <option value="1916">1916</option>                                                                                                            <option value="1917">1917</option>                                                                                                            <option value="1918">1918</option>                                                                                                            <option value="1919">1919</option>                                                                                                            <option value="1920">1920</option>                                                                                                            <option value="1921">1921</option>                                                                                                            <option value="1922">1922</option>                                                                                                            <option value="1923">1923</option>                                                                                                            <option value="1924">1924</option>                                                                                                            <option value="1925">1925</option>                                                                                                            <option value="1926">1926</option>                                                                                                            <option value="1927">1927</option>                                                                                                            <option value="1928">1928</option>                                                                                                            <option value="1929">1929</option>                                                                                                            <option value="1930">1930</option>                                                                                                            <option value="1931">1931</option>                                                                                                            <option value="1932">1932</option>                                                                                                            <option value="1933">1933</option>                                                                                                            <option value="1934">1934</option>                                                                                                            <option value="1935">1935</option>                                                                                                            <option value="1936">1936</option>                                                                                                            <option value="1937">1937</option>                                                                                                            <option value="1938">1938</option>                                                                                                            <option value="1939">1939</option>                                                                                                            <option value="1940">1940</option>                                                                                                            <option value="1941">1941</option>                                                                                                            <option value="1942">1942</option>                                                                                                            <option value="1943">1943</option>                                                                                                            <option value="1944">1944</option>                                                                                                            <option value="1945">1945</option>                                                                                                            <option value="1946">1946</option>                                                                                                            <option value="1947">1947</option>                                                                                                            <option value="1948">1948</option>                                                                                                            <option value="1949">1949</option>                                                                                                            <option value="1950">1950</option>                                                                                                            <option value="1951">1951</option>                                                                                                            <option value="1952">1952</option>                                                                                                            <option value="1953">1953</option>                                                                                                            <option value="1954">1954</option>                                                                                                            <option value="1955">1955</option>                                                                                                            <option value="1956">1956</option>                                                                                                            <option value="1957">1957</option>                                                                                                            <option value="1958">1958</option>                                                                                                            <option value="1959">1959</option>                                                                                                            <option value="1960">1960</option>                                                                                                            <option value="1961">1961</option>                                                                                                            <option value="1962">1962</option>                                                                                                            <option value="1963">1963</option>                                                                                                            <option value="1964">1964</option>                                                                                                            <option value="1965">1965</option>                                                                                                            <option value="1966">1966</option>                                                                                                            <option value="1967">1967</option>                                                                                                            <option value="1968">1968</option>                                                                                                            <option value="1969">1969</option>                                                                                                            <option value="1970">1970</option>                                                                                                            <option value="1971">1971</option>                                                                                                            <option value="1972">1972</option>                                                                                                            <option value="1973">1973</option>                                                                                                            <option value="1974">1974</option>                                                                                                            <option value="1975">1975</option>                                                                                                            <option value="1976">1976</option>                                                                                                            <option value="1977">1977</option>                                                                                                            <option value="1978">1978</option>                                                                                                            <option value="1979">1979</option>                                                                                                            <option value="1980">1980</option>                                                                                                            <option value="1981">1981</option>                                                                                                            <option value="1982">1982</option>                                                                                                            <option value="1983">1983</option>                                                                                                            <option value="1984">1984</option>                                                                                                            <option value="1985">1985</option>                                                                                                            <option value="1986">1986</option>                                                                                                            <option value="1987">1987</option>                                                                                                            <option value="1988">1988</option>                                                                                                            <option value="1989">1989</option>                                                                                                            <option value="1990">1990</option>                                                                                                            <option value="1991">1991</option>                                                                                                            <option value="1992">1992</option>                                                                                                            <option value="1993">1993</option>                                                                                                            <option value="1994">1994</option>                                                                                                            <option value="1995">1995</option>                                                                                                            <option value="1996">1996</option>                                                                                                            <option value="1997">1997</option>                                                                                                            <option value="1998">1998</option>                                                                                                            <option value="1999">1999</option>                                                                                                            <option value="2000">2000</option>                                                                                                            <option value="2001">2001</option>                                                                                                            <option value="2002">2002</option>                                                                                                            <option value="2003">2003</option>                                                                                                            <option value="2004">2004</option>                                                                                                            <option value="2005">2005</option>                                                                                                            <option value="2006">2006</option>                                                                                                            <option value="2007">2007</option>                                                                                                            <option value="2008">2008</option>                                                                                                            <option value="2009">2009</option>                                                                                                            <option value="2010">2010</option>                                                                                                            <option value="2011">2011</option>                                                                                                            <option value="2012">2012</option>                                                                                                            <option value="2013">2013</option>                                                                                                            <option value="2014">2014</option>                                                                                                            <option value="2015">2015</option>                                                                                                            <option value="2016">2016</option>                                                                                                            <option value="2017">2017</option>                                                                                                            <option value="2018">2018</option>                                                                                                            <option value="2019">2019</option>                                                                                                            <option value="2020">2020</option>                                                                                                            <option value="2021">2021</option>                                                                                                            <option value="2022">2022</option>                                                                                                            <option value="2023">2023</option>                                                                                                    </select>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control upperCasePassport jvnsPassportRegex turkishReplaceJvns"
                                                       maxlength="10"
                                                       name="passport2"
                                                       id="passport2"
                                                       placeholder="شماره پاسپورت (*)">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone2"
                                                       id="phone2"
                                                       placeholder="شماره تماس (*)">
                                            </div>

                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone22"
                                                       id="phone22"
                                                       placeholder="اطلاعات تماس اضطراری">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="email2"
                                                       id="email2"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>
                                            <div style="display: none">
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="alternativeemail2"
                                                       id="email2"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>

                                        </div>


                                                                                <div class="col-md-4 person3">
                                            <div class="person_title">
                                                <h3>
                                                    3
                                                    .متقاضی
                                                                                                    </h3>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="name3"
                                                       id="name3"
                                                       placeholder="نام (*)">
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="surname3"
                                                       id="surname3"
                                                       placeholder="نام خانوادگی (*)">
                                            </div>
                                            <div style="margin-bottom: 8px; display: table-row">
                                                <select name="birthday3" id="birthday3"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">

                                                    <option value="0" selected="selected">
                                                        روز تولد (*)
                                                    </option>

                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                            <option value="13">13</option>                                                                                                            <option value="14">14</option>                                                                                                            <option value="15">15</option>                                                                                                            <option value="16">16</option>                                                                                                            <option value="17">17</option>                                                                                                            <option value="18">18</option>                                                                                                            <option value="19">19</option>                                                                                                            <option value="20">20</option>                                                                                                            <option value="21">21</option>                                                                                                            <option value="22">22</option>                                                                                                            <option value="23">23</option>                                                                                                            <option value="24">24</option>                                                                                                            <option value="25">25</option>                                                                                                            <option value="26">26</option>                                                                                                            <option value="27">27</option>                                                                                                            <option value="28">28</option>                                                                                                            <option value="29">29</option>                                                                                                            <option value="30">30</option>                                                                                                            <option value="31">31</option>                                                                                                    </select>
                                                <select name="birthmonth3" id="birthmonth3"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        ماه تولد (*)
                                                    </option>
                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                    </select>
                                                <select name="birthyear3" id="birthyear3"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        سال تولد (*)
                                                    </option>
                                                                                                                <option value="1900">1900</option>                                                                                                            <option value="1901">1901</option>                                                                                                            <option value="1902">1902</option>                                                                                                            <option value="1903">1903</option>                                                                                                            <option value="1904">1904</option>                                                                                                            <option value="1905">1905</option>                                                                                                            <option value="1906">1906</option>                                                                                                            <option value="1907">1907</option>                                                                                                            <option value="1908">1908</option>                                                                                                            <option value="1909">1909</option>                                                                                                            <option value="1910">1910</option>                                                                                                            <option value="1911">1911</option>                                                                                                            <option value="1912">1912</option>                                                                                                            <option value="1913">1913</option>                                                                                                            <option value="1914">1914</option>                                                                                                            <option value="1915">1915</option>                                                                                                            <option value="1916">1916</option>                                                                                                            <option value="1917">1917</option>                                                                                                            <option value="1918">1918</option>                                                                                                            <option value="1919">1919</option>                                                                                                            <option value="1920">1920</option>                                                                                                            <option value="1921">1921</option>                                                                                                            <option value="1922">1922</option>                                                                                                            <option value="1923">1923</option>                                                                                                            <option value="1924">1924</option>                                                                                                            <option value="1925">1925</option>                                                                                                            <option value="1926">1926</option>                                                                                                            <option value="1927">1927</option>                                                                                                            <option value="1928">1928</option>                                                                                                            <option value="1929">1929</option>                                                                                                            <option value="1930">1930</option>                                                                                                            <option value="1931">1931</option>                                                                                                            <option value="1932">1932</option>                                                                                                            <option value="1933">1933</option>                                                                                                            <option value="1934">1934</option>                                                                                                            <option value="1935">1935</option>                                                                                                            <option value="1936">1936</option>                                                                                                            <option value="1937">1937</option>                                                                                                            <option value="1938">1938</option>                                                                                                            <option value="1939">1939</option>                                                                                                            <option value="1940">1940</option>                                                                                                            <option value="1941">1941</option>                                                                                                            <option value="1942">1942</option>                                                                                                            <option value="1943">1943</option>                                                                                                            <option value="1944">1944</option>                                                                                                            <option value="1945">1945</option>                                                                                                            <option value="1946">1946</option>                                                                                                            <option value="1947">1947</option>                                                                                                            <option value="1948">1948</option>                                                                                                            <option value="1949">1949</option>                                                                                                            <option value="1950">1950</option>                                                                                                            <option value="1951">1951</option>                                                                                                            <option value="1952">1952</option>                                                                                                            <option value="1953">1953</option>                                                                                                            <option value="1954">1954</option>                                                                                                            <option value="1955">1955</option>                                                                                                            <option value="1956">1956</option>                                                                                                            <option value="1957">1957</option>                                                                                                            <option value="1958">1958</option>                                                                                                            <option value="1959">1959</option>                                                                                                            <option value="1960">1960</option>                                                                                                            <option value="1961">1961</option>                                                                                                            <option value="1962">1962</option>                                                                                                            <option value="1963">1963</option>                                                                                                            <option value="1964">1964</option>                                                                                                            <option value="1965">1965</option>                                                                                                            <option value="1966">1966</option>                                                                                                            <option value="1967">1967</option>                                                                                                            <option value="1968">1968</option>                                                                                                            <option value="1969">1969</option>                                                                                                            <option value="1970">1970</option>                                                                                                            <option value="1971">1971</option>                                                                                                            <option value="1972">1972</option>                                                                                                            <option value="1973">1973</option>                                                                                                            <option value="1974">1974</option>                                                                                                            <option value="1975">1975</option>                                                                                                            <option value="1976">1976</option>                                                                                                            <option value="1977">1977</option>                                                                                                            <option value="1978">1978</option>                                                                                                            <option value="1979">1979</option>                                                                                                            <option value="1980">1980</option>                                                                                                            <option value="1981">1981</option>                                                                                                            <option value="1982">1982</option>                                                                                                            <option value="1983">1983</option>                                                                                                            <option value="1984">1984</option>                                                                                                            <option value="1985">1985</option>                                                                                                            <option value="1986">1986</option>                                                                                                            <option value="1987">1987</option>                                                                                                            <option value="1988">1988</option>                                                                                                            <option value="1989">1989</option>                                                                                                            <option value="1990">1990</option>                                                                                                            <option value="1991">1991</option>                                                                                                            <option value="1992">1992</option>                                                                                                            <option value="1993">1993</option>                                                                                                            <option value="1994">1994</option>                                                                                                            <option value="1995">1995</option>                                                                                                            <option value="1996">1996</option>                                                                                                            <option value="1997">1997</option>                                                                                                            <option value="1998">1998</option>                                                                                                            <option value="1999">1999</option>                                                                                                            <option value="2000">2000</option>                                                                                                            <option value="2001">2001</option>                                                                                                            <option value="2002">2002</option>                                                                                                            <option value="2003">2003</option>                                                                                                            <option value="2004">2004</option>                                                                                                            <option value="2005">2005</option>                                                                                                            <option value="2006">2006</option>                                                                                                            <option value="2007">2007</option>                                                                                                            <option value="2008">2008</option>                                                                                                            <option value="2009">2009</option>                                                                                                            <option value="2010">2010</option>                                                                                                            <option value="2011">2011</option>                                                                                                            <option value="2012">2012</option>                                                                                                            <option value="2013">2013</option>                                                                                                            <option value="2014">2014</option>                                                                                                            <option value="2015">2015</option>                                                                                                            <option value="2016">2016</option>                                                                                                            <option value="2017">2017</option>                                                                                                            <option value="2018">2018</option>                                                                                                            <option value="2019">2019</option>                                                                                                            <option value="2020">2020</option>                                                                                                            <option value="2021">2021</option>                                                                                                            <option value="2022">2022</option>                                                                                                            <option value="2023">2023</option>                                                                                                    </select>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control upperCasePassport jvnsPassportRegex turkishReplaceJvns"
                                                       maxlength="10"
                                                       name="passport3"
                                                       id="passport3"
                                                       placeholder="شماره پاسپورت (*)">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone3"
                                                       id="phone3"
                                                       placeholder="شماره تماس (*)">
                                            </div>

                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone23"
                                                       id="phone23"
                                                       placeholder="اطلاعات تماس اضطراری">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="email3"
                                                       id="email3"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>
                                            <div style="display: none">
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="alternativeemail3"
                                                       id="email3"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>

                                        </div>


                                                                                <div class="col-md-4 person4">
                                            <div class="person_title">
                                                <h3>
                                                    4
                                                    .متقاضی
                                                                                                    </h3>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="name4"
                                                       id="name4"
                                                       placeholder="نام (*)">
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="surname4"
                                                       id="surname4"
                                                       placeholder="نام خانوادگی (*)">
                                            </div>
                                            <div style="margin-bottom: 8px; display: table-row">
                                                <select name="birthday4" id="birthday4"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">

                                                    <option value="0" selected="selected">
                                                        روز تولد (*)
                                                    </option>

                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                            <option value="13">13</option>                                                                                                            <option value="14">14</option>                                                                                                            <option value="15">15</option>                                                                                                            <option value="16">16</option>                                                                                                            <option value="17">17</option>                                                                                                            <option value="18">18</option>                                                                                                            <option value="19">19</option>                                                                                                            <option value="20">20</option>                                                                                                            <option value="21">21</option>                                                                                                            <option value="22">22</option>                                                                                                            <option value="23">23</option>                                                                                                            <option value="24">24</option>                                                                                                            <option value="25">25</option>                                                                                                            <option value="26">26</option>                                                                                                            <option value="27">27</option>                                                                                                            <option value="28">28</option>                                                                                                            <option value="29">29</option>                                                                                                            <option value="30">30</option>                                                                                                            <option value="31">31</option>                                                                                                    </select>
                                                <select name="birthmonth4" id="birthmonth4"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        ماه تولد (*)
                                                    </option>
                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                    </select>
                                                <select name="birthyear4" id="birthyear4"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        سال تولد (*)
                                                    </option>
                                                                                                                <option value="1900">1900</option>                                                                                                            <option value="1901">1901</option>                                                                                                            <option value="1902">1902</option>                                                                                                            <option value="1903">1903</option>                                                                                                            <option value="1904">1904</option>                                                                                                            <option value="1905">1905</option>                                                                                                            <option value="1906">1906</option>                                                                                                            <option value="1907">1907</option>                                                                                                            <option value="1908">1908</option>                                                                                                            <option value="1909">1909</option>                                                                                                            <option value="1910">1910</option>                                                                                                            <option value="1911">1911</option>                                                                                                            <option value="1912">1912</option>                                                                                                            <option value="1913">1913</option>                                                                                                            <option value="1914">1914</option>                                                                                                            <option value="1915">1915</option>                                                                                                            <option value="1916">1916</option>                                                                                                            <option value="1917">1917</option>                                                                                                            <option value="1918">1918</option>                                                                                                            <option value="1919">1919</option>                                                                                                            <option value="1920">1920</option>                                                                                                            <option value="1921">1921</option>                                                                                                            <option value="1922">1922</option>                                                                                                            <option value="1923">1923</option>                                                                                                            <option value="1924">1924</option>                                                                                                            <option value="1925">1925</option>                                                                                                            <option value="1926">1926</option>                                                                                                            <option value="1927">1927</option>                                                                                                            <option value="1928">1928</option>                                                                                                            <option value="1929">1929</option>                                                                                                            <option value="1930">1930</option>                                                                                                            <option value="1931">1931</option>                                                                                                            <option value="1932">1932</option>                                                                                                            <option value="1933">1933</option>                                                                                                            <option value="1934">1934</option>                                                                                                            <option value="1935">1935</option>                                                                                                            <option value="1936">1936</option>                                                                                                            <option value="1937">1937</option>                                                                                                            <option value="1938">1938</option>                                                                                                            <option value="1939">1939</option>                                                                                                            <option value="1940">1940</option>                                                                                                            <option value="1941">1941</option>                                                                                                            <option value="1942">1942</option>                                                                                                            <option value="1943">1943</option>                                                                                                            <option value="1944">1944</option>                                                                                                            <option value="1945">1945</option>                                                                                                            <option value="1946">1946</option>                                                                                                            <option value="1947">1947</option>                                                                                                            <option value="1948">1948</option>                                                                                                            <option value="1949">1949</option>                                                                                                            <option value="1950">1950</option>                                                                                                            <option value="1951">1951</option>                                                                                                            <option value="1952">1952</option>                                                                                                            <option value="1953">1953</option>                                                                                                            <option value="1954">1954</option>                                                                                                            <option value="1955">1955</option>                                                                                                            <option value="1956">1956</option>                                                                                                            <option value="1957">1957</option>                                                                                                            <option value="1958">1958</option>                                                                                                            <option value="1959">1959</option>                                                                                                            <option value="1960">1960</option>                                                                                                            <option value="1961">1961</option>                                                                                                            <option value="1962">1962</option>                                                                                                            <option value="1963">1963</option>                                                                                                            <option value="1964">1964</option>                                                                                                            <option value="1965">1965</option>                                                                                                            <option value="1966">1966</option>                                                                                                            <option value="1967">1967</option>                                                                                                            <option value="1968">1968</option>                                                                                                            <option value="1969">1969</option>                                                                                                            <option value="1970">1970</option>                                                                                                            <option value="1971">1971</option>                                                                                                            <option value="1972">1972</option>                                                                                                            <option value="1973">1973</option>                                                                                                            <option value="1974">1974</option>                                                                                                            <option value="1975">1975</option>                                                                                                            <option value="1976">1976</option>                                                                                                            <option value="1977">1977</option>                                                                                                            <option value="1978">1978</option>                                                                                                            <option value="1979">1979</option>                                                                                                            <option value="1980">1980</option>                                                                                                            <option value="1981">1981</option>                                                                                                            <option value="1982">1982</option>                                                                                                            <option value="1983">1983</option>                                                                                                            <option value="1984">1984</option>                                                                                                            <option value="1985">1985</option>                                                                                                            <option value="1986">1986</option>                                                                                                            <option value="1987">1987</option>                                                                                                            <option value="1988">1988</option>                                                                                                            <option value="1989">1989</option>                                                                                                            <option value="1990">1990</option>                                                                                                            <option value="1991">1991</option>                                                                                                            <option value="1992">1992</option>                                                                                                            <option value="1993">1993</option>                                                                                                            <option value="1994">1994</option>                                                                                                            <option value="1995">1995</option>                                                                                                            <option value="1996">1996</option>                                                                                                            <option value="1997">1997</option>                                                                                                            <option value="1998">1998</option>                                                                                                            <option value="1999">1999</option>                                                                                                            <option value="2000">2000</option>                                                                                                            <option value="2001">2001</option>                                                                                                            <option value="2002">2002</option>                                                                                                            <option value="2003">2003</option>                                                                                                            <option value="2004">2004</option>                                                                                                            <option value="2005">2005</option>                                                                                                            <option value="2006">2006</option>                                                                                                            <option value="2007">2007</option>                                                                                                            <option value="2008">2008</option>                                                                                                            <option value="2009">2009</option>                                                                                                            <option value="2010">2010</option>                                                                                                            <option value="2011">2011</option>                                                                                                            <option value="2012">2012</option>                                                                                                            <option value="2013">2013</option>                                                                                                            <option value="2014">2014</option>                                                                                                            <option value="2015">2015</option>                                                                                                            <option value="2016">2016</option>                                                                                                            <option value="2017">2017</option>                                                                                                            <option value="2018">2018</option>                                                                                                            <option value="2019">2019</option>                                                                                                            <option value="2020">2020</option>                                                                                                            <option value="2021">2021</option>                                                                                                            <option value="2022">2022</option>                                                                                                            <option value="2023">2023</option>                                                                                                    </select>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control upperCasePassport jvnsPassportRegex turkishReplaceJvns"
                                                       maxlength="10"
                                                       name="passport4"
                                                       id="passport4"
                                                       placeholder="شماره پاسپورت (*)">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone4"
                                                       id="phone4"
                                                       placeholder="شماره تماس (*)">
                                            </div>

                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone24"
                                                       id="phone24"
                                                       placeholder="اطلاعات تماس اضطراری">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="email4"
                                                       id="email4"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>
                                            <div style="display: none">
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="alternativeemail4"
                                                       id="email4"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>

                                        </div>


                                                                                <div class="col-md-4 person5">
                                            <div class="person_title">
                                                <h3>
                                                    5
                                                    .متقاضی
                                                                                                    </h3>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="name5"
                                                       id="name5"
                                                       placeholder="نام (*)">
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="surname5"
                                                       id="surname5"
                                                       placeholder="نام خانوادگی (*)">
                                            </div>
                                            <div style="margin-bottom: 8px; display: table-row">
                                                <select name="birthday5" id="birthday5"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">

                                                    <option value="0" selected="selected">
                                                        روز تولد (*)
                                                    </option>

                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                            <option value="13">13</option>                                                                                                            <option value="14">14</option>                                                                                                            <option value="15">15</option>                                                                                                            <option value="16">16</option>                                                                                                            <option value="17">17</option>                                                                                                            <option value="18">18</option>                                                                                                            <option value="19">19</option>                                                                                                            <option value="20">20</option>                                                                                                            <option value="21">21</option>                                                                                                            <option value="22">22</option>                                                                                                            <option value="23">23</option>                                                                                                            <option value="24">24</option>                                                                                                            <option value="25">25</option>                                                                                                            <option value="26">26</option>                                                                                                            <option value="27">27</option>                                                                                                            <option value="28">28</option>                                                                                                            <option value="29">29</option>                                                                                                            <option value="30">30</option>                                                                                                            <option value="31">31</option>                                                                                                    </select>
                                                <select name="birthmonth5" id="birthmonth5"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        ماه تولد (*)
                                                    </option>
                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                    </select>
                                                <select name="birthyear5" id="birthyear5"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        سال تولد (*)
                                                    </option>
                                                                                                                <option value="1900">1900</option>                                                                                                            <option value="1901">1901</option>                                                                                                            <option value="1902">1902</option>                                                                                                            <option value="1903">1903</option>                                                                                                            <option value="1904">1904</option>                                                                                                            <option value="1905">1905</option>                                                                                                            <option value="1906">1906</option>                                                                                                            <option value="1907">1907</option>                                                                                                            <option value="1908">1908</option>                                                                                                            <option value="1909">1909</option>                                                                                                            <option value="1910">1910</option>                                                                                                            <option value="1911">1911</option>                                                                                                            <option value="1912">1912</option>                                                                                                            <option value="1913">1913</option>                                                                                                            <option value="1914">1914</option>                                                                                                            <option value="1915">1915</option>                                                                                                            <option value="1916">1916</option>                                                                                                            <option value="1917">1917</option>                                                                                                            <option value="1918">1918</option>                                                                                                            <option value="1919">1919</option>                                                                                                            <option value="1920">1920</option>                                                                                                            <option value="1921">1921</option>                                                                                                            <option value="1922">1922</option>                                                                                                            <option value="1923">1923</option>                                                                                                            <option value="1924">1924</option>                                                                                                            <option value="1925">1925</option>                                                                                                            <option value="1926">1926</option>                                                                                                            <option value="1927">1927</option>                                                                                                            <option value="1928">1928</option>                                                                                                            <option value="1929">1929</option>                                                                                                            <option value="1930">1930</option>                                                                                                            <option value="1931">1931</option>                                                                                                            <option value="1932">1932</option>                                                                                                            <option value="1933">1933</option>                                                                                                            <option value="1934">1934</option>                                                                                                            <option value="1935">1935</option>                                                                                                            <option value="1936">1936</option>                                                                                                            <option value="1937">1937</option>                                                                                                            <option value="1938">1938</option>                                                                                                            <option value="1939">1939</option>                                                                                                            <option value="1940">1940</option>                                                                                                            <option value="1941">1941</option>                                                                                                            <option value="1942">1942</option>                                                                                                            <option value="1943">1943</option>                                                                                                            <option value="1944">1944</option>                                                                                                            <option value="1945">1945</option>                                                                                                            <option value="1946">1946</option>                                                                                                            <option value="1947">1947</option>                                                                                                            <option value="1948">1948</option>                                                                                                            <option value="1949">1949</option>                                                                                                            <option value="1950">1950</option>                                                                                                            <option value="1951">1951</option>                                                                                                            <option value="1952">1952</option>                                                                                                            <option value="1953">1953</option>                                                                                                            <option value="1954">1954</option>                                                                                                            <option value="1955">1955</option>                                                                                                            <option value="1956">1956</option>                                                                                                            <option value="1957">1957</option>                                                                                                            <option value="1958">1958</option>                                                                                                            <option value="1959">1959</option>                                                                                                            <option value="1960">1960</option>                                                                                                            <option value="1961">1961</option>                                                                                                            <option value="1962">1962</option>                                                                                                            <option value="1963">1963</option>                                                                                                            <option value="1964">1964</option>                                                                                                            <option value="1965">1965</option>                                                                                                            <option value="1966">1966</option>                                                                                                            <option value="1967">1967</option>                                                                                                            <option value="1968">1968</option>                                                                                                            <option value="1969">1969</option>                                                                                                            <option value="1970">1970</option>                                                                                                            <option value="1971">1971</option>                                                                                                            <option value="1972">1972</option>                                                                                                            <option value="1973">1973</option>                                                                                                            <option value="1974">1974</option>                                                                                                            <option value="1975">1975</option>                                                                                                            <option value="1976">1976</option>                                                                                                            <option value="1977">1977</option>                                                                                                            <option value="1978">1978</option>                                                                                                            <option value="1979">1979</option>                                                                                                            <option value="1980">1980</option>                                                                                                            <option value="1981">1981</option>                                                                                                            <option value="1982">1982</option>                                                                                                            <option value="1983">1983</option>                                                                                                            <option value="1984">1984</option>                                                                                                            <option value="1985">1985</option>                                                                                                            <option value="1986">1986</option>                                                                                                            <option value="1987">1987</option>                                                                                                            <option value="1988">1988</option>                                                                                                            <option value="1989">1989</option>                                                                                                            <option value="1990">1990</option>                                                                                                            <option value="1991">1991</option>                                                                                                            <option value="1992">1992</option>                                                                                                            <option value="1993">1993</option>                                                                                                            <option value="1994">1994</option>                                                                                                            <option value="1995">1995</option>                                                                                                            <option value="1996">1996</option>                                                                                                            <option value="1997">1997</option>                                                                                                            <option value="1998">1998</option>                                                                                                            <option value="1999">1999</option>                                                                                                            <option value="2000">2000</option>                                                                                                            <option value="2001">2001</option>                                                                                                            <option value="2002">2002</option>                                                                                                            <option value="2003">2003</option>                                                                                                            <option value="2004">2004</option>                                                                                                            <option value="2005">2005</option>                                                                                                            <option value="2006">2006</option>                                                                                                            <option value="2007">2007</option>                                                                                                            <option value="2008">2008</option>                                                                                                            <option value="2009">2009</option>                                                                                                            <option value="2010">2010</option>                                                                                                            <option value="2011">2011</option>                                                                                                            <option value="2012">2012</option>                                                                                                            <option value="2013">2013</option>                                                                                                            <option value="2014">2014</option>                                                                                                            <option value="2015">2015</option>                                                                                                            <option value="2016">2016</option>                                                                                                            <option value="2017">2017</option>                                                                                                            <option value="2018">2018</option>                                                                                                            <option value="2019">2019</option>                                                                                                            <option value="2020">2020</option>                                                                                                            <option value="2021">2021</option>                                                                                                            <option value="2022">2022</option>                                                                                                            <option value="2023">2023</option>                                                                                                    </select>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control upperCasePassport jvnsPassportRegex turkishReplaceJvns"
                                                       maxlength="10"
                                                       name="passport5"
                                                       id="passport5"
                                                       placeholder="شماره پاسپورت (*)">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone5"
                                                       id="phone5"
                                                       placeholder="شماره تماس (*)">
                                            </div>

                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone25"
                                                       id="phone25"
                                                       placeholder="اطلاعات تماس اضطراری">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="email5"
                                                       id="email5"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>
                                            <div style="display: none">
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="alternativeemail5"
                                                       id="email5"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>

                                        </div>


                                                                                <div class="col-md-4 person6">
                                            <div class="person_title">
                                                <h3>
                                                    6
                                                    .متقاضی
                                                                                                    </h3>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="name6"
                                                       id="name6"
                                                       placeholder="نام (*)">
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control turkishReplaceJvns upperCaseForName"
                                                       name="surname6"
                                                       id="surname6"
                                                       placeholder="نام خانوادگی (*)">
                                            </div>
                                            <div style="margin-bottom: 8px; display: table-row">
                                                <select name="birthday6" id="birthday6"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">

                                                    <option value="0" selected="selected">
                                                        روز تولد (*)
                                                    </option>

                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                            <option value="13">13</option>                                                                                                            <option value="14">14</option>                                                                                                            <option value="15">15</option>                                                                                                            <option value="16">16</option>                                                                                                            <option value="17">17</option>                                                                                                            <option value="18">18</option>                                                                                                            <option value="19">19</option>                                                                                                            <option value="20">20</option>                                                                                                            <option value="21">21</option>                                                                                                            <option value="22">22</option>                                                                                                            <option value="23">23</option>                                                                                                            <option value="24">24</option>                                                                                                            <option value="25">25</option>                                                                                                            <option value="26">26</option>                                                                                                            <option value="27">27</option>                                                                                                            <option value="28">28</option>                                                                                                            <option value="29">29</option>                                                                                                            <option value="30">30</option>                                                                                                            <option value="31">31</option>                                                                                                    </select>
                                                <select name="birthmonth6" id="birthmonth6"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        ماه تولد (*)
                                                    </option>
                                                                                                                <option value="01">01</option>                                                                                                            <option value="02">02</option>                                                                                                            <option value="03">03</option>                                                                                                            <option value="04">04</option>                                                                                                            <option value="05">05</option>                                                                                                            <option value="06">06</option>                                                                                                            <option value="07">07</option>                                                                                                            <option value="08">08</option>                                                                                                            <option value="09">09</option>                                                                                                            <option value="10">10</option>                                                                                                            <option value="11">11</option>                                                                                                            <option value="12">12</option>                                                                                                    </select>
                                                <select name="birthyear6" id="birthyear6"
                                                        class="form-control birthmobile"
                                                        style="width:32%; margin-right: 3px; float: left;">
                                                    <option value="0" selected="selected">
                                                        سال تولد (*)
                                                    </option>
                                                                                                                <option value="1900">1900</option>                                                                                                            <option value="1901">1901</option>                                                                                                            <option value="1902">1902</option>                                                                                                            <option value="1903">1903</option>                                                                                                            <option value="1904">1904</option>                                                                                                            <option value="1905">1905</option>                                                                                                            <option value="1906">1906</option>                                                                                                            <option value="1907">1907</option>                                                                                                            <option value="1908">1908</option>                                                                                                            <option value="1909">1909</option>                                                                                                            <option value="1910">1910</option>                                                                                                            <option value="1911">1911</option>                                                                                                            <option value="1912">1912</option>                                                                                                            <option value="1913">1913</option>                                                                                                            <option value="1914">1914</option>                                                                                                            <option value="1915">1915</option>                                                                                                            <option value="1916">1916</option>                                                                                                            <option value="1917">1917</option>                                                                                                            <option value="1918">1918</option>                                                                                                            <option value="1919">1919</option>                                                                                                            <option value="1920">1920</option>                                                                                                            <option value="1921">1921</option>                                                                                                            <option value="1922">1922</option>                                                                                                            <option value="1923">1923</option>                                                                                                            <option value="1924">1924</option>                                                                                                            <option value="1925">1925</option>                                                                                                            <option value="1926">1926</option>                                                                                                            <option value="1927">1927</option>                                                                                                            <option value="1928">1928</option>                                                                                                            <option value="1929">1929</option>                                                                                                            <option value="1930">1930</option>                                                                                                            <option value="1931">1931</option>                                                                                                            <option value="1932">1932</option>                                                                                                            <option value="1933">1933</option>                                                                                                            <option value="1934">1934</option>                                                                                                            <option value="1935">1935</option>                                                                                                            <option value="1936">1936</option>                                                                                                            <option value="1937">1937</option>                                                                                                            <option value="1938">1938</option>                                                                                                            <option value="1939">1939</option>                                                                                                            <option value="1940">1940</option>                                                                                                            <option value="1941">1941</option>                                                                                                            <option value="1942">1942</option>                                                                                                            <option value="1943">1943</option>                                                                                                            <option value="1944">1944</option>                                                                                                            <option value="1945">1945</option>                                                                                                            <option value="1946">1946</option>                                                                                                            <option value="1947">1947</option>                                                                                                            <option value="1948">1948</option>                                                                                                            <option value="1949">1949</option>                                                                                                            <option value="1950">1950</option>                                                                                                            <option value="1951">1951</option>                                                                                                            <option value="1952">1952</option>                                                                                                            <option value="1953">1953</option>                                                                                                            <option value="1954">1954</option>                                                                                                            <option value="1955">1955</option>                                                                                                            <option value="1956">1956</option>                                                                                                            <option value="1957">1957</option>                                                                                                            <option value="1958">1958</option>                                                                                                            <option value="1959">1959</option>                                                                                                            <option value="1960">1960</option>                                                                                                            <option value="1961">1961</option>                                                                                                            <option value="1962">1962</option>                                                                                                            <option value="1963">1963</option>                                                                                                            <option value="1964">1964</option>                                                                                                            <option value="1965">1965</option>                                                                                                            <option value="1966">1966</option>                                                                                                            <option value="1967">1967</option>                                                                                                            <option value="1968">1968</option>                                                                                                            <option value="1969">1969</option>                                                                                                            <option value="1970">1970</option>                                                                                                            <option value="1971">1971</option>                                                                                                            <option value="1972">1972</option>                                                                                                            <option value="1973">1973</option>                                                                                                            <option value="1974">1974</option>                                                                                                            <option value="1975">1975</option>                                                                                                            <option value="1976">1976</option>                                                                                                            <option value="1977">1977</option>                                                                                                            <option value="1978">1978</option>                                                                                                            <option value="1979">1979</option>                                                                                                            <option value="1980">1980</option>                                                                                                            <option value="1981">1981</option>                                                                                                            <option value="1982">1982</option>                                                                                                            <option value="1983">1983</option>                                                                                                            <option value="1984">1984</option>                                                                                                            <option value="1985">1985</option>                                                                                                            <option value="1986">1986</option>                                                                                                            <option value="1987">1987</option>                                                                                                            <option value="1988">1988</option>                                                                                                            <option value="1989">1989</option>                                                                                                            <option value="1990">1990</option>                                                                                                            <option value="1991">1991</option>                                                                                                            <option value="1992">1992</option>                                                                                                            <option value="1993">1993</option>                                                                                                            <option value="1994">1994</option>                                                                                                            <option value="1995">1995</option>                                                                                                            <option value="1996">1996</option>                                                                                                            <option value="1997">1997</option>                                                                                                            <option value="1998">1998</option>                                                                                                            <option value="1999">1999</option>                                                                                                            <option value="2000">2000</option>                                                                                                            <option value="2001">2001</option>                                                                                                            <option value="2002">2002</option>                                                                                                            <option value="2003">2003</option>                                                                                                            <option value="2004">2004</option>                                                                                                            <option value="2005">2005</option>                                                                                                            <option value="2006">2006</option>                                                                                                            <option value="2007">2007</option>                                                                                                            <option value="2008">2008</option>                                                                                                            <option value="2009">2009</option>                                                                                                            <option value="2010">2010</option>                                                                                                            <option value="2011">2011</option>                                                                                                            <option value="2012">2012</option>                                                                                                            <option value="2013">2013</option>                                                                                                            <option value="2014">2014</option>                                                                                                            <option value="2015">2015</option>                                                                                                            <option value="2016">2016</option>                                                                                                            <option value="2017">2017</option>                                                                                                            <option value="2018">2018</option>                                                                                                            <option value="2019">2019</option>                                                                                                            <option value="2020">2020</option>                                                                                                            <option value="2021">2021</option>                                                                                                            <option value="2022">2022</option>                                                                                                            <option value="2023">2023</option>                                                                                                    </select>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       class="form-control upperCasePassport jvnsPassportRegex turkishReplaceJvns"
                                                       maxlength="10"
                                                       name="passport6"
                                                       id="passport6"
                                                       placeholder="شماره پاسپورت (*)">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone6"
                                                       id="phone6"
                                                       placeholder="شماره تماس (*)">
                                            </div>

                                            <div>
                                                <input type="text" class="form-control phoneNumberPath" maxlength="12"
                                                       name="phone26"
                                                       id="phone26"
                                                       placeholder="اطلاعات تماس اضطراری">
                                            </div>
                                            <div>
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="email6"
                                                       id="email6"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>
                                            <div style="display: none">
                                                <input type="text" class="form-control upperCaseMailJvns"
                                                       name="alternativeemail6"
                                                       id="email6"
                                                       placeholder="آدرس ایمیل (*)">
                                            </div>

                                        </div>


                                                                            </div>

                                    <div class="col-md-12 nopadding">
                                        فیلدهای مورد نیاز (*)
                                    </div>

                                    <div class="col-md-12 jvnsMt20" id="mailConfirmCodeControlDiv"
                                         style="display: none">
                                        <div
                                            class="col-md-12 nopadding"> Mailinize gönderilen onay kodunu size verilen 1 dakika içerisinde girmelisiniz.</div>
                                        <hr>
                                        <div class="col-md-12 nopadding"><span id="watchSendMail"></span>
                                        </div>
                                        <div class="col-md-4 nopadding">
                                            <input type="text" class="form-control upperCaseJvns"
                                                   id="mailConfirmCodeControl"
                                                   name="mailConfirmCode" placeholder="Confirm Code" maxlength="10">
                                        </div>
                                        <input type="hidden" id="stopTimer" value="0">

                                    </div>
                                    <div class="col-md-12 linejvns"></div>

                                    <p class="text-center btnNextJvns">
                                        <a href="javascript:void(0)" id="btnAppPersonalNext"
                                           class="btn btn-success green">
                                            بعدی
                                            <span style="margin-left:10px;" class="fa fa-angle-double-right"></span>
                                        </a>
                                    </p>
                                    <p class="text-center btnPrevJvns">
                                        <a href="javascript:void(0)" id="btnAppPersonalPrev"
                                           class="btn btn-success green">
                                            <span style="margin-left:10px;" class="fa fa-angle-double-left"></span>
                                            بازگشت
                                        </a>
                                    </p>

                                </div>

                                <div class="tab-pane fade" id="appPreview">
                                    <h3 class="head text-center formTabHeadTitle">
                                        پیش نمایش
                                    </h3>

                                    <div class="alert alert-warning" style="margin-top: 30px" role="alert">
                                        <p>
                                            متقاضی تایید و اظهار می نماید ، جمع آوری و نگهداری مدارک ایشان جهت انجام فرایندهای ویزا ، ارسال آن به بخش های مختلف سفارت جهت رسیدگی ها تا 90 روز مورد تایید ایشان می باشد . متقاضی موظف است اطلاعات کامل و صحیح شخصی خود را جهت ثبت قرار ملاقات در سیستم درج نماید ، متقاضی در خصوص اطلاعات ناقص ، اطلاعات غلط ، توضیحات و شرایط نادرست و نتایج تابعه از آن شخصا پاسخگو خواهد بود و ویزامتریک در این خصوص مسئولیتی نخواهد داشت .
                                        </p>
                                    </div>

                                    <div class="col-md-12 linejvns"></div>

                                    <div class="preview">
                                    </div>

                                    <div class="col-md-12 linejvns jvnsMt20"></div>
                                    <div class="row">
                                        <div class="applicationinfoview"
                                             style="clear: both; padding-top: 15px; padding-bottom: 20px;">
                                            <div class='col-md-12'>
                                                <div class="set_app_country_view"></div>
                                                <div class="set_app_city_view"></div>
                                                <div class="set_app_office_view"></div>
                                                <div class="set_app_service_type_view"></div>
                                                <div class="set_app_person_count_view"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 linejvns jvnsMt20"></div>

                                    <div class="alert alert-warning" style="margin-top: 30px" role="alert">
                                        <p>
                                            <input type="checkbox" name="previewchk" id="previewchk" value="1">

                                            <span style="padding-left:15px; padding-right: 15px;">
                                             تایید می نمایم ، توضیحات بالا را خواندم ، متوجه شدم و قبول کردم .
                                            </span>
                                        </p>
                                    </div>

                                    <div class="col-md-12 linejvns"></div>

                                    <p class="text-center btnNextJvns">

                                        <a href="javascript:void(0)" id="btnAppPreviewNext"
                                           class="btn btn-success green">
                                            بعدی
                                            <span style="margin-left:10px;" class="fa fa-angle-double-right"></span>
                                        </a>
                                    </p>
                                    <p class="text-center btnPrevJvns">
                                        <a href="javascript:void(0)" id="btnAppPreviewPrev"
                                           class="btn btn-success green">
                                            <span style="margin-left:10px;" class="fa fa-angle-double-left"></span>
                                            بازگشت
                                        </a>
                                    </p>
                                </div>

                                <div class="tab-pane fade" id="appServices">
                                    <h3 class="head text-center formTabHeadTitle">
                                        خدمات اضافی
                                    </h3>

                                    <div class="row">
                                        <div class="col-md-12" style="margin-left: 7px;">
                                            <div class="checkbox getajaxservice">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="alert alert-warning jvnsMt20" role="alert">
                                        ما خدمات اضافی فوق را در دفتر ویزامتریک ارائه می دهیم که می توانید از آنها در روز ملاقات استفاده کنید.
                                    </div>

                                    <div class="col-md-12 linejvns"></div>
                                    <div class="col-md-6 jvnsMt20">
                                        <div class="captcha_wrapper">
                                            <div class="g-recaptcha"
                                                 data-sitekey="6Lclp5kmAAAAALfXq6THnPQPzbWDL4g8fdu5md5o"></div>
                                        </div>
                                    </div>
                                    <p class="text-center btnNextJvns">

                                        <a href="javascript:void(0)" id="btnAppServicesNext"
                                           class="btn btn-success green">
                                            بعدی
                                            <span style="margin-left:10px;" class="fa fa-angle-double-right"></span>
                                        </a>
                                    </p>
                                </div>

                                <div class="tab-pane fade" id="appCalendar">
                                    <div class="text-center">
                                        <i class="img-intro icon-checkmark-circle"></i>
                                    </div>
                                    <h3 class="head text-center formTabHeadTitle">
                                        تقویم
                                    </h3>

                                    <div class="col-md-12 calendar_office_close">
                                        <div class="alert alert-warning jvnsMt20" role="alert">
                                            <div><ul><li>پس از تایید اطلاعات وارد شده ، شما یک ایمیل از طرف ما در آدرس ایمیلی که ثبت کرده اید دریافت خواهید کرد .</li><li>شما یک ایمیل یادآوری دو روز قبل از قرار ملاقات خود دریافت خواهید کرد .</li></ul></div>
                                        </div>
                                    </div>


                                    <div class="container calendar_office_open">
                                        <div class="row">
                                            <div class='col-md-12'>
                                                <div class="alert alert-warning jvnsMt20" role="alert">
                                                    <div><ul><li>پس از تایید اطلاعات وارد شده ، شما یک ایمیل از طرف ما در آدرس ایمیلی که ثبت کرده اید دریافت خواهید کرد .</li><li>شما یک ایمیل یادآوری دو روز قبل از قرار ملاقات خود دریافت خواهید کرد .</li></ul></div>
                                                </div>
                                            </div>

                                            <input type="hidden" name="ctval" id="ctval"/>
                                            <input type="hidden" name="qtallvert" id="qtallvert"/>
                                            <input type="hidden" name="view_set_app_country"
                                                   class="view_set_app_country" value=""/>
                                            <input type="hidden" name="view_set_app_office" class="view_set_app_office"
                                                   value=""/>
                                            <input type="hidden" name="view_set_app_service_type"
                                                   class="view_set_app_service_type" value=""/>
                                            <input type="hidden" name="setnewcalendarstatus"
                                                   class="setnewcalendarstatus" value=""/>

                                            <div class='col-md-12' id="tarihGoster"
                                                 style="margin-top:15px;">
                                                <div style="" id="datepicker" class="input-group date"
                                                     data-date-format="mm-dd-yyyy">
                                                    <input class="form-control calendarinput" type="text"
                                                           readonly
                                                           placeholder="لطفا یک تاریخ ملاقات انتخاب کنید"
                                                           style="cursor: pointer"/>
                                                    <span class="input-group-addon"><i class="fa fa-calendar"
                                                                                       aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                            <div class='col-md-12'>
                                                <div class="dateresult alert alert-warning jvnsMt20 col-md-12"
                                                     role="alert" style="display:none;">

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 linejvns"></div>

                                    <div class="applicationinfo">
                                        <div class='col-md-12'>
                                            <div class="jvnsMt10" role="alert">
                                                <div class="col-md-6">
                                                    <div class="set_app_country"></div>
                                                    <div class="set_app_city"></div>
                                                    <div class="set_app_office"></div>
                                                    <div class="set_app_service_type"></div>
                                                    <div class="set_app_person_count"></div>
                                                </div>
                                                <div class="col-md-6 setcalendarinfo">
                                                    <div class="set_app_date"></div>
                                                    <div class="set_app_time"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 linejvns"></div>

                                    <p class="text-center btnNextJvns">
                                        <a href="javascript:void(0)" id="btnAppCalendarNext"
                                           class="btn btn-success green">
                                            بعدی
                                            <span style="margin-left:10px;" class="fa fa-angle-double-right"></span>
                                        </a>
                                    </p>

                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <form action="https://it-ir-appointment.visametric.com/ir/home" method="POST" id="countrySelectForm">
        <input type="hidden" name="_token" value="VygBemLyzEc74u8qZrzAeX5EAnoHnHYSzIqUWHB1">        <input type="hidden" id="countryID" name="countryID" value="">
    </form>
</div>


<div class="clearfix">
    <footer class="footer " style="clear: both">
        <div class="container">
            <div class="row">
                <div class="col-sm-2">
                    <div class="footer-info">
                        <p class="footer-logo">
                            <img class="footer-logo-width"
                                 src="https://it-ir-appointment.visametric.com/front/images/common/logo-white.png"
                                 alt="Visametric"/>
                        </p>
                    </div>
                </div>
                <div class="col-sm-4" style="top: 25px; font-size:13px">
                    <p class="description">.ویزامتریک مرکز درخواست ویزا می باشد که توسط هیئت های مربوطه دیپلماتیک تصویب شده است</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12" style="text-align:center;">
                        <p class="copyright text-left">©
                            Copyright 2023 <b>توسط ویزامتریک. همه حقوق محفوظ است.</b></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>



<script src="https://it-ir-appointment.visametric.com/js/jquery-3.5.1.min.js"></script>

<!--[if lt IE 9]>
<script src="https://it-ir-appointment.visametric.com/front/javascript/html5shiv.js"></script>
<script src="https://it-ir-appointment.visametric.com/front/javascript/respond.min.js"></script>
<![endif]-->
<script src="https://it-ir-appointment.visametric.com/js/tether.min.js"></script>
<script src="https://it-ir-appointment.visametric.com/js/bootstrap4_alpha.min.js"></script>

<script src="https://it-ir-appointment.visametric.com/front/javascript/main.js"></script>
<script src="https://it-ir-appointment.visametric.com/front/jscript/jquery.cookie.js"></script>
<script src="https://it-ir-appointment.visametric.com/front/jscript/jquery.redirect.js"></script>
<script src="https://it-ir-appointment.visametric.com/front/javascript/jquery.fix.clone.js"></script>

<script src="https://it-ir-appointment.visametric.com/js/sweetalert.js"></script>
<script src="https://it-ir-appointment.visametric.com/front/plugins/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>
<script src="https://it-ir-appointment.visametric.com/front/javascript/datepicker.js"></script>
<script src="https://it-ir-appointment.visametric.com/js/jvns-cookie.js"></script>

    <script src="https://it-ir-appointment.visametric.com/js/inputmask.js"></script>
    <script src="https://it-ir-appointment.visametric.com/js/jquery.inputmask.js"></script>
    <script src="https://it-ir-appointment.visametric.com/js/persian-datepicker/js/persian-date.js"></script>
    <script src="https://it-ir-appointment.visametric.com/js/persian-datepicker/js/persian-datepicker.js"></script>
    <script src="https://it-ir-appointment.visametric.com/js/iban.js"></script>


    <script>
        var payTypeVal = null;
        var transactionID = null;
        var paymentDateInput = null;
        var all_general_calendar_status = '1';

        var card = null;
        $('[data-toggle="tooltip-image"]').hover(function () {
            $('.tooltip-image').addClass('visibledt');
            $('.tooltip-image > .tooltip-inner').addClass('visible-innerdt');
        }, function () {
            $('.tooltip-image').removeClass("visibledt");
            $('.tooltip-image > .tooltip-inner').removeClass("visible-innerdt");
        });
        $(function () {
            $('#popupDatepicker').persianDatepicker({
                // inline:true,
                autoClose: true,
                format: 'YYYY/MM/DD',
                calendar: {
                    persian: {
                        locale: 'en',
                    }
                }
            });
            $('#popupDatepicker2').persianDatepicker({
                // inline:true,
                autoClose: true,
                format: 'YYYY/MM/DD',
                calendar: {
                    persian: {
                        locale: 'en',
                    }
                }
            });

            $('.pers1calendar').click(function () {
                $("#popupDatepicker").datepicker("show");
            });

            $('.pers2calendar').click(function () {
                $("#popupDatepicker2").datepicker("show");
            });

        });


    </script>
    <script>
        $(document).ready(function () {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            $.ajax({
                url: "https://it-ir-appointment.visametric.com/ir/appointment-form/getcity",
                method: 'POST',
                data: {
                    'applicationType': '1'
                },
                async: false,
                success: function (response) {
                    $('#ajaxcity').html(response);
                    $(".city").prop("selectedIndex", 0);
                    $(".office").prop("selectedIndex", 0);
                    $(".officetype").prop("selectedIndex", 0);
                    $(".service_type").prop("selectedIndex", 0);
                    $(".totalPerson").prop("selectedIndex", 0);
                    // $('html, body').animate({
                    //     scrollTop: 350
                    // }, 750);
                },
                error: function () {

                }
            });


            $(document).on('change', ".city", function (evt) {
                $('.paymentAlert').hide();
                $('.paymentDateAlert').hide();
                $('#drs').html('');
                $('#availableDayInfo').hide(1000);
                $('.parentTotalFee').hide(1000);
                $('#transactionDiv').hide(1000);
                $('#paytype').hide(1000);
                $('#paymentCardDiv').hide(1000);
                $('#totalFEE').html('');
                var getCityID = $(this).val();
                $('#btnAppCountNext').fadeOut(1000);

                $.ajax({
                    url: "https://it-ir-appointment.visametric.com/ir/appointment-form/getoffice",
                    type: "POST",
                    async: false,
                    data: {
                        getCityID: getCityID,
                        getConsular: '1'
                    },
                    success: function (response) {
                        $('#ajaxoffice').html(response);
                        $(".officetype").prop("selectedIndex", 0);
                        $(".service_type").prop("selectedIndex", 0);
                        $(".totalPerson").prop("selectedIndex", 0);

                    },
                    error: function (jqXHR, textStatus, errorThrown) {

                    }
                });
            });


            $(document).on('change', ".office", function (evt) {
                $('.paymentAlert').hide();
                $('.paymentDateAlert').hide();
                $('#availableDayInfo').hide(1000);
                $('.parentTotalFee').hide(1000);
                $('#transactionDiv').hide(1000);
                $('#paytype').hide(1000);
                $('#paymentCardDiv').hide(1000);
                $('#drs').html('');
                $('#totalFEE').html('');
                var getOfficeID = $('.office').val();
                $('#btnAppCountNext').fadeOut(1000);

                $.ajax({
                    url: "https://it-ir-appointment.visametric.com/ir/appointment-form/getofficetype",
                    type: "POST",
                    async: false,
                    data: {
                        getOfficeID: getOfficeID,
                        getConsular: '1'
                    },
                    success: function (response) {
                        $('#ajaxofficetype').html(response);

                        $(".officetype").prop("selectedIndex", 0);
                        $(".totalPerson").prop("selectedIndex", 0);

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        // console.log(textStatus, errorThrown);
                    }
                });
            });


            $(document).on('change', ".totalPerson", function (evt) {
                $('#paytype').hide(1000);
                $('#btnAppCountNext').fadeOut(1000);
                $('.paymentAlert').hide();
                $('.paymentDateAlert').hide();
                $('#transactionDiv').hide(1000);
                $('#paymentCardDiv').hide(1000);
                var getOfficeID = $('.office').val();
                var totalPerson = $(this).val();
                var serviceType = $('.officetype').val();
                var available_day_info_hide_control = -1;

                if ($('.office').val() !== "0" && $('.officetype').val() !== "0" && $('.city').val() !== "0" && totalPerson > 0) {
                    $.ajax({
                        url: "https://it-ir-appointment.visametric.com/ir/appointment-form/getcalendarstatus",
                        type: "POST",
                        async: false,
                        data: {
                            getvisaofficeid: getOfficeID,
                            getservicetypeid: serviceType,
                            getvisacountryid: '1'
                        },
                        success: function (response) {
                            $('.setnewcalendarstatus').val(response);
                            available_day_info_hide_control = response;

                            if (response == 0) {
                                $('#paytype').show(1000);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            // console.log(textStatus, errorThrown);
                        }
                    });
                    var set_new_calendar_type = $('.setnewcalendarstatus').val();

                    $.ajax({
                        url: "https://it-ir-appointment.visametric.com/ir/appointment-form/getprice",
                        type: "POST",
                        async: false,
                        data: {
                            serviceType: serviceType,
                            totalPerson: totalPerson,
                            getOfficeID: getOfficeID,
                            calendarType: set_new_calendar_type,
                            getConsular: '1'
                        },
                        success: function (response) {
                            $('#totalFEE').html('جمع مبلغ: ' + response.data + ' ریال');

                            $('.parentTotalFee').show(1000);
                            $('#paytype').show(1000);


                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            let err = $.parseJSON(jqXHR.responseText).firstAvailableDate;
                            console.log(err);
                            // $('#availableDayInfo').html(err);
                            //  $('#availableDayInfo').show(1000);
                        }
                    });

                } else {
                    $('#availableDayInfo').hide();
                    $('.parentTotalFee').hide();
                }

            });


            $(document).on('change', ".officetype", function (evt) {
                $('#btnAppCountNext').fadeOut(1000);
                $('.paymentAlert').hide();
                $('.paymentDateAlert').hide();
                $(".totalPerson").prop("selectedIndex", 0);
                $('#drs').html('');
                $('#availableDayInfo').hide(1000);
                $('.parentTotalFee').hide(1000);
                $('#paytype').hide(1000);
                $('#transactionDiv').hide(1000);
                $('#paymentCardDiv').hide(1000);
                $('#totalFEE').html('');
                if ($(this).val() == "1") {
                    $('.leftmaincontent_old').html('NORMAL');
                } else if ($(this).val() == "2") {
                    $('.leftmaincontent_old').html('VIP');
                } else if ($(this).val() == "3") {
                    $('.leftmaincontent_old').html('Mobile İçerik');
                } else {
                    $('.leftmaincontent').html('TEST');
                }

            });

            $('input[name="paytype"]').change(function () {
                $('.paymentAlert').hide();
                $('.paymentDateAlert').hide();
                payTypeVal = $(this).val();
                switch (payTypeVal) {
                    case "transfer":
                        $('#paymentCardDiv').css({"animation": "fadeOutDown", "animation-duration": "1s"});
                        $('#checkCardListBtnDiv').css({"animation": "fadeOutDown", "animation-duration": "1s"});

                        setTimeout(function () {
                            $("#paymentCardDiv").css('display', 'none');
                            $("#checkCardListBtnDiv").css('display', 'none');
                            $('#transactionDiv').css({"animation": "fadeInDown", "animation-duration": "1s"});
                            // $('#btnAppCountNext').css({"animation": "fadeInDown", "animation-duration": "1s"});
                            $('#transactionDiv').show();
                            $('#btnAppCountNext').fadeIn();
                        }, 100);
                        $('#paymentCardInput').val('');
                        $('#checkCardListDiv').html('');

                        break;
                    case "atm":
                        $('#transactionDiv').css({"animation": "fadeOutDown", "animation-duration": "1s"});
                        $('#btnAppCountNext').fadeOut();
                        setTimeout(function () {
                            $("#transactionDiv").css('display', 'none');
                            $("#btnAppCountNext").css('display', 'none');
                            $('#paymentCardDiv').css({"animation": "fadeInDown", "animation-duration": "1s"});
                            $('#checkCardListBtnDiv').css({"animation": "fadeInDown", "animation-duration": "1s"});
                            $('#paymentCardDiv').show();
                            $('#checkCardListBtnDiv').show();
                        }, 100);
                        $('#transactionid').val('');
                        $('#checkCardListDiv').html('');
                        break;

                }
            });
            //   $('#paymentCardInput').inputmask("9999999999999999");
            //  $('#paymentCardInput').bind('paste', function () { $(this).val(''); });

            $('#checkCardListBtn').click(function () {
                let card = $('#paymentCardInput').val();
                let date = $('#popupDatepicker2').val();
                let totalPerson = $('#totalPerson').val();
                let serviceType = $('#officetype').val();
                let office = $('#office').val();
                let consularID = '1';

                var cardx = $('#paymentCardInput').val();
                if (cardx.length != 16) {
                    swal({
                        title: "خطا",
                        text: "لطفا یک شماره کارت معتبر وارد کنید",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "تایید",
                        type: 'warning'
                    });
                    return false;
                }

                $.ajax({
                    url: "https://it-ir-appointment.visametric.com/ir/appointment-form/bankpayment-card-control",
                    method: 'POST',
                    data: {
                        card: card,
                        date: date,
                        totalPerson: totalPerson,
                        office: office,
                        serviceType: serviceType,
                        consularID: consularID
                    },
                    async: false,
                    success: function (response) {
                        if (!response.view) {
                            $('#btnAppCountNext').fadeOut(1000);
                            $('#checkCardListDiv').html(' ');
                            swal({
                                title: "خطا",
                                text: "لطفا صحت اطلاعات پرداخت خود را کنترل نموده و دوباره تلاش کنید.",
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: "تایید",
                                type: 'warning'
                            });
                        } else {
                            $('#checkCardListDiv').html(response.view);
                            $('#btnAppCountNext').fadeIn(1000);

                        }
                    },
                    error: function () {

                    }
                });
            });
        });
    </script>

    <script>
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
                                personalinfo: 'eyJpdiI6Iit6dUIyOHY1dHloVityc3hoWGhWa1E9PSIsInZhbHVlIjoiVk1HVFRTZzFkbmlaYllRZW1scmtSdz09IiwibWFjIjoiYjM3NTRiMWEyYzljOWY2ZWU1N2EzMDliYmUwN2U5ZmY0ZjBhMzNlOTA0MzQzZTk4MWI2Y2Q4ZTNkYjFjZWM0YyJ9'
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
                        emailValControl: 'eyJpdiI6IjI0T0tIeWtsWEZPUjZyRDVocXJGNEE9PSIsInZhbHVlIjoiZmpyZzFjcmZQY1haclMwOE13aHZZMjRvVjMxK3JqKzNtM0N5VnQyRXZQVT0iLCJtYWMiOiJlNWViOTk1NzE1NDRhMDZmMzMxY2U5NzNjYjg5MzVkNjdmNTY1MmI4YTllMTc5MTEyMDE5NjVhMzdiM2UyOTczIn0='
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
    </script>
    <script>
        function _timer(callback) {

            var time = 120;     //  The default time of the timer
            var timer_id;    //    This is used by setInterval function

            this.start = function (interval) {

                interval = 1000;
                time = 120;
                clearInterval(timer_id);
                timer_id = setInterval(function () {
                    if (time) {
                        time--;
                        generateTime();
                        if (typeof (callback) === 'function') callback(time);
                    }
                }, interval);

            }

            this.reset = function (sec) {
                sec = 120;
                time = sec;
                generateTime(time);
            }

            this.stop = function () {
                clearInterval(timer_id);
                btnAppPersonalNextClick = 0;

                $('#email1').removeAttr("readonly");
                $('#mailConfirmCodeControlDiv').hide();

            }


            function generateTime() {
                var second = time % 60;
                var minute = Math.floor(time / 60) % 60;

                second = (second < 10) ? '0' + second : second;
                minute = (minute < 10) ? '0' + minute : minute;

                document.getElementById("watchSendMail").innerHTML = "<b>" + minute + "m " + second + "s </b>";


            }
        }

        var timer;

        $(document).ready(function (e) {
            timer = new _timer
            (function (time) {
                if (time == 0) {
                    timer.stop();
                    btnAppPersonalNextClick = 0;
                    $('#email1').removeAttr("readonly");
                    $('#mailConfirmCodeControlDiv').hide();
                    var stopTimer = $('#stopTimer').val();


                    if (stopTimer == 0) {

                        swal({
                            title: "خطا",
                            text: "Size verilen süre içerisinde giriş yapmadınız. Lütfen işleminizi yeniden yapınız.",
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: "تایید",
                            type: 'warning'
                        });
                        return false;
                    } else {
                        $('#email1').removeAttr("readonly");
                        $('#mailConfirmCodeControlDiv').hide();
                        return false;
                    }
                }
            });
            timer.reset(0);

        });

    </script>
    <script>

        var oldDateObj = new Date();
        var newDateObj = new Date();
        newDateObj.setTime(oldDateObj.getTime() + (10 * 60 * 1000));

        var countDownDate = new Date(newDateObj).getTime();

        var x = setInterval(function () {

            var now = new Date().getTime();

            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("watch").innerHTML = "<b>" + minutes + "m " + seconds + "s </b>";

            if (distance < 0) {
                clearInterval(x);
                document.getElementById("watch").innerHTML = "EXPIRED";
                document.location.href = "https://it-ir-appointment.visametric.com/";
            }
        }, 1000);
    </script>

                                <script type="text/javascript">
                function formatDate(d) {
                    var day = String(d.getDate())
                    //add leading zero if day is is single digit
                    if (day.length == 1)
                        day = '0' + day
                    var month = String((d.getMonth() + 1))
                    //add leading zero if month is is single digit
                    if (month.length == 1)
                        month = '0' + month
                    return day + "-" + month + "-" + d.getFullYear()
                }

                $(function () {
                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    });

                    function senddate(fulldate) {
                        var set_new_consular_id = '1';
                        var set_new_exit_office_id = $('.office').val();
                        var set_new_service_type_id = $('.officetype').val();
                        var set_new_calendar_type = $('.setnewcalendarstatus').val();

                        if (fulldate.length > 7) {
                            $.ajax({
                                url: "https://it-ir-appointment.visametric.com/ir/appointment-form/senddate",
                                type: "POST",
                                async: false,
                                data: {
                                    fulldate: fulldate,
                                    totalperson: personCount,
                                    set_new_consular_id: set_new_consular_id,
                                    set_new_exit_office_id: set_new_exit_office_id,
                                    calendarType: set_new_calendar_type,
                                    set_new_service_type_id: set_new_service_type_id,
                                    personalinfo: 'eyJpdiI6ImJrZHZsOUpHQTZUQitYMmsvR1RlWUE9PSIsInZhbHVlIjoiNjRDYm1zbEJqdlN6Skd2dmRSUmFyQT09IiwibWFjIjoiZWViODZlZjU2MTBhOGMwZDg3YjdkZDg5ZjVkZjY1Y2E0ZmFjODkzYzc5ZDIzYjk0NmJjMzI5MWJjNWE4MjBhZSJ9',
                                    mailConfirmCode: $('#mailConfirmCodeControl').val()
                                },
                                success: function (response) {
                                    $('.dateresult').html('');
                                    $('.dateresult').show('slow');
                                    $('.dateresult').html(response);
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    // console.log(textStatus, errorThrown);
                                }
                            });
                        }
                    }

                    $('#datepicker').on('changeDate', function (ev) {
                        var fulldate = $('.calendarinput').val();
                        ct = 0;
                        qtallvertval = 0;
                        $('.dateresult').hide('slow');
                        setTimeout(function () {
                            senddate(fulldate);
                        }, 100);
                        $(".set_app_time").html('');
                        $(".set_app_date").html("<b>تاریخ:</b> " + fulldate + '');

                    });

                });

                $(document).ready(function () {

                    $('body').on('click', '.getdatebtnhour', function () {
                        $('.noPrime').css('background-color', '#f0ad4e');
                        $('.yesPrime').css('background-color', '#337ab7');

                        $(this).css('background-color', '#000');

                        $(this).addClass("xt5dk3ce");

                        ct = $(this).attr('data-id');
                        $('#ctval').val(ct);

                        qtallvertval = $(this).attr('data-all');
                        $('#qtallvert').val(qtallvertval);

                        var set_app_time = $(this).text();
                        $(".set_app_time").html("<b>زمان:</b>" + set_app_time + '');
                    });
                });
            </script>
            
        <script>
        $(document).ready(function () {

                String.prototype.turkishToUpper = function () {
                    var string = this;
                    var letters = {"i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I"};
                    string = string.replace(/(([iışğüçö]))/g, function (letter) {
                        return letters[letter];
                    })
                    return string.toUpperCase();
                }

                String.prototype.turkishReplace = function () {
                    var string = this;
                    var letters = {
                        "i": "I",
                        "ş": "S",
                        "ğ": "G",
                        "ü": "U",
                        "ö": "O",
                        "ç": "C",
                        "ı": "I",
                        "İ": "I",
                        "Ş": "S",
                        "Ğ": "G",
                        "Ü": "U",
                        "Ö": "O",
                        "Ç": "C",
                    };
                    string = string.replace(/(([iışğüçöİŞĞÜÇÖ]))/g, function (letter) {
                        return letters[letter];
                    })
                    return string.toUpperCase();
                }
                String.prototype.turkishToLower = function () {
                    var string = this;
                    var letters = {"İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç"};
                    string = string.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
                        return letters[letter];
                    })
                    return string.toLowerCase();
                };

                String.prototype.turkishToLowerMail = function () {
                    var string = this;
                    var letters = {
                        "İ": "i",
                        "I": "i",
                        "Ş": "s",
                        "Ğ": "g",
                        "Ü": "u",
                        "Ö": "o",
                        "Ç": "c",
                        "ı": "i",
                        "ş": "s",
                        "ğ": "g",
                        "ü": "u",
                        "ö": "o",
                        "ç": "c"
                    };
                    string = string.replace(/(([İIŞĞÜÇÖışğüöç]))/g, function (letter) {
                        return letters[letter];
                    });
                    return string.toLowerCase();
                };

                $('.upperCasePassport').on('keydown keyup', function (e) {
                    var itemUp = $(this).val().turkishToUpper();
                    $(this).val(itemUp);
                });

                // $('.jvnsPassportRegex').on('keydown keyup', function (e) {
                //     if (this.value.match(/[^a-zA-Z0-9]/g)) {
                //         this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
                //     }
                //
                //     var itemUp = this.value.turkishToUpper();
                //
                //     $(this).val(itemUp);
                // });
                $('.jvnsEmailRegex').on('keydown keyup', function (e) {
                    if (this.value.match(/[^a-zA-Z0-9 iİıIşŞçÇğĞöÖüÜ._@-]/g)) {
                        this.value = this.value.replace(/[^a-zA-Z0-9 iİıIşŞçÇğĞöÖüÜ._@-]/g, '');
                    }

                    var itemUp = this.value.turkishToLowerMail();

                    $(this).val(itemUp);
                });

                $('.upperCaseJvns').on('keydown keyup', function (e) {
                    var itemUp = this.value.turkishToUpper();

                    $(this).val(itemUp);
                });
                $('.turkishReplaceJvns').on('keydown keyup', function (e) {
                    var itemUp = $(this).val().turkishReplace();
                    $(this).val(itemUp);
                });

                $('.upperCaseForName').on('keydown keyup', function (e) {
                    if (this.value.match(/[^a-zA-Z iİıI]/g)) {
                        this.value = this.value.replace(/[^a-zA-Z iİıI]/g, '');
                    }

                    var itemUp = this.value.turkishToUpper();

                    $(this).val(itemUp);
                });


                $('.upperCaseMailJvns').on('keydown keyup', function (e) {
                    var itemUp = $(this).val().turkishToLowerMail();
                    $(this).val(itemUp);
                });

                var regExp = /[0-9\.\,]/;
                $('#paymentCardInput, #billtaxnumber').add('.phoneNumberPath').on('keydown keyup', function (e) {
                    var value = String.fromCharCode(e.which) || e.key;
                    if (!regExp.test(value)
                        && e.which != 9   // backspace
                        && e.which != 8   // backspace
                        && e.which != 37  // left
                        && e.which != 39   // right
                        && (e.which < 95  // arrow keys
                            || e.which > 106)) {
                        e.preventDefault();
                        return false;
                    }
                });
            }
        )
        ;
    </script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script type="text/javascript">
    var $ = jQuery.noConflict();
    jQuery(document).ready(function ()
    {

        var set_lang_control = "";
        set_lang_control = 'ir'

        if (set_lang_control == "ir")
        {
            $('div').addClass('rtlinsert');
            $('th').addClass('rtlinsert');
            $('td').addClass('rtlinsert');
            $('body').addClass('rtlinsert');
            $('input').addClass('rtlinsert');
            $('h3').addClass('rtlinsert');

            $('.datepicker-container').removeClass('rtlinsert');

        }

        $(".fancybox").fancybox();

        var visited = $.cookie('visited');
        if (visited == 'yes')
        {
            return false;
        } else
        {

            $("#hidden_popup_link").fancybox(
                {
                    fitToView: false,
                    autoSize: false,
                    scrolling: false
                }
            ).trigger('click');
            $.cookie('visited', 'yes', {
                expires: 1
            });
        }
    });

    $(".language").change(function ()
    {
        location.href = "https://it-ir-appointment.visametric.com/" + $(this).val() + "";
    });


    function fontinc(getfsize)
    {
        var fontSize = parseInt($("body").css("font-size"));

        if (getfsize == 1)
        {
            fontSize = fontSize + 1;
        }
        if (getfsize == 2)
        {
            fontSize = fontSize - 1;
        }

        lastfontsize = "" + fontSize + "px";

        if (fontSize <= 20 && fontSize >= 10)
        {
            $("body").css({'font-size': lastfontsize});
        }
    }

    var getLanguageFlag = function ()
    {
        var getFlagCode = $('.language').find('option:selected').val();
        $('.flag').attr("src", "https://it-ir-appointment.visametric.com/front/images/common/" + getFlagCode + "-flag.gif");
    }
    getLanguageFlag();

    let errorMessage = '<ul class="error_list_message">';
            errorMessage += "<ul>"
    
    

</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BJJTBGMQLG"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag()
    {
        dataLayer.push(arguments);
    }

    var getLanguageFlag = function ()
    {
        var getFlagCode = $('.language').find('option:selected').val();
        $('.flag').attr("src", "https://it-ir-appointment.visametric.com/front/images/common/" + getFlagCode + "-flag.gif");
    }

    getLanguageFlag();

    gtag('js', new Date());

    gtag('config', 'G-BJJTBGMQLG');
</script>
</body>
</html>
