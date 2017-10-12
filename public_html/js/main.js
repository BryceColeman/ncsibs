$(document).ready(function() {

    $('#modal1').modal('open');

    var options = [{
        selector: '#staggered-test',
        offset: 400,
        callback: function(el) {
            Materialize.showStaggeredList($(el));
        }
    }];
    Materialize.scrollFire(options);
})
