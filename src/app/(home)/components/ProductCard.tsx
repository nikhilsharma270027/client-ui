import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  return (
    
      <Card className="border-none rounded-xl">
        <CardHeader>
          <Image alt="pizza-image" width={150} height={150} src={product.image} />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="mt-2">{product.description}</p>
        </CardContent>
        <CardFooter>
          <p>
            <span>From </span>
            <span className="font-bold">${product.price}</span>
          </p>
        </CardFooter>
      </Card>
    
  );
};

export default ProductCard;
