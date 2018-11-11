<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerformanceEquipmantsRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('performance_equipments', function (Blueprint $table) {
            $table -> foreign('performance_id')
                -> references('id')
                -> on('performances');

            $table -> foreign('equipment_id')
                -> references('id')
                -> on('equipments');
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('performance_equipments', function (Blueprint $table) {
            $table->dropForeign('performance_equipments_performance_id_foreign');
            $table->dropForeign('performance_equipments_equipment_id_foreign');
        });
    }
}


