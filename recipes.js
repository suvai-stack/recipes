const recipeDatabase = {
    meghana: {
        title: "Meghana Boneless Chicken Biryani",
        description: "Spicy, rich, and layered Andhra style biryani featuring crisp, deep fried boneless chicken pieces.",
        tags: ["Basmati", "Chicken", "Spicy", "Boneless", "Andhra", "Layered"],
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
                    { text: "Nutmeg Powder (Tiny shave/grate only)", base: 0.1, unit: "pinch" },
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
                timers: [{ name: "Side 1", secs: 300 }, { name: "Side 2", secs: 300 }],
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
                    "In your main Hundi: Heat 4 tbsp chicken-fried oil and 1 tbsp ghee. Sauté whole spices (4 cardamom, 4 cloves, 1.5 inch cinnamon, 1 kapok bud, 1 black cardamom, 1 star anise. Skip Mace flower entirely) for 1 min on low.",
                    "Add 3 chopped onions; fry 2 mins. Toss in 1 tsp salt; fry 3-4 mins on medium. Stir in 1 tbsp ginger garlic paste; cook 2 mins.",
                    "Mix 4 sliced green chillies, 36 mint leaves, and 54 coriander leaves; fry 1 min on medium. Add 0.25 tsp turmeric and 1 tsp red chilli powder; cook 2 mins.",
                    "Blend in 1 pureed tomato (cook 1 min), then add 2 tbsp curd (cook 2 mins). Sprinkle a pinch of kasuri methi (cook 1 min). Pour 100ml buffalo milk; let base bubble 2 mins.",
                    "Squeeze 0.5 big lemon and throw in 1 tsp Shahjeera; cook 1 min. Remove 1 standard kitchen spoonful of this base and reserve it in a small bowl."
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
        description: "Traditional Dindigul style biryani using aromatic small grain samba rice, fresh wet grind spice pastes, and baked oven dum.",
        tags: ["Seeraga Samba", "Chicken", "Aromatic", "Wet Grind", "Oven Dum", "Tamil Nadu"],
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
                timers: [{ name: "Whole Spices", secs: 60 }, { name: "Poppy & Nutmeg", secs: 30 }],
                instructions: [
                    "Dry roast the 10 cashews first on a medium flame inside a clean pan until pale golden.",
                    "Introduce cloves, cardamom, star anise, kalpaasi, sombu, pattai, and mace flower. Roast for 1 minute on medium heat.",
                    "Drop in the poppy seeds and nutmeg powder for the final 30 seconds. Cool completely and blitz into a fine powder."
                ]
            },
            {
                title: "Step B: Sautéing and Reduction Build",
                badge: "Aromatic Oil Release",
                timers: [{ name: "Onion Paste Sauté", secs: 420 }, { name: "Rice Soak Window", secs: 1200 }],
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
                    "Pour in 5.5 cups of boiling hot water followed by exactly 1 cup of the reserved water the rice was soaked in (accounting for the 0.5 cup liquid already released by meat). Total liquid matches the strict 2:1 ratio (7 cups total).",
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
    },
    butter_chicken: {
        title: "Restaurant Style Butter Chicken",
        description: "Rich, velvety Murgh Makhani optimized with juicy boneless chicken thighs grilled in the air fryer and finished with a high-fat heavy cream emulsification.",
        tags: ["Chicken", "Thigh Meat", "Air Fryer", "Creamy", "Makhani", "North Indian"],
        note: "CRITICAL: Using 40% fat heavy whipping cream requires a strict 3-4 tbsp limit. Higher fat content splits easily if overheated; integrate on lowest heat setting.",
        sections: [
            {
                name: "Protein & First Marination (Rest 15 Mins)",
                items: [
                    { text: "Boneless Chicken Thigh Meat (Cut into bite-sized pieces)", base: 800, unit: "g" },
                    { text: "Ginger Garlic Paste", base: 1, unit: "tsp" },
                    { text: "Kashmiri Chilli Powder", base: 0.5, unit: "tbsp" },
                    { text: "Turmeric Powder", base: 1, unit: "pinch" },
                    { text: "Lemon Juice", base: 1, unit: "tsp" },
                    { text: "Salt", base: 1, unit: "to taste" }
                ]
            },
            {
                name: "Second Marination & Smoked Infusion",
                items: [
                    { text: "Mustard Oil", base: 2, unit: "tbsp" },
                    { text: "Kashmiri Red Chilli Powder", base: 1, unit: "tbsp" },
                    { text: "Cumin Powder", base: 1, unit: "tsp" },
                    { text: "Coriander Powder", base: 1, unit: "tsp" },
                    { text: "Garam Masala Powder", base: 1, unit: "tsp" },
                    { text: "Ginger Garlic Paste", base: 1, unit: "tsp" },
                    { text: "Hung Curd", base: 1.5, unit: "tbsp" },
                    { text: "Live Charcoal (For smoke step) + Ghee/Butter", base: 0.5, unit: "tsp" }
                ]
            },
            {
                name: "Makhani Gravy Reductions",
                items: [
                    { text: "Medium Tomatoes (Chopped)", base: 5, unit: "units" },
                    { text: "Medium Onion (Chopped)", base: 1, unit: "unit" },
                    { text: "Garlic Cloves", base: 6, unit: "cloves" },
                    { text: "Ginger (Sliced)", base: 1, unit: "inch piece" },
                    { text: "Coriander Stems (Cleaned)", base: 1, unit: "handful" },
                    { text: "Green Cardamom: 4, Cloves: 6, Cinnamon: 1 inch, Bay Leaves: 3", base: 1, unit: "batch whole spices" },
                    { text: "Kashmiri Red Chilli Powder", base: 0.5, unit: "tbsp" },
                    { text: "Cooking Oil or Butter (For base sauté)", base: 2, unit: "tbsp" }
                ]
            },
            {
                name: "Butter Chicken Assembly & Sauce Finishing",
                items: [
                    { text: "Butter (Melted over low heat)", base: 4, unit: "tbsp" },
                    { text: "Kashmiri Red Chilli Powder", base: 0.5, unit: "tbsp" },
                    { text: "Ginger Juliennes", base: 1, unit: "tbsp" },
                    { text: "Kasoori Methi Powder", base: 0.5, unit: "tsp" },
                    { text: "Honey", base: 1, unit: "tsp" },
                    { text: "Heavy Whipping Cream (40% Fat Content - Measured down)", base: 4, unit: "tbsp" },
                    { text: "Garam Masala + Cardamom Powder Finishing (Optional)", base: 1, unit: "pinch" }
                ]
            }
        ],
        steps: [
            {
                title: "Step A: Double Marination & Smoke Lock",
                badge: "Smoke Capture Phase",
                timer: 420,
                instructions: [
                    "Toss thigh meat completely with the First Marination ingredients. Rest 15 minutes.",
                    "Incorporate all Second Marination parameters directly into the meat layer until fully uniform.",
                    "Ignite charcoal unit until red hot. Place inside a small foil cup centered over the chicken, drop 0.5 tsp ghee/butter on it, and lid tightly for 7 minutes to seal smoke profiles."
                ]
            },
            {
                title: "Step B: Air Fryer Tandoori Grilling",
                badge: "400°F Blistered Texture",
                timers: [{ name: "Side 1 Cook", secs: 420 }, { name: "Flip & Baste", secs: 420 }],
                instructions: [
                    "Preheat your air fryer to 400°F (200°C). Lay smoked thigh chunks out flat in a single tier inside the basket.",
                    "Air fry at 400°F for 12-15 minutes total. Flip segments midway through, basting heavily with the 2 tbsp melted butter/oil to retain moisture and create charred edges."
                ]
            },
            {
                title: "Step C: Makhani Base Reduction",
                badge: "15 Mins Tomato Simmer",
                timer: 900,
                instructions: [
                    "Heat 2 tbsp oil/butter in your skillet. Bloom whole cardamoms, cloves, cinnamon, and bay leaves for 30 seconds.",
                    "Incorporate onions, ginger, garlic cloves, and coriander stems. Sauté 2 minutes until translucent.",
                    "Stir in chopped tomatoes, 0.5 tbsp chilli powder, salt, and 0.5 cup water. Cover and simmer 15 minutes on medium heat until tomatoes turn to mush.",
                    "Discard bay leaves and cinnamon stick. Blitz base smooth in a blender, then push through a fine sifter/sieve to capture a silky puree."
                ]
            }
        ],
        showLayeringTable: false,
        dumTitle: "Step D: Gravy Assembly & Finish",
        dumBadge: "5 Mins Low Flame Emulsification",
        dumTimer: 300,
        dumInstruction: "Melt 3-4 tbsp butter on low flame in a clean pan. Sauté 0.5 tbsp chilli powder and ginger juliennes for 10 seconds. Pour in sifted makhani sauce and bubble safely. Add tandoori thigh pieces; simmer 5 minutes on low. Add honey, kasoori methi, and salt adjustment. Drop heat to lowest tier; slowly work in 3-4 tbsp of 40% fat heavy whipping cream until completely integrated. Garnish with ginger ribbons and cream drizzle."
    },
    mutton_keema_stir_fry_noodles: {
        title: "Mutton Keema Stir Fry Noodles",
        description: "South Indian style high-heat wok noodles featuring a slow-cooked dry keema curry base, layered with vibrant vegetables and a savory umami-forward sauce. Quick assembly after keema prep.",
        tags: ["Mutton", "Ground Meat", "Noodles", "Wok", "Stir Fry", "South Indian", "Keema"],
        note: "CRITICAL: Keema must be cooked separately (15 mins) first as a dry curry with no added water. High heat wok cooking requires constant tossing. All vegetables and noodles must be prepped before final wok assembly.",
        sections: [
            {
                name: "Mutton Keema Curry (Dry Cook)",
                items: [
                    { text: "Ground Mutton", base: 1, unit: "lb" },
                    { text: "Medium Onion (Minced)", base: 1, unit: "unit" },
                    { text: "Medium Tomato (Finely Chopped)", base: 1, unit: "unit" },
                    { text: "Ginger Garlic Paste", base: 2, unit: "tbsp" },
                    { text: "Green Chillies (Slit)", base: 3, unit: "units" },
                    { text: "Kashmiri Chilli Powder", base: 0.75, unit: "tbsp" },
                    { text: "Coriander Powder", base: 1, unit: "tbsp" },
                    { text: "Cumin Powder", base: 1, unit: "tbsp" },
                    { text: "Garam Masala Powder", base: 1, unit: "tbsp" },
                    { text: "Lemon Juice", base: 1, unit: "whole" },
                    { text: "Cooking Oil or Ghee", base: 2, unit: "tbsp" },
                    { text: "Salt", base: 1, unit: "to taste" }
                ]
            },
            {
                name: "Umami Sauce Assembly",
                items: [
                    { text: "Oyster Sauce", base: 1, unit: "tbsp" },
                    { text: "Fish Sauce", base: 1, unit: "tsp" },
                    { text: "Soy Sauce", base: 1, unit: "tbsp" },
                    { text: "Tomato Ketchup", base: 1, unit: "tbsp" },
                    { text: "Sugar", base: 1, unit: "tsp" },
                    { text: "Rice Vinegar", base: 1, unit: "tsp" },
                    { text: "Sriracha Sauce (Optional - Extra Heat)", base: 1, unit: "tsp" },
                    { text: "Green Chilli Sauce (Optional - Extra Heat)", base: 1, unit: "tsp" }
                ]
            },
            {
                name: "Vegetables & Wok Mix",
                items: [
                    { text: "Noodles (Pre-cooked & Drained)", base: 3, unit: "cups" },
                    { text: "White Onion (Cut in Wide Strips)", base: 1, unit: "medium" },
                    { text: "Carrot (Julienned)", base: 1, unit: "unit" },
                    { text: "Bell Pepper - Mixed or Green (Julienned)", base: 0.5, unit: "unit" },
                    { text: "Cabbage (Cut in Strips)", base: 1, unit: "cup" },
                    { text: "Garlic (Minced)", base: 2, unit: "cloves" },
                    { text: "Eggs", base: 3, unit: "units" },
                    { text: "Black Pepper Powder", base: 1, unit: "tsp" },
                    { text: "Salt", base: 1, unit: "to taste (adjust for sauce sodium)" }
                ]
            },
            {
                name: "Noodle Indian Spice Seasoning",
                items: [
                    { text: "Kashmiri Chilli Powder", base: 0.5, unit: "tbsp" },
                    { text: "Garam Masala Powder (Light Pinch)", base: 1, unit: "pinch" }
                ]
            }
        ],
        steps: [
            {
                title: "Step A: Cook Mutton Keema Curry",
                badge: "15 Mins Dry Curry Build",
                timer: 900,
                instructions: [
                    "Heat 2 tbsp oil or ghee in a pan on medium-high heat. Add minced onions and sauté for 2-3 minutes until translucent.",
                    "Stir in ginger garlic paste and green chillies. Cook for 1 minute until fragrant.",
                    "Add ground mutton and break it apart with a spoon. Sauté for 3-4 minutes, stirring continuously to break lumps and cook the meat.",
                    "Add chopped tomatoes and cook for 2 minutes, allowing tomatoes to break down slightly.",
                    "Stir in coriander powder, cumin powder, garam masala, and Kashmiri chilli powder. Mix well for 30 seconds to bloom spices.",
                    "Add salt and lemon juice. Reduce heat to medium and cook for 5-7 minutes, stirring occasionally, until the keema turns dry with no liquid pooling at the bottom and meat is fully cooked through.",
                    "The keema should have a rich, concentrated curry texture. Set aside and keep warm."
                ]
            },
            {
                title: "Step B: Mix Stir Fry Sauce",
                badge: "Umami Sauce Assembly",
                timer: 120,
                instructions: [
                    "In a small bowl, whisk together oyster sauce, fish sauce, soy sauce, tomato ketchup, sugar, and rice vinegar.",
                    "If using extra heat, add sriracha and green chilli sauce to the base sauce.",
                    "Set sauce bowl aside near your wok station."
                ]
            },
            {
                title: "Step C: High Heat Wok Assembly",
                badge: "Full Flame - Constant Motion",
                timers: [{ name: "Vegetable Toss", secs: 240 }, { name: "Noodle Assembly", secs: 180 }],
                instructions: [
                    "Heat a large wok or flat skillet on high heat until smoking hot. Do not add oil yet.",
                    "Once the wok is smoking, add generous oil (3-4 tbsp) and swirl to coat the surface evenly. Oil should shimmer immediately.",
                    "Crack eggs into the hot oiled wok, scramble lightly until just set, then push to the sides.",
                    "Add all julienned/sliced vegetables (onions, carrots, peppers, cabbage, garlic). Toss constantly for 3-4 mins on high heat until vegetables are tender-crisp.",
                    "Pour in cooked noodles. Sprinkle 0.5 tbsp chilli powder and a pinch of garam masala over the noodles. Toss vigorously for 1-2 mins until noodles are evenly coated with the Indian spices.",
                    "Add the prepared umami sauce. Toss for 1 min until noodles are evenly coated.",
                    "Add the pre-cooked keema curry to the wok. Toss everything together for 1-2 mins on high heat until fully combined and heated through.",
                    "Taste and adjust salt and black pepper. Serve immediately while piping hot."
                ]
            }
        ],
        showLayeringTable: false,
        dumTitle: "Serve Hot & Fresh",
        dumBadge: "Immediate Plate",
        dumTimer: 0,
        dumInstruction: "Transfer noodles immediately to serving plates or bowls. Garnish with fresh coriander leaves if available. Serve with lemon wedges and extra sriracha on the side. Pairs well with quick pickled cucumber raita or plain yogurt to cool the spice."
    }
};
