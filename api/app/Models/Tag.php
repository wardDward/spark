<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;



class Tag extends Model
{
    use HasFactory;

    public static function booted()
    {
        self::creating(function (Tag $tag) {
            $tag->slug = Str::slug($tag->name);
        });
    }

    protected $fillable = [
        'name',
        'slug',
        'description',
        'color'
    ];

    public function blogs()
    {
        return $this->belongsToMany(Blog::class, 'blog_tag', 'tag_id', 'blog_id');
    }
}
