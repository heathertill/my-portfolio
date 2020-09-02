import * as React from 'react';
import { useState } from 'react';
import {RouteComponentProps} from 'react-router-dom'

export interface HelloProps extends RouteComponentProps { }

const Hello: React.SFC<HelloProps> = () => {

    const [animate, setAnimate] = useState(true);

    // const test = (e: React.MouseEvent<HTMLDivElement>) => {
    // let slide = document.querySelector('.lft-section');
    //     let box = document.querySelector('.box');
    //     box.addEventListener('click', () => {
    //         slide.classList.toggle('toggled')

    //     }
    // }



    const expandFunc = (e: React.MouseEvent<HTMLDivElement>) => {
        let slide = document.querySelector('.lft-section');
        if (animate !== false) {
            setAnimate(!animate)
            console.log('animate', animate)
            // let slide = document.querySelector('.lft-section');
            slide.addEventListener('click', () => {
                slide.classList.toggle('toggled', animate)
                console.log('addAnim', animate)
            })
        }
        else {
            setAnimate(!animate)
            console.log('elseAnimate', animate)
            // let slide = document.querySelector('.lft-section');
            slide.addEventListener('click', e => {
                slide.classList.toggle('toggled', animate)
                console.log('remAnim', animate)
            })
        }

    };




    return (
        <>
            <section className="first-section">
                <h1 className="text-myRed">This is a test</h1>
            </section>
            <section className="second-section">
                <div className="row">
                    {/* <div className="col-md lft-section" id="grow">
                        <a className="box relative" href="#grow"></a>
                    </div> */}
                    <div className="col-md lft-section">
                        <div className="box relative" onClick={(e: React.MouseEvent<HTMLDivElement>) => expandFunc(e)}></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hello;