<!DOCTYPE html>
<html>
	<head>
		<title>Image Gallery Slider</title>
		<link rel="stylesheet" type="text/css" href="styles.css" />
	</head>
	<body>
		<header><h1>Image Gallery Slider</h1></header>
		<div class="gallery">
			<div class="gallery-holder">
				<?php
				$images = glob("images/*.jpg");
				foreach($images as $image) {
					?>
					<img class="gallery-image" src="<?= $image ?>" />
					<?php
				}
				?>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="functions.js"></script>
</html>