$(document).ready(function() {

    $.getJSON("/product/mdf-albums/product.json",
        function(data) {

            var product_container = '';


            $.each(data, function(key, value) {

                product_container += '<div class="row">'
                product_container += '<div class="col-lg-12 col-md-12 col-sm-12">'
                product_container += '<h4>' + value.id+') ' + value.product_name + '</h4>'
                product_container += '<br/>'
                product_container += '</div>'
                product_container += '</div>'

                product_container += '<div class="row">'
                product_container += '<div class="col-lg-12 col-md-12 col-sm-12">'
                product_container += '<p>' + value.paragraph_1 + '</p>'
                product_container += '<br/>'
                product_container += '</div>'
                product_container += '</div>'

                product_container += '<div class="row">'
                product_container += '<div class="col-lg-12 col-md-12 col-sm-12">'
                product_container += '<p>' + value.paragraph_2 + '</p>'
                product_container += '<br/>'
                product_container += '</div>'
                product_container += '</div>'

                product_container += '<div class="row">'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_1" src="' + value.image_1 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_2" src="' + value.image_2 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_3" src="' + value.image_3 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_4" src="' + value.image_4 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_5" src="' + value.image_5 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_6" src="' + value.image_6 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_7" src="' + value.image_7 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_8" src="' + value.image_8 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_9" src="' + value.image_9 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_10" src="' + value.image_10 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_11" src="' + value.image_11 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_12" src="' + value.image_12 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_13" src="' + value.image_13 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_14" src="' + value.image_14 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_15" src="' + value.image_15 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_16" src="' + value.image_16 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_17" src="' + value.image_17 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_18" src="' + value.image_18 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_19" src="' + value.image_19 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_20" src="' + value.image_20 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_21" src="' + value.image_21 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_22" src="' + value.image_22 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_23" src="' + value.image_23 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_24" src="' + value.image_24 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_25" src="' + value.image_25 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_26" src="' + value.image_26 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_27" src="' + value.image_27 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_28" src="' + value.image_28 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_29" src="' + value.image_29 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_30" src="' + value.image_30 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_31" src="' + value.image_31 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_32" src="' + value.image_32 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_33" src="' + value.image_33 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_34" src="' + value.image_34 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_35" src="' + value.image_35 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_36" src="' + value.image_36 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_37" src="' + value.image_37 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_38" src="' + value.image_38 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_39" src="' + value.image_39 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_40" src="' + value.image_40 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_41" src="' + value.image_41 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_42" src="' + value.image_42 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_43" src="' + value.image_43 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_44" src="' + value.image_44 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_45" src="' + value.image_45 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_46" src="' + value.image_46 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_47" src="' + value.image_47 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_48" src="' + value.image_48 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_49" src="' + value.image_49 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_50" src="' + value.image_50 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_51" src="' + value.image_51 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_52" src="' + value.image_52 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_53" src="' + value.image_53 + '">'
                product_container += '</div>'
                product_container += '<div class="col-lg-3 col-md-4 col-sm-6 mb-2">'
                product_container += '<img class="img-fluid" id="image_54" src="' + value.image_54 + '">'
                product_container += '</div>'
                product_container += '</div>'
            });
            $('#product-container').append(product_container);

        });


});