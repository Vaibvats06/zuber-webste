import Product from '../models/product.model.js';
export async function getAllProducts(req, res) {
    console.log('Fetching all products');
    try {
        const products = await Product.find();
        
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    } 
}
export async function createDashboardData(req, res) {
    try {
        const {productName, brand, colour, quantity, meter, costPrice, sellingPrice, expensePrice,customerId } = req.body;
        const profit = sellingPrice - costPrice - expensePrice;
        console.log(req.body);
       await Product.create({productName, brand, colour, quantity, meter, costPrice, sellingPrice, expensePrice, profit, customerId});
            res.status(201).json({ message: 'Product created successfully'});
        
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
