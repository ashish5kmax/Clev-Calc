function calculateRectangle() {
    var width = document.getElementById("rect-width").value;
    var height = document.getElementById("rect-height").value;
    var perimeter = 2 * (parseInt(width) + parseInt(height));
    var area = parseInt(width) * parseInt(height);
    var output = document.getElementById("rect-output");
    output.innerHTML = "Perimeter: " + perimeter + "<br>Area: " + area;
  }
  
  function calculateCircle() {
    var radius = document.getElementById("circle-radius").value;
    var circumference = 2 * Math.PI * parseInt(radius);
    var area = Math.PI * parseInt(radius) ** 2;
    var output = document.getElementById("circle-output");
    output.innerHTML = "Circumference: " + circumference + "<br>Area: " + area;
  }
  
  function calculateLine() {
    var x1 = document.getElementById("line-x1").value;
    var y1 = document.getElementById("line-y1").value;
    var x2 = document.getElementById("line-x2").value;
    var y2 = document.getElementById("line-y2").value;
    var length = Math.sqrt((parseInt(x2) - parseInt(x1)) ** 2 + (parseInt(y2) - parseInt(y1)) ** 2);
    var output = document.getElementById("line-output");
    output.innerHTML = "Length: " + length;
  }
  
  function calculateDistance() {
    var x1 = document.getElementById("dist-x1").value;
    var y1 = document.getElementById("dist-y1").value;
    var x2 = document.getElementById("dist-x2").value;
    var y2 = document.getElementById("dist-y2").value;
    var distance = Math.sqrt((parseInt(x2) - parseInt(x1)) ** 2 + (parseInt(y2) - parseInt(y1)) ** 2);
    var output = document.getElementById("dist-output");
    output.innerHTML = "Distance: " + distance;
  }
  
  function calculateTriangle() {
    var side1 = document.getElementById("tri-side1").value;
    var side2 = document.getElementById("tri-side2").value;
    var side3 = document.getElementById("tri-side3").value;
    var perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);
    var s = perimeter / 2;
    var area = Math.sqrt(s * (s - parseInt(side1)) * (s - parseInt(side2)) * (s - parseInt(side3)));
    var output = document.getElementById("tri-output");
    output.innerHTML = "Perimeter: " + perimeter + "<br>Area: " + area;
  }
  