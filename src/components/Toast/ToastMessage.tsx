
import clsx from 'clsx'
import { FC, useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './index.module.css'

interface ToastMsgProps {
  children?: React.ReactNode
  duration?: number
}

const ToastMessage: FC<ToastMsgProps> = (props) => {

  const {
    children,
    duration = 3000
  } = props

  const msgRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [enter, setEnter] = useState(false)

  useEffect(() => {
    setVisible(true)
    setTimeout(() => {
      setEnter(true)
    }, 100)
  }, [])

  return  visible && <CSSTransition 
  nodeRef={msgRef}
    in={enter} 
    unmountOnExit
    timeout={duration} 
    classNames="my-toast-msg"
    onEntered={() =>{
      setEnter(false)
    }}
    onExiting={() => {
      setTimeout(() => {
        setVisible(false)
      }, 300);
    }}
  >
    <div 
      ref={msgRef}
      className={clsx(
        'mt-[20px] mx-auto px-[40px] min-h-[40px] py-[8px] bg-[#F8F4F1] text-[#989391] text-[30px] font-playfair leading-[40px] rounded-lg',
        styles.my_toast_msg
    )}>{ children }</div>  
  </CSSTransition>
}

export default ToastMessage