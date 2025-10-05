import Product from '../models/product.model.js';
export function getAllProducts(req, res) {
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
