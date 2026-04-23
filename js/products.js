const inventory = [
    //{
          //  id: "1",
           // name: "1",
            //price: 1,
            //oldPrice: 1,
            //type: "physical or digital",
            //image: ".."", // The default image
            //description: "Descripition",
            //colorways: [
               // { name: "Normal", img: ".." },
           // ],
            //sizes: [
            //    { us: "Xtra-Small" },
            //    { us: "Small" },
            //    { us: "Medium" },
            //    { us: "Large" },
            //    { us: "Xtra-Large" },
            //    { us: "M  / W  / EU " },
          //  ],
           // shipping: [
            //    { label: "Standard Shipping (12-19 Days)", price: 15 },
             //   { label: "Express Shipping (5-10 Days)", price: 35 }
           // ]
        //},

        {
            id: "Lanvins",
            name: "Lanvins",
            price: 225,
            oldPrice: 350,
            type: "physical",
            image: "https://cdn-images.farfetch-contents.com/28/07/16/92/28071692_57635786_2048.jpg", // The default image
            description: "The ultimate skate-meets-basketball collaboration.",
            colorways: [
                { name: "All White", img: "https://cdn-images.farfetch-contents.com/29/78/83/45/29788345_58910209_2048.jpg" },
                { name: "All Black", img: "https://cdn-images.farfetch-contents.com/28/07/16/92/28071692_57635786_2048.jpg" },
                { name: "Reflective", img: "https://media-assets.grailed.com/prd/listing/temp/1d1a55c986c14f3496b366e802fdff08?w=1500" },
            ],
            sizes: [
                { us: "M 3.5 / W 5 / EU 35"},
                { us: "M 4.5 / W 6 / EU 36" },
                { us: "M 5 / W 6.5-7 / EU 37" },
                { us: "M 6 / W 7.5 / EU 38" },
                { us: "M 7 / W 8-8.5 / EU 39" },
                { us: "M 7.5 / W 9 / EU 40" },
                { us: "M 8.5 / W 9.5-10 / EU 41" },
                { us: "M 9 / W 10.5-11 / EU 42" },
                { us: "M 10 / W 12 / EU 43" },
                { us: "M 10.5 / W 12.5 / EU 44" },
                { us: "M 11.5 / W 13 / EU 45" },
                
            ],
            shipping: [
                { label: "Standard Shipping (12-19 Days)", price: 20 },
                { label: "Express Shipping (5-10 Days)", price: 40 }
            ]
        },
        {
            id: "Chrome-Hearts-Shirts",
            name: "Chrome Heart Shirts",
            price: 80,
            oldPrice: 120,
            type: "physical",
            image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/068/941/541/original/904166_02.jpg.jpeg?action=crop&width=750", // The default image
            description: "The ultimate skate-meets-basketball collaboration.",
            colorways: [
                { name: "Chrome Heart (regular T-shirt)", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/068/941/541/original/904166_02.jpg.jpeg?action=crop&width=750" },
                { name: "Chrome Heart (Las Vegas T-Shirt)", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/102/778/118/original/1457653_02.jpg.jpeg?width=750" },
            ],
            sizes: [
                { us: "Xtra-Small" },
                { us: "Small" },
                { us: "Medium" },
                { us: "Large" },
                { us: "Xtra-Large" },
            ],
            shipping: [
                { label: "Standard Shipping (12-19 Days)", price: 15 },
                { label: "Express Shipping (5-10 Days)", price: 35 }
            ]
        },
        {
            id: "Chrome-Hearts-Hoodies",
            name: "Chrome Heart Hoodies",
            price: 125,
            oldPrice: 200,
            type: "physical",
            image: "https://image.goat.com/attachments/product_template_additional_pictures/images/101/385/827/medium/768202_02.jpg.jpeg", // The default image
            description: "The ultimate skate-meets-basketball collaboration.",
            colorways: [
                { name: "Normal", img: "https://image.goat.com/attachments/product_template_additional_pictures/images/101/385/827/medium/768202_02.jpg.jpeg" },
                { name: "Los Angelos", img: "https://shengliroadmarket.com/cdn/shop/files/chrome-hearts-los-angeles-exclusive-horseshoe-zip-up-hoodie-1492622.jpg?v=1768233847&width=1080" },
                { name: "Rainbow (Black)", img: "https://images.stockx.com/images/Chrome-Hearts-Multi-Color-Cross-Cemetery-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1622359708" },
            ],
            sizes: [
                { us: "Xtra-Small" },
                { us: "Small" },
                { us: "Medium" },
                { us: "Large" },
                { us: "Xtra-Large" },
            ],
            shipping: [
                { label: "Standard Shipping (12-19 Days)", price: 15 },
                { label: "Express Shipping (5-10 Days)", price: 35 }
            ]
        },
    {
        id: "elite-vendor-bundle",
        name: "ELITE VENDOR BUNDLE",
        price: 40.00,
        oldPrice: 50.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/elite-vendor-bundle_1.png?v=1775737077&width=800",
        description: "Includes all private links for streetwear, electronics, and cologne suppliers. Includes our 2026 Reselling Guide."
    },
    {
        id: "electronic-vendor",
        name: "ELECTRONIC VENDOR BUNDLE",
        price: 15.00,
        oldPrice: 35.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/pods-vendor.png?v=1775737065&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },
    {
        id: "cologne-vendor",
        name: "COLOGNE VENDOR BUNDLE",
        price: 7.00,
        oldPrice: 10.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/colognes-vendor.png?v=1775737068&width=800",
        description: "Direct access to the best cologne suppliers with receipts included."
    },
    {
        id: "all-vendor",
        name: "ALL VENDOR BUNDLE",
        price: 25.00,
        oldPrice: 48.99,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/IMG-3080.webp?v=1775737069&width=800",
        description: "Direct access to the best all of suppliers with receipts included."
    },
    {
        id: "clothing-vendor",
        name: "CLOTHING VENDOR BUNDLE",
        price: 7.00,
        oldPrice: 10.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/hoodies-vendor.png?v=1775737067&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },
    {
        id: "shoe-vendor",
        name: "SHOE VENDOR BUNDLE",
        price: 7.00,
        oldPrice: 10.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/shoes-vendor.png?v=1775737064&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },
    {
        id: "moissanite-vendor",
        name: "MOISSANITE VENDOR BUNDLE",
        price: 15.00,
        oldPrice: 25.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/moissanite-watch-vendor.png?v=1775737079&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },
    {
        id: "bag-vendor",
        name: "DESIGNER BAG VENDOR BUNDLE",
        price: 10.00,
        oldPrice: 15.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/designer-bag-vendor.png?v=1775737080&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },
    {
        id: "reciept-vendor",
        name: "RECIEPT GENERATOR",
        price: 5.00,
        oldPrice: 10.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/IMG-2904.png?v=1775737074&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },
    {
        id: "glasses-vendor",
        name: "GLASSES VENDOR BUNDLE",
        price: 5.00,
        oldPrice: 10.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/IMG-3073.webp?v=1775737072&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },
    {
        id: "free-guide",
        name: "FREE GUIDE",
        price: 0.00,
        oldPrice: 1.00,
        status: "In Stock",
        type: "digital",
        image: "https://cultureresells.com/cdn/shop/files/IMG-5126.webp?v=1775737071&width=800",
        description: "Direct access to the best electronic suppliers with receipts included."
    },

];

export default inventory;