import '../css/footer.css'

const Footer=()=>{
    return(
        <>
        <div id="footer">
        <div style={{height:"50px", backgroundColor:"rgb(5, 12, 28)", textAlign:"center", paddingTop:"20px"}}>
        <a class="a2" href="#header"><p>Back to top</p></a>
        </div>
            <div style={{display:"flex", gap:"91px", marginTop:"15px", lineHeight:"29px"}}>
                <div>
                    <ul><h3>Get to Know Us</h3>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Science</li></ul>
                </div>
                <div>
                    <ul><h3>Connect with Us</h3>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li></ul>
                </div>
                <div>
                    <ul><h3>Make Money with Us</h3>
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Protect and Build Your Brand</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    <li>Amazon Pay on Merchants</li></ul>
                </div>
                <div>
                    <ul><h3>Let Us Help You</h3>
                    <li>COVID-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon App Download</li>
                    <li>Help</li></ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer