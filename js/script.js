$(function () {
    var poller = new Poller(); // Initialize Poller
    var data;
    var $table = $('#bandsTable tbody');

    function Polling() {
        data = poller.getData();
        data = data.slice(0, 5);
        $table.empty();
        for (var i = 0; i < data.length; i++) {
            $table.append('<tr><td>' + data[i].name + '</td><td><span class="count">' + data[i].count + '</span> Mentions</td></tr>').delay(14500).fadeOut(500).fadeIn(0);
        }
    }

    Polling();

    setInterval(function () {
        Polling();
    }, 15000); // 15 seconds.
});