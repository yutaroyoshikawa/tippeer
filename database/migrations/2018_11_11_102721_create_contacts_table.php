<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->increments('id')            ->comment('主キー');
            $table->unsignedInteger('user_id')  ->comment('ユーザID');
            $table->string('title')             ->comment('問い合わせタイトル');
            $table->string('content')           ->comment('問い合わせ本文');
            $table->unsignedInteger('type_id')  ->comment('問い合わせ種ID');
            $table->timestampTz('date')        ->comment('問い合わせ日時');

            $table->index('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}
