<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\YoutubeComment;

class Youtube extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function youtubeComments(){
        return $this->hasMany(YoutubeComment::class);
    }
}
