const WORDS = [
  {
    word: "dog",
    phonetic: "/dɒɡ/",
    definition: "A furry animal that barks and is often kept as a pet.",
    example: "The dog wagged its tail happily when it saw its owner.",
    image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&w=500"
  },
  {
    word: "cat",
    phonetic: "/kæt/",
    definition: "A small furry animal that meows and is often kept as a pet.",
    example: "The cat curled up on the sofa and took a nap.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500"
  },
  {
    word: "apple",
    phonetic: "/ˈæp.əl/",
    definition: "A round fruit with red or green skin and a crisp inside.",
    example: "She ate a juicy apple for her afternoon snack.",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=500"
  },
  {
    word: "ball",
    phonetic: "/bɔːl/",
    definition: "A round object used in games and sports.",
    example: "The children played catch with a red ball in the park.",
    image: "https://images.unsplash.com/photo-1660926655155-8b1f8f9079f5?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000"
  },
  {
    word: "sun",
    phonetic: "/sʌn/",
    definition: "The bright star in the sky that gives us light and warmth.",
    example: "The sun rises in the east every morning.",
    image: "https://images.unsplash.com/photo-1661852818229-390261d08b97?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
  },
  {
    word: "fish",
    phonetic: "/fɪʃ/",
    definition: "An animal that lives in water and has fins and gills.",
    example: "We saw colorful fish swimming in the aquarium.",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=500"
  },
  {
    word: "car",
    phonetic: "/kɑːr/",
    definition: "A vehicle with four wheels that people drive on roads.",
    example: "My dad drives a blue car to work every day.",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=500"
  },
  {
    word: "bird",
    phonetic: "/bɜːrd/",
    definition: "An animal with feathers and wings that can usually fly.",
    example: "A small bird built a nest in the tree outside my window.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=500"
  },
  {
    word: "tree",
    phonetic: "/triː/",
    definition: "A tall plant with a trunk and branches made of wood.",
    example: "We have a big oak tree in our backyard that gives us shade.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=500"
  },
  {
    word: "house",
    phonetic: "/haʊs/",
    definition: "A building where people live, usually with a family.",
    example: "They moved into their new house last weekend.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500"
  },
  {
  word: "book",
  phonetic: "/bʊk/",
  definition: "A set of pages with writing or pictures, usually to read.",
  example: "She read a storybook before going to bed.",
  image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500"
  },
  {
    word: "rabbit",
    phonetic: "/ˈræbɪt/",
    definition: "A small animal with long ears that hops.",
    example: "The rabbit ate carrots from the garden.",
    image: "https://images.unsplash.com/photo-1556838803-cc94986cb631?auto=format&fit=crop&w=500"
  },
  {
    word: "elephant",
    phonetic: "/ˈelɪfənt/",
    definition: "A huge gray animal with a long trunk.",
    example: "The elephant sprayed water with its trunk.",
    image: "https://images.unsplash.com/photo-1505148230895-d9a785a555fa?auto=format&fit=crop&w=500"
  },
  {
    word: "banana",
    phonetic: "/bəˈnɑːnə/",
    definition: "A long yellow fruit that's easy to peel.",
    example: "Monkeys love to eat bananas.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500"
  },
  {
    word: "pizza",
    phonetic: "/ˈpiːtsə/",
    definition: "A round food with cheese and toppings.",
    example: "We had pepperoni pizza for dinner.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500"
  },
  {
    word: "ice cream",
    phonetic: "/ˈaɪs kriːm/",
    definition: "A sweet frozen treat that comes in flavors.",
    example: "I got chocolate ice cream in a cone.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500"
  }
];