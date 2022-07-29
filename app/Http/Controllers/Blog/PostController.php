<?php

namespace App\Http\Controllers\Blog;

use App\Http\Resources\Blog\PostResource;
use App\Models\Post;
use Illuminate\Routing\Controller;


class PostController extends Controller
{
    public function __invoke($slug)
    {
        return new PostResource(Post::where('slug', $slug)->first());
    }
}