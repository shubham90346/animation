import React from 'react';
import Style from '../Components/Animation.module.css'

function Animation(props) {
    return (
        <div>
            <div className='container'>
                <div className={Style.animate}>
                    <div className={Style.circle}></div>
                    <div className={Style.circle1}></div>
                    <div className={Style.circle2}></div>


                    <div class={Style.horizontal_dotted_line}></div>
                    <div class={Style.vertical_dotted_line}></div>
                    <div class={Style.vertical_dotted_line2}></div>
                    <div class={Style.vertical_dotted_line3}></div>
                    <div class={Style.horizontal_dotted_line2}></div>
                    <div class={Style.horizontal_dotted_line3}></div>
                    <div class={Style.vertical_dotted_line4}></div>
                    <div class={Style.vertical_dotted_line5}></div>
                    <div class={Style.vertical_dotted_linelast}></div>


                    <div className={Style.minicircle}></div>
                    <div className={Style.minicircle2}></div>
                    <div className={Style.minicircle3}></div>
                    <div className={Style.minicircle4}></div>
                    <div className={Style.minicircle5}></div>
                    <div className={Style.minicircle6}></div>
                    <div className={Style.minicircle7}></div>
                    <div className={Style.minicircle8}></div>


                    <div className={Style.animatecircle}></div>
                    <div className={Style.animatecircle2}></div>
                    <div className={Style.animatecircle3}></div>
                    <div className={Style.animatecircle4}></div>
                    <div className={Style.animatecircle5}></div>
                    <div className={Style.animatecircle6}></div>
                    <div className={Style.animatecircle7}></div>
                    <div className={Style.animatecircle8}></div>
                </div>

            </div>
        </div>
    );
}

export default Animation;