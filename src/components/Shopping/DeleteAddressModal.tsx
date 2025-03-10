"use client"

interface DeleteAddressModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteAddressModal({ isOpen, setIsOpen }: DeleteAddressModalProps) {

    return isOpen? (
        <>
        <section className="absolute inset-0 bg-black bg-opacity-15 z-0"></section>
        <div className="fixed w-[30rem] h-32 bg-white rounded-2xl z-10 justify-self-center">
            
        <h1 className="font-bold text-gray-800 pt-3 pr-3">آیا مطمئنید که این آدرس حذف شود؟</h1>
        <button className="bg-gray-400 mt-10 mr-48 py-2 px-12 rounded-2xl text-white font-medium"
        onClick={() => {setIsOpen(false)}}
        >خیر</button>
        <button className="bg-[#63d0df] mt-10 mr-4 py-2 px-12 rounded-2xl text-white font-medium"
        onClick={() => {setIsOpen(false)}}
        >بله</button>
        </div>
        </>
    ): null;
} 

export default DeleteAddressModal