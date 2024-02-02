import { toast } from "@/components/Toast";
 
const Home = () => {

  const handleShowToast = () => {
    toast.current?.info('Hello World!', {
      duration: 2000
    })  
  }

  return (
    <>
      <button className='mt-[300px] rounded-xl bg-[#7ab7f8] text-[#fff] px-[12px] py-[8px] ' onClick={() => handleShowToast()}>
        Show Toast
      </button>
    </>
  )
}

export default Home