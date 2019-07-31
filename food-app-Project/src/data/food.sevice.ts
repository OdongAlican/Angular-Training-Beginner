import { EventEmitter } from '@angular/core';
import { FoodLayout } from 'src/app/model/food.layout';

export class FoodLayouts{

        foodSelected = new EventEmitter<FoodLayout>()

        private foodlayouts: FoodLayout[] = [ 
            new FoodLayout(
                1,
                "Beef",
                'https://www.lusakatimes.com/wp-content/uploads/2017/08/beef-stew-2.2.jpg',
                6000)
        ,
            new FoodLayout(
                2,
                "Pork",
                'https://www.delishph.com/wp-content/uploads/2018/07/Stir-Fry-Pork-with-Oyster-Sauce2.jpg',
                20000
            )
        ,
            new FoodLayout(
                3,
                "Fish",
                'https://img.taste.com.au/po1qdjyw/w643-h428-cfill-q90/taste/2016/11/fish-stew-30103-1.jpeg',
                6500
            )
        ,  
            new FoodLayout(
                4,
                "Goat",
                'https://c1.staticflickr.com/1/92/212092492_e5d7325909_z.jpg',
                7500
            )
        ,
            new FoodLayout(
                5,
                "Beans",
                'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/kuru_fasulye-deae63dd-dda5-4390-b67b-3b2d68d4a1eb.jpg',
                2500
            )
        ,
            new FoodLayout(
                6,
                "Peas",
                'https://greeksisters.com/wp-content/uploads/2015/06/arakas.jpg',
                3500
            )
        ,
            new FoodLayout(
                7,
                "Mukene",
                'https://img-global.cpcdn.com/001_recipes/603a2fc7cbbf779a/751x532cq70/fried-omena-recipe-main-photo.jpg',
                1500
            )
        ,
            new FoodLayout(
                8,
                "Vegetables",
                'https://foodsogoodmall.com/wp-content/uploads/2014/01/Chicken-and-Vegetable-Stew-1140x500.jpg',
                2500
            )
        ,
            new FoodLayout(
                9,
                "Chapati",
                'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/kenyan-soft-layered-chapati-79b30c5a09b4ac324db4637a.jpg',
                500
            )
        ,
            new FoodLayout(
                10,
                "Pizza",
                'https://d1bjorv296jxfn.cloudfront.net/s3fs-public/styles/recipes_header_image/public/recipe-images/sargento/1159-4-Cheese-Mexican-Pizza.jpg?itok=bOpvjjdo',
                25000
            )
       ,
            new FoodLayout(
                11,
                "Rolex",
                'https://previews.123rf.com/images/foodandmore/foodandmore1807/foodandmore180700228/105071959-two-delicious-indigenous-ugandan-rolex-rolls-made-with-egg-omelette-and-diced-fresh-vegetables-rolle.jpg',
                4500
            )
        ,
            new FoodLayout(
                12,
                "Kikomando",
                'https://wirejames.files.wordpress.com/2017/04/kikomando.jpg?w=500',
                1500
            )
        ,
            new FoodLayout(
                13, 
                "Hot-Dog",
                'https://www.everydaysouthwest.com/wp-content/uploads/2012/05/Sonoran-Bacon-wrapped-hotdogs-1-of-32.jpg',
                5000
            )
        ,
            new FoodLayout(
                14,
                "Chips",
                'https://www.corriecooks.com/wp-content/uploads/2018/08/Instant-Pot-French-Fries.jpg',
                3500
            ) 
    ]

    getfoodsLayout(){
        return this.foodlayouts.slice()
    }

}