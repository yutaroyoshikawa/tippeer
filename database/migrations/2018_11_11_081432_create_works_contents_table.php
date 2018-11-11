<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorksContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('works_contents', function (Blueprint $table) {
            $table->increments('id')            ->comment('主キー');
            $table->unsignedInteger('works_id') ->comment('作品ID');
            $table->string('name')              ->comment('作品名');
            $table->integer('price')            ->comment('価格');
            $table->string('data_url')          ->comment('データURL');

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
        Schema::dropIfExists('works_contents');
    }
}
