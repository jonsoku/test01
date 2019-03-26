<?php

namespace App\Http\Controllers;

use App\Notice;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function index(Request $request)
    {
        $notices = Notice::with('user')->with('noticeComments')->latest()->paginate(10);
        $user = $request->user();

        return response()->json([
            'notices' => $notices,
            'user' => $user
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required | max:100',
            'description' => 'required'
        ]);
        $request->user()->notices()->create([
            'title' => $request->title,
            'description' => $request->description
        ]);
    }

    public function show(Notice $notice)
    {
        $notice->user;

        $noticeComments = $notice->noticeComments()->with('user')->latest()->get();

        return response()->json([
            'notice' => $notice,
            'noticeComments' => $noticeComments
        ]);
    }

    public function edit(Notice $notice)
    {
        $notice->user;

        return response()->json([
            'notice' => $notice
        ]);
    }

    public function update(Request $request, Notice $notice)
    {
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required'
        ]);

        $input = $request->all();
        $notice->update($input);
    }

    public function destroy(Notice $notice)
    {
        $notice->delete();
    }
}
