import React, { Component } from 'react'
import chunk from 'lodash/chunk'

import Translate from 'components/Translate'


const DistributionData = [
  {
    id: 1,
    title: 'Lorem Ipsum Is a Question',
    description:
      'Donors are the group of people that donates towards basic income of recepients. A donor can also be a recepient.'
  },
  {
    id: 2,
    title: 'Lorem Ipsum Is a Question',
    description:
      'Donors are the group of people that donates towards basic income of recepients. A donor can also be a recepient.'
  },
  {
    id: 3,
    title: 'Lorem Ipsum Is a Question',
    description:
      'Donors are the group of people that donates towards basic income of recepients. A donor can also be a recepient.'
  },
  {
    id: 4,
    title: 'Lorem Ipsum Is a Question',
    description:
      'Donors are the group of people that donates towards basic income of recepients. A donor can also be a recepient.'
  },
  {
    id: 5,
    title: 'Lorem Ipsum Is a Question',
    description:
      'Donors are the group of people that donates towards basic income of recepients. A donor can also be a recepient.'
  },
  {
    id: 6,
    title: 'Lorem Ipsum Is a Question',
    description:
      'Donors are the group of people that donates towards basic income of recepients. A donor can also be a recepient.'
  }
]

const InfoBlock = props => (
  <div className="">
    <div className="">
      <div className="info-title" onClick={() => props.myClick(props.id)}>
        <img src="/public/img/logo_white.svg" alt="o" />
        <Translate id={`homepage.faq.item_${props.id}_title`} />
      </div>
    </div>
    <p className={props.myClass}>
      <Translate id={`homepage.faq.item_${props.id}_description`} />
    </p>
  </div>
)

export default class FAQSection extends Component {
  constructor(props) {
    super(props);
    let array = new Array(DistributionData.length);
    array.fill('dhidden');

    this.state = {
      "dclass": array
    }
    this.showDesc = this.showDesc.bind(this);
  }
  showDesc(index) {
    let newArray = new Array(DistributionData.length);
    newArray.fill('dhidden');
    newArray[index - 1] = "description";
    // if (this.state.dclass !== 'description')
    this.setState({
      "dclass": newArray
    })
    // else {
    //   this.setState({
    //     "dclass": "dhidden"
    //   })
    // }
  }
  renderOneInfoBlock = (item, index) => {
    return (
      <InfoBlock
        key={index}
        id={item.id}
        subtitle={item.subtitle}
        description={item.description}
        myClick={this.showDesc}
        myClass={this.state.dclass[index]}
        title={
          item.image ? (
            <img
              src={item.image}
              alt=""
              width={48}
              height={48}
              className="content-image rounded-circle"
            />
          ) : (
              item.title
            )
        }
      />
    )
  }

  render() {
    const dataChunk = chunk(DistributionData, 6)
    return (
      <div id={this.props.id} className="page-section container faq-section">
        <h3 className="text-center with-line mb-2"><span>FAQ</span></h3>
        <div>
          {dataChunk[0].map(this.renderOneInfoBlock)}
        </div>
      </div>
    )
  }

  // const InfoBlock = props => (
  //   <div className="col-md-4 info-block text-center">
  //     <div className="mx-auto">
  //       <div className="info-title">
  //         <Translate id={`homepage.faq.item_${props.id}_title`} />
  //       </div>
  //     </div>
  //     <p className="description">
  //       <Translate id={`homepage.faq.item_${props.id}_description`} />
  //     </p>
  //   </div>
  // )

  // export default class FAQSection extends Component {
  //   renderOneInfoBlock = (item, index) => {
  //     return (
  //       <InfoBlock
  //         key={index}
  //         id={item.id}
  //         subtitle={item.subtitle}
  //         description={item.description}
  //         title={
  //           item.image ? (
  //             <img
  //               src={item.image}
  //               alt=""
  //               width={48}
  //               height={48}
  //               className="content-image rounded-circle"
  //             />
  //           ) : (
  //             item.title
  //           )
  //         }
  //       />
  //     )
  //   }

  //   render() {
  //     const [dataChunk1, dataChunk2] = chunk(DistributionData, 3)

  //     return (
  //       <div id={this.props.id} className="page-section container faq-section">
  //         <h3 className="text-center with-line mb-2"><span>FAQ</span></h3>
  //         <div className="row content-row mt-4">
  //           {dataChunk1.map(this.renderOneInfoBlock)}
  //         </div>
  //         <div className="row content-row">
  //           {dataChunk2.map(this.renderOneInfoBlock)}
  //         </div>
  //       </div>
  //     )
  //   }
}
