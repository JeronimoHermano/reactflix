import React from 'react'

type Props = {
  href:string,
  className:string,
  children?:any
}

const ButtonLink = (props:Props) => {
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  )
}


export default ButtonLink
