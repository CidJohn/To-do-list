<?php

class Post
{
 //db stuff
    private $conn;
    private $table = 'posts';

    //post properties
    public $id;
    public $category_id;
    public $category_name;
    public $title;
    public $body;
    public $autor;
    public $create_at;

    //contructor with connection
    public function __construct($db){
        $this->conn = $db;
    }
    public function read(){
        //create query
        $query = 'SELECT 
        c.name as category_name,
        p.id,
        p.category_id,
        p.body,
        p.autor,
        p.title,
        p.created_at
        FROM
        `' . $this->table . '` p
        LEFT JOIN
            categories c ON p.category_id = c.id
            ORDER BY p.created_at DESC';

            //PREPARE STATEMENT
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            return $stmt;
    }

    public function read_single(){
        //create query
        $query = 'SELECT 
        c.name as category_name,
        p.id,
        p.category_id,
        p.body,
        p.autor,
        p.title,
        p.created_at
        FROM
        `' . $this->table . '` p
        LEFT JOIN
            categories c ON p.category_id = c.id
            WHERE p.id = ? LIMIT 1';

         $stmt = $this->conn->prepare($query);
        //binding param
        $stmt->bindParam(1, $this->id);

        $stmt->execute();

         $row = $stmt->fetch(PDO::FETCH_ASSOC);

         $this->title = $row['title'];
         $this->body = $row['body'];
         $this->autor = $row['autor'];
         $this->category_id = $row['category_id'];
         $this->category_name = $row['category_name'];
    }

    public function create(){
        //create query
        $query = 'INSERT INTO ' . $this->table .' SET title = :title, body = :body, autor = :autor , category_id = :category_id';
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->title        = htmlspecialchars(strip_tags($this->title));
        $this->body         = htmlspecialchars(strip_tags($this->body));
        $this->autor        = htmlspecialchars(strip_tags($this->autor));
        $this->category_id  = htmlspecialchars(strip_tags($this->category_id));
        //binding of parameters
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':body', $this->body);
        $stmt->bindParam(':autor', $this->autor);
        $stmt->bindParam(':category_id', $this->category_id);

        //execute the query
        if($stmt->execute()){
            return true;
        }
        // error if something wrong 
        printf('Error: %s \n',$stmt->error);
        return false; 
    }

    public function update(){
        //create query
        $query = 'UPDATE ' . $this->table .' SET title = :title, body = :body, autor = :autor , category_id = :category_id WHERE id= :id';
        //prepare statement
        $stmt = $this->conn->prepare($query);
        //clean data
        $this->title        = htmlspecialchars(strip_tags($this->title));
        $this->body         = htmlspecialchars(strip_tags($this->body));
        $this->autor        = htmlspecialchars(strip_tags($this->autor));
        $this->category_id  = htmlspecialchars(strip_tags($this->category_id));
        $this->id           = htmlspecialchars(strip_tags($this->id));
        //binding of parameters
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':body', $this->body);
        $stmt->bindParam(':autor', $this->autor);
        $stmt->bindParam(':category_id', $this->category_id);
        $stmt->bindParam(':id', $this->id);

        //execute the query
        if($stmt->execute()){
            return true;
        }
        // error if something wrong 
        printf('Error: %s \n',$stmt->error);
        return false; 
    }

    public function delete(){
        //create query
        $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';
        // prepare query
        $stmt = $this->conn->prepare($query);
        // clean data
        $this->id = htmlspecialchars(strip_tags($this->id));
        // biding parameters
        $stmt->bindParam(':id', $this->id);
        //execute the query
        if($stmt->execute()){
            return true;
        }
        // error if something wrong 
        printf('Error: %s \n',$stmt->error);
        return false; 
    }

}
   

?>