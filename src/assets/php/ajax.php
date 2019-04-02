<?php
  $filename = 'counter.txt';
  $file = +file_get_contents($filename);
  $file++;
  echo "users visited: ".$file;
  $f = fopen($filename,'w');
  fwrite($f,$file);
  fclose($f);
?>

