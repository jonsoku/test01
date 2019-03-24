<?php

namespace App\Http\Controllers;

use App\YoutubeComment;
use Illuminate\Http\Request;
use App\Youtube;

class YoutubeCommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Youtube $youtube)
    {
        $this->validate($request, [
            'body' => 'required | min:3 | max:1000',
        ]);
        $user = $request->user();
        $user->youtubeComments()->create(array_merge(
            $request->all(),
            ['youtube_id' => $youtube->id]
        ));

        return redirect(route('youtubes.show', $youtube->id));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\YoutubeComment  $youtubeComment
     * @return \Illuminate\Http\Response
     */
    public function show(YoutubeComment $youtubeComment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\YoutubeComment  $youtubeComment
     * @return \Illuminate\Http\Response
     */
    public function edit(YoutubeComment $youtubeComment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\YoutubeComment  $youtubeComment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, YoutubeComment $youtubeComment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\YoutubeComment  $youtubeComment
     * @return \Illuminate\Http\Response
     */
    public function destroy(YoutubeComment $youtubeComment)
    {
        $youtubeComment->delete();
    }
}
