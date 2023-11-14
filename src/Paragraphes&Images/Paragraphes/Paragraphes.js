import React, { Component } from 'react'
// import './para.css'
export default class Paragraphe extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.title;
    this.Text = this.props.Text
    this.class = this.props.class
  }
  render() {
    return (
      <div className='flex flex-wrap  ml-[1rem] md:ml-[1.5rem] w-[92%] lg:ml-[3rem] lg:w-[88%] '>
        <h2 className='font-bold md:text-xl lg:text-[28px] lg:leading-[29px]'>{this.title}</h2>
        <p className='lg:text-[22px] font-normal text-base mt-3  '>{this.Text}</p>
      </div>
    )
  }
}


