import * as React from 'react';
import { useState } from 'react';

export interface WorkProps { }

const Work: React.FunctionComponent<WorkProps> = () => {

    const [animate, setAnimate] = useState(false);
    const [showShopping, setShowShopping] = useState(false);
    const [showBlog, setShowBlog] = useState(false)

    const handleShoppingAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFuncShop()
                blogFadeOut()
                setShowShopping(true)
            } else {
                closeFuncShop()
                blogFadeOut()
                setShowShopping(false)
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
        showDiv('shop-content');
    }

    const closeFuncShop = () => {
        let grow = document.querySelector('.shopping');
        grow.classList.remove('toggled');
        hideDiv('shop-content')

        // let content = document.querySelector('.work-card-content');
        // content.classList.remove('show-content');
    }

    const handleBlogAnimate = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e) {
            setAnimate(!animate);
            if (animate !== true) {
                expandFuncBlog()
                shoppingFadeOut()
                setShowBlog(true)
            } else {
                closeFuncBlog()
                shoppingFadeOut()
                setShowBlog(false)
            }
        }
    }



    const showDiv = (id: string) => {
        setTimeout(() => {
            document.getElementById('shop-content').style.display = 'normal'
            console.log('ding')
        }, 2000)
    }

    const hideDiv = (id: string) => {
        setTimeout(() => {
            document.getElementById('shop-content').style.display = 'none'
        }, 2000)
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

    const openApp = (id: string) => {
        window.open(id, "_blank")
    }

    return (
        <section className="work-section">
            {/* <img src="images/codeSample.png" alt="computer code image" className="work-background" /> */}
            <img src="images/codeScreen.png" alt="computer code image" className="work-background" />

            <div className="work-over">
                <div className="work-intro">
                    <h1 className="work-title">Check out some of my work...</h1>
                </div>
                <div>
                <div className="row-cols-2 row-cols-sm-1 d-flex justify-content-center row work-body">
                    <div className="col-md-4 work-card-div">
                        <div className="card work-card shopping"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleShoppingAnimate(e)} >
                            <img src="images/shopComp.png" alt="shoping app" className="card-img card-img-top" />
                            <div className="card-title work-card-title">Shopping</div>
                            <div className="work-card-content" id="shop-content">
                                <div>This is a fullstack shopping app. Users login and add items to the group shopping list. When items are purchased or removed the user who added the item will recieve a text informing them of the items status.</div>
                                <a href="https://stormy-sea-01231.herokuapp.com">See it working!</a>
                                <button onClick={() => openApp("https://stormy-sea-01231.herokuapp.com")}>See it working!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1 work-card-div" id="blog">
                        <div className="card work-card blog"
                            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleBlogAnimate(e)}
                        >
                            <img src="images/blogComp.png" alt="blog app" className="card-img card-img-top" />
                            <div className="card-title work-card-title">Blog</div>
                            <div className="card-text">
                                Stuff about the app
                            </div>
                            <button onClick={() => openApp("https://stormy-sea-01231.herokuapp.com")}>See it working!</button>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Work;