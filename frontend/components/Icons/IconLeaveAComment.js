import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      height={props.size}
      id="prefix__Layer_1"
      viewBox="0 0 128 128"
      width={props.size}
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M121.7 37.7c0-.1.1-.1.1-.2l.1-.1c0-.1.1-.1.1-.2s.1-.1.1-.2 0-.1.1-.2v-.2-.2-.2-.1l-.6-10.6v-.1-.2c0-.1 0-.1-.1-.2 0-.1 0-.1-.1-.2 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2-.1-.1-.1-.2c0 0 0-.1-.1-.1l-11-11.2-.1-.1c-.1 0-.1-.1-.2-.1s-.1-.1-.2-.1-.1-.1-.2-.1-.1-.1-.2-.1-.1 0-.2-.1h-.2-.1l-10.5-.7h-.7c-.1 0-.1 0-.2.1-.1 0-.1.1-.2.1s-.1.1-.2.1-.1.1-.1.1c-.1 0-.1.1-.2.1L43.4 64.9c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l44.1-43.4 8.9.6 9.9 10.1.5 8.9-44.1 43.4c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l53.4-52.4zm-8.6-3.7v-.1-.2c0-.1 0-.1-.1-.2 0-.1 0-.1-.1-.2 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2-.1-.1-.1-.2c0 0 0-.1-.1-.1l-11-11.2-.1-.1c-.1 0-.1-.1-.2-.1s-.1-.1-.2-.1-.1-.1-.2-.1-.1-.1-.2-.1-.1 0-.2-.1h-.2-.1l-6.1-.4 4.7-4.7 8.9.6 9.9 10.1.5 8.9-4.8 4.7-.1-6z"
        fill={props.primaryColor}
      />
      <path
        d="M52.7 74.3l45.5-44.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L51.3 72.9c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0zM60.6 82.4l45.5-44.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L59.2 81c-.4.4-.4 1 0 1.4.4.4 1.1.4 1.4 0z"
        fill={props.secondaryColor}
      />
      <path
        d="M64.1 93c-.2-1.1-1.3-1.8-2.4-1.5l-16.2 3.7-7.5-7.6 4-16.1c.3-1.1-.4-2.2-1.5-2.4-1.1-.3-2.2.4-2.4 1.5l-7.1 29c0 .2-.1.3-.1.5v.4c0 .1.1.2.1.3 0 0 0 .1.1.1.1.1.2 0 .3.1v-.2V101.1c.1.1.2.3.4.3 0 0 .1.1.2.1.1.1.2.1.3.2.1 0 .3.1.4.1h.5l29.3-6.6c1.2 0 1.9-1.1 1.6-2.2zm-23.2 3.2l-5.3 1.2 1.3-5.3 4 4.1z"
        fill={props.primaryColor}
      />
      <path
        d="M108 54.4v52.9c0 3.3-3 5.6-6.3 5.6H25c-3.3 0-6-2.3-6-5.6v-76c0-3.3 2.7-6.4 6-6.4h55.8l4.1-4H25c-5.5 0-10 4.9-10 10.4v76c0 5.5 4.5 9.6 10 9.6h76.6c5.5 0 10.3-4.1 10.3-9.6V50.5l-3.9 3.9z"
        fill={props.secondaryColor}
      />
    </svg>
  )
}

export default SvgComponent
