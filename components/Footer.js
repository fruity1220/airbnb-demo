function Footer() {
    return (
        <div className= "grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600">
    
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Han JiBung works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOSTING</h5>
                <p>Try hosting</p>
                <p>Vist our community forum</p>
                <p>How to host responsibly</p>
                <p>Protection for Hosts</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p>Safety information</p>
                <p>Supporting people with disabilities</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Community</h5>
                <p>Support HanJiBung</p>
                <p>Make Donation</p>
                <p>Combating discrimination</p>
                <p>Celebrating diversity</p>
            </div>
        </div>
    );
}

export default Footer;
