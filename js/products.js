const inventory = [
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

    {
        id: "Lanvins",
        name: "Lanvins",
        price: 225,
        oldPrice: 350,
        type: "physical",
        image: "https://cdn-images.farfetch-contents.com/25/37/01/38/25370138_56798182_1000.jpg", // The default image
        description: "The ultimate skate-meets-basketball collaboration.",
        colorways: [
            { name: "White Muli-Color", img: "https://cdn-images.farfetch-contents.com/25/37/01/38/25370138_56798182_1000.jpg" }, // Copy and Paste
            { name: "Black Multi-Color", img: "https://cdn-images.farfetch-contents.com/25/37/01/40/25370140_56797163_1000.jpg" },
            { name: "Gallery Dept White", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpnSIDO4jbUQEcvbyReD8fwH7NhaipKl_ocgYL15zmTfwL4Kk" },
            { name: "Gallery Dept Black (Blue Lace)", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTC9VcvYk8P3Pr_Bw_o9llVpFzqbg7HiQcXPCIVpiBEY-Q_-DYVyTYH4IKLJEvF_ZYa_T7_TlI" },
            { name: "All White", img: "https://cdn-images.farfetch-contents.com/29/78/83/45/29788345_58910209_2048.jpg" },
            { name: "All Black", img: "https://cdn-images.farfetch-contents.com/28/07/16/92/28071692_57635786_2048.jpg" },
            { name: "Reflective", img: "https://media-assets.grailed.com/prd/listing/temp/1d1a55c986c14f3496b366e802fdff08?w=1500" },
        ],
        sizes: [
            { us: "M 8 / W 9.5", eu: "41" },
            { us: "M 9 / W 10.5", eu: "42.5" },
            { us: "M 10 / W 11.5", eu: "44" },
            { us: "M 11 / W 12.5", eu: "45" }
        ],
        shipping: [
            { label: "Standard Shipping (12-19 Days)", price: 15 },
            { label: "Express Shipping (5-10 Days)", price: 35 }
        ]
    },
    {
        id: "Jordan-4s",
        name: "JORDAN 4s",
        price: 225,
        oldPrice: 350,
        type: "physical",
        image: "images/j4-main.jpg", // The default image
        description: "The ultimate skate-meets-basketball collaboration.",
        colorways: [
            { name: "Fire Red", img: "https://www.google.com/search?q=https://image.goat.com/750/thumbnails/001/015/011/original/12448_00.png.png" }
        ],
        sizes: [
            { us: "M 8 / W 9.5", eu: "41" },
            { us: "M 9 / W 10.5", eu: "42.5" },
            { us: "M 10 / W 11.5", eu: "44" },
            { us: "M 11 / W 12.5", eu: "45" }
        ],
        shipping: [
            { label: "Standard Shipping (12-19 Days)", price: 15 },
            { label: "Express Shipping (5-10 Days)", price: 35 }
        ]
    },
    {
        id: "Jordan-5s",
        name: "JORDAN 5s",
        price: 225,
        oldPrice: 350,
        type: "physical",
        image: "images/j4-main.jpg", // The default image
        description: "The ultimate skate-meets-basketball collaboration.",
        colorways: [
            { name: "Fire Red", img: "https://www.google.com/search?q=https://image.goat.com/750/thumbnails/001/015/011/original/12448_00.png.png" }
        ],
        sizes: [
            { us: "M 8 / W 9.5", eu: "41" },
            { us: "M 9 / W 10.5", eu: "42.5" },
            { us: "M 10 / W 11.5", eu: "44" },
            { us: "M 11 / W 12.5", eu: "45" }
        ],
        shipping: [
            { label: "Standard Shipping (12-19 Days)", price: 15 },
            { label: "Express Shipping (5-10 Days)", price: 35 }
        ]
    },
];

export default inventory;