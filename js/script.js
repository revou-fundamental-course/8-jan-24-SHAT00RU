function hitungLuasDanKeliling() {
    var sisiInput = document.getElementById("side").value;

    var sisi = parseFloat(sisiInput) || 0;

    var luas = sisi * sisi;
    var keliling = 4 * sisi;

    document.getElementById("result").innerHTML = "L = S x S <br>L = " + sisi +" x " + sisi +"<br>Luas: " + luas + "<br><br>kll = 4 x S <br>L = 4 x " + sisi +"<br>Keliling: " + keliling;
  }

  function resetForm() {
    document.getElementById("side").value = "";
    document.getElementById("result").innerHTML = "";
  }