$(document).ready(function() {
    var rec = new webkitSpeechRecognition();
        rec.continuous = true;
        rec.interimResults = false;
        rec.lang = 'en-US';

        var userSaid = function(str, s) {
            return str.indexOf(s) > -1;
        }

        rec.onresult = function(e) {
            for (var i = e.resultIndex; i < e.results.length; ++i) {
                if (e.results[i].isFinal) {
                        var str = e.results[i][0].transcript;
                        console.log('Recognised: ' + str);
			document.getElementById("text").innerHTML=str;
			document.getElementById("correct").innerHTML=str;
                        if (userSaid(str, 'red')) {
                            $('#box').css("background-color","red");
                }
                            else if (userSaid(str, 'blue')) {
                            $('#box').css("background-color","blue");
                }
                            else if (userSaid(str, 'yellow')) {
                                $('#box').css("background-color","yellow");
                            }
                            else if (userSaid(str, 'green')) {
                                $('#box').css("background-color","green");
                                            }

                                        }
                                    }
                            }

    $("#startRecBtn").click(function() {
      rec.start();
    });
    $("#stopRecBtn").click(function() {
      rec.stop();
    });
});
