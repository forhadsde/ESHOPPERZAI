using API.Models;
using Microsoft.AspNetCore.Identity;

namespace API.Data;

public static class DbInitializer
{
    public static async Task Initialize(StoreContext context, UserManager<User> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new User
            {
                UserName = "bob",
                Email = "bob@test.com"
            };

            await userManager.CreateAsync(user, "Pa$$w0rd");
            await userManager.AddToRoleAsync(user, "Member");

            var admin = new User
            {
                UserName = "admin",
                Email = "admin@test.com"
            };

            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRolesAsync(admin, new[] { "Admin", "Member" });
        }

        if (context.Products.Any()) return;

        var products = new List<Product>
        {
    new Product
    {
        Name = "Maybelline New York Liquid Foundation Makeup",
        Description = "Matte foundation for oily skin.",
        Price = 799,
        PictureUrl = "/images/products/1.png",
        Brand = "Maybelline New York",
        Type = "Cosmetics",
        QuantityInStock = 50
    },
    new Product
    {
        Name = "Urban Decay Naked Eyeshadow Palette",
        Description = "Highly pigmented eyeshadow palette.",
        Price = 5400,
        PictureUrl = "/images/products/2.jpeg",
        Brand = "Urban Decay",
        Type = "Cosmetics",
        QuantityInStock = 30
    },
    new Product
    {
        Name = "MAC Ruby Woo Matte Lipstick",
        Description = "Classic red matte lipstick.",
        Price = 1800,
        PictureUrl = "/images/products/13.jpeg",
        Brand = "MAC",
        Type = "Cosmetics",
        QuantityInStock = 40
    },
    new Product
    {
        Name = "NARS Orgasm Blush",
        Description = "Cult-favorite peachy pink blush.",
        Price = 2300,
        PictureUrl = "/images/products/19.jpeg",
        Brand = "NARS",
        Type = "Cosmetics",
        QuantityInStock = 35
    },
    new Product
    {
        Name = "Too Faced Better Than Sex Mascara",
        Description = "Volumizing mascara for dramatic lashes.",
        Price = 2600,
        PictureUrl = "/images/products/20.jpeg",
        Brand = "Too Faced",
        Type = "Cosmetics",
        QuantityInStock = 60
    },
    new Product
    {
        Name = "Huda Beauty Desert Dusk Eyeshadow Palette",
        Description = "Warm-toned eyeshadow palette with rich pigments.",
        Price = 6000,
        PictureUrl = "/images/products/21.jpeg",
        Brand = "Huda Beauty",
        Type = "Cosmetics",
        QuantityInStock = 25
    },
    new Product
    {
        Name = "Benefit Hoola Matte Bronzer",
        Description = "Matte bronzer for a natural tan.",
        Price = 2400,
        PictureUrl = "/images/products/22.jpeg",
        Brand = "Benefit",
        Type = "Cosmetics",
        QuantityInStock = 55
    },
    new Product
    {
        Name = "Anastasia Beverly Hills Dipbrow Pomade",
        Description = "Waterproof pomade for defined brows.",
        Price = 2800,
        PictureUrl = "/images/products/23.jpeg",
        Brand = "Anastasia Beverly Hills",
        Type = "Cosmetics",
        QuantityInStock = 45
    },
    new Product
    {
        Name = "Charlotte Tilbury Magic Cream",
        Description = "Hydrating moisturizer for a radiant glow.",
        Price = 3500,
        PictureUrl = "/images/products/24.jpeg",
        Brand = "Charlotte Tilbury",
        Type = "Cosmetics",
        QuantityInStock = 40
    },
    new Product
    {
        Name = "Clinique Even Better Foundation",
        Description = "Foundation that brightens and evens skin tone.",
        Price = 2800,
        PictureUrl = "/images/products/25.jpeg",
        Brand = "Clinique",
        Type = "Cosmetics",
        QuantityInStock = 30
    },

    
    // Medicine
    new Product
    {
        Name = "Tylenol Extra Strength Acetaminophen",
        Description = "Pain reliever and fever reducer.",
        Price = 899,
        PictureUrl = "/images/products/3.png",
        Brand = "Tylenol",
        Type = "Medicine",
        QuantityInStock = 100
    },
    new Product
    {
        Name = "Benadryl Allergy Ultratabs",
        Description = "Antihistamine for allergy relief.",
        Price = 749,
        PictureUrl = "/images/products/4.png",
        Brand = "Benadryl",
        Type = "Medicine",
        QuantityInStock = 80
    },
    new Product
    {
        Name = "Advil Ibuprofen Pain Reliever/Fever Reducer",
        Description = "Fast-acting pain relief tablets.",
        Price = 899,
        PictureUrl = "/images/products/14.png",
        Brand = "Advil",
        Type = "Medicine",
        QuantityInStock = 90
    },
    new Product
    {
        Name = "Claritin Allergy Tablets",
        Description = "Non-drowsy allergy relief.",
        Price = 999,
        PictureUrl = "/images/products/26.png",
        Brand = "Claritin",
        Type = "Medicine",
        QuantityInStock = 70
    },
    new Product
    {
        Name = "Mucinex Extended-Release Tablets",
        Description = "Relieves chest congestion.",
        Price = 1199,
        PictureUrl = "/images/products/27.png",
        Brand = "Mucinex",
        Type = "Medicine",
        QuantityInStock = 60
    },
    new Product
    {
        Name = "Imodium AD Loperamide Tablets",
        Description = "Anti-diarrheal medication.",
        Price = 849,
        PictureUrl = "/images/products/28.png",
        Brand = "Imodium",
        Type = "Medicine",
        QuantityInStock = 80
    },
    new Product
    {
        Name = "Pepto-Bismol Liquid",
        Description = "Relieves upset stomach, nausea, and diarrhea.",
        Price = 1299,
        PictureUrl = "/images/products/29.png",
        Brand = "Pepto-Bismol",
        Type = "Medicine",
        QuantityInStock = 50
    },
    new Product
    {
        Name = "Excedrin Extra Strength",
        Description = "Pain relief for headaches and migraines.",
        Price = 949,
        PictureUrl = "/images/products/30.png",
        Brand = "Excedrin",
        Type = "Medicine",
        QuantityInStock = 75
    },
    new Product
    {
        Name = "Tums Antacid Tablets",
        Description = "Relieves heartburn and indigestion.",
        Price = 699,
        PictureUrl = "/images/products/31.png",
        Brand = "Tums",
        Type = "Medicine",
        QuantityInStock = 90
    },
    new Product
    {
        Name = "NyQuil Cold & Flu Relief",
        Description = "Nighttime relief for cold and flu symptoms.",
        Price = 1099,
        PictureUrl = "/images/products/32.png",
        Brand = "NyQuil",
        Type = "Medicine",
        QuantityInStock = 65
    },
    
    // Jewelry
    new Product
    {
        Name = "Tiffany & Co. Diamond Stud Earrings",
        Description = "Classic diamond earrings in platinum.",
        Price = 100000,
        PictureUrl = "/images/products/5.jpeg",
        Brand = "Tiffany & Co.",
        Type = "Jewelry",
        QuantityInStock = 20
    },
    new Product
    {
        Name = "Cartier Love Bracelet",
        Description = "Iconic love bracelet in 18k gold.",
        Price = 700000,
        PictureUrl = "/images/products/6.jpg",
        Brand = "Cartier",
        Type = "Jewelry",
        QuantityInStock = 15
    },
    new Product
    {
        Name = "David Yurman Classics Bracelet with Gold",
        Description = "Iconic cable bracelet with gold accents.",
        Price = 150000,
        PictureUrl = "/images/products/15.jpeg",
        Brand = "David Yurman",
        Type = "Jewelry",
        QuantityInStock = 25
    },
    new Product
    {
        Name = "Bvlgari Serpenti Watch",
        Description = "Elegant watch with a serpentine design.",
        Price = 120000,
        PictureUrl = "/images/products/33.jpg",
        Brand = "Bvlgari",
        Type = "Jewelry",
        QuantityInStock = 10
    },
    new Product
    {
        Name = "Harry Winston Diamond Necklace",
        Description = "Luxurious diamond necklace in white gold.",
        Price = 500000,
        PictureUrl = "/images/products/34.jpg",
        Brand = "Harry Winston",
        Type = "Jewelry",
        QuantityInStock = 5
    },
    new Product
    {
        Name = "Chopard Happy Diamonds Ring",
        Description = "Ring featuring floating diamonds.",
        Price = 80000,
        PictureUrl = "/images/products/35.jpg",
        Brand = "Chopard",
        Type = "Jewelry",
        QuantityInStock = 20
    },
    new Product
    {
        Name = "Piaget Rose Necklace",
        Description = "Rose-shaped necklace with diamonds.",
        Price = 95000,
        PictureUrl = "/images/products/36.jpg",
        Brand = "Piaget",
        Type = "Jewelry",
        QuantityInStock = 15
    },
    new Product
    {
        Name = "Van Cleef & Arpels Alhambra Bracelet",
        Description = "Iconic four-leaf clover bracelet.",
        Price = 60000,
        PictureUrl = "/images/products/37.jpg",
        Brand = "Van Cleef & Arpels",
        Type = "Jewelry",
        QuantityInStock = 30
    },
    new Product
    {
        Name = "Rolex Submariner Watch",
        Description = "Classic dive watch with stainless steel.",
        Price = 80000,
        PictureUrl = "/images/products/38.jpg",
        Brand = "Rolex",
        Type = "Jewelry",
        QuantityInStock = 12
    },
    new Product
    {
        Name = "Tiffany & Co. Atlas Ring",
        Description = "Modern ring with Roman numeral design.",
        Price = 15000,
        PictureUrl = "/images/products/39.jpg",
        Brand = "Tiffany & Co.",
        Type = "Jewelry",
        QuantityInStock = 40
    },
    
    // Shampoo
    new Product
    {
        Name = "Pantene Pro-V Moisture Renewal Shampoo",
        Description = "Hydrating shampoo for dry hair.",
        Price = 599,
        PictureUrl = "/images/products/7.jpeg",
        Brand = "Pantene",
        Type = "Shampoo",
        QuantityInStock = 70
    },
    new Product
    {
        Name = "Head & Shoulders Clean Dandruff Shampoo",
        Description = "Anti-dandruff shampoo for all hair types.",
        Price = 649,
        PictureUrl = "/images/products/8.jpeg",
        Brand = "Head & Shoulders",
        Type = "Shampoo",
        QuantityInStock = 60
    },
    new Product
    {
        Name = "Herbal Essences Moisturizing Shampoo",
        Description = "Moisturizing shampoo with coconut essence.",
        Price = 499,
        PictureUrl = "/images/products/16.jpeg",
        Brand = "Herbal Essences",
        Type = "Shampoo",
        QuantityInStock = 80
    },
    new Product
    {
        Name = "Dove Nutritive Solutions Shampoo",
        Description = "Shampoo that nourishes and repairs damaged hair.",
        Price = 450,
        PictureUrl = "/images/products/40.jpeg",
        Brand = "Dove",
        Type = "Shampoo",
        QuantityInStock = 65
    },
    new Product
    {
        Name = "Tresemmé Keratin Smooth Shampoo",
        Description = "Shampoo that smooths and controls frizz.",
        Price = 550,
        PictureUrl = "/images/products/41.jpeg",
        Brand = "Tresemmé",
        Type = "Shampoo",
        QuantityInStock = 75
    },
    new Product
    {
        Name = "L'Oréal Paris Elvive Extraordinary Oil Shampoo",
        Description = "Nourishing shampoo with six flower oils.",
        Price = 599,
        PictureUrl = "/images/products/42.jpeg",
        Brand = "L'Oréal Paris",
        Type = "Shampoo",
        QuantityInStock = 50
    },
    new Product
    {
        Name = "Redken All Soft Shampoo",
        Description = "Shampoo for soft, silky hair.",
        Price = 720,
        PictureUrl = "/images/products/43.jpeg",
        Brand = "Redken",
        Type = "Shampoo",
        QuantityInStock = 60
    },
    new Product
    {
        Name = "Aveda Shampure Shampoo",
        Description = "Gentle, everyday shampoo with a calming aroma.",
        Price = 900,
        PictureUrl = "/images/products/44.jpeg",
        Brand = "Aveda",
        Type = "Shampoo",
        QuantityInStock = 45
    },
    new Product
    {
        Name = "Garnier Fructis Sleek & Shine Shampoo",
        Description = "Shampoo for sleek and frizz-free hair.",
        Price = 480,
        PictureUrl = "/images/products/45.jpeg",
        Brand = "Garnier",
        Type = "Shampoo",
        QuantityInStock = 70
    },
    new Product
    {
        Name = "Paul Mitchell Tea Tree Special Shampoo",
        Description = "Invigorating shampoo with tea tree oil.",
        Price = 650,
        PictureUrl = "/images/products/46.jpeg",
        Brand = "Paul Mitchell",
        Type = "Shampoo",
        QuantityInStock = 55
    },
    
    // Shower Gel
    new Product
    {
        Name = "Dove Deep Moisture Nourishing Body Wash",
        Description = "Moisturizing body wash for soft skin.",
        Price = 799,
        PictureUrl = "/images/products/9.png",
        Brand = "Dove",
        Type = "Shower Gel",
        QuantityInStock = 40
    },
    new Product
    {
        Name = "The Body Shop Satsuma Shower Gel",
        Description = "Refreshing shower gel with citrus scent.",
        Price = 1200,
        PictureUrl = "/images/products/10.jpeg",
        Brand = "The Body Shop",
        Type = "Shower Gel",
        QuantityInStock = 35
    },
    new Product
    {
        Name = "NIVEA Men Active Clean Body Wash",
        Description = "Deep-cleansing body wash for men.",
        Price = 699,
        PictureUrl = "/images/products/17.png",
        Brand = "NIVEA",
        Type = "Shower Gel",
        QuantityInStock = 50
    },
    new Product
    {
        Name = "Neutrogena Rainbath Refreshing Shower and Bath Gel",
        Description = "Cleansing gel with a fresh, herbal scent.",
        Price = 850,
        PictureUrl = "/images/products/47.png",
        Brand = "Neutrogena",
        Type = "Shower Gel",
        QuantityInStock = 45
    },
    new Product
    {
        Name = "L'Occitane Almond Shower Oil",
        Description = "Luxurious shower oil with almond oil.",
        Price = 1800,
        PictureUrl = "/images/products/48.png",
        Brand = "L'Occitane",
        Type = "Shower Gel",
        QuantityInStock = 30
    },
    new Product
    {
        Name = "Bath & Body Works Eucalyptus Spearmint Body Wash",
        Description = "Body wash with invigorating eucalyptus and spearmint.",
        Price = 1200,
        PictureUrl = "/images/products/49.png",
        Brand = "Bath & Body Works",
        Type = "Shower Gel",
        QuantityInStock = 40
    },
    new Product
    {
        Name = "Aveeno Daily Moisturizing Body Wash",
        Description = "Gentle body wash with nourishing oatmeal.",
        Price = 950,
        PictureUrl = "/images/products/50.png",
        Brand = "Aveeno",
        Type = "Shower Gel",
        QuantityInStock = 55
    },
    new Product
    {
        Name = "Olay Ultra Moisture Body Wash",
        Description = "Body wash with shea butter for extra moisture.",
        Price = 700,
        PictureUrl = "/images/products/51.png",
        Brand = "Olay",
        Type = "Shower Gel",
        QuantityInStock = 60
    },
    new Product
    {
        Name = "Simple Kind to Skin Moisturizing Shower Gel",
        Description = "Gentle and hydrating shower gel for sensitive skin.",
        Price = 600,
        PictureUrl = "/images/products/52.png",
        Brand = "Simple",
        Type = "Shower Gel",
        QuantityInStock = 65
    },
    new Product
    {
        Name = "Kiehl's Creme de Corps Body Cleanser",
        Description = "Rich and creamy body cleanser.",
        Price = 1400,
        PictureUrl = "/images/products/53.png",
        Brand = "Kiehl's",
        Type = "Shower Gel",
        QuantityInStock = 30
    },
    
    // Perfume
    new Product
    {
        Name = "Chanel Coco Mademoiselle Eau de Parfum",
        Description = "Classic floral perfume with a modern twist.",
        Price = 10000,
        PictureUrl = "/images/products/11.jpeg",
        Brand = "Chanel",
        Type = "Perfume",
        QuantityInStock = 25
    },
    new Product
    {
        Name = "Dolce & Gabbana Light Blue Eau de Toilette",
        Description = "Fresh and fruity fragrance for women.",
        Price = 8000,
        PictureUrl = "/images/products/12.jpg",
        Brand = "Dolce & Gabbana",
        Type = "Perfume",
        QuantityInStock = 30
    },
    new Product
    {
        Name = "Yves Saint Laurent Black Opium Eau de Parfum",
        Description = "Addictive floral fragrance with coffee and vanilla.",
        Price = 12000,
        PictureUrl = "/images/products/18.jpeg",
        Brand = "Yves Saint Laurent",
        Type = "Perfume",
        QuantityInStock = 35
    },
    new Product
    {
        Name = "Gucci Bloom Eau de Parfum",
        Description = "Floral perfume with notes of jasmine and tuberose.",
        Price = 9500,
        PictureUrl = "/images/products/54.jpg",
        Brand = "Gucci",
        Type = "Perfume",
        QuantityInStock = 30
    },
    new Product
    {
        Name = "Dior Sauvage Eau de Toilette",
        Description = "Fresh and spicy fragrance with notes of bergamot and pepper.",
        Price = 8500,
        PictureUrl = "/images/products/55.jpg",
        Brand = "Dior",
        Type = "Perfume",
        QuantityInStock = 40
    },
    new Product
    {
        Name = "Tom Ford Black Orchid Eau de Parfum",
        Description = "Luxurious and sensual fragrance with black truffle and ylang-ylang.",
        Price = 15000,
        PictureUrl = "/images/products/56.jpg",
        Brand = "Tom Ford",
        Type = "Perfume",
        QuantityInStock = 25
    },
    new Product
    {
        Name = "Marc Jacobs Daisy Eau de Toilette",
        Description = "Light and fresh fragrance with notes of wild strawberry and violet.",
        Price = 7200,
        PictureUrl = "/images/products/57.jpg",
        Brand = "Marc Jacobs",
        Type = "Perfume",
        QuantityInStock = 50
    },
    new Product
    {
        Name = "Burberry Her Eau de Parfum",
        Description = "Modern and fruity fragrance with notes of red berries and jasmine.",
        Price = 9500,
        PictureUrl = "/images/products/58.jpg",
        Brand = "Burberry",
        Type = "Perfume",
        QuantityInStock = 30
    },
    new Product
    {
        Name = "Givenchy Gentlemen Only Eau de Toilette",
        Description = "Elegant and woody fragrance with notes of leather and patchouli.",
        Price = 7800,
        PictureUrl = "/images/products/59.jpg",
        Brand = "Givenchy",
        Type = "Perfume",
        QuantityInStock = 45
    },
    new Product
    {
        Name = "Prada La Femme Eau de Parfum",
        Description = "Sophisticated fragrance with notes of frangipani and vanilla.",
        Price = 11500,
        PictureUrl = "/images/products/60.jpg",
        Brand = "Prada",
        Type = "Perfume",
        QuantityInStock = 20
    }

        };

        foreach (var product in products)
        {
            context.Products.Add(product);
        }

        context.SaveChanges();
    }
}
