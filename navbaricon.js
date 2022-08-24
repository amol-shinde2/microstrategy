$(document).ready(function() {
    // Show hide popover
    $(".userDropdown").click(function() {
        $(this).find(".dropdown-content-usericon").slideToggle("fast");
    });
});


$(document).on("click", function(event) {
    var $trigger = $(".userDropdown");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".dropdown-content-usericon").slideUp("fast");
    }
});


$('.dropdown-menu button.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass('show');
    });


    return false;
});

let currentLoggedUser = sessionStorage.getItem('username');
$("#username").append(currentLoggedUser);


function openbmtab() {
    $(".dropdown-content-bm").toggle();
    $(".dropdown-content-create-bm").hide();
}


$(document).on("click ", function(event) {
    var $trigger = $(".bookmarkListDropdown");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".dropdown-content-bm").hide();
    }
});

function createbm() {
    $(".dropdown-content-create-bm").toggle();
}

function cancel() {
    $(".dropdown-content-create-bm").toggle();
}

function hideshowfilters() {
    $("#filterContainer").toggle();
    responsiveHeight();
}

$(".maximizeIcon").click(function() {
    $("#maximizeIcon").show();
    $("#vizList_chosen").toggle();
    $("#vizList_chosen").css("width", "200");
    $("#vizList_chosen").css("display", "block");
})

$(document).on("click ", function(event) {
    var $trigger = $(".maximizeIcon");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#vizList_chosen").hide();
    }
});

$(".panelListDropdown").click(function() {
    $("#panellist").hide();
    $("#panelListDropdown").show();
    $("#panellist_chosen").toggle();
    $("#panellist_chosen").css("width", "200");
    $("#panellist_chosen").css("display", "block");
})

$(document).on("click ", function(event) {
    var $trigger = $(".panelListDropdown");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#panellist_chosen").hide();
    }
});

$(".taskIcon").click(function() {
    $("#popupForm").toggle();
})

$(document).ready(function() {
    // Show hide popover
    $(".dossier-type").click(function() {
        $(this).find(".dropdown-content-dossiertypeicon").show();
    });
});


$(document).on("click", function(event) {
    var $trigger = $(".dossier-type");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".dropdown-content-dossiertypeicon").slideUp("fast");
        $("#projectList1_chosen").hide();
        $("#projectList_chosen").hide();
    }
});


$(".tabular").click(function() {
    $("#projectList_chosen").show();
    $("#projectList_chosen").css("display", "block");
    // $(".dropdown-menu > li:hover > .submenu-gt").show();
    $("#projectList_chosen").css("width", "200");

    $("#projectList1_chosen").hide();

})

$(".graphical").click(function() {
    $("#projectList1_chosen").show();
    $("#projectList1_chosen").css("width", "200");
    $("#projectList_chosen").hide();
})


$(".create-dossier-icon").click(function() {
    $(".dropdown-menu-right").show();
})

$(document).on("click", function(event) {
    var $trigger = $(".create-dossier-icon");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".dropdown-menu-right").hide();
    }
});