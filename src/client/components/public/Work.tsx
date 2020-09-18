import * as React from 'react';

export interface WorkProps { }

const Work: React.SFC<WorkProps> = () => {



    return (
        <section className="work-section">
            <img src="images/codeSample.png" alt="computer code image" className="work-background" />
            <div className="work-over">
                <div className="work-intro">
                    <h1 className="work-title">Check out some of my work...</h1>
                </div>
                <div className="work-body">
                    <div className="work-samples row row-cols-1 row-cols-med-2">
                    <div className="col work-card-col">
                            <div className="card work-card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Shopping</h3>
                                    <div>This is my shopping app</div>
                                </div>
                            </div>
                        </div>
                        <div className="col work-card-col">
                            <div className="card work-card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Blog</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;