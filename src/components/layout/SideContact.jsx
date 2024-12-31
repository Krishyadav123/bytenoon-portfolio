import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const SideContact = ({title}) => {
  return (
    <Sheet >
    <SheetTrigger>
        <div className="px-5 text-sm md:text-base rounded-md py-2 bg-primary text-white">{title}</div>
    </SheetTrigger>
    <SheetContent side="right" className="w-[300px] md:w-[400px] bg-white">

    <SheetHeader>
            <VisuallyHidden>
                <SheetTitle>Sidebar Menu</SheetTitle>
            </VisuallyHidden>
            <SheetDescription></SheetDescription>
            </SheetHeader>
        <div className='mt-20'>
            <div>
                <h1 className='text-xl md:text-3xl font-bold'>Bytenoon</h1>
              
            </div>
            <div className='mt-5'>
            </div>
            <div className='mt-2 flex flex-col gap-2'>
               
                <Input
                    placeholder="Enter your Name"
                    type="text"
                    className="w-full h-10 md:h-12"
                />
                <Input
                    placeholder="Enter your Email"
                    type="email"
                    className="w-full h-10 md:h-12"
                />
            </div>
            <div className='mt-5 e-full flex justify-between items-end'>
                <div className="w-full">
                    <Button size='full' className='bg-primary text-white text-sm md:text-lg'>Submit</Button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-3 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className='flex gap-6 mt-5'>
            <FontAwesomeIcon icon={faInstagram} className='text-black text-4xl' />
            <FontAwesomeIcon icon={faFacebook} className='text-black text-4xl' />
            <FontAwesomeIcon icon={faTwitter} className='text-black text-4xl' />
            <FontAwesomeIcon icon={faLinkedin} className='text-black text-4xl' />
            </div>
        </div>
    </SheetContent>
</Sheet>
  )
}


export default SideContact