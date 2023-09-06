<?php

// zadatak 1

$broj = 52562;
$duzina = strlen($broj);
$zbir = 0;
for($i=0; $i<=$duzina; $i++){
    // $zbir = $zbir + substr($broj, $i);
}

// echo $zbir;

// zadatak 2
$string = 'hj87VHj9ˆ26gbhnUJ72';

$converted = '';
$duzina= strlen($string);
echo $duzina . '<br>';
 $a = str_split($string);
for($i=0; $i< $duzina; $i++){
    if($a[$i] === strtoupper($a[$i])){
        $converted = $converted . strtoupper($a[$i]);
    }
    elseif ($a[$i] === strtolower($a[$i])){
        $converted = $converted . strtolower($a[$i]);
    }
    else{
        $converted = $converted . $a[$i];
    }
}
// echo '<pre>';
// print_r($a);
// echo '</pre>';
echo $converted;

// zadatak 3
echo '<br>';
$input1 = [1, 2, -1, 3, -3];
$input2 = [20, 10, -10, 100];
$ponavljanje= 0;
for ($i=0; $i< count($input1); $i++){
    $a = abs($input1[$i]);

    if(array_search($a,$input1) > 1){
        
        $ponavljanje = $ponavljanje + 1;
    }
}
echo '<br>'. $ponavljanje;

$ponavljanje= 0;
for ($i=0; $i< count($input2); $i++){
    $a = abs($input2[$i]);
    
    if(array_search($a,$input2) > 1){
        
        $ponavljanje = $ponavljanje + 1;
    }
}
echo '<br>'. $ponavljanje;
?>