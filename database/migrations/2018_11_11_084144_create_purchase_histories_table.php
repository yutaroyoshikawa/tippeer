<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_histories', function (Blueprint $table) {
            $table->increments('id')                                    ->comment('主キー');
            $table->unsignedInteger('user_id')->nullable(false)         ->comment('ユーザID');
            $table->unsignedInteger('works_content_id')->nullable(false)->comment('作品コンテンツID');
            $table->timestampTz('date')->nullable(false)                ->comment('購買日時');

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
        Schema::dropIfExists('purchase_histories');
    }
}
