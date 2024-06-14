<?php

header('Access-Control-Allow-Origin: *');
header('Content-Tyoe: application/json');

//initializing our api
include_once('../core/initialize.php');

//intantiate post

$post = new Post($db);

$post->id = isset($_GET['id']) ? $_GET['id'] : die();

$post->read_single();

$post_arr = array(
    'id' => $post->id,
    'title' => $post->title,
    'body' => $post->body,
    'autor' => $post->autor,
    'category_id' => $post->category_id,
    'category_name' => $post->category_name
);

//make a json
print_r(json_encode($post_arr));
