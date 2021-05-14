module.exports = `<!DOCTYPE html>
<html>

<head>
	<title>INVI-VERSE</title>
	<script src="https://aframe.io/releases/1.1.0/aframe.min.js"></script>
	<script src="https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js"></script>
	<script src="https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js"></script>
	<script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/aframe-glow@1.0.1/src/glow.min.js"></script>

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/css/styles.css">

	<script src="/js-new/hero.js"></script>
	<script src="/js-new/stars.js"></script>
	<script src="/js-new/orb.js"></script>
	<script src="/js-new/lighting.js"></script>

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
		integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

</head>

<body class="position-relative">
<div id="logo1">invi</div>
    <div id="container">
		<div id="logo">invi</div>
		
		<nav id="top_nav">
			<input id="nav-toggle" type="checkbox">
			<ul class="links" >
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/services">Services</a>
				</li>
				<li>
					<a href="/stories">Stories</a>
				</li>
				<li>
					<a href="/works/">Works</a>
				</li>
				<li>
					<a href="/say-hello" class="say-hello">Say hello</a>
				</li>
                
			</ul>
			<label for="nav-toggle" class="icon-burger">
				<div class="line"></div>
				<div class="line"></div>
			</label>
		</nav>
	</div>
	<div id="hero_text" class="position-absolute  d-flex justify-content-center w-100 text-center flex-column align-items-center  my-auto">
   
            <p class="text-uppercase text-center headline" id="headline">We are designers of <br class="d-sm-none d-lg-block"/>virtual experiences</p>
            <p id="enter_btn" class="text-center text-uppercase">Enter our virtual home</p>
            <p id="home_text" class="text-center text-uppercase  ">Welcome to our home. Our home reflects who we are as people. We have curated a range of our
                work
                for you to explore.</p> 
    </div>
 
    <div id="instructions" class="pb-3 ">
		<p id="click_drag">use arrow keys to move | click + drag to rotate</p>
	</div>

	<a-scene embedded class="aframe-height" renderer="colorManagement: true; highRefreshRate: true"
		vr-mode-ui="enabled: false" background="color: #ced4da" raycaster="objects: .collidable"
		cursor="rayOrigin:mouse; fuse:false">

		<a-sky id="sky" visible="false" radius="200" theta-length="180"
			material="shader: gradientshader; topColor: #5582ec; bottomColor: #f2c4c4"></a-sky>
		<a-entity id="orb" orb position="0 0 0"></a-entity>
		<a-entity id="lighting" lighting position="0 0 0"></a-entity>
		<a-entity id="stars_1" stars position="0 0 0"></a-entity>

		<a-entity id="cameraRig" hero lighting>
			<a-entity id="head" camera position="0 1 0" wasd-controls="acceleration: 3"></a-entity>
		</a-entity>

	</a-scene>


</body>
<script>
	document.addEventListener('DOMContentLoaded', () => {
		let isMobile = AFRAME.utils.device.isMobile()
		if (isMobile) {
			let home_text = document.getElementById('home_text')
			home_text.setAttribute('style', 'display: none')

			let click_drag = document.getElementById('click_drag')
			click_drag.innerText = 'click + drag to rotate'
		}
	})

</script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
	integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
	crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
	crossorigin="anonymous"></script>

</html>`
