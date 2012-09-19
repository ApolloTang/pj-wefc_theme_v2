<?php
function copyright_date( $startYear ) {
  ini_set('date.timezone', 'Europe/London');
  $thisYear = date('Y');
  if ($startYear == $thisYear) {
    $date = $startYear;
  } else {
    $date = "{$startYear}-{$thisYear}";
  }
	return $date;
}

