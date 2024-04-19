<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KategoriaController extends Controller
{
    function getKategoriaByID($id){
        $kategoria = DB::table("kategorias")
        ->where('id', "=", $id)
        ->get();
        return $kategoria;
    }

    function getKategoriak(){
        $kategoriak = DB::table("kategorias")
        ->select("*")
        ->get();
        return $kategoriak;
    }
}
