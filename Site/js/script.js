$(function () {
    "use strict";

    $(".members-list .member-info").css({
        "max-height": $(".members-list .member-management").height() + "px",
        width: ($(".members-list").width() - $(".members-list .member-management").width()) + "px"
    });

    $(".know-about-border").on("click", function () {
        var extraInfo = $(this).parent().parent().children(".extra-member-info"),
            knowMoreBorder = $(this).parent().parent().children(".member-info").children(".know-more-border"),
            thisExtraInfoIsVisible = extraInfo.is(":visible");

        $(".extra-member-info").hide();
        $(".know-more-border").show();

        if (thisExtraInfoIsVisible) {
            knowMoreBorder.show();
            extraInfo.hide();
        } else {
            knowMoreBorder.hide();
            extraInfo.show();
        }
    });
});