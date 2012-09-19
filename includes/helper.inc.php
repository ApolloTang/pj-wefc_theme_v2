<?php 

function path_info(){
	$p['theme'] = $GLOBALS['base_path'] . drupal_get_path('theme','mcc');
	$p['internal'] = current_path(); 
	$p['alias'] = drupal_get_path_alias( $p['internal'] );
	$p['alias_array'] = explode('-', $p['alias'] );
	return $p;
}






