var checkAnswer = function(id) {
    var el = document.getElementById(id);
    var correctEl = document.getElementById('correct');
    var wrongEl = document.getElementById("wrong");
    if (el.checked) {
        correctEl.className = "alert alert-success show";
        wrongEl.className = "alert alert-danger hide";
    }
    else {
      correctEl.className = "alert alert-success hide";
      wrongEl.className = "alert alert-danger show";  
    }
    return el.checked;
}