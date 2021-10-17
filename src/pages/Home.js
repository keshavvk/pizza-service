import Products from "../components/Products";
const Home = () => {
    return (
        <>
        <div className="hero py-16">
            <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2">
            <h6 className="text-lg"><em>Are you hungry?</em></h6>
            <h1 className="text-3xl md:text-6xl font-bold">Don't Wait !</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-blue-500 hover:bg-blue-600">Order Now</button>
            </div>
            
            <div className="w-1/2">
                <img className="w-3/5" src="/images/1 (1).jpg"alt="pizza"/>
            </div>
            </div>

        </div>
        <div className="pb-24">
            <Products />
        </div>
        </>
         
    )
}

export default Home;
