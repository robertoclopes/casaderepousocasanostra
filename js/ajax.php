<?php

sleep(1);   //  1 segundo de time
$post = filter_input_array(INPUT_POST, FILTER_DEFAULT);
//print_r($post);
echo json_encode($post);

