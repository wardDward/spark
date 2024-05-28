<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'blog_author' => new AuthenticatedUserResource($this->user),
            'body' => $this->body,
            'tags' => TagResource::collection($this->tags),
            'created_at' => $this->created_at
        ];
    }
}
