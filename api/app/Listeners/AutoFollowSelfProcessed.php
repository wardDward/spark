<?php

namespace App\Listeners;

use App\Events\AutoFollowSelf;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;

class AutoFollowSelfProcessed
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(AutoFollowSelf $event): void
    {
        DB::table('follower_user')->insert([
            'user_id' => $event->user->id,
            'follower_id' => $event->user->id
        ]);
    }
}
