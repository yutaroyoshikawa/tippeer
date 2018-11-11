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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')                      ->comment('主キー');
            $table->string('name')                        ->comment('ユーザネーム');
            $table->unsignedInteger('gender_id')          ->comment('性別');
            $table->string('user_id')->unique()           ->comment('ユーザID');
            $table->date('birthday')                      ->comment('誕生日');
            $table->string('tel')->unique()               ->comment('電話番号');
            $table->string('icon')                        ->comment('ユーザアイコンURL');
            $table->unsignedInteger('account_type_id')    ->comment('アカウント種');
            $table->string('email')->unique()             ->comment('メールアドレス');
            $table->date('registration_date')             ->comment('アカウント登録日');

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
