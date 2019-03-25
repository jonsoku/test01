<?php

namespace App\Http\Controllers;

use App\NoticeComment;
use Illuminate\Http\Request;
use App\Notice;

class NoticeCommentController extends Controller
{
    public function store(Request $request, Notice $notice)
    {
        $this->validate($request, [
            'body' => 'required | max:1000',
        ]);
        $user = $request->user();
        $user->noticeComments()->create(array_merge(
            $request->all(),
            ['notice_id' => $notice->id]
        ));

        return redirect(route('notices.show', $notice->id));
    }

    public function show(NoticeComment $noticeComment)
    {
        //
    }

    public function edit(NoticeComment $noticeComment)
    {
        //
    }

    public function update(Request $request, NoticeComment $noticeComment)
    {
        //
    }

    public function destroy(NoticeComment $noticeComment)
    {
        //
    }
}
