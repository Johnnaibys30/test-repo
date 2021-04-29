
  var canvas = document.getElementById('tutorial');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // drawing code here
  } else {
    // canvas-unsupported code here
  }
  <script type="text/javascript">
  function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
    }
  }
</script>