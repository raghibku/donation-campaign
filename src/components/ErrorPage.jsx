import { Link, useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl text-red-500 font-semibold mb-4">Oops! Something Went Wrong</h1>
                    <p className="text-gray-700">{error.statusText || error.message}</p>
                    <button className="px-4 py-2 bg-green-500 rounded-md "><Link to='/'>Home</Link></button>
                </div>
            </div>
            {/* <h1>Sorry an unexpected error occured!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
            
        </div>
    )
}

export default ErrorPage