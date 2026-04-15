import { useParams } from "react-router-dom";

const products = [
    { id: 1, title: "Phone", price: 1200 },
    { id: 2, title: "PC", price: 3600 },
    { id: 3, title: "Laptop", price: 2100 },
];

function ProductDetails() {
    const { productId } = useParams();
    const product = products.find((p) => p.id === Number(productId));

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price} euro</p>
        </div>
    );
}

export default ProductDetails;