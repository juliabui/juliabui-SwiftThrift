-- Sample Data Set Provided by Claude.ai
-- To Insert Data run: mysql -u 'user' -p swift_thrift < sampleData.sql 

DELETE FROM pictures;
DELETE FROM listings_belong_to_categories;
DELETE FROM messages;
DELETE FROM keywords;
DELETE FROM listings;
DELETE FROM users;
DELETE FROM categories;

-- Sample categories
INSERT INTO categories (id, name, description) VALUES
(1, 'Electronics', 'Electronic devices and accessories'),
(2, 'Books', 'Textbooks, fiction, and non-fiction books'),
(3, 'Furniture', 'Dorm and apartment furniture'),
(4, 'Clothing', 'New and gently used clothing'),
(5, 'School Supplies', 'Notebooks, backpacks, and other academic supplies'),
(6, 'Sports & Outdoors', 'Athletic equipment and outdoor gear'),
(7, 'Tickets', 'Event tickets for campus activities'),
(8, 'Services', 'Tutoring, photography, and other student services');

-- Sample Users
INSERT INTO users (id, SFSU_id, firstName, lastName, mail, password, role, created_at, updated_at) VALUES
(1, 12345678, 'John', 'Smith', 'jsmith@mail.sfsu.edu', 'hashedpassword1', 1, NOW(), NOW()),
(2, 23456789, 'Emily', 'Johnson', 'ejohnson@mail.sfsu.edu', 'hashedpassword2', 1, NOW(), NOW()),
(3, 34567890, 'Michael', 'Williams', 'mwilliams@mail.sfsu.edu', 'hashedpassword3', 1, NOW(), NOW()),
(4, 45678901, 'Sofia', 'Garcia', 'sgarcia@mail.sfsu.edu', 'hashedpassword4', 1, NOW(), NOW()),
(5, 56789012, 'David', 'Chen', 'dchen@mail.sfsu.edu', 'hashedpassword5', 1, NOW(), NOW());

-- Sample listings
INSERT INTO listings (id, seller_id, name, description, price, status, created_at, updated_at) VALUES

-- Electronics
(1, 1, 'MacBook Pro 2022', 'Lightly used MacBook Pro 13" M1 chip with 16GB RAM and 512GB SSD. Includes charger and protective case. Great for computer science classes!', 899.99, 'active', NOW(), NOW()),
(2, 2, 'TI-84 Plus CE Graphing Calculator', 'Essential for Calculus and Statistics classes. Good condition with slight wear. Comes with USB cable and manual.', 75.00, 'active', NOW(), NOW()),
(3, 3, 'Noise Cancelling Headphones', 'Sony WH-1000XM4 in black. Perfect for studying in noisy places. Only 3 months old, selling because I got new ones as a gift.', 199.99, 'active', NOW(), NOW()),
(4, 4, 'iPad Air 4th Generation', '10.9 inch iPad Air with 64GB storage. Space Gray, includes Apple Pencil 2nd gen and Smart Keyboard. Perfect for taking notes in class.', 450.00, 'active', NOW(), NOW()),
(5, 5, 'Desktop Gaming PC', 'Custom built gaming PC with Ryzen 7, NVIDIA RTX 3070, 32GB RAM, and 1TB SSD. Perfect for engineering software and gaming. Moving out of dorms and need to sell.', 1200.00, 'active', NOW(), NOW()),

-- Books
(6, 1, 'Linear Algebra and Its Applications', 'Textbook for MATH 325. 5th edition by David Lay. Highlighting in first three chapters, otherwise like new.', 45.00, 'active', NOW(), NOW()),
(7, 2, 'Introduction to Algorithms', 'CLRS Algorithms textbook for CSC 620. Third edition with no markings or highlighting.', 50.00, 'active', NOW(), NOW()),
(8, 3, 'Campbell Biology', '12th edition. Used for BIOL 230. Some highlighting and notes that might help you in the class!', 65.00, 'active', NOW(), NOW()),
(9, 4, 'Psychology: The Science of Mind and Behavior', '7th edition by Michael Passer. Great condition, used for PSY 200.', 30.00, 'active', NOW(), NOW()),
(10, 5, 'Complete Works of Shakespeare', 'Hardcover collection of all Shakespeare plays and sonnets. Used for ENG 510, but in perfect condition.', 25.00, 'active', NOW(), NOW()),

-- Furniture
(11, 1, 'Desk Chair', 'Ergonomic mesh desk chair, perfect for long study sessions. Adjustable height and lumbar support. Moving out and must sell.', 85.00, 'active', NOW(), NOW()),
(12, 2, 'Compact Refrigerator', 'Dorm-sized fridge, 3.2 cubic feet. Works perfectly, graduating and don\'t need it anymore.', 70.00, 'active', NOW(), NOW()),
(13, 3, 'Futon Sofa Bed', 'IKEA futon that converts to a full-size bed. Black fabric, metal frame. Great for dorms or apartments. Only 1 year old.', 120.00, 'active', NOW(), NOW()),
(14, 4, 'Desk Lamp with Wireless Charging', 'LED desk lamp with USB port and wireless charging pad built in. Perfect for dorm desks with limited outlets.', 35.00, 'active', NOW(), NOW()),
(15, 5, 'Bookshelf', 'IKEA Billy bookshelf in white. 5 shelves, good condition. Can deliver on campus.', 50.00, 'active', NOW(), NOW()),

-- Clothing
(16, 1, 'SFSU Hoodie', 'Official SFSU purple hoodie, size Large. Worn only a few times, like new condition.', 25.00, 'active', NOW(), NOW()),
(17, 2, 'Patagonia Jacket', 'Men\'s size Medium, black. Water-resistant and great for San Francisco weather. Moving to a warmer climate and don\'t need it.', 80.00, 'active', NOW(), NOW()),
(18, 3, 'Graduation Cap and Gown', 'Purple cap and gown for SFSU graduation. Used once for photos, perfect condition. Size Medium/Large.', 40.00, 'active', NOW(), NOW()),
(19, 4, 'Nike Basketball Shoes', 'LeBron 18s, size 10.5. Worn for one semester of intramural basketball. Still in great shape with lots of life left.', 65.00, 'active', NOW(), NOW()),
(20, 5, 'Professional Interview Suit', 'Men\'s charcoal gray suit, perfect for job interviews. Size 42R jacket, 34x32 pants. Worn twice for career fair.', 110.00, 'active', NOW(), NOW()),

-- School Supplies
(21, 1, 'North Face Backpack', 'Borealis backpack in black, used for one semester. Plenty of pockets, laptop sleeve, and water bottle holders. Very durable.', 55.00, 'active', NOW(), NOW()),
(22, 2, 'Scientific Calculator', 'Casio fx-991EX scientific calculator. All functions working, perfect for engineering classes.', 15.00, 'active', NOW(), NOW()),
(23, 3, 'Art Supplies Bundle', 'Complete set of art supplies for Art 231. Includes charcoal, sketching pencils, erasers, and drawing pad. Only used a few items.', 45.00, 'active', NOW(), NOW()),
(24, 4, 'Wireless Printer', 'HP OfficeJet Pro wireless printer. Works with phones and laptops. Includes full ink cartridges.', 80.00, 'active', NOW(), NOW()),
(25, 5, 'Study Desk Organizer', 'Desktop organizer with multiple compartments for pens, notebooks, and office supplies. Keep your dorm desk tidy.', 20.00, 'active', NOW(), NOW()),

-- Sports & Outdoors
(26, 1, 'Tennis Racket', 'Wilson Pro Staff RF97 tennis racket. Used by a recreational player for about a year, still in great condition.', 85.00, 'active', NOW(), NOW()),
(27, 2, 'Yoga Mat and Blocks', 'Complete yoga set with premium mat, 2 blocks, and strap. Perfect for those PE yoga classes or personal practice.', 35.00, 'active', NOW(), NOW()),
(28, 3, 'Mountain Bike', 'Trek Marlin 5 mountain bike, size Medium. Great for getting around campus and weekend trail rides. Includes bike lock.', 350.00, 'active', NOW(), NOW()),
(29, 4, 'Basketball', 'Official size NBA Spalding basketball, barely used. Indoor/outdoor.', 20.00, 'active', NOW(), NOW()),
(30, 5, 'Camping Gear Bundle', 'Complete camping set: 2-person tent, sleeping bag, portable stove, and headlamp. Used for one weekend trip.', 120.00, 'active', NOW(), NOW()),

-- Tickets & Services
(31, 1, 'Tutoring - Computer Science', 'Offering tutoring for CSC 210, 220, and 340. $25 per hour, experienced tutor who has TA for these courses.', 25.00, 'active', NOW(), NOW()),
(32, 2, 'Graduation Photography', 'Professional graduation photos on campus. $100 for a 1-hour session with 15 edited digital photos.', 100.00, 'active', NOW(), NOW()),
(33, 3, 'SF Giants vs Dodgers Tickets', 'Two tickets for Giants vs Dodgers on July 8th. Section 135, Row 22. Selling at face value.', 140.00, 'active', NOW(), NOW()),
(34, 4, 'Resume Review and Interview Prep', 'Senior Business major offering resume review and mock interviews. Have helped 20+ students get internships.', 30.00, 'active', NOW(), NOW()),
(35, 5, 'Campus Concert Tickets', '2 tickets to the Spring Music Festival in the SFSU Auditorium. April 15th at 7pm.', 20.00, 'active', NOW(), NOW());

-- Connect listings to categories
INSERT INTO listings_belong_to_categories (listing_id, category_id) VALUES

-- Electronics
(1, 1), -- MacBook Pro -> Electronics
(2, 1), -- Calculator -> Electronics
(2, 5), -- Calculator -> School Supplies 
(3, 1), -- Headphones -> Electronics
(4, 1), -- iPad -> Electronics
(4, 5), -- iPad -> School Supplies
(5, 1), -- Gaming PC -> Electronics

-- Books
(6, 2), -- Linear Algebra -> Books
(7, 2), -- Algorithms -> Books
(8, 2), -- Biology -> Books
(9, 2), -- Psychology -> Books
(10, 2), -- Shakespeare -> Books

-- Furniture
(11, 3), -- Desk Chair -> Furniture
(12, 3), -- Refrigerator -> Furniture
(13, 3), -- Futon -> Furniture
(14, 1), -- Desk Lamp -> Electronics
(14, 3), -- Desk Lamp -> Furniture
(15, 3), -- Bookshelf -> Furniture

-- Clothing
(16, 4), -- SFSU Hoodie -> Clothing
(17, 4), -- Patagonia Jacket -> Clothing
(18, 4), -- Graduation Cap -> Clothing
(19, 4), -- Basketball Shoes -> Clothing
(19, 6), -- Basketball Shoes -> Sports
(20, 4), -- Interview Suit -> Clothing

-- School Supplies
(21, 5), -- Backpack -> School Supplies
(22, 5), -- Calculator -> School Supplies
(22, 1), -- Calculator -> Electronics
(23, 5), -- Art Supplies -> School Supplies
(24, 1), -- Printer -> Electronics
(24, 5), -- Printer -> School Supplies
(25, 5), -- Desk Organizer -> School Supplies

-- Sports & Outdoors
(26, 6), -- Tennis Racket -> Sports
(27, 6), -- Yoga Mat -> Sports
(28, 6), -- Mountain Bike -> Sports
(29, 6), -- Basketball -> Sports
(30, 6), -- Camping Gear -> Sports

-- Tickets & Services
(31, 8), -- Tutoring -> Services
(32, 8), -- Photography -> Services
(33, 7), -- Giants Tickets -> Tickets
(34, 8), -- Resume Review -> Services
(35, 7); -- Concert Tickets -> Tickets

-- Sample Images
INSERT INTO pictures (id, listing_id, filePath, fileName, display_order, uploadedAt) VALUES

-- Electronics images
(1, 1, '/images/listings/macbook.jpg', 'macbook.jpg', 1, NOW()),
(2, 1, '/images/listings/macbook_side.jpg', 'macbook_side.jpg', 2, NOW()),
(3, 2, '/images/listings/calculator.jpg', 'calculator.jpg', 1, NOW()),
(4, 3, '/images/listings/headphones.jpg', 'headphones.jpg', 1, NOW()),
(5, 3, '/images/listings/headphones_case.jpg', 'headphones_case.jpg', 2, NOW()),
(6, 4, '/images/listings/ipad.jpg', 'ipad.jpg', 1, NOW()),
(7, 4, '/images/listings/ipad_pencil.jpg', 'ipad_pencil.jpg', 2, NOW()),
(8, 5, '/images/listings/gaming_pc.jpg', 'gaming_pc.jpg', 1, NOW()),

-- Books images
(9, 6, '/images/listings/linear_algebra.jpg', 'linear_algebra.jpg', 1, NOW()),
(10, 7, '/images/listings/algorithms.jpg', 'algorithms.jpg', 1, NOW()),
(11, 8, '/images/listings/biology.jpg', 'biology.jpg', 1, NOW()),
(12, 9, '/images/listings/psychology.jpg', 'psychology.jpg', 1, NOW()),
(13, 10, '/images/listings/shakespeare.jpg', 'shakespeare.jpg', 1, NOW()),

-- Furniture images
(14, 11, '/images/listings/desk_chair.jpg', 'desk_chair.jpg', 1, NOW()),
(15, 12, '/images/listings/mini_fridge.jpg', 'mini_fridge.jpg', 1, NOW()),
(16, 13, '/images/listings/futon1.jpg', 'futon1.jpg', 1, NOW()),
(17, 13, '/images/listings/futon2.jpg', 'futon2.jpg', 2, NOW()),
(18, 14, '/images/listings/desk_lamp.jpg', 'desk_lamp.jpg', 1, NOW()),
(19, 15, '/images/listings/bookshelf.jpg', 'bookshelf.jpg', 1, NOW()),

-- Add some images for other categories as well
(20, 16, '/images/listings/sfsu_hoodie.jpg', 'sfsu_hoodie.jpg', 1, NOW()),
(21, 21, '/images/listings/backpack.jpg', 'backpack.jpg', 1, NOW()),
(22, 26, '/images/listings/tennis_racket.jpg', 'tennis_racket.jpg', 1, NOW()),
(23, 28, '/images/listings/bike.jpg', 'bike.jpg', 1, NOW()),
(24, 32, '/images/listings/photography_sample.jpg', 'photography_sample.jpg', 1, NOW());