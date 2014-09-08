<?php include '_partials/header.php'; ?>

<?php
	if($info){
		echo "<h1>{$info->first_name} {$info->last_name}</h1>";
		echo "<p>{$info->film_info}</p>";
	}
	else{
		echo "<p>No results available.</p>";
	}
?>

<a href="index.php">Home</a>


<?php include '_partials/footer.php'; ?>