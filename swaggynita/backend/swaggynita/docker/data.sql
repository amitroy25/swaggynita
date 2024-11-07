-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS swaggynita;
USE swaggynita;

-- Drop existing tables
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Type;

-- Create Type table
CREATE TABLE Type (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

-- Insert data into Type table
INSERT INTO Type (Name) VALUES
    ('Tshirts'),
    ('Hoodies'),
    ('Accessories');

-- Create Product table
CREATE TABLE Product (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    PictureUrl VARCHAR(255),
    ProductTypeId INT NOT NULL,
    FOREIGN KEY (ProductTypeId) REFERENCES Type(Id)
);

-- Insert data into the Product table
INSERT INTO Product (Name, Description, Price, PictureUrl, ProductTypeId) VALUES
                                                                                              ('PureCozy White Hoodie', 'Stay warm and stylish with the PureCozy White Hoodie. Soft, durable, and perfect for everyday wear—your new favorite for any season!', 1500, 'images/Product/hoodies-white-1', 2),
                                                                                              ('Midnight Black Hoodie', 'A classic for every wardrobe, the Midnight Black Hoodie combines sleek style with ultimate comfort. Perfect for any occasion, it’s your go-to for a timeless look.', 1675, 'images/Product/hoodies-black-2.png', 2),
                                                                                              ('Deep Navy Hoodie', 'Bold yet versatile, the Deep Navy Hoodie offers a fresh, modern vibe. Whether you’re out or relaxing at home, this hoodie adds effortless style.', 1475, 'images/Product/hoodies-navyblue-3.png', 2),
                                                                                              ('Crimson Maroon Hoodie', 'Make a statement with the Crimson Maroon Hoodie. Rich in color and soft in texture, it’s perfect for those who want to stand out.', 1849, 'images/Product/hoodies-maroon-4.png', 2),
                                                                                              ('Olive Green Hoodie', 'Bring a touch of nature to your wardrobe with the Olive Green Hoodie. This earthy shade is both trendy and comfortable, ideal for every season.', 1499, 'images/Product/hoodies-olivegreen-5.png', 2),
                                                                                              ('Sandstone Light Brown Hoodie', 'For a warm and cozy look, the Sandstone Light Brown Hoodie is your perfect match. Subtle and stylish, it’s designed for everyday comfort.', 1399, 'images/Product/hoodies-lightbrown-6.png', 2),
                                                                                              ('Persian Blue Hoodie', 'Elevate your style with the Persian Blue Hoodie. Its unique shade adds a pop of color while keeping things relaxed and refined.', 1492, 'images/Product/hoodies-persianblue-7.png', 2),
                                                                                              ('Fern Green Hoodie', 'Embrace a fresh look with the Fern Green Hoodie. Soft, comfortable, and perfect for any casual occasion, it’s a must-have for nature lovers.', 1200, 'images/Product/hoodies-ferngreen-8.png', 2),
                                                                                              ('Steel Grey Hoodie', 'The Steel Grey Hoodie is all about modern minimalism. Clean and cozy, it pairs effortlessly with anything in your closet.', 1190, 'images/Product/hoodies-grey-9.png', 2),
                                                                                              ('Lavender Light Purple Hoodie', 'Add a hint of color with the Lavender Light Purple Hoodie. Soft and stylish, this hoodie brings a subtle charm to your look.', 1400, 'images/Product/hoodies-lightpurple-10.png', 2),
                                                                                              ('Midnight Black Half Tee', 'Embrace timeless elegance with our Midnight Black Half Tee. Made from premium cotton, this t-shirt offers a soft touch and a relaxed fit. Perfect for layering or wearing solo, it’s versatile enough for any occasion, whether you are headed to a casual outing or just lounging at home.', 400, 'images/Product/tshirts-black-1.png', 1),
                                                                                              ('Pure White Half Tee', 'Stay fresh and stylish with our Pure White Half Tee. This classic staple features a lightweight fabric that breathes easily, making it ideal for warm weather. Dress it up with accessories or keep it casual—this t-shirt is your blank canvas for endless outfit possibilities.', 299, 'images/Product/tshirts-white-2.png', 1),
                                                                                              ('Navy Blue Half Tee', 'Add a touch of sophistication to your wardrobe with our Navy Blue Half Tee. Crafted from soft, durable material, this t-shirt is perfect for a laid-back day or a casual night out. Pair it with jeans or shorts for a look that’s both comfortable and chic.', 500, 'images/Product/tshirts-navyblue-3.png', 1),
                                                                                              ('Crimson Red Half Tee', 'Make a bold statement with our Crimson Red Half Tee. This vibrant t-shirt is designed to stand out, featuring a relaxed fit that ensures comfort without sacrificing style. Perfect for summer outings or casual get-togethers, it brings a pop of color to any outfit.', 400, 'images/Product/tshirts-red-4.png', 1),
                                                                                              ('Ash Grey Half Tee', 'Discover effortless style with our Ash Grey Half Tee. Its neutral tone makes it a versatile piece that can be dressed up or down. Made from breathable fabric, this t-shirt offers all-day comfort, making it a go-to choice for your everyday wear', 425, 'images/Product/tshirts-grey-5.png', 1),
                                                                                              ('Olive Green Half Tee', 'Go for a laid-back vibe with our Olive Green Half Tee. This earthy shade is perfect for outdoor adventures or casual meet-ups. Made from soft cotton, it provides a comfortable fit that you’ll love, making it a staple for any relaxed wardrobe', 449, 'images/Product/tshirts-olivegreen-6.png', 1),
                                                                                              ('Light Brown Half Tee', 'Stay stylish with our Light Brown Half Tee. This warm-toned t-shirt pairs perfectly with denim or chinos, making it a versatile addition to your closet. Crafted from soft fabric, it ensures comfort while adding a touch of sophistication to your casual look.', 399, 'images/Product/tshirts-lightbrown-7.png', 1),
                                                                                              ('Vibrant Purple Half Tee', 'Add a pop of color to your collection with our Vibrant Purple Half Tee. Made from premium cotton, this t-shirt offers a soft feel and a flattering fit. Whether you are dressing up for a night out or keeping it casual, this tee is sure to turn heads.', 299, 'images/Product/tshirts-purple-8.png', 1),
                                                                                              ('Soft Green Half Tee', 'Embrace a fresh look with our Soft Green Half Tee. This gentle hue is perfect for spring and summer wear, providing a refreshing vibe. With its comfortable fit and breathable fabric, this t-shirt is perfect for both casual outings and relaxed days at home.', 499, 'images/Product/tshirts-softgreen-9.png', 1),
                                                                                              ('Soft Orange Half Tee', 'Brighten your wardrobe with our Soft Orange Half Tee. This cheerful color is perfect for sunny days, bringing warmth and style to any outfit. Crafted for comfort, this t-shirt is versatile enough to be paired with shorts for a day out or jeans for a laid-back evening.', 599, 'images/Product/tshirts-softorange-10.png', 1),
                                                                                              ('Teal Green Half Tee', 'Dive into style with our Teal Green Half Tee. This unique color stands out while offering a fresh, modern look. Made from breathable cotton, this t-shirt is designed for all-day comfort, making it your new go-to for casual outings or relaxed days.', 499, 'images/Product/tshirts-tealgreen-11.png', 1),
                                                                                              ('Asphalt Grey Half Tee', 'Stay stylishly understated with our Asphalt Grey Half Tee. Its dark hue provides a sleek look that complements any outfit. Crafted for comfort and durability, this t-shirt is perfect for casual wear or as a base layer for your favorite looks.', 400, 'images/Product/tshirts-asphalt-12.png', 1),
                                                                                              ('Soft Pink Half Tee', 'Add a touch of femininity to your wardrobe with our Soft Pink Half Tee. This delicate shade is perfect for a casual day out or a relaxed evening at home. Made from soft, breathable fabric, it ensures comfort while offering a stylish silhouette', 400, 'images/Product/tshirts-softpink-13.png', 1),
                                                                                              ('Sleek Black Bottle', 'Stay hydrated in style with our Sleek Black Bottle. This minimalist design is perfect for on-the-go hydration, featuring a sturdy build and a modern look that complements any setting', 799, 'images/Product/accessories-bottle-black-1.png', 3),
                                                                                              ('Crystal Clear Bottle', 'Keep it simple with our Crystal Clear Bottle. Its transparent design makes it easy to track your water intake while adding a touch of elegance to your daily essentials.', 600, 'images/Product/accessories-bottle-transparent-2.png', 3),
                                                                                              ('Forest Green Bottle', 'Embrace nature’s vibe with our Forest Green Bottle. Durable and stylish, this bottle brings a hint of the outdoors to your day, making it perfect for the office, gym, or trail.', 899, 'images/Product/accessories-bottle-darkgreen-3.png', 3),
                                                                                              ('Navy Blue Cap', 'Add a touch of classic style with our Navy Blue Cap. Made from breathable material, this cap keeps you comfortable and looking sharp, whether you’re out for a run or enjoying a casual day', 425, 'images/Product/accessories-cap-navyblue-1.png', 3),
                                                                                              ('Bright White Cap', 'Keep it fresh and simple with our Bright White Cap. With a clean, crisp look, this cap is the perfect accessory to complete your casual outfits, adding a touch of style to any occasion', 325, 'images/Product/accessories-cap-white-2.png', 3),
                                                                                              ('Classic White And Blue Cup', 'Enjoy your favorite drinks in our Classic White and Blue Cup. Perfect for coffee, tea, or any hot beverage, this sleek and timeless cup fits seamlessly into your kitchen or office', 150, 'images/Product/accessories-cup-whiteandblue-1.png', 3),
                                                                                              ('Pure White Cup', 'Sip in elegance with our Pure White Cup. Designed with a smooth finish, it’s perfect for those moments of relaxation, whether at home or the office.', 250, 'images/Product/accessories-cup-purewhite-2.png', 3),
                                                                                              ('Red & Gold Executive Pen', 'Elevate your writing experience with our Red & Gold Executive Pen. Combining luxury with functionality, this pen offers smooth ink flow and a sophisticated look for any occasion', 199, 'images/Product/accessories-pen-redgolden-1.png', 3);