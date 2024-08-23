import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RecipeCard from "./recipe-card"; // Assuming you have a RecipeCard component
import { RecipesList } from "./recipes"; // Assuming you have a RecipesList data source


export function CarouselSpacing() {
  return (
    <Carousel className="flex flex-col mx-auto m-4 md:m-12 relative"> 
    <div className="absolute top-0 right-0 flex justify-between items-center z-10 mr-12">
        <CarouselPrevious className="bg-orange-200"/>
        <CarouselNext className="bg-orange-200"/>
    </div>
    <CarouselContent className="ml-1 mt-8">
        {RecipesList.map((recipe: { percent: string; image: string; imageAlt: string; name: string; ingredients: string; time: string; rating: string; vote: string }, index: React.Key | null | undefined) => (
        <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"> 
            <RecipeCard
                key={index}
                percent={recipe.percent}
                image={recipe.image}
                imageAlt={recipe.imageAlt}
                name={recipe.name}
                ingredients={recipe.ingredients}
                time={recipe.time}
                rating={recipe.rating}
                vote={recipe.vote}
                />
        </CarouselItem>
        ))}
        </CarouselContent>
    </Carousel>
)
}
