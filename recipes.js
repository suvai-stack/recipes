const recipeDatabase = {
    meghana: {
        title: "Meghana Boneless Chicken Biryani",
        note: "CRITICAL: Remember to reserve exactly 1 kitchen spoon of the Hundi gravy base for the staging assembly layer.",
        sections: [
            {
                name: "Grain & Protein Setup",
                items: [
                    { text: "Basmati Rice (Wash 3-4 times, soak 1 hour)", base: 2, unit: "Glasses" },
                    { text: "Boneless Chicken (Cut into clean cubic pieces)", base: 750, unit: "g" }
                ]
            },
            {
                name: "Secret Ground Masala Spices",
                items: [
                    { text: "Nutmeg Powder", base: 0.5, unit: "piece" },
                    { text: "Star Anise", base: 1, unit: "unit" },
                    { text: "Cinnamon", base: 1, unit: "inch" },
                    { text: "Cloves", base: 4, unit: "units" },
                    { text: "Cardamom", base: 4, unit: "units" }
                ]
            },
            {
                name: "Chicken Marination Assembly",
                items: [
                    { text: "Turmeric powder (pinch) + Salt", base: 0.5, unit: "tsp" },
                    { text: "Cumin powder", base: 0.25, unit: "tsp" },
                    { text: "Kashmiri Red Chilli powder", base: 1, unit: "tsp" },
                    { text: "Ginger Garlic paste", base: 1, unit: "tbsp" },
                    { text: "Green Chilli Sauce", base: 1, unit: "tbsp" },
                    { text: "Raw Egg", base: 1, unit: "unit" },
                    { text: "Curd", base: 2, unit: "tbsp" },
                    { text: "Black Pepper powder", base: 0.5, unit: "tsp" },
                    { text: "Corn flour (Mix well, marinate 30-60 mins)", base: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Aromatics & Liquid Base Prep",
                items: [
                    { text: "Chop Onions: 2 for fry + 3 for hundi. Total", base: 5, unit: "medium onions" },
                    { text: "Puree Tomatoes: 3 for fry + 1 for hundi. Total", base: 4, unit: "medium tomatoes" },
                    { text: "Slice Green Chillies: 4 for fry + 4 for hundi. Total", base: 8, unit: "chillies" },
                    { text: "Mint leaves (Exact count configuration)", base: 36, unit: "leaves" },
                    { text: "Coriander leaves (Exact count configuration)", base: 54, unit: "leaves" },
                    { text: "Buffalo Milk", base: 100, unit: "ml" },
                    { text: "Saffron Water (Steep pinch of saffron in 50ml hot water)", base: 50, unit: "ml" }
                ]
            }
        ],
        steps: [
            {
                title: "Step A: Rice Boiling Pipeline",
                badge: "3-4 Mins High Flame",
                timer: 240,
                instructions: [
                    "Bring 2 liters of water to a rolling boil with 3 tbsp salt, 2 bay leaves, 1 inch cinnamon, 3 cardamom, and 3 cloves.",
                    "Introduce soaked rice. Boil 3 to 4 mins on high flame to hit 90% par-cooked status. Drain fully and set aside."
                ]
            },
            {
                title: "Step B: Chicken Fry & Pan Semi-Gravy",
                badge: "Dual Side Pacing",
                timers: [ { name: "Side 1", secs: 300 }, { name: "Side 2", secs: 300 } ],
                instructions: [
                    "Drop marinated pieces into medium heat oil. Fry 5 mins, flip, fry 5 mins more. Move to plate; retain 4 tbsp oil in pan.",
                    "Sauté 3 stems curry leaves and 4 chopped chillies for 20 seconds. Add 2 chopped onions and fry 2 mins on high. Add 1 tsp ginger garlic paste and fry 2 mins on high.",
                    "Stir in 0.25 tsp turmeric and 1 tbsp red chilli powder for 10 seconds. Add 3 pureed tomatoes; fry 2 mins on high. Add 1 tsp salt; cook 2 mins on high until surface oil breaks.",
                    "Pour in 50ml water; boil 2 mins on high. Mix remaining ground masala; simmer 2 mins on medium. Toss in fried chicken; coat 3-4 mins. Blend in 2 tbsp fresh cream; cook 2 mins on medium. Garnish with coriander leaves and set pan aside."
                ]
            },
            {
                title: "Step C: Master Hundi Rice-Gravy Base",
                badge: "Aromatic Layering Build",
                instructions: [
                    "In your main Hundi: Heat 4 tbsp chicken-fried oil and 1 tbsp ghee. Sauté whole spices (4 cardamom, 4 cloves, 1.5 inch cinnamon, 1 kapok bud, 1 black cardamom, 1 star anise, half flower mace) for 1 min on low.",
                    "Add 3 chopped onions; fry 2 mins. Toss in 1 tsp salt; fry 3-4 mins on medium. Stir in 1 tbsp ginger garlic paste; cook 2 mins.",
                    "Mix 4 sliced green chillies, 36 mint leaves, and 54 coriander leaves; fry 1 min on medium. Add 0.25 tsp turmeric and 1 tsp red chilli powder; cook 2 mins.",
                    "Blend in 1 pureed tomato (cook 1 min), then add 2 tbsp curd (cook 2 mins). Sprinkle a pinch of kasuri methi (cook 1 min). Pour 100ml buffalo milk; let base bubble 2 mins.",
                    "Squeeze 0.5 big lemon and throw in 0.5 tsp Shahjeera; cook 1 min. Remove 1 standard kitchen spoonful of this base and reserve it in a small bowl."
                ]
            }
        ],
        showLayeringTable: true,
        dumTitle: "Steam Lock Down Phase",
        dumBadge: "10 Mins Low Flame",
        dumTimer: 600,
        dumInstruction: "Lace layers precisely as mapped in the structural blueprint layout. Crimp structural silver foil over edges, drop lid, place heavy pan weight. Cook over Low Flame for 10 minutes. Cut heat, let stand closed 10 mins. Serve layered rice with the spicy boneless chicken semi-gravy on top or side."
    },
    samba: {
        title: "Authentic Seeraga Samba Chicken Biryani",
        note: "ESSENTIAL TASTE PARAMETER: Never fry raw cashews in oil. Frying cashew pieces directly in cooking fat causes swift scorching, introducing an unpleasant bitter element that overrides the fragrance of Seeraga Samba rice. Always dry roast on an oil-free pan as instructed below.",
        sections: [
            {
                name: "Biryani Masala Spices (Dry Roast Base)",
                items: [
                    { text: "Cashews", base: 10, unit: "units" },
                    { text: "Cloves", base: 6, unit: "units" },
                    { text: "Cardamom", base: 6, unit: "units" },
                    { text: "Star Anise", base: 1, unit: "unit" },
                    { text: "Kalpaasi", base: 2, unit: "tbsp" },
                    { text: "Sombu", base: 1, unit: "tsp" },
                    { text: "Pattai", base: 3.5, unit: "inches" },
                    { text: "Mace Flower (Jathipathri)", base: 1, unit: "unit" },
                    { text: "Poppy Seeds", base: 1, unit: "tbsp" },
                    { text: "Nutmeg Powder", base: 1, unit: "pinch" }
                ]
            },
            {
                name: "Main Ingredients & Base Inventory",
                items: [
                    { text: "Seeraga Samba Rice (Soak for exactly 20 minutes)", base: 3.5, unit: "cups" },
                    { text: "Chicken (Costco drumsticks or a whole chopped bird)", base: 2, unit: "bags" },
                    { text: "Small Shallot Onions", base: 22, unit: "units" },
                    { text: "Green Chillies (Mild/Large Indian Store style)", base: 6, unit: "units" },
                    { text: "Small Tomato", base: 1, unit: "unit" },
                    { text: "Ginger Garlic Paste", base: 2, unit: "tbsp" },
                    { text: "Fresh Mint", base: 1, unit: "handful" },
                    { text: "Coriander Leaves", base: 1, unit: "handful" },
                    { text: "Coriander Seeds Powder", base: 1.5, unit: "tbsp" },
                    { text: "Kashmiri Chilli Powder", base: 2, unit: "tbsp" },
                    { text: "Curd", base: 0.5, unit: "cup" },
                    { text: "Ghee", base: 5, unit: "tbsp" },
                    { text: "Oil", base: 0.33, unit: "cup" },
                    { text: "Lemon Juice", base: 0.5, unit: "lemon" }
                ]
            }
        ],
        steps: [
            {
                title: "Step A: Spice Toasting & Grinding",
                badge: "Dry Heat Pipeline",
                timers: [ { name: "Whole Spices", secs: 60 }, { name: "Poppy & Nutmeg", secs: 30 } ],
                instructions: [
                    "Dry roast the 10 cashews first on a medium flame inside a clean pan until pale golden.",
                    "Introduce cloves, cardamom, star anise, kalpaasi, sombu, pattai, and mace flower. Roast for 1 minute on medium heat.",
                    "Drop in the poppy seeds and nutmeg powder for the final 30 seconds. Cool completely and blitz into a fine powder."
                ]
            },
            {
                title: "Step B: Sautéing and Reduction Build",
                badge: "Aromatic Oil Release",
                timers: [ { name: "Onion Paste Sauté", secs: 420 }, { name: "Rice Soak Window", secs: 1200 } ],
                instructions: [
                    "Wet Grind 1: Process small shallot onions and green chillies into a smooth base paste.",
                    "Wet Grind 2: Separately process the small tomato along with the handfuls of mint and coriander into a clean paste.",
                    "In your cooking pot, melt 0.33 cup oil and 4-5 tbsp ghee. Add the onion-chilli paste along with your freshly ground masala powder.",
                    "Sauté for 6-7 minutes until raw smell completely dissipates. Stir in 1.5 tbsp salt now.",
                    "Drop in 2 tbsp ginger garlic paste. Sauté cleanly for 1-2 minutes.",
                    "Pour in the processed tomato-herb paste. Cook and reduce for 2-3 minutes.",
                    "Incorporate the coriander seeds powder and Kashmiri chilli powder. Stir continuously for 1 minute to cook out the spices."
                ]
            },
            {
                title: "Step C: Protein Simmer & Water Balance",
                badge: "Preheat Oven to 375°F",
                instructions: [
                    "Add the chicken pieces and half cup of curd. Fry for 2-3 minutes to seal the surface of the meat.",
                    "Pour in 55 cups of boiling hot water followed by exactly 1 cup of the reserved water the rice was soaked in (accounting for the 05 cup liquid already released by meat). Total liquid matches the strict 2:1 ratio (7 cups total).",
                    "Cover the pot tightly. Bring to a boil until strong steam escapes and bubbling is clearly visible.",
                    "Taste test the liquid asset: Add approx 1 extra tbsp salt here. The liquid broth must taste slightly saltier than standard curries to balance the grain expansion."
                ]
            }
        ],
        showLayeringTable: false,
        dumTitle: "Oven Integration & Dum",
        dumBadge: "45 Mins Baked Dum",
        dumTimer: 2700,
        dumInstruction: "Squeeze the juice of 0.5 lemon into the boiling pot. Strain the Seeraga Samba rice completely and drop it into the vessel. Stir continuously on medium-high heat so grains do not stick to the pot base. Once the rice has absorbed the surface water and hit a thick consistency, dress with a final touch of ghee if desired. Seal the container rim seamlessly with heavy aluminum foil, press the lid on flat, and transition to the preheated oven. Bake at 375°F for exactly 45 minutes. Mix gently from the bottom up before serving."
    }
};