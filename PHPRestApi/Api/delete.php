<?php

header('Access-Control-Allow-Origin: *');
header('Content-Tyoe: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Tyoe,Access-Control-Allow-Methods,Autorization,X-Requested-With');
//initializing our api
include_once('../core/initialize.php');

//intantiate post
$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

$post->id = $data->id;

if($post->delete()){
    echo json_encode(
        array('message' => 'Post Deleted.')
    );
}else{
     echo json_encode(
        array('message' => 'Post not Deleted.')
    );
}