
import { useState, useImperativeHandle, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import ToastMessage from './ToastMessage'

interface IToastRef {
  info: (msg: string, options?: { duration?: number }) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const toast: { current: IToastRef | null } = { current: null }

const ToastContainer = () => {
  const toastRef = useRef<IToastRef>(null)
  const [toastList, setToastList] = useState<{ id: string; msg: string; duration?: number }[]>([])
  

  useImperativeHandle(toastRef, () => {
    return {
      info: (msg: string, option) => {
        const item = {
          msg, duration: option?.duration, id: `${+new Date()}`
        }

        return setToastList(list => [...list, item])
      }
    }
  })

  useEffect(() => {
    toast.current = toastRef.current
  }, [])

  const renderDom = (
    <div className='fixed top-0 left-0 right-0 z-[999] flex justify-center flex-col pt-[20px]'>
      {
        toastList.map((item) => {
          return <ToastMessage key={item.id} {...item}>{ item.msg }</ToastMessage>
        })
      }
    </div>
  )

  return typeof document !== 'undefined' ? createPortal(renderDom, document.body) : renderDom
}

export default ToastContainer