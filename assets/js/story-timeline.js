$(document).ready(function() {


    $.getJSON("/about/our-story/timeline.json",
        function(data) {
            var timeline = '';
            $.each(data, function(key, value) {
            timeline += '<li class='+value.li_class+'>'
            timeline += '<div class="timeline-image">'
            timeline += '</div>'
            timeline += '<div class="timeline-panel">'
            timeline += '<div class="timeline-heading">'
            timeline += '<h6>'+value.timeline_heading+'</h6><br>'
            timeline += '<h4 class="subheading">'+value.subheading+'</h4>'
            timeline += '</div>'
            timeline += '<div class="timeline-body">'
            timeline += '<p class="text-muted"><a href="">Visit Album</a></p>'
            timeline += '</div>'
            timeline += '</div>'
            timeline += '</li>'
            });
            timeline += '</div>'
            timeline += '</div>'
            $('#timeline-container').append(timeline);
        });

});