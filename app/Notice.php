<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\NoticeComment;

class Notice extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function noticeComments(){
        return $this->hasMany(NoticeComment::class);
    }
}
