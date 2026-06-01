import '../css/products.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Products = () => {
    const params = useParams();

    // ── CHANGED: read both search text and aiMode from redux ─────────────────
    const searchText = useSelector(state => state.search.search);
    const aiMode     = useSelector(state => state.search.aiMode);

    const location = useLocation();

    const [selectedcategory, setSelectedcategory] = useState("");
    const [selectedbrand, setSelectedbrand] = useState("");
    const [selectedprice, setSelectedprice] = useState("");

    const navigate = useNavigate();
    const [productdata, setproductdata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    const [category, setcategory] = useState('');

    // ── ADDED: track which mode returned results (for the AI badge) ───────────
    const [resultMode, setResultMode] = useState('');

    const userid = localStorage.getItem('id');

    const getallproductData = () => {
        if (searchText != '' && !params.category) {

            if (aiMode) {
                // ── AI Smart Search (NEW) ─────────────────────────────────────
                // Groq reads all products and decides which ones match
                setResultMode('ai');
                axios.get(
                    `https://e-commbackend-fast-api.vercel.app/products/aisearch/${encodeURIComponent(searchText)}`
                ).then((response) => {
                    setIsLoading(false);
                    setproductdata(response.data.message);
                }).catch((err) => {
                    console.error('AI search failed:', err);
                    setIsLoading(false);
                    setproductdata([]);
                });

            } else {
                // ── Existing Regex Search (unchanged) ────────────────────────
                setResultMode('normal');
                console.log(searchText);
                axios.get(
                    `https://e-commbackend-fast-api.vercel.app/products/searchproducts/${searchText}`
                ).then((response) => {
                    setIsLoading(false);
                    setcategory(params.category);
                    setproductdata(response.data.message);
                });
            }

        } else {
            // ── Existing side-filter / category search (unchanged) ────────────
            setResultMode('');
            const params1 = {
                category: params.category,
                secondarycategory: selectedcategory,
                brand: selectedbrand,
                price: selectedprice,
            };
            console.log(params1);
            axios.get(
                `https://e-commbackend-fast-api.vercel.app/products/sidesearchproducts`,
                { params: params1 }
            ).then((response) => {
                console.log(response);
                setIsLoading(false);
                setcategory(params.category);
                setproductdata(response.data.message);
            });
        }
    }

    const productDetails = (a) => {
        localStorage.setItem('productid', a);
        navigate('/productdetails');
    }

    const cartAdd = (product1) => {
        let cartitem = {
            userid: userid,
            productname: product1.productname,
            description: product1.description,
            price: product1.price,
            quantity: product1.quantity,
            rating: product1.rating,
            imageurl: product1.imageurl,
            category: product1.category,
        }
        if (userid) { alert("item added to cart"); }
        else { alert("Please login first") }
        axios.post('https://e-commbackend-fast-api.vercel.app/cart/addcart', cartitem).then((response) => { })
    }

    const wishAdd = (product1) => {
        let wishitem = {
            userid: userid,
            productname: product1.productname,
            description: product1.description,
            price: product1.price,
            quantity: product1.quantity,
            rating: product1.rating,
            imageurl: product1.imageurl,
            category: product1.category,
        }
        if (userid) { alert("item added to wishlist"); }
        else { alert("Please login first") }
        axios.post('https://e-commbackend-fast-api.vercel.app/wishlist/addwish', wishitem).then((response) => { })
    }

    // ── CHANGED: added searchText and aiMode to dependency array ─────────────
    useEffect(() => {
        setIsLoading(true);
        getallproductData();
    }, [params.category, selectedcategory, selectedbrand, selectedprice, searchText, aiMode]);

    return (
        <>
            <div id="content">
                <div id="menu">
                    <input type="checkbox" id="checkbox-toggle1" />
                    <label htmlFor="checkbox-toggle1" className="sidebutton">&#10095;</label>
                    <nav id='menu12' style={{ lineHeight: "52px", paddingTop: "10px", fontSize: '15px' }}>
                        <ul style={{ lineHeight: "46px" }} className="list1">
                            <li className="a2">Category</li>
                            <ul className="list1">
                                {(params.category === 'men' || params.category === 'women') && <>
                                    <li className="options"><input value="clothing" checked={selectedcategory === "clothing"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>Clothing</span></li>
                                    <li className="options"><input value="shoes" checked={selectedcategory === "shoes"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>Shoes</span></li>
                                    <li className="options"><input value="sports" checked={selectedcategory === "sports"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>Sports</span></li>
                                </>}
                                {params.category === 'electronics' && <>
                                    <li className="options"><input value="Watch" checked={selectedcategory === "Watch"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>Watches</span></li>
                                    <li className="options"><input value="earphones" checked={selectedcategory === "earphones"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>Earphones</span></li>
                                    <li className="options"><input value="headphones" checked={selectedcategory === "headphones"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>Headphones</span></li>
                                    <li className="options"><input value="phone" checked={selectedcategory === "phone"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>Phone</span></li>
                                </>}
                                <li className="options"><input value="none" checked={selectedcategory === "none"} onChange={(e) => { setSelectedcategory(e.target.value) }} type="radio" name="category" /> <span>None</span></li>
                            </ul>

                            <li className="a2">Brand</li>
                            <ul className="list1">
                                {(params.category === 'men' || params.category === 'women') && <>
                                    <li className="options"><input value="Levi's" checked={selectedbrand === "Levi's"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>Levi's</span></li>
                                    <li className="options"><input value="XYXX" checked={selectedbrand === "XYXX"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>XYXX</span></li>
                                    <li className="options"><input value="Van Heusen" checked={selectedbrand === "Van Heusen"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>Van Heusen</span></li>
                                    <li className="options"><input value="U.S. POLO ASSN." checked={selectedbrand === "U.S. POLO ASSN."} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>U.S. POLO ASSN.</span></li>
                                </>}
                                {params.category === 'electronics' && <>
                                    <li className="options"><input value="apple" checked={selectedbrand === "apple"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>Apple</span></li>
                                    <li className="options"><input value="samsung" checked={selectedbrand === "samsung"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>Samsung</span></li>
                                    <li className="options"><input value="boat" checked={selectedbrand === "boat"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>Boat</span></li>
                                    <li className="options"><input value="sony" checked={selectedbrand === "sony"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>Sony</span></li>
                                </>}
                                <li className="options"><input value="none" checked={selectedbrand === "none"} onChange={(e) => { setSelectedbrand(e.target.value) }} type="radio" name="brand" /> <span>None</span></li>
                            </ul>

                            <li className="a2">Price</li>
                            <ul className="list1">
                                <li className="options"><input value="1000" checked={selectedprice === "1000"} onChange={(e) => { setSelectedprice(e.target.value) }} type="radio" name="price" /> <span>less than ₹1000</span></li>
                                <li className="options"><input value="2000" checked={selectedprice === "2000"} onChange={(e) => { setSelectedprice(e.target.value) }} type="radio" name="price" /> <span>less than ₹2000</span></li>
                                <li className="options"><input value="3000" checked={selectedprice === "3000"} onChange={(e) => { setSelectedprice(e.target.value) }} type="radio" name="price" /> <span>less than ₹3000</span></li>
                                <li className="options"><input value="none" checked={selectedprice === "none"} onChange={(e) => { setSelectedprice(e.target.value) }} type="radio" name="price" /> <span>None</span></li>
                            </ul>
                        </ul>
                    </nav>
                </div>

                <div id="contentarea">

                    {/* ── ADDED: AI search result banner ── */}
                    {resultMode === 'ai' && !IsLoading && (
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            padding: '7px 14px', marginBottom: '12px',
                            background: 'rgb(13,17,94)', color: 'white',
                            borderRadius: '6px', fontSize: '13px',
                            width: 'fit-content',
                        }}>
                            <span>✦ AI results for</span>
                            <strong>"{searchText}"</strong>
                            <span style={{ opacity: 0.65 }}>
                                — {productdata ? productdata.length : 0} products found
                            </span>
                        </div>
                    )}

                    {IsLoading === true
                        ? <div className="loader"></div>
                        : <><div className="grid2">
                            {productdata && productdata.map((product) => (
                                <>
                                    <div className="card2">
                                        <img onClick={() => { productDetails(product._id) }} className="img1" src={product.imageurl} alt="" />
                                        <h3>{product.productname}</h3>
                                        <h4 className="green">Rs {product.price}</h4>
                                        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h4>{product.rating} <img className="star_img" src="https://pngimg.com/uploads/star/star_PNG41474.png" alt="" /></h4>
                                            <div style={{ display: "flex", justifyContent: "space-between", gap: '10px' }}>
                                                <i onClick={() => { cartAdd(product) }} style={{ color: "rgb(13, 17, 94)" }} className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                <i onClick={() => { wishAdd(product) }} style={{ color: "rgba(241, 22, 22, 1)" }} className="fa fa-heart" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div></>
                    }
                </div>
            </div>
        </>
    )
}

export default Products
