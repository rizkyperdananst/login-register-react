const LoginPage = () => {
    return (
        <div className="flex justify-center min-h-screen items-center bg-sky-500">
            <div className="w-full max-w-md rounded-md border bg-white">
                <h2 className="text-center text-3xl mb-3 mt-5">Form Login</h2>
                <p className="text-center text-lg mb-6">Welcome, please enter your credentials</p>
                <form>
                    <div className="p-5">
                        <label htmlFor="email" className="text-2 font-bold block">Email</label>
                        <input type="email" name="email" id="email" className="block border border-2 border-slate-700 rounded mt-1 p-3 w-full" placeholder="example@gmail.com"/>
                    </div>
                    <div className="mt-[-25px] p-5">
                        <label htmlFor="password" className="text-2 font-bold block">Password</label>
                        <input type="password" name="password" id="password" className="block border border-2 border-slate-700 rounded mt-1 p-3 w-full" placeholder="*****"/>
                    </div>
                    <div className="p-5">
                        <button className="w-full bg-sky-500 transation duration-150 ease-in hover:bg-sky-600 rounded p-2 text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;