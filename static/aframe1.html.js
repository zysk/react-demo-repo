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
	<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@300;900&display=swap"
	rel="stylesheet"
  />
	<link rel="stylesheet" href="/css/aframeStyle.css">
	<script src="/js-frame-files/hero.js"></script>
	<script src="/js-frame-files/stars.js"></script>
	<script src="/js-frame-files/orb.js"></script>
	<script src="/js-frame-files/lighting.js"></script>
	
</head>
<body id="body" >
	
	<div id="aframe_container">
		<a-scene embedded class="aframe-height" renderer="colorManagement: true; highRefreshRate: true"
			vr-mode-ui="enabled: false" background="color: #ced4da" raycaster="objects: .collidable"
			cursor="rayOrigin:mouse; fuse:false">
			<a-entity  class="collidable ">
				<a-sky id="sky" visible="false" radius="200" theta-length="180"
				material="shader: gradientshader; topColor: #5582ec; bottomColor: #f2c4c4"></a-sky>
				<a-entity id="orb" orb position="0 0 0"></a-entity>
				<a-entity id="lighting" lighting position="0 0 0"></a-entity>
				<a-entity id="stars_1" stars position="0 0 0"></a-entity>
			</a-entity>
			<a-entity id="cameraRig" hero lighting>
				<a-entity id="head" camera look-controls="enabled: true; reverseMouseDrag:true" position="0 1 0" ></a-entity>
			</a-entity>
		</a-scene>
	</div>
	
</body>
<script>
	document.addEventListener('DOMContentLoaded', () => {
		let scroll_down_btn = document.getElementById("scroll_down")
		let body = document.getElementById("body")
		scroll_down_btn.onclick = (e) => {
			e.preventDefault()
			let viewportHeight = $(window).height()
			$('html, body').animate({
				scrollTop: viewportHeight,
			}, 800, 'linear')
		} 
	})
</script>
</html>`
