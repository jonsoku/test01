<?php
// Route::get('/{any}', function(){
//     return view('welcome');
// })->where('any','.*');


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('notices', 'NoticeController')->middleware('auth');
Route::resource('notices.noticeComments', 'NoticeCommentController')->middleware('auth');
Route::resource('boards', 'BoardController')->middleware('auth');
Route::resource('boards.boardComments', 'BoardCommentController')->middleware('auth');
Route::resource('posts', 'PostController')->middleware('auth');
Route::resource('youtubes', 'YoutubeController')->middleware('auth');
Route::resource('youtubes.youtubeComments', 'YoutubeCommentController')->middleware('auth');
Route::resource('applies', 'ApplyController')->middleware('auth');
