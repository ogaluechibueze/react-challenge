"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const dataProduct = [
  { id: 17933, size: 4, img: "./4-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 278 },
  { id: 17934, size: 6, img: "./6-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 305 },
  { id: 17935, size: 8, img: "./8-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 375 },
  { id: 17936, size: 10, img: "./10-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 400 },
  { id: 17937, size: 12, img: "./12-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 439 },
  { id: 17938, size: 14, img: "./14-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 470 },
  { id: 17939, size: 16, img: "./16-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 496 },
  { id: 15124, size: 20, img: "./20-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 992 },
  { id: 15125, size: 40, img: "./40-yarder-skip.jpg", hire_period_days: 14, price_before_vat: 992 },
];

const Hero = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <main className="p-4">
      <div className="text-center mb-8">
        <h1 className="text-lg font-bold text-gray-700 mb-2">Choose Your Skip Size</h1>
        <p className="text-sm text-gray-500">Select the skip size that best suits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataProduct.map((item) => (
          <Card key={item.id} className="bg-white shadow hover:shadow-xl transition-shadow">
            <CardHeader className="flex justify-center">
              <img src={item.img} alt={`${item.size}-yard skip`} className="h-40 object-contain" />
            </CardHeader>

            <CardContent className="text-center">
              <h3 className="text-xl font-bold text-red-600">{item.size} Yard Skip</h3>
              <p className="text-sm text-gray-500 mb-4">{item.hire_period_days} day hire</p>
              <p className="text-lg font-semibold">£{item.price_before_vat} + VAT</p>
            </CardContent>

            <CardFooter>
              <Button
                variant={selectedId === item.id ? "outline" : "destructive"}
                className="w-full flex justify-center items-center gap-2"
                onClick={() => handleSelect(item.id)}
              >
                {selectedId === item.id ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> Selected
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-4 h-4" /> Select this Skip
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Hero;
