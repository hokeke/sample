<?php
$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    $token = $_POST['token'];
    file_put_contents('./tokens/token.txt', $token);
    echo $token;
}

if ($method == 'GET') {
    $tokens = array();
    $files = glob('./tokens/*');
    foreach ($files as $file) {
        $token = file_get_contents($file);
        array_push($tokens, $token);
    }
    echo json_encode($tokens);
}
?>