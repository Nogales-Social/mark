<?php

namespace App\Http\Resources\Catalogs;

use Illuminate\Http\Resources\Json\JsonResource;

class SearchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'sku' => $this->sku,
            'description' => $this->description,
            'brand' => $this->brand,
            'exchanges' => new ExchangeCollection($this->exchanges),
            'cost' => $this->cost,
            'price' => $this->price,
        ];
    }
}
