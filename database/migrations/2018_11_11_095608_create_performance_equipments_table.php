<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerformanceEquipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performance_equipments', function (Blueprint $table) {
            $table->increments('id')                    ->comment('主キー');
            $table->unsignedInteger('performance_id')   ->comment('パフォーマンスID');
            $table->unsignedInteger('equipment_id')     ->comment('使用設備ID');

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
        Schema::dropIfExists('performance_equipments');
    }
}
