<?php

namespace App\Http\Controllers\Catalogs;

use App\Http\Controllers\Controller;
use App\Http\Requests\Catalogs\AdvancedSearchRequest;
use App\Http\Requests\Catalogs\SearchRequest;
use App\Http\Resources\Catalogs\SearchCollection;
use App\Models\Catalogs\CatalogsView;
use Exception;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function search(SearchRequest $request, CatalogsView $product)
    {
        if ($request->has('sku')) {
            $result = $product->search(trim($request->sku))->paginate(10);
            $result->withQueryString();
        } else {
            $result = new SearchCollection([]);
        }

        return Inertia::render('Catalogs/Search/Search', [
            'results' => new SearchCollection($result),
        ]);
    }

    public function advanced(AdvancedSearchRequest $request)
    {
        throw new Exception('Exception');
    }
}
