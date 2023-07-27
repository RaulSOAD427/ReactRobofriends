// import React, { useState, useEffect } from 'react';

// const Card = (props) => {
//     const [catImageUrl, setCatImageUrl] = useState('');

//     useEffect(() => {
//         fetch('https://api.thecatapi.com/v1/images/search')
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data && data.length > 0) {
//                     setCatImageUrl(data[0].url);
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching cat image:', error);
//             });
//     }, []);

//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
//             <img alt='cat' src={catImageUrl} style={{ width: '200px', height: '200px' }} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// };

// export default Card;



import React from 'react';

const Card = (props) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
            {/* <img alt='robots'src={`https://robohash.org/${props.name}.png?set=set4`} /> */}
            <img alt='robots'src={`https://robohash.org/${props.email}?size=200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;

