import * as React from 'react';
import { useState } from 'react';

export interface WorkProps { }

const Work: React.FunctionComponent<WorkProps> = () => {

    const [animate, setAnimate] = useState(false);

    const handleShoppingAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFuncShop()
                blogFadeOut()
            } else {
                closeFuncShop()
                blogFadeOut()
            }
        }
    }

    const shoppingFadeOut = () => {
        if (animate === false) {
            let show = document.querySelector('.shopping');
            show.classList.add('fadeOut');
            show.classList.remove('fadeIn')
        } else if (animate === true) {
            let show = document.querySelector('.shopping');
            show.classList.add('fadeIn')
            show.classList.remove('fadeOut')
        }
    }

    const expandFuncShop = () => {
        let grow = document.querySelector('.shopping');
        grow.classList.add('toggled');
    }

    const closeFuncShop = () => {
        let grow = document.querySelector('.shopping');
        grow.classList.remove('toggled');
    }

    const handleBlogAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFuncBlog()
                shoppingFadeOut()
            } else {
                closeFuncBlog()
                shoppingFadeOut()
            }
        }
    }

    const blogFadeOut = () => {
        if (animate === false) {
            let show = document.querySelector('.blog');
            show.classList.add('fadeOut');
            show.classList.remove('fadeIn')
        } else if (animate === true) {
            let show = document.querySelector('.blog');
            show.classList.add('fadeIn')
            show.classList.remove('fadeOut')
        }
    }

    const expandFuncBlog = () => {
        let grow = document.querySelector('.blog');
        grow.classList.add('toggled');
    }

    const closeFuncBlog = () => {
        let grow = document.querySelector('.blog');
        grow.classList.remove('toggled');
    }
    

    return (
        <section className="work-section">
            <img src="images/codeSample.png" alt="computer code image" className="work-background" />
            <div className="work-over">
                <div className="work-intro">
                    <h1 className="work-title">Check out some of my work...</h1>
                </div>
                <div className=" row work-body">
                    <div className="col-md work-samples">
                        <div className="work-card-div">
                            <div className="work-card shopping"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleShoppingAnimate(e)}
                            >
                                <img src="images/shopping.png" alt="shoping app" className="card-img card-img-top" />
                                <div className="work-card-title">Shopping</div>
                            </div>
                        </div>
                        <div className="work-card-div" id="blog">
                            <div className="work-card blog"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleBlogAnimate(e)}
                            >
                                <img src="images/blog.png" alt="blog app" className="card-img card-img-top" />
                                <div className="work-card-title">Blog</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;