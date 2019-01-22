<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<style>
			body {
				background-color: #ffffff;
				margin: 0;
				overflow: hidden;
			}
		</style>
	</head>
	<body>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/94/three.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/randomcolor/0.5.2/randomColor.min.js"></script>
		<script>

		var blues = randomColor({
		 count: 10,
		 hue: 'blue',
		 alpha: 1
		});



		var scene = new THREE.Scene();
		var aspect = window.innerWidth / window.innerHeight;
		var camera = new THREE.OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / -50, - 500, 1000);
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );


		var rotations = []
		for (var i = 0; i < 16; i = i + 0.4){
			var material = new THREE.MeshBasicMaterial({color:blues[Math.floor(Math.random()*10)]});
			var geometry = new THREE.TorusGeometry( 0.3+i, 0.05, 4, 4 );
			var sphere = new THREE.Mesh( geometry, material );
			rotations.push(Math.random()*0.05)
			scene.add( sphere );
		}

		camera.position.z = 6;

		var render = function () {
	  	requestAnimationFrame( render );
			var i = 0
			scene.traverse( function( node ) {

   		 if ( node instanceof THREE.Mesh ) {

        // insert your code here, for example:

		node.rotation.y += 0.005
		node.rotation.x += rotations[i]
		i = i +1
    	}

} );
	  	renderer.render( scene, camera );
	};

	render();

		</script>
	</body>
</html>
