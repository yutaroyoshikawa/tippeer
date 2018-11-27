<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $iconUrl = '';
        Schema::create('users', function (Blueprint $table) use($iconUrl) {
            $table->increments('id')                                    ->comment('主キー');
            $table->string('name')->nullable(false)                     ->comment('ユーザネーム');
            $table->string('gender')->nullable(false)                   ->comment('性別');
            $table->string('user_id')->unique()->nullable(false)        ->comment('ユーザID');
            $table->date('birthday')->nullable(false)                   ->comment('誕生日');
            $table->string('tel')->unique()->nullable(false)            ->comment('電話番号');
            $table->string('icon')->nullable(false)->default($iconUrl)  ->comment('ユーザアイコンURL');
            $table->unsignedInteger('account_type_id')->nullable(false) ->comment('アカウント種');
            $table->string('email')->unique()->nullable(false)          ->comment('メールアドレス');
            $table->date('registration_date')->nullable(false)          ->comment('アカウント登録日');

            $table -> index('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
