<?php

use App\Models\Teszt;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teszts', function (Blueprint $table) {
            $table->id();
            $table->string("kerdes");
            $table->string("v1");
            $table->string("v2");
            $table->string("v3");
            $table->string("v4");
            $table->string("helyes")->default("v1");                
            $table->foreignId("kategoriaId")->references("id")->on("kategorias");
            $table->timestamps();
        });

        Teszt::create(["kerdes" => "teszt kérdés", "v1" => "valsz1", "v2" => "valsz2", "v3" => "valsz3", "v4" => "valsz4","kategoriaId" => 1]);
        Teszt::create(["kerdes" => "teszt kérdés", "v1" => "valsz1", "v2" => "valsz2", "v3" => "valsz3", "v4" => "valsz4","kategoriaId" => 1]);
        Teszt::create(["kerdes" => "teszt kérdés", "v1" => "valsz1", "v2" => "valsz2", "v3" => "valsz3", "v4" => "valsz4","kategoriaId" => 2]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teszts');
    }
};
