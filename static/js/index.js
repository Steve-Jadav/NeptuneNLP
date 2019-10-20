summary_requests = {};
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function update_request_rows(data) {

    if (summary_requests[data['request_id']]) {
        var row = summary_requests[data['request_id']];
        var string = '<ul>';
        for (i in data['summary']) {
            for (j in data['keywords']) {
                console.log(data['keywords'][j]);
                data['summary'][i] = data['summary'][i].replaceAll(' ' + data['keywords'][j] + ' ', '<span style="background-color: yellow"> ' + data['keywords'][j] + ' </span>')
            }
            string += '<li>' + data['summary'][i] + '</li>'
        }
        string += '</ul>';
        var row_data = row.data();
        row_data[1] = string;
        row.data(row_data);
        row.draw(false);
    }
}


$(document).ready(function () {

    var table = $('#summarization_table').DataTable ({
        searching: false,
        ordering: false
    });

    $('#get_summary').on('click', function () {

        // Get the keywords from the webpage.
        var keywords = $('#summary_keywords').val().split(',')
        console.log('Keywords selected: ', keywords);

        // Display the keywords as badge strings on the webpage.
        var badge_string = '<p style="font-size: 1.2rem;">';
        for (j in keywords) {
            keywords[j] = keywords[j].trim();
            badge_string += '<span class="badge badge-secondary" style="margin: .3rem">' + keywords[j] + '</span>'
        }
        badge_string += '</p>';
        $('#summary_tags').html(badge_string);


        // Fetch the input files using id: 'summarization_files'
        var myFile = $('#summarization_files').prop('files'); // myFile is an array of files
        var files = []
        for (var i = 0; i < myFile.length; i++) {
            files.push(myFile[i])
        }

        files.forEach(function (file) {
          
            console.log(file.name);
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                var row = table.row.add([
                    file.name,
                    "Pending....."
                ]);

                var uuid = uuidv4();
                summary_requests[uuid] = row;
                row.draw()

                request_array.push(
                    {
                        text: evt.target.result,
                        request_id: uuid,
                        type: 'summarize',
                        keywords: keywords,
                        summary_type: $("input[name='inlineRadioOptions']:checked").val(), // Fetch the value of the checked radio button
                        n: parseInt($('#sentence_count').val()) // Fetch the sentence count value from the web page
                    }
                )
            };

            reader.onerror = function (evt) {
                console.log(evt);
            }

        })
    })
});
