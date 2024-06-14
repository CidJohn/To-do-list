<?php

header('Access-Control-Allow-Origin: *');
header('Content-Tyoe: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Tyoe,Access-Control-Allow-Methods,Autorization,X-Requested-With');
//initializing our api
include_once('../core/initialize.php');

//intantiate post
$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

$post->id = $data->id;
$post->title = $data->title;
$post->body = $data->body;
$post->autor = $data->autor;
$post->category_id = $data->category_id;
$post->title = $data->title;    

if($post->update()){
    echo json_encode(
        array('message' => 'Update Post.')
    );
}else{
     echo json_encode(
        array('message' => 'Post not Updated.')
    );
}