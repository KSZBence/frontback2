<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function Laravel\Prompts\table;

class TesztController extends Controller
{
    public function getTesztek(){
        $tesztek = DB::table("teszts")
        ->get();
        return $tesztek;
    }
}
