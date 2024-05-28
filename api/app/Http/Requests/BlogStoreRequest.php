<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    // protected function prepareForValidation(): void
    // {
    //     $this->merge([
    //         'user_id' => $this->user->id,
    //     ]);
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => ['exists:id,users, required'],
            'title' => ['required', 'string'],
            'body' => 'required',
            'tags' => ['required']
        ];
    }
}
