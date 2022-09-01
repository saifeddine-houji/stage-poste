import "./SearchUserOps.css"

const SearchUserOps=()=>{
    return(
        <div className="DashboardHome">
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">

                                <div className="card-body p-md-5 mx-md-4">


                                    <div className="LogoTitle">

                                        <div className="homepage-titles">
                                            <h4 className="mt-1 mb-5 pb-1">Put in the user ID to look up their history</h4>
                                        </div>

                                    </div>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form2Example11">User ID</label>
                                            <input type="email" id="form2Example11" className="form-control"
                                                   placeholder="ID"  />
                                        </div>



                                        <div className="d-flex justify-content-around pt-1 mb-5 pb-1">
                                            <button
                                                className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                                                type="submit">Search
                                            </button>
                                            {/* {AuthState.error.data?.error} */}
                                        </div>


                                    </form>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchUserOps