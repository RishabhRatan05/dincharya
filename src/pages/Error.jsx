import  { useRouteError} from 'react-router-dom'

const ErrorPage = ()=>{
    const error = useRouteError()
    return (
    <div className='flex h-screen flex-col justify-center items-center'>
        <h1 className='text-3xl text-red-500'>
            Something Went Wrong
        </h1>
        <h2>{error.status} || {error.statusText}</h2>
        <h2>{error.message}</h2>
        <button>Go back</button>
    </div>
    )
}

export default ErrorPage