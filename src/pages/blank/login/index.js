import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>

            <main class="d-flex w-100">
                <div class="container d-flex flex-column">
                    <div class="row vh-100">
                        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div class="d-table-cell align-middle">

                                <div class="text-center mt-4">
                                    <h1 class="h2">Welcome back, Charles</h1>
                                    <p class="lead">
                                        Sign in to your account to continue
                                    </p>
                                </div>

                                <div class="card">
                                    <div class="card-body">
                                        <div class="m-sm-4">
                                            <div class="text-center">


                                                <img src="https://yt3.ggpht.com/ytc/AMLnZu8GKYSVrq2KjT4dbqLGohRh2kVkoUJioDoa_iYu=s900-c-k-c0x00ffffff-no-rj" alt="logo" class="img-fluid rounded-circle" width="132" height="132" />



                                                {/* <img  alt="Charles Hall" class="img-fluid rounded-circle" width="132" height="132"/> */}
                                            </div>
                                            <form>
                                                <div class="mb-3">
                                                    <label class="form-label">Email</label>
                                                    <input class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Password</label>
                                                    <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
                                                    <small>
                                                        <a href="index.html">Forgot password?</a>
                                                    </small>
                                                </div>
                                                <div>
                                                    <label class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked="" />
                                                        <span class="form-check-label">
                                                            Remember me next time
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="text-center mt-5">

                                                    <NavLink to={"/admin"} type="submit" class="btn btn-lg btn-primary">Sign in</NavLink>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;