import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
            <h1 className="text-red-400 text-2xl font-medium">The page you requested could not be found.</h1>
            <Link to="/"><button className="capitalize bg-red-300 text-white text-lg">Go Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;