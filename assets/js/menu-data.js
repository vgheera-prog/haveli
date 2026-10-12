/**
 * Karachi Brasserie - Complete Verified Menu Data
 * Transcribed verbatim from official physical menu
 */

const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes', icon: 'utensils' },
  { id: 'starters', name: 'Starters & Bites', icon: 'sparkles' },
  { id: 'soups-salads', name: 'Soups & Salads', icon: 'salad' },
  { id: 'sandwiches-burgers', name: 'Sandwiches & Burgers', icon: 'sandwich' },
  { id: 'pizza', name: 'Stone-Baked Pizza', icon: 'pizza' },
  { id: 'mains-chicken', name: 'Chicken Entrées', icon: 'drumstick' },
  { id: 'mains-steak', name: 'Prime Steaks', icon: 'beef' },
  { id: 'mains-pasta', name: 'Pastas & Lasagna', icon: 'cooking-pot' },
  { id: 'mains-seafood', name: 'Seafood', icon: 'fish' },
  { id: 'mains-stirfry', name: 'Wok & Stir Fry', icon: 'flame' },
  { id: 'sides', name: 'Sides & Extras', icon: 'plus-circle' },
  { id: 'hot-beverages', name: 'Hot Coffee & Teas', icon: 'coffee' },
  { id: 'cold-coffee', name: 'Cold Brews & Frappes', icon: 'cup-soda' },
  { id: 'mocktails-shakes', name: 'Mocktails & Shakes', icon: 'glass-water' },
  { id: 'desserts', name: 'Artisan Desserts', icon: 'cake' }
];

const MENU_ITEMS = [
  // --- SOUPS ---
  {
    id: 'soup-1',
    name: 'Mushroom Soup',
    category: 'soups-salads',
    subcategory: 'Soups',
    price: 620,
    description: 'Fresh sautéed mushrooms, onion and garlic simmered in a warm, comforting broth.',
    isSignature: false,
    image: 'assets/images/dishes/soup-1.jpg',
    badge: 'Soup'
  },
  {
    id: 'soup-2',
    name: 'Roasted Tomato Soup',
    category: 'soups-salads',
    subcategory: 'Soups',
    price: 690,
    description: 'Slow roasted vine tomatoes, onion, roasted garlic and fresh basil with herbaceous depth.',
    isSignature: false,
    image: 'assets/images/dishes/soup-2.jpg',
    badge: 'Soup'
  },
  {
    id: 'soup-3',
    name: 'Cream of Chicken',
    category: 'soups-salads',
    subcategory: 'Soups',
    price: 740,
    description: 'Tender pulled chicken, onion, and garlic in a velvety, house-made creamy reduction.',
    isSignature: false,
    image: 'assets/images/dishes/soup-3.jpg',
    badge: 'Soup'
  },

  // --- STARTERS ---
  {
    id: 'starters-1',
    name: 'Hummus',
    category: 'starters',
    subcategory: 'Starters',
    price: 690,
    description: 'Creamy blended chickpeas, tahini, and extra virgin olive oil served with crackers, fresh carrot and cucumber.',
    isSignature: false,
    image: 'assets/images/dishes/starters-1.jpg',
    badge: 'Vegetarian'
  },
  {
    id: 'starters-2',
    name: 'Buffalo Wings',
    category: 'starters',
    subcategory: 'Starters',
    price: 1090,
    description: 'Crispy fried chicken wings tossed generously in authentic spicy buffalo glaze.',
    isSignature: false,
    image: 'assets/images/dishes/starters-2.jpg',
    badge: 'Spicy'
  },
  {
    id: 'starters-3',
    name: 'Thai Chicken Skewers',
    category: 'starters',
    subcategory: 'Starters',
    price: 920,
    description: 'Tender marinated chicken skewers glazed in sweet and zesty Thai chilli garlic sauce.',
    isSignature: false,
    image: 'assets/images/dishes/starters-3.jpg',
    badge: 'Signature'
  },
  {
    id: 'starters-4',
    name: 'Popcorn Chicken',
    category: 'starters',
    subcategory: 'Starters',
    price: 890,
    description: 'Bite-sized golden crispy chicken cubes tossed in aromatic chilli garlic glaze.',
    isSignature: false,
    image: 'assets/images/dishes/starters-4.jpg',
    badge: null
  },
  {
    id: 'starters-5',
    name: 'Chilli Prawns',
    category: 'starters',
    subcategory: 'Starters',
    price: 1320,
    description: 'Plump crispy prawns tossed in fragrant chilli garlic, fresh red chilli, and herb butter.',
    isSignature: true,
    image: 'assets/images/dishes/starters-5.jpg',
    badge: 'Chef Choice'
  },
  {
    id: 'starters-6',
    name: 'Loaded Cheese Fries',
    category: 'starters',
    subcategory: 'Starters',
    price: 1250,
    description: 'Golden fries generously loaded with seasoned chicken, melted cheese, black olives, jalapeños, fresh salsa and cool sour cream.',
    isSignature: true,
    image: 'assets/images/dishes/starters-6.jpg',
    badge: 'Popular'
  },
  {
    id: 'starters-7',
    name: 'Chipotle Chicken Tacos',
    category: 'starters',
    subcategory: 'Starters',
    price: 1200,
    description: 'Pair of artisanal chicken tacos topped with charred salsa, crisp lettuce, and chipotle crema.',
    isSignature: false,
    image: 'assets/images/dishes/starters-7.jpg',
    badge: null
  },
  {
    id: 'starters-8',
    name: 'Prawn Tempura',
    category: 'starters',
    subcategory: 'Starters',
    price: 1350,
    description: 'Delicate Japanese-style battered fried king prawns served alongside sweet chilli dipping sauce.',
    isSignature: false,
    image: 'assets/images/dishes/starters-8.jpg',
    badge: null
  },
  {
    id: 'starters-9',
    name: 'French Fries (250g)',
    category: 'starters',
    subcategory: 'Starters',
    price: 580,
    description: 'Golden, crispy, lightly salted classic potato fries.',
    isSignature: false,
    image: 'assets/images/dishes/starters-9.jpg',
    badge: null
  },

  // --- SALADS ---
  {
    id: 'salad-1',
    name: 'Caesar Salad',
    category: 'soups-salads',
    subcategory: 'Salads',
    price: 1120,
    description: 'Crispy lettuce, tender grilled chicken breast, boiled egg, herbed croutons, shaved parmesan tossed in our house special Caesar dressing.',
    isSignature: true,
    image: 'assets/images/dishes/salad-1.jpg',
    badge: 'Popular'
  },
  {
    id: 'salad-2',
    name: 'Quinoa Salad',
    category: 'soups-salads',
    subcategory: 'Salads',
    price: 1160,
    description: 'Protein-packed quinoa, mixed garden greens, creamy feta cheese, and roasted toasted almonds drizzled with raspberry vinaigrette.',
    isSignature: false,
    image: 'assets/images/dishes/salad-2.jpg',
    badge: 'Healthy'
  },
  {
    id: 'salad-3',
    name: 'Mediterranean Salad',
    category: 'soups-salads',
    subcategory: 'Salads',
    price: 1040,
    description: 'Crispy garden salad with grilled chicken, feta cheese, kalamata olives, crisp cucumber, and roasted peanuts in house vinaigrette.',
    isSignature: false,
    image: 'assets/images/dishes/salad-3.jpg',
    badge: null
  },
  {
    id: 'salad-4',
    name: 'Greek Salad',
    category: 'soups-salads',
    subcategory: 'Salads',
    price: 990,
    description: 'Grilled chicken, fresh green leaves, kalamata olives, and sweet cherry tomatoes tossed in Mediterranean vinaigrette.',
    isSignature: false,
    image: 'assets/images/dishes/salad-4.jpg',
    badge: null
  },

  // --- SANDWICHES ---
  {
    id: 'sandwich-1',
    name: 'Hummus Toast',
    category: 'sandwiches-burgers',
    subcategory: 'Sandwiches',
    price: 780,
    description: 'Artisanal toasted country bread layered with silky hummus, toasted sun-dried salad, and virgin olive oil.',
    isSignature: false,
    image: 'assets/images/dishes/sandwich-1.jpg',
    badge: 'Vegetarian'
  },
  {
    id: 'sandwich-2',
    name: 'Grilled Chicken Sandwich',
    category: 'sandwiches-burgers',
    subcategory: 'Sandwiches',
    price: 1360,
    description: 'Succulent grilled chicken breast, melted cheddar cheese, and house mayo on toasted bread.',
    isSignature: false,
    image: 'assets/images/dishes/sandwich-2.jpg',
    badge: null
  },
  {
    id: 'sandwich-3',
    name: 'Club Sandwich',
    category: 'sandwiches-burgers',
    subcategory: 'Sandwiches',
    price: 1550,
    description: 'Triple-decker signature sandwich with seasoned grilled chicken, beef pepperoni, golden omelette, lettuce, and fries.',
    isSignature: true,
    image: 'assets/images/dishes/sandwich-3.jpg',
    badge: 'Popular Choice'
  },
  {
    id: 'sandwich-4',
    name: 'Chicken Chimichurri Sandwich',
    category: 'sandwiches-burgers',
    subcategory: 'Sandwiches',
    price: 1390,
    description: 'Grilled chicken breast with crisp lettuce, shaved red onions, and tangy Argentinian herb chimichurri sauce.',
    isSignature: false,
    image: 'assets/images/dishes/sandwich-4.jpg',
    badge: null
  },
  {
    id: 'sandwich-5',
    name: 'Steak Sandwich',
    category: 'sandwiches-burgers',
    subcategory: 'Sandwiches',
    price: 1550,
    description: 'Tender sliced prime beef steak, sweet caramelized onions, and French mustard sauce on toasted sourdough.',
    isSignature: true,
    image: 'assets/images/dishes/sandwich-5.jpg',
    badge: 'Chef Favorite'
  },

  // --- BURGERS ---
  {
    id: 'burger-1',
    name: 'Classic Cheese Burger',
    category: 'sandwiches-burgers',
    subcategory: 'Burgers',
    price: 1390,
    description: 'Juicy ground beef patty, fresh lettuce, red onion, ripe tomato, and melted aged cheddar on a toasted brioche bun.',
    isSignature: false,
    image: 'assets/images/dishes/burger-1.jpg',
    badge: null
  },
  {
    id: 'burger-2',
    name: 'Jalapeno Burger',
    category: 'sandwiches-burgers',
    subcategory: 'Burgers',
    price: 1420,
    description: 'Char-grilled prime beef patty, crisp lettuce, tomato, sliced jalapeños, and zesty house jalapeño sauce.',
    isSignature: false,
    image: 'assets/images/dishes/burger-2.jpg',
    badge: 'Spicy'
  },
  {
    id: 'burger-3',
    name: 'Swiss Mushroom Burger',
    category: 'sandwiches-burgers',
    subcategory: 'Burgers',
    price: 1400,
    description: 'Prime beef patty smothered in sautéed button mushrooms, Swiss cheese, crisp lettuce, and onion.',
    isSignature: false,
    image: 'assets/images/dishes/burger-3.jpg',
    badge: null
  },
  {
    id: 'burger-4',
    name: 'Grilled Chicken Burger',
    category: 'sandwiches-burgers',
    subcategory: 'Burgers',
    price: 1350,
    description: 'Tender herb-marinated grilled chicken breast topped with creamy warm mushroom sauce on a soft bun.',
    isSignature: false,
    image: 'assets/images/dishes/burger-4.jpg',
    badge: null
  },
  {
    id: 'burger-5',
    name: 'Crispy Chicken Burger',
    category: 'sandwiches-burgers',
    subcategory: 'Burgers',
    price: 1320,
    description: 'Crispy golden fried chicken fillet, fresh lettuce, spicy sriracha mayo, and sliced jalapeños.',
    isSignature: false,
    image: 'assets/images/dishes/burger-5.jpg',
    badge: 'Popular'
  },
  {
    id: 'burger-6',
    name: 'Trio of Sliders',
    category: 'sandwiches-burgers',
    subcategory: 'Burgers',
    price: 1400,
    description: 'Three mini gourmet beef sliders featuring classic cheddar, spicy jalapeño, and savory sautéed mushroom.',
    isSignature: true,
    image: 'assets/images/dishes/burger-6.jpg',
    badge: 'Tasting Trio'
  },

  // --- PIZZA ---
  {
    id: 'pizza-1',
    name: 'Margarita',
    category: 'pizza',
    subcategory: 'Stone-Baked Pizza',
    price: 1300,
    description: 'Classic artisanal tomato marinara, fresh mozzarella, shaved parmesan, and torn fragrant basil.',
    isSignature: false,
    image: 'assets/images/dishes/pizza-1.jpg',
    badge: 'Classic'
  },
  {
    id: 'pizza-2',
    name: 'Pepperoni',
    category: 'pizza',
    subcategory: 'Stone-Baked Pizza',
    price: 1480,
    description: 'Rich tomato marinara base, premium beef pepperoni, melted mozzarella, and fresh basil.',
    isSignature: false,
    image: 'assets/images/dishes/pizza-2.jpg',
    badge: null
  },
  {
    id: 'pizza-3',
    name: 'Chicken Jalapeno',
    category: 'pizza',
    subcategory: 'Stone-Baked Pizza',
    price: 1440,
    description: 'Seasoned diced chicken, spicy jalapeños, black olives, sweet red onion, and button mushrooms.',
    isSignature: false,
    image: 'assets/images/dishes/pizza-3.jpg',
    badge: null
  },
  {
    id: 'pizza-4',
    name: 'Chicken Fajita',
    category: 'pizza',
    subcategory: 'Stone-Baked Pizza',
    price: 1540,
    description: 'Signature house fajita sauce, fajita spiced chicken, olives, sweet corn, jalapeños, fresh tomato and sliced onion.',
    isSignature: false,
    image: 'assets/images/dishes/pizza-4.jpg',
    badge: 'Popular'
  },
  {
    id: 'pizza-5',
    name: 'Brasserie Special',
    category: 'pizza',
    subcategory: 'Stone-Baked Pizza',
    price: 1560,
    description: 'Chef signature pizza with marinara, mozzarella, spiced chicken, beef pepperoni, sliced black olives, and mushrooms.',
    isSignature: true,
    image: 'assets/images/dishes/pizza-5.jpg',
    badge: 'House Signature'
  },

  // --- MAINS - CHICKEN ---
  {
    id: 'chicken-1',
    name: 'Moroccan Chicken',
    category: 'mains-chicken',
    subcategory: 'Chicken Mains',
    price: 1550,
    description: 'Char-grilled chicken fillet glazed with authentic spicy sambal sauce, served with steamed brown rice and sautéed vegetables.',
    isSignature: false,
    image: 'assets/images/dishes/chicken-1.jpg',
    badge: null
  },
  {
    id: 'chicken-2',
    name: 'Tarragon Chicken',
    category: 'mains-chicken',
    subcategory: 'Chicken Mains',
    price: 1460,
    description: 'Tender grilled chicken fillet infused with French tarragon cream sauce, served with buttered mashed potatoes and sautéed garden vegetables.',
    isSignature: false,
    image: 'assets/images/dishes/chicken-2.jpg',
    badge: null
  },
  {
    id: 'chicken-3',
    name: 'Jalapeno Chicken',
    category: 'mains-chicken',
    subcategory: 'Chicken Mains',
    price: 1460,
    description: 'Grilled chicken fillet blanketed in a rich jalapeño cream reduction, served with creamy mashed potatoes and vegetables.',
    isSignature: false,
    image: 'assets/images/dishes/chicken-3.jpg',
    badge: null
  },
  {
    id: 'chicken-4',
    name: 'Parmesan Crusted Chicken',
    category: 'mains-chicken',
    subcategory: 'Chicken Mains',
    price: 1560,
    description: 'Golden parmesan-crusted chicken fillet drizzled with velvety cheese sauce, served with silky mashed potatoes and sautéed fresh vegetables.',
    isSignature: true,
    image: 'assets/images/dishes/chicken-4.jpg',
    badge: 'Top Signature'
  },

  // --- MAINS - STEAKS ---
  {
    id: 'steak-1',
    name: 'Pepper Steak',
    category: 'mains-steak',
    subcategory: 'Prime Steaks',
    price: 2440,
    description: 'Tender cut beef steak draped in crushed black peppercorn cream sauce, served with roasted herb potatoes and seasonal vegetables.',
    isSignature: true,
    image: 'assets/images/dishes/steak-1.jpg',
    badge: 'Signature Steak'
  },
  {
    id: 'steak-2',
    name: 'Mushroom Steak',
    category: 'mains-steak',
    subcategory: 'Prime Steaks',
    price: 2520,
    description: 'Prime cut beef steak accompanied by a rich wild mushroom demi-glace, served with roasted potatoes and vegetables.',
    isSignature: false,
    image: 'assets/images/dishes/steak-2.jpg',
    badge: null
  },
  {
    id: 'steak-3',
    name: 'Chimichurri Steak',
    category: 'mains-steak',
    subcategory: 'Prime Steaks',
    price: 2480,
    description: 'Seared beef steak with vibrant fresh chimichurri herb sauce, served with rich creamy spinach and roasted potatoes.',
    isSignature: true,
    image: 'assets/images/dishes/steak-3.jpg',
    badge: 'Chef Favorite'
  },
  {
    id: 'steak-4',
    name: 'Tuscan Steak',
    category: 'mains-steak',
    subcategory: 'Prime Steaks',
    price: 2550,
    description: 'Prime cut beef steak seasoned with Tuscan herbs and sun-dried tomatoes in basil parmesan reduction, with mashed potatoes and sautéed vegetables.',
    isSignature: true,
    image: 'assets/images/dishes/steak-4.jpg',
    badge: 'Prime Cut'
  },

  // --- MAINS - STIR FRY ---
  {
    id: 'stirfry-1',
    name: 'Classic Kung Pao',
    category: 'mains-stirfry',
    subcategory: 'Stir Fry & Wok',
    price: 1250,
    description: 'Wok-tossed chicken in signature kung pao sauce with crunchy roasted peanuts, scallions, red onions, and dried red chilies.',
    isSignature: false,
    image: 'assets/images/dishes/stirfry-1.jpg',
    badge: null
  },
  {
    id: 'stirfry-2',
    name: 'Thai Holy Basil',
    category: 'mains-stirfry',
    subcategory: 'Stir Fry & Wok',
    price: 1300,
    description: 'Traditional Thai stir-fried minced chicken with aromatic holy basil and fresh red chili, served with fragrant jasmine rice.',
    isSignature: false,
    image: 'assets/images/dishes/stirfry-2.jpg',
    badge: 'Thai Specialty'
  },
  {
    id: 'stirfry-3',
    name: 'Beef Chilli Dry',
    category: 'mains-stirfry',
    subcategory: 'Stir Fry & Wok',
    price: 1360,
    description: 'Crisp seared beef strips stir-fried with slit green chillies, red peppers, and fresh ginger in our classic oyster sesame glaze.',
    isSignature: true,
    image: 'assets/images/dishes/stirfry-3.jpg',
    badge: 'Popular'
  },
  {
    id: 'stirfry-4',
    name: 'Crispy Beef',
    category: 'mains-stirfry',
    subcategory: 'Stir Fry & Wok',
    price: 1400,
    description: 'Golden crispy shredded beef tossed in sweet-savory dark soy sauce, finished with fresh scallions and served with steamed rice.',
    isSignature: false,
    image: 'assets/images/dishes/stirfry-4.jpg',
    badge: null
  },

  // --- MAINS - PASTA ---
  {
    id: 'pasta-1',
    name: 'Spaghetti Bolognese',
    category: 'mains-pasta',
    subcategory: 'Pasta & Lasagna',
    price: 1580,
    description: 'Al dente spaghetti tossed in slow-simmered ground beef ragù, plum tomatoes, garlic herbs, and grated parmesan.',
    isSignature: false,
    image: 'assets/images/dishes/pasta-1.jpg',
    badge: 'Classic'
  },
  {
    id: 'pasta-2',
    name: 'Fettuccine Alfredo',
    category: 'mains-pasta',
    subcategory: 'Pasta & Lasagna',
    price: 1400,
    description: 'Ribbon fettuccine smothered in a rich butter parmesan cream sauce, crowned with sliced grilled chicken breast.',
    isSignature: true,
    image: 'assets/images/dishes/pasta-2.jpg',
    badge: 'Popular'
  },
  {
    id: 'pasta-3',
    name: 'Penne Arrabbiata',
    category: 'mains-pasta',
    subcategory: 'Pasta & Lasagna',
    price: 1400,
    description: 'Penne pasta in a fiery garlic and chili plum tomato sauce, tossed with kalamata olives and sautéed button mushrooms.',
    isSignature: false,
    image: 'assets/images/dishes/pasta-3.jpg',
    badge: 'Vegetarian'
  },
  {
    id: 'pasta-4',
    name: 'Spaghetti with Chilli & Lime',
    category: 'mains-pasta',
    subcategory: 'Pasta & Lasagna',
    price: 1490,
    description: 'Tender prawns sautéed with sweet cherry tomatoes, shaved garlic, crushed chilies, and a bright splash of lime.',
    isSignature: true,
    image: 'assets/images/dishes/pasta-4.jpg',
    badge: 'Seafood Pasta'
  },
  {
    id: 'pasta-5',
    name: 'Beef Lasagna',
    category: 'mains-pasta',
    subcategory: 'Pasta & Lasagna',
    price: 1460,
    description: 'Traditional layered pasta baked with seasoned beef bolognese, béchamel, golden mozzarella, and parmesan crust.',
    isSignature: true,
    image: 'assets/images/dishes/pasta-5.jpg',
    badge: 'Comfort Classic'
  },

  // --- MAINS - SEAFOOD ---
  {
    id: 'seafood-1',
    name: 'Fish N Chips',
    category: 'mains-seafood',
    subcategory: 'Seafood',
    price: 1490,
    description: 'Golden crispy batter-fried fresh red snapper fillet served with house tartar sauce and hot salted french fries.',
    isSignature: false,
    image: 'assets/images/dishes/seafood-1.jpg',
    badge: null
  },
  {
    id: 'seafood-2',
    name: 'Red Snapper in Garlic Butter',
    category: 'mains-seafood',
    subcategory: 'Seafood',
    price: 1820,
    description: 'Pan-seared fresh red snapper fillet in a silky garlic herb butter reduction, served with creamy mashed potatoes and sautéed vegetables.',
    isSignature: true,
    image: 'assets/images/dishes/seafood-2.jpg',
    badge: 'Seafood Signature'
  },
  {
    id: 'seafood-3',
    name: 'Red Snapper with Thai Red Chilli',
    category: 'mains-seafood',
    subcategory: 'Seafood',
    price: 1890,
    description: 'Pan-fried red snapper paired with roasted cherry tomatoes, garlic slivers, and fiery Thai red chili glaze.',
    isSignature: false,
    image: 'assets/images/dishes/seafood-3.jpg',
    badge: 'Spicy'
  },

  // --- SIDES ---
  {
    id: 'side-1',
    name: 'Mashed Potatoes',
    category: 'sides',
    subcategory: 'Sides & Extras',
    price: 220,
    description: 'Silky smooth whipped potatoes infused with French butter and cream.',
    isSignature: false,
    image: 'assets/images/dishes/side-1.jpg',
    badge: null
  },
  {
    id: 'side-2',
    name: 'Sautéed Vegetables',
    category: 'sides',
    subcategory: 'Sides & Extras',
    price: 220,
    description: 'Tender crisp seasonal garden vegetables tossed in herb-infused butter.',
    isSignature: false,
    image: 'assets/images/dishes/side-2.jpg',
    badge: null
  },
  {
    id: 'side-3',
    name: 'Creamy Spinach',
    category: 'sides',
    subcategory: 'Sides & Extras',
    price: 250,
    description: 'Finely chopped spinach folded in a velvety nutmeg and cream reduction.',
    isSignature: false,
    image: 'assets/images/dishes/side-3.jpg',
    badge: null
  },
  {
    id: 'side-4',
    name: 'French Fries',
    category: 'sides',
    subcategory: 'Sides & Extras',
    price: 250,
    description: 'Extra portion of crispy golden salted potato fries.',
    isSignature: false,
    image: 'assets/images/dishes/side-4.jpg',
    badge: null
  },
  {
    id: 'side-5',
    name: 'Garlic Bread',
    category: 'sides',
    subcategory: 'Sides & Extras',
    price: 220,
    description: 'Toasted baguette slices brushed with garlic herb butter.',
    isSignature: false,
    image: 'assets/images/dishes/side-5.jpg',
    badge: null
  },
  {
    id: 'side-6',
    name: 'Extra Sauce',
    category: 'sides',
    subcategory: 'Sides & Extras',
    price: 200,
    description: 'Choice of Pepper, Mushroom, Jalapeño Cream, or Chimichurri sauce cup.',
    isSignature: false,
    image: 'assets/images/dishes/side-6.jpg',
    badge: null
  },
  {
    id: 'side-7',
    name: 'Extra Rice',
    category: 'sides',
    subcategory: 'Sides & Extras',
    price: 200,
    description: 'Steamed fragrant jasmine or brown rice portion.',
    isSignature: false,
    image: 'assets/images/dishes/side-7.jpg',
    badge: null
  },

  // --- HOT BEVERAGES ---
  {
    id: 'hot-1',
    name: 'Espresso',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 390,
    description: 'Single origin bold and concentrated espresso shot with thick golden crema.',
    isSignature: false,
    image: 'assets/images/dishes/hot-1.jpg',
    badge: 'Artisan Coffee'
  },
  {
    id: 'hot-2',
    name: 'Double Espresso',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 460,
    description: 'Double shot of our signature roasted espresso beans.',
    isSignature: false,
    image: 'assets/images/dishes/hot-2.jpg',
    badge: null
  },
  {
    id: 'hot-3',
    name: 'Americano',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 540,
    description: 'Rich espresso poured over hot filtered water for a clean, full-bodied coffee experience.',
    isSignature: false,
    image: 'assets/images/dishes/hot-3.jpg',
    badge: null
  },
  {
    id: 'hot-4',
    name: 'Café Latte',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 620,
    description: 'Smooth espresso balanced with steamed milk and a delicate velvety microfoam layer. (Flavours available +Rs.250)',
    isSignature: true,
    image: 'assets/images/dishes/hot-4.jpg',
    badge: 'Barista Classic'
  },
  {
    id: 'hot-5',
    name: 'Flat White',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 620,
    description: 'Double ristretto espresso folded into velvety microfoam with intense espresso flavor.',
    isSignature: false,
    image: 'assets/images/dishes/hot-5.jpg',
    badge: null
  },
  {
    id: 'hot-6',
    name: 'Cappuccino',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 620,
    description: 'Classic equal parts espresso, steamed milk, and airy cloud of frothed foam dusted with cocoa. (Flavours available +Rs.250)',
    isSignature: false,
    image: 'assets/images/dishes/hot-6.jpg',
    badge: null
  },
  {
    id: 'hot-7',
    name: 'Café Mocha',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 680,
    description: 'Decadent rich dark cocoa melted with freshly pulled espresso and silky steamed milk.',
    isSignature: false,
    image: 'assets/images/dishes/hot-7.jpg',
    badge: null
  },
  {
    id: 'hot-8',
    name: 'Caramel Macchiato',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 680,
    description: 'Steamed milk with vanilla-infused syrup, marked with espresso and drizzled with caramel sauce.',
    isSignature: true,
    image: 'assets/images/dishes/hot-8.jpg',
    badge: 'Popular'
  },
  {
    id: 'hot-9',
    name: 'Hot Chocolate',
    category: 'hot-beverages',
    subcategory: 'Hot Beverages',
    price: 700,
    description: 'Premium molten European dark chocolate blended with velvety steamed whole milk.',
    isSignature: false,
    image: 'assets/images/dishes/hot-9.jpg',
    badge: null
  },
  {
    id: 'hot-10',
    name: 'Syrup Flavour Add-On',
    category: 'hot-beverages',
    subcategory: 'Coffee Add-Ons',
    price: 250,
    description: 'Customize any hot beverage with Vanilla, Hazelnut, Caramel, or Irish syrup.',
    isSignature: false,
    image: 'assets/images/dishes/hot-10.jpg',
    badge: 'Add-On'
  },
  {
    id: 'tea-1',
    name: 'Mixed Tea',
    category: 'hot-beverages',
    subcategory: 'Teas',
    price: 400,
    description: 'Traditional slow-brewed milk tea steeped with aromatic premium loose leaves.',
    isSignature: false,
    image: 'assets/images/dishes/tea-1.jpg',
    badge: 'Traditional'
  },
  {
    id: 'tea-2',
    name: 'Cardamom Tea',
    category: 'hot-beverages',
    subcategory: 'Teas',
    price: 380,
    description: 'Fragrant cardamom-infused milk tea, rich, warm, and restorative.',
    isSignature: false,
    image: 'assets/images/dishes/tea-2.jpg',
    badge: null
  },
  {
    id: 'tea-3',
    name: 'Green Tea',
    category: 'hot-beverages',
    subcategory: 'Teas',
    price: 360,
    description: 'Pure brewed green tea. Choose your infusion: Fresh Mint, Lemon, Elaichi (Cardamom), or Ginger.',
    isSignature: false,
    image: 'assets/images/dishes/tea-3.jpg',
    badge: null
  },

  // --- COLD COFFEE ---
  {
    id: 'cold-1',
    name: 'Affogato',
    category: 'cold-coffee',
    subcategory: 'Cold Coffee',
    price: 780,
    description: 'A scoop of artisanal vanilla bean gelato crowned with a freshly pulled double shot of hot espresso.',
    isSignature: true,
    image: 'assets/images/dishes/cold-1.jpg',
    badge: 'Brasserie Signature'
  },
  {
    id: 'cold-2',
    name: 'Frappe',
    category: 'cold-coffee',
    subcategory: 'Cold Coffee',
    price: 760,
    description: 'Ice-blended coffee frappe. Select your flavor: Caramel, Vanilla, Coffee, or Mocha.',
    isSignature: false,
    image: 'assets/images/dishes/cold-2.jpg',
    badge: 'Popular'
  },
  {
    id: 'cold-3',
    name: 'Iced Americano',
    category: 'cold-coffee',
    subcategory: 'Cold Coffee',
    price: 630,
    description: 'Fresh double espresso shot poured over cold ice and filtered chilled water.',
    isSignature: false,
    image: 'assets/images/dishes/cold-3.jpg',
    badge: null
  },
  {
    id: 'cold-4',
    name: 'Iced Latte',
    category: 'cold-coffee',
    subcategory: 'Cold Coffee',
    price: 720,
    description: 'Espresso poured over chilled milk and crystalline ice cubes. (Flavours available +Rs.250)',
    isSignature: false,
    image: 'assets/images/dishes/cold-4.jpg',
    badge: null
  },
  {
    id: 'cold-5',
    name: 'Iced Caramel Macchiato',
    category: 'cold-coffee',
    subcategory: 'Cold Coffee',
    price: 760,
    description: 'Chilled milk, vanilla syrup, layered espresso and golden caramel ribbon over ice.',
    isSignature: true,
    image: 'assets/images/dishes/cold-5.jpg',
    badge: 'Best Seller'
  },
  {
    id: 'cold-6',
    name: 'Iced Chocolate',
    category: 'cold-coffee',
    subcategory: 'Cold Coffee',
    price: 790,
    description: 'Rich cold-steeped chocolate ganache blended with cold fresh milk over ice.',
    isSignature: false,
    image: 'assets/images/dishes/cold-6.jpg',
    badge: null
  },

  // --- MOCKTAILS & COOLERS ---
  {
    id: 'mocktail-1',
    name: 'Mint Lemonade',
    category: 'mocktails-shakes',
    subcategory: 'Mocktails',
    price: 580,
    description: 'Freshly squeezed lemon juice, muddled mint leaves, crushed ice and sparkling soda.',
    isSignature: true,
    image: 'assets/images/dishes/mocktail-1.jpg',
    badge: 'Refreshing'
  },
  {
    id: 'mocktail-2',
    name: 'Electric Blue',
    category: 'mocktails-shakes',
    subcategory: 'Mocktails',
    price: 600,
    description: 'Vibrant blue curaçao flavor, citrus lemon cordial, and effervescent bubbles over crushed ice.',
    isSignature: false,
    image: 'assets/images/dishes/mocktail-2.jpg',
    badge: null
  },
  {
    id: 'mocktail-3',
    name: 'Lemon Iced Tea',
    category: 'mocktails-shakes',
    subcategory: 'Mocktails',
    price: 600,
    description: 'Slow-brewed black tea infused with natural lemon juice and chilled over ice.',
    isSignature: false,
    image: 'assets/images/dishes/mocktail-3.jpg',
    badge: null
  },
  {
    id: 'mocktail-4',
    name: 'Peach Iced Tea',
    category: 'mocktails-shakes',
    subcategory: 'Mocktails',
    price: 600,
    description: 'Aromatic iced tea infused with sweet peach nectar and fresh mint garnish.',
    isSignature: false,
    image: 'assets/images/dishes/mocktail-4.jpg',
    badge: null
  },
  {
    id: 'mocktail-5',
    name: 'Pina Colada',
    category: 'mocktails-shakes',
    subcategory: 'Mocktails',
    price: 660,
    description: 'Tropical rich coconut cream and pineapple juice whipped with crushed ice until frothy.',
    isSignature: true,
    image: 'assets/images/dishes/mocktail-5.jpg',
    badge: 'Tropical'
  },
  {
    id: 'mocktail-6',
    name: 'Apple Mint Cooler',
    category: 'mocktails-shakes',
    subcategory: 'Mocktails',
    price: 640,
    description: 'Crisp green apple juice blended with fresh garden mint and sparkling soda.',
    isSignature: false,
    image: 'assets/images/dishes/mocktail-6.jpg',
    badge: null
  },
  {
    id: 'mocktail-7',
    name: 'Seasonal Juice',
    category: 'mocktails-shakes',
    subcategory: 'Mocktails',
    price: 680,
    description: '100% freshly pressed in-season fruit juice with zero added artificial sugar.',
    isSignature: false,
    image: 'assets/images/dishes/mocktail-7.jpg',
    badge: null
  },

  // --- GELATO MILKSHAKES ---
  {
    id: 'shake-1',
    name: 'Vanilla Gelato Shake',
    category: 'mocktails-shakes',
    subcategory: 'Gelato Milkshakes',
    price: 700,
    description: 'Thick creamy shake spun from Italian vanilla bean gelato and whole milk.',
    isSignature: false,
    image: 'assets/images/dishes/shake-1.jpg',
    badge: null
  },
  {
    id: 'shake-2',
    name: 'Chocolate Gelato Shake',
    category: 'mocktails-shakes',
    subcategory: 'Gelato Milkshakes',
    price: 700,
    description: 'Rich Belgian chocolate gelato whipped into a decadent milkshake.',
    isSignature: false,
    image: 'assets/images/dishes/shake-2.jpg',
    badge: null
  },
  {
    id: 'shake-3',
    name: 'Strawberry Gelato Shake',
    category: 'mocktails-shakes',
    subcategory: 'Gelato Milkshakes',
    price: 700,
    description: 'Real strawberry gelato churned into a velvety pink dessert drink.',
    isSignature: false,
    image: 'assets/images/dishes/shake-3.jpg',
    badge: null
  },
  {
    id: 'shake-4',
    name: 'Oreo Crumble Shake',
    category: 'mocktails-shakes',
    subcategory: 'Gelato Milkshakes',
    price: 760,
    description: 'Crushed Oreo cookies spun with sweet cream gelato and topped with chocolate crumble.',
    isSignature: true,
    image: 'assets/images/dishes/shake-4.jpg',
    badge: 'Popular'
  },
  {
    id: 'shake-5',
    name: 'Salted Caramel Shake',
    category: 'mocktails-shakes',
    subcategory: 'Gelato Milkshakes',
    price: 760,
    description: 'Buttery artisan caramel with a touch of sea salt, spun with creamy gelato.',
    isSignature: false,
    image: 'assets/images/dishes/shake-5.jpg',
    badge: null
  },
  {
    id: 'shake-6',
    name: 'Peanut Butter Shake',
    category: 'mocktails-shakes',
    subcategory: 'Gelato Milkshakes',
    price: 760,
    description: 'Roasted peanut butter whipped with vanilla gelato for a rich nutty treat.',
    isSignature: false,
    image: 'assets/images/dishes/shake-6.jpg',
    badge: null
  },

  // --- SMOOTHIES ---
  {
    id: 'smoothie-1',
    name: 'Strawberry Smoothie',
    category: 'mocktails-shakes',
    subcategory: 'Smoothies',
    price: 740,
    description: 'Sweet whole strawberries blended with Greek yogurt and ice.',
    isSignature: false,
    image: 'assets/images/dishes/smoothie-1.jpg',
    badge: null
  },
  {
    id: 'smoothie-2',
    name: 'Blueberry Smoothie',
    category: 'mocktails-shakes',
    subcategory: 'Smoothies',
    price: 740,
    description: 'Antioxidant-rich wild blueberries blended smooth with creamy yogurt.',
    isSignature: false,
    image: 'assets/images/dishes/smoothie-2.jpg',
    badge: null
  },
  {
    id: 'smoothie-3',
    name: 'All Berries Smoothie',
    category: 'mocktails-shakes',
    subcategory: 'Smoothies',
    price: 740,
    description: 'Medley of raspberries, blueberries and strawberries blended into a tart and sweet smoothie.',
    isSignature: true,
    image: 'assets/images/dishes/smoothie-3.jpg',
    badge: 'Fruit Power'
  },

  // --- SOFT DRINKS ---
  {
    id: 'drink-1',
    name: 'Pepsi / Diet Pepsi',
    category: 'mocktails-shakes',
    subcategory: 'Soft Drinks',
    price: 220,
    description: 'Chilled canned soda served with lemon slice and ice.',
    isSignature: false,
    image: 'assets/images/dishes/drink-1.jpg',
    badge: null
  },
  {
    id: 'drink-2',
    name: '7Up / Diet 7Up',
    category: 'mocktails-shakes',
    subcategory: 'Soft Drinks',
    price: 220,
    description: 'Crisp lemon-lime refreshment.',
    isSignature: false,
    image: 'assets/images/dishes/drink-2.jpg',
    badge: null
  },
  {
    id: 'drink-3',
    name: 'Mirinda',
    category: 'mocktails-shakes',
    subcategory: 'Soft Drinks',
    price: 220,
    description: 'Sparkling sweet orange soda.',
    isSignature: false,
    image: 'assets/images/dishes/drink-3.jpg',
    badge: null
  },
  {
    id: 'drink-4',
    name: 'Fresh Lime',
    category: 'mocktails-shakes',
    subcategory: 'Soft Drinks',
    price: 340,
    description: 'Freshly squeezed lime with 7Up or sparkling soda water.',
    isSignature: false,
    image: 'assets/images/dishes/drink-4.jpg',
    badge: null
  },
  {
    id: 'drink-5',
    name: 'Bottled Water (Small)',
    category: 'mocktails-shakes',
    subcategory: 'Soft Drinks',
    price: 190,
    description: 'Premium purified mineral water (500ml).',
    isSignature: false,
    image: 'assets/images/dishes/drink-5.jpg',
    badge: null
  },
  {
    id: 'drink-6',
    name: 'Bottled Water (Large)',
    category: 'mocktails-shakes',
    subcategory: 'Soft Drinks',
    price: 280,
    description: 'Premium purified mineral water (1.5L).',
    isSignature: false,
    image: 'assets/images/dishes/drink-6.jpg',
    badge: null
  },
  {
    id: 'drink-7',
    name: 'Sparkling Water',
    category: 'mocktails-shakes',
    subcategory: 'Soft Drinks',
    price: 380,
    description: 'Imported carbonated mineral sparkling water bottle.',
    isSignature: false,
    image: 'assets/images/dishes/drink-7.jpg',
    badge: null
  },

  // --- DESSERTS ---
  {
    id: 'dessert-1',
    name: 'Strawberry Cheesecake',
    category: 'desserts',
    subcategory: 'Artisan Desserts',
    price: 890,
    description: 'Silky baked New York style cheesecake on buttery graham crust, glazed with wild strawberry compote.',
    isSignature: true,
    image: 'assets/images/dishes/dessert-1.jpg',
    badge: 'Popular'
  },
  {
    id: 'dessert-2',
    name: 'Dark Chocolate Tart',
    category: 'desserts',
    subcategory: 'Artisan Desserts',
    price: 860,
    description: 'Crisp cocoa shortcrust pastry filled with bittersweet 70% dark chocolate ganache and sea salt flakes.',
    isSignature: true,
    image: 'assets/images/dishes/dessert-2.jpg',
    badge: 'Chef Favorite'
  },
  {
    id: 'dessert-3',
    name: 'Crème Brûlée',
    category: 'desserts',
    subcategory: 'Artisan Desserts',
    price: 550,
    description: 'Classic French vanilla bean custard baked to silky perfection beneath a shatteringly crisp caramelized sugar crust.',
    isSignature: true,
    image: 'assets/images/dishes/dessert-3.jpg',
    badge: 'Brasserie Classic'
  },
  {
    id: 'dessert-4',
    name: 'Brownie with Ice Cream',
    category: 'desserts',
    subcategory: 'Artisan Desserts',
    price: 880,
    description: 'Warm, gooey double chocolate fudge brownie served hot with a scoop of artisan vanilla bean gelato.',
    isSignature: true,
    image: 'assets/images/dishes/dessert-4.jpg',
    badge: 'Crowd Favorite'
  },
  {
    id: 'dessert-5',
    name: 'Bread Pudding',
    category: 'desserts',
    subcategory: 'Artisan Desserts',
    price: 590,
    description: 'Warm brioche soaked in rich spiced custard, baked until golden and drizzled with vanilla glaze.',
    isSignature: false,
    image: 'assets/images/dishes/dessert-5.jpg',
    badge: null
  },
  {
    id: 'dessert-6',
    name: 'Gelato (Per Scoop)',
    category: 'desserts',
    subcategory: 'Artisan Desserts',
    price: 400,
    description: 'Single scoop of Italian style artisanal gelato. Selection includes Vanilla, Belgian Chocolate, Salted Caramel, and Strawberry.',
    isSignature: false,
    image: 'assets/images/dishes/dessert-6.jpg',
    badge: null
  }
];
