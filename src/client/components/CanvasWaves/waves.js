module.exports = function WaveMaker(canvasId, passedOptions = {}) {
  var c = document.getElementById(canvasId)
  var ctx = c.getContext('2d')
  console.log('got canvas: ', c)
  var ch = c.height
  var cw = c.width
  var points = []

  var tick = passedOptions.tick || 0 //eslint-disable-line no-unused-vars
  var options = {
    count: passedOptions.count || 4,
    range: passedOptions.range || {
      x: 20,
      y: 120
    },
    duration: passedOptions.duration || {
      min: 120,
      max: 180
    },
    thickness: 0,
    strokeColor: 'rgba(0,0,0,0)',
    shapeFill: passedOptions.shapeFill || 'rgba(0,0,0,0.3)',
    level: passedOptions.level || 0.45,
    curved: true,
    dynamic: passedOptions.dynamic || false
  }

  ctx.lineJoin = 'round'
  ctx.lineWidth = options.thickness
  ctx.strokeStyle = passedOptions.strokeColor || options.strokeColor

  console.log('got options', options)

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const ease = (t, b, c, d) => {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b
    return -c / 2 * (--t * (t - 2) - 1) + b
  }

  class Point {
    constructor(config) {
      this.anchorX = config.x
      this.anchorY = config.y
      this.x = config.x
      this.y = config.y
      this.setTarget()
    }
    setTarget = () => {
      this.initialX = this.x
      this.initialY = this.y
      this.targetX =
        this.anchorX + rand(0, options.range.x * 2) - options.range.x
      this.targetY =
        this.anchorY + rand(0, options.range.y * 2) - options.range.y
      this.tick = Math.floor(Math.random() * (passedOptions.tick || 0))
      this.duration = rand(options.duration.min, options.duration.max)
    }
    update = () => {
      var dx = this.targetX - this.x
      var dy = this.targetY - this.y
      var dist = Math.sqrt(dx * dx + dy * dy)

      if (Math.abs(dist) <= 0) {
        this.setTarget()
      } else {
        var t = this.tick
        var b = this.initialY
        var c = this.targetY - this.initialY
        var d = this.duration
        this.y = ease(t, b, c, d)

        b = this.initialX
        c = this.targetX - this.initialX
        d = this.duration
        this.x = ease(t, b, c, d)

        this.tick++
      }
    }
    render = () => {
      ctx.beginPath()
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false)
      ctx.fillStyle = '#000'
      ctx.fill()
    }
  }

  var updatePoints = function() {
    var i = points.length
    while (i--) {
      points[i].update()
    }
  }

  //eslint-disable-next-line
  var renderPoints = function() {
    var i = points.length
    while (i--) {
      points[i].render()
    }
  }

  var renderShape = function() {
    ctx.beginPath()
    var pointCount = points.length
    ctx.moveTo(points[0].x, points[0].y)
    var i
    for (i = 0; i < pointCount - 1; i++) {
      var c = (points[i].x + points[i + 1].x) / 2
      var d = (points[i].y + points[i + 1].y) / 2
      ctx.quadraticCurveTo(points[i].x, points[i].y, c, d)
    }
    ctx.lineTo(-options.range.x - options.thickness, ch + options.thickness)
    ctx.lineTo(cw + options.range.x + options.thickness, ch + options.thickness)
    ctx.closePath()
    // ctx.fillStyle = 'hsl(' + tick / 2 + ', 80%, 60%)'
    ctx.fillStyle = options.shapeFill
    ctx.fill()
    // ctx.stroke()
  }

  var clear = function() {
    ctx.clearRect(0, 0, cw, ch)
  }

  var loopInterval
  var loop = function() {
    c.width = c.width
    if (options.dynamic) loopInterval = window.requestAnimFrame(loop, c)
    tick++
    clear()
    updatePoints()
    renderShape()
    //renderPoints();
  }

  var i = options.count + 2
  var spacing = (cw + options.range.x * 2) / (options.count - 1)
  while (i--) {
    points.push(
      new Point({
        x: spacing * (i - 1) - options.range.x,
        y: ch - ch * options.level
      })
    )
  }

  window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(a) {
        window.setTimeout(a, 1e3 / 60)
      }
    )
  })()

  return {
    start: function() {
      loop()
    },
    interval: loopInterval
  }
}
