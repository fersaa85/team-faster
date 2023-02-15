<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SignUpEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The demo object instance.
     *
     * @var data
     */
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_FROM_ADDRESS'))
            ->view('mails.signup')
            ->with(
                [
                    'name' =>  $this->data->name,
                    'age' => $this->data->age,
                    'size' => $this->data->size,
                    'date' => $this->data->date,
                    'venue' => $this->data->venue,
                    'address' => $this->data->address,
                    'workout' => $this->data->workout,
                    'coatch' => $this->data->coatch,
                    'slug' => $this->data->slug,
                ]);

    }
}
