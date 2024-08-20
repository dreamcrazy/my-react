import React from 'react'
import AvatarImg from '../assets/dog.jpg'
export default function Avatar() {
  let style = {
    width: '50px',
    borderRadius: '50%'
  }
  console.log('修改标题,但是我也重新渲染了');
  return (
    <div>
      <img src={AvatarImg} alt="" style={style} />
    </div>
  )
}
