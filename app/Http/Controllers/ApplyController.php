<?php

namespace App\Http\Controllers;

use App\Apply;
use Illuminate\Http\Request;

class ApplyController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'gender' => 'required',
            'name' => 'required',
            'age' => 'required',
            'sns' => 'required',
            'visa' => 'required',
            'level' => 'required',
            'it' => 'required',
        ]);

        $request->user()->applies()->create([
            'gender' => $request->gender,
            'name' => $request->name,
            'age' => $request->age,
            'sns' => $request->sns,
            'visa' => $request->visa,
            'level' => $request->level,
            'it' => $request->it
        ]);
    }

    public function show(Apply $apply)
    {
        //
    }

    public function edit(Apply $apply)
    {
        //
    }

    public function update(Request $request, Apply $apply)
    {
        //
    }

    public function destroy(Apply $apply)
    {
        //
    }
}
