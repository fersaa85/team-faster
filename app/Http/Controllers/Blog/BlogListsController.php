<?php

namespace App\Http\Controllers\Blog;

use App\Http\Resources\Blog\BlogResourceCollection;
use App\Models\Post;
use Illuminate\Routing\Controller;


class BlogListsController extends Controller
{
    public function __invoke()
    {
        return new BlogResourceCollection(Post::get());
    }
}