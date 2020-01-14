import React from 'react';
import InfoItem from './info-item';
import HeadItem from './head-item';

const Info = ({headItem, infoItems}) => {

    console.log(headItem)

    return (
        
        <section className="section">
            <div className={`container has-text-centered`}>

                <HeadItem headItem={headItem}/>
                

                <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                    {infoItems && infoItems.map((item, index) =>
                        <InfoItem
                            item={item}
                            isReversed={isEven(index)} />)}

                </div>

            </div>
        </section>
    )
};

const isEven = (number) => number % 2 == 0

export default Info;