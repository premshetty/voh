import * as React from 'react';
import Modal from '@mui/material/Modal';



export default function BasicModal({ openstatus }) {
    const [open, setOpen] = React.useState(openstatus);
    const [opacity, setOpacity] = React.useState(0.5)
    React.useEffect(() => {
        setOpen(openstatus)
    }, [openstatus])

    const handleClose = () => setOpen(false);
    function ValidateEmail(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            setOpacity(1)
        } else {
            setOpacity(0.5)
        }
    }
    return (
        <div style={{ outline: 'none' }}>

            <Modal
                className='outline-none border-0'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ outline: 'none' }}
            >
                <div className='absolute p-10 top-[0%] left-0 h-[600px] md:top-[25%] md:left-[25%] md:h-[400px] w-full md:w-[700px]' style={{ backgroundImage: `url('/modal_bg.png')` }}>
                    <div className='h-full w-full bg-white gap-6 flex flex-col justify-start p-3 md:p-10 items-center'>
                        <h2 className='text-2xl md:text-[30px] font-bold mt-16 md:mt-8'>Get exclusive invites for VOH Events</h2>
                        <p className='text-center text-xs md:text-sm opacity-80'>Our biggest stories delivered straight into your inbox everyday !</p>
                        <p className='text-[8px] md:text-xs opacity-40'>Promise, we don’t spam !</p>
                        <div className='h-16 w-full flex-col gap-5 md:flex-row  md:w-[80%] md:border-[4px] border-[#00000070] flex md:gap-1 pl-2 p-[3px]'>
                            <input onChange={ValidateEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className='border-[1px] md:border-[0px] border-[#00000070] px-3 py-4 flex-grow h-full placeholder:font-[500] outline-none placeholder:text-[#000000af]' placeholder='Your Email Adress' type="text" />
                            <button style={{ opacity: opacity }} className='bg-button_cta min-h-[40px] text-white px-6'>Subscribe</button>
                        </div>
                    </div>
                    <img src='/icons/close.svg' className='h-8 absolute top-16 right-16 cursor-pointer ' onClick={() => setOpen(false)} />
                </div>
            </Modal>
        </div >
    );
}