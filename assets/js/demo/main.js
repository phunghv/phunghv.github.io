console.log("start js demo")
function getAudio() {
    var xhttp = new XMLHttpRequest();
    var voice = $('input[name=voice]:checked').val();
    var speed = $('input[name=speed]').val();
    var content = $('textarea[name=dm-content]')
                    .val()
                    .replace(/ /g, '+')
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("dm-result").innerHTML = this.responseText;
      }
    };
    xhttp.open("POST", "https://ailab.hcmus.edu.vn/vos/demo.php", true);
    var data = "text="+content+"&speed="+speed+"&voice"+voice;
    console.log(data);
    xhttp.send(data);
}