<?php

header('Access-Control-Allow-Origin: *');
header('Content-Tyoe: application/json');

//initializing our api
include_once('../core/initialize.php');

//intantiate post

$post = new Post($db);

//blog post query

$result = $post->read();

//  $num = $result->rowCount();

// if($num > 0){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'id' => $id,
            'title' => $title,
            'body' => html_entity_decode($body),
            'autor' => $autor,
            'category_id' => $category_id,
            'category_name' => $category_name
        );
        array_push($post_arr['data'], $post_item);
    }
    //Trying convert JSON and output
    if (!empty($post_arr['data'])) {
        echo json_encode($post_arr);
    } else {
        echo json_encode(array('message' => 'No post found.'));
    }
   // echo json_encode($post_arr);
// }else{
//     echo json_encode(array('message' => 'No post found.'));
// }   
//Trying convert JSON and output
