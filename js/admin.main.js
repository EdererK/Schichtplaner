/*
 * main js file for admin frontend
 * Felix Honer
 * 2016/01/24
 */

var planname = null;
$.fn.datepicker.defaults.format = "dd.mm.yyyy";

function copyToClipboard(element) {
    var $temp = $("<input>")
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function getQueryStrings() {
    var assoc = {};
    var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');

    for (var i in keyValues) {
        var key = keyValues[i].split('=');
        if (key.length > 1) {
            assoc[decode(key[0])] = decode(key[1]);
        }
    }

    return assoc;
}

function placeContent(content) {
    $("#loading").hide();
    $("#content").html(content).hide().fadeIn("slow");
}

function resetContent() {
    $("#content").html("<div id=\"loading\"><img src=\"" + root + "template/loading.gif\" alt=\"loading\" /></div>").hide().fadeIn("fast");
}

function loadContent() {
    resetContent();
    setTimeout(function () {
        $.ajax({
            url: root + "admin/ajax.getContent.php",
            method: "POST",
            data: getQueryStrings(),
            success: function (result) {
                placeContent(result);
                addHandlers();
            }
        });

        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');
    }, 200);
}

function addHandlers() {
    $('[data-toggle="tooltip"]').tooltip();
}

function show(title, message) {
    bootbox.dialog({
        title: title,
        message: message,
        buttons: {
            main: {
                label: "Schließen",
                className: "btn-default"
            }
        }
    });
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(function () {
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');

    $('.nav-tabs a').click(function (e) {
        $(this).tab('show');
        var scrollmem = $('body').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });
});

$(document).ready(function () {

    $("body").on("click", "a", function (event) {
        if ($(this).attr("target") == "_blank")
            return;

        event.preventDefault();

        if ($(this).hasClass("go-new-plan")) {
            $("#nav-new-plan").trigger("click");
            history.pushState('data', '', root + "/admin/index.php?v=newplan");
            loadContent();
        }
        else if ($(this).attr("href")[0] != "#") {
            history.pushState('data', '', $(this).attr("href"));
            loadContent();
        }

    });

    $(".nav a").on("click", function () {
        var attr = $(this).attr('target');
        if (attr == "_blank")
            return;

        $("nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        if ($(this).parent().hasClass("nav-plan")) {
            $(this).parent().parent().parent().addClass("active");
        }
    });

    iziToast.settings({
        timeout: 5000,
        resetOnHover: false,
        position: 'topRight'
    });

    loadContent();
});