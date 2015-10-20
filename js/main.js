$(".work-modals").on("click", function () {
    $('#imagepreview').attr('src', $(this).attr('src'));
    $('#modal1').modal('show');
});