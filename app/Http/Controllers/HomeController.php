<?php

namespace App\Http\Controllers;

use \App\Models\Links;

class HomeController extends Controller
{
    /**
     * Load the various components of the home page, including:
     *  - Brad Jobe's profile
     *  - Links to Projects
     *  - Links to Resume
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view("home", [
            'links_content' => Links::allOrderedByType()
        ]);
    }
}
