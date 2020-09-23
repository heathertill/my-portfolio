import * as React from 'react';




export interface AppCardsProps { }

const AppCards: React.FunctionComponent<AppCardsProps> = () => {



    return (
        <div className="container-fluid">
            <div>
                <h1 className="m-5">App Cards</h1>
            </div>
            <div className="row row-cols-2 row-cols-sm-1 d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <img src="images/shopping.png" alt="shopping app" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Shopping</h4>
                            <p className="card-text">This is about the program</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 offset-md-1">
                    <div className="card">
                        <img src="images/blog.png" alt="blog app" className="card-img-top" />
                        <div className="card-body">
                            <h4 className="card-title">Blog</h4>
                            <p className="card-text">This is about the program</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppCards;