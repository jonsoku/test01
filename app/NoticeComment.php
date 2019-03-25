<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Notice;

class NoticeComment extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function notice(){
        return $this->belongsTo(Notice::class);
    }
}
