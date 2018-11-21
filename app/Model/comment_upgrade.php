<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class comment_upgrade extends Model
{
    //DB::update('update works_comments set user_id = $POST[]', $POST['?']);
    //DB::update('update users set votes = 100 where name = ?', ['John']);
    DB::UPDATE works_comments SET comments = $POST['?'] WHERE user_id = $POST[''];
    send_log($err_log);
    $substr('$err_log',7,4);
    post ['$substr'];
    return  
}
