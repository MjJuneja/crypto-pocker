import React from 'react'

import chunk from 'lodash/chunk'

import Translate from 'components/Translate'

// [TODO:Lakshay] change seen on brand names, links, logos
const SEEN_ON_LOGOS = [
  { name: 'ico-bench', href: '#', image: '/public/img/seen-on/ico-bench.svg' },
  { name: 'coin telegraph', href: '#', image: '/public/img/seen-on/cointelegraph.svg' },
  { name: 'cryptvest', href: '#', image: '/public/img/seen-on/cryptvest.svg' },
  { name: 'business insider', href: '#', image: '/public/img/seen-on/businessinsider.svg' },
  { name: 'medium', href: '#', image: '/public/img/seen-on/medium.svg' },
  { name: 'steemit', href: '#', image: '/public/img/seen-on/steemit.svg' }
]

const SeenOnSection = props => {
  const chunks = chunk(SEEN_ON_LOGOS, 6)
  return (
    <div className="seen-on-section">
      <div className="container page-section">
        <h4 className="section-title with-line text-center mb-3">
          <span><Translate id="homepage.seenon.title" /></span>
        </h4>
        <div className="row logos">
          <div className="col-md-1 col-xl-1 col-sm-1 col-lg-1"></div>
          <div className="col-md-10 col-xl-10 col-sm-10 col-lg-10">
            <div className="row">
              {chunks[0].map((x, index) => (
                <div className="col-md-2 col-xl-2 col-sm-2 col-lg-2">
                  <a href={x.href} target="_blank" className="seen-on-image">
                    <img className="seen-on-img img-responsive" alt={x.name} src={x.image} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1 col-xl-1 col-sm-1"></div>
        </div>
      </div>
    </div>

    // <div className="seen-on-section">
    //   <div className="container page-section">
    //     <h4 className="section-title text-center mb-3">
    //       <Translate id="homepage.seenon.title" />
    //     </h4>
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="row">
    //           {chunks[0].map((x, index) => (
    //             <div className="col-md-4" key={index}>
    //               <a href={x.href} target="_blank" className="seen-on-image">
    //                 <img className="seen-on-img" alt={x.name} src={x.image} />
    //               </a>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="row">
    //           {chunks[1].map((x, index) => (
    //             <div className="col-md-4" key={index}>
    //               <a href={x.href} target="_blank" className="seen-on-image">
    //                 <img className="seen-on-img" alt={x.name} src={x.image} />
    //               </a>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="row">
    //           {chunks[2].map((x, index) => (
    //             <div className="col-md-4" key={index}>
    //               <a href={x.href} target="_blank" className="seen-on-image">
    //                 <img className="seen-on-img" alt={x.name} src={x.image} />
    //               </a>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="row">
    //           {chunks[3].map((x, index) => (
    //             <div className="col-md-4" key={index}>
    //               <a href={x.href} target="_blank" className="seen-on-image">
    //                 <img className="seen-on-img" alt={x.name} src={x.image} />
    //               </a>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SeenOnSection
