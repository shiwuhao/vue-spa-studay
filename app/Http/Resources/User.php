<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class User extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'username' => $this->name,
            'email' => $this->email,
            'post' => new PostCollection($this->posts)
        ];
    }

    public function with($request)
    {
        return [
            'status' => 'success'
        ];
    }
}
