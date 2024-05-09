db = {};

db.init = function(callback) {
    $.getJSON('db/db.json', function(data) {
        db.data = data;
        if(callback) {
            callback();
        }
    });
}

initSelect = function() {
    for (var i = 0; i < db.data.length; i++) {
        var item = db.data[i];
        var select_text = "<option value='" + item.id + "'>" + item.titulo + "</option>";
        $('#slc-topicos').append(select_text);
    }
};

onSelectChange = function() {
    var id = $('#slc-topicos').val();
    var item = db.data[id];
    $('#lbl-txt-desc').text(item.titulo);
    $('#txt-desc').text(item.descricao);
};

db.init(initSelect);
