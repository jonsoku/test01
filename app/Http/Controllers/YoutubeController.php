<?php

namespace App\Http\Controllers;

use App\Youtube;
use Illuminate\Http\Request;

class YoutubeController extends Controller
{
    public function index()
    {
        $youtubes = Youtube::with('user')->latest()->paginate(4);

        return response()->json([
            'youtubes' => $youtubes
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'url' => 'required',
            'description' => 'required'
        ]);

        $request->user()->youtubes()->create([
            'title' => $request->title,
            'url' => $request->url,
            'description' => $request->description
        ]);
    }

    public function show(Youtube $youtube)
    {
        $youtube->user;

        $youtubeComments = $youtube->youtubeComments()->with('user')->latest()->get();

        return response()->json([
            'youtube' => $youtube,
            'youtubeComments' => $youtubeComments
        ]);
    }

    public function edit(Youtube $youtube)
    {
        //
    }

    public function update(Request $request, Youtube $youtube)
    {
        //
    }

    public function destroy(Youtube $youtube)
    {
        $youtube->delete();
    }
}
