(function() {
  var Canvas, Player;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Canvas = (function() {

    function Canvas(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.draw = __bind(this.draw, this);
      this.x = 150;
      this.y = 150;
      this.dx = 2;
      this.dy = 4;
    }

    Canvas.prototype.circle = function(r, color, x, y) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fillStyle = color;
      return this.ctx.fill();
    };

    Canvas.prototype.draw = function() {
      var flash, indx;
      flash = false;
      if ((this.x + this.dx > this.width) || (this.x + this.dx < 30)) {
        this.dx = -this.dx;
        flash = true;
      }
      if ((this.y + this.dy > this.height) || (this.y + this.dy < 30)) {
        this.dy = -this.dy;
        flash = true;
      }
      this.x += this.dx;
      this.y += this.dy;
      if (flash) {
        indx = Math.floor(Math.random() * 8);
        setTimeout(this.player.play, 0, indx);
      }
      return this.circle(10, "blue", this.x, this.y);
    };

    return Canvas;

  })();

  Player = (function() {

    function Player() {
      this.play = __bind(this.play, this);
      var data, i, note, params, waves;
      this.notes = [];
      waves = [];
      waves[0] = ["square", 0.0000, 0.4000, 0.0000, 0.1160, 0.0000, 0.3020, 110.0000, 472.0000, 2400.0000, -0.7880, 0.0000, 0.0000, 0.0100, 0.0003, 0.0000, 0.0000, 0.0000, 0.5000, -0.1020, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.0000, 0.0000];
      waves[1] = ["sine", 0.0000, 0.6820, 0.4410, 0.4020, 0.0000, 0.0960, 1269.0000, 276.0000, 1488.0000, 0.0000, 0.0000, 0.0000, 5.5289, 0.3643, -0.3300, -0.4100, 0.1260, 0.0400, 0.3340, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.1000, 0.0000];
      waves[2] = ["saw", 0.0000, 0.6280, 0.0000, 0.4020, 0.0000, 0.0960, 1269.0000, 276.0000, 1488.0000, 0.0000, 0.0000, 0.0000, 5.5289, 0.3643, -0.3300, -0.4100, 0.1260, 0.0400, 0.3340, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.1000, 0.0000];
      waves[3] = ["synth", 1.0000, 0.4020, 0.1530, 0.2600, 1.2750, 0.8880, 20.0000, 1022.0000, 2400.0000, 0.3800, 0.6440, 0.2130, 14.8869, 0.2330, -0.4900, -0.7120, 0.1440, 0.0960, -0.5780, 0.2256, 0.3940, -0.5140, 1.0000, -0.4180, 0.2470, 0.2260, -0.5780];
      waves[4] = ["saw", 1.0000, 0.4020, 0.2640, 0.7200, 1.5390, 0.7240, 148.0000, 449.0000, 1926.0000, -0.1120, 0.0000, 0.0000, 0.0100, 0.0003, 0.0000, 0.0000, 0.0000, 0.5000, -0.1160, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.0000, 0.0000];
      waves[5] = ["saw", 0.0000, 0.6820, 0.2570, 0.4020, 0.5220, 0.4640, 626.0000, 84.0000, 1534.0000, 0.4600, 0.0340, 0.2490, 5.5289, 0.9272, -0.3300, -0.4100, 0.1260, 0.0400, 0.3340, 0.0000, 0.0000, 0.0000, 1.0000, 0.0000, 0.0000, 0.1000, 0.0000];
      waves[6] = ["saw", 1.0000, 0.4020, 0.2640, 0.7200, 1.5390, 0.7240, 148.0000, 449.0000, 1926.0000, -0.1120, -0.7900, 0.4540, 8.4562, 0.2473, 0.2980, -0.6700, 0.0000, 0.0975, -0.4480, 0.0856, -0.5180, -0.4720, 1.0000, -0.4480, 0.3410, 0.8160, 1.0000];
      waves[7] = ["square", 1.0000, 0.4020, 0.2640, 0.7200, 1.5390, 0.7240, 376.0000, 20.0000, 1926.0000, -0.1120, 0.7020, 0.4540, 8.4562, 0.2473, 0.2980, -0.6700, 0.0000, 0.0975, -0.4480, 0.0856, -0.5180, -0.4720, 1.0000, -0.4480, 0.3410, 0.8160, 1.0000];
      waves[8] = ["sine", 1.0000, 0.4020, 0.4940, 1.0340, 2.6610, 1.8000, 376.0000, 20.0000, 1926.0000, -0.1120, 0.7020, 0.4540, 8.4562, 0.2473, 0.2980, -0.6700, 0.0000, 0.0975, -0.4480, 0.0856, -0.5180, -0.4720, 1.0000, -0.4480, 0.3410, 0.8160, 1.0000];
      i = 0;
      while (i < waves.length) {
        note = {};
        params = jsfxlib.arrayToParams(waves[i]);
        data = jsfx.generate(params);
        note.data = audio.make(data);
        this.notes.push(note);
        i++;
      }
    }

    Player.prototype.play = function(i) {
      this.notes[i].data.play();
      return console.log(i);
    };

    return Player;

  })();

  $(function() {
    var canvas, ctx, height, player, width;
    ctx = $("#canvas")[0].getContext("2d");
    width = $("#canvas").width();
    height = $("#canvas").height();
    ctx.font = "bold 10pt Calibri";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    player = new Player;
    canvas = new Canvas(ctx, width, height, player);
    return setInterval(canvas.draw, 13);
  });

}).call(this);
