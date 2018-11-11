<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->increments('id')                    -> comment('主キー');
            $table->string('name')->unique()            -> comment('地名');
            $table->unsignedInteger('prefecture_id')    -> comment('都道府県ID');
            $table->string('address')                   -> comment('住所');
            $table->float('latitude')                   -> comment('緯度');
            $table->float('longitude')                  -> comment('経度');

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
        Schema::dropIfExists('locations');
    }
}
