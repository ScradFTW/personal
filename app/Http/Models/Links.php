<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Links extends Model
{
    public static function allOrderedByType()
    {
        $links = self::query()
            ->select('url', 'types.name as type_name', 'links.name as link_name')
            ->orderBy("type")
            ->join('types', 'links.type', 'types.id')
            ->get();

        $ordered = [];
        foreach ($links as $link) {
            $type = $link->type_name;

            if (!array_key_exists($type, $ordered)) {
                $ordered[$type] = [];
            }

            array_push($ordered[$type], $link);
        }

        return $ordered;
    }
}
