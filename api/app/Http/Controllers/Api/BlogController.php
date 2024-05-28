<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogStoreRequest;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $following_id = auth()->user()->following()->pluck('follower_id');

        $get_blogs = Blog::whereIn('user_id', $following_id)
            ->with(['user', 'tags'])
            ->paginate(5);

        return BlogResource::collection($get_blogs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BlogStoreRequest $request)
    {
        $data = $request->validated();

        $blog = auth()->user()->blogs()->create($data);

        foreach($data['tags'] as $tag){
            $blog->tags()->attach($tag['id']);
        }

        return response()->noContent();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
