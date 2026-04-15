import { Link } from "react-router-dom";

const products = [
    { id: 1, title: "Phone" },
    { id: 2, title: "PC" },
    { id: 3, title: "Laptop" },
];

function Products() {
    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default Products;