import * as React from 'react';
import Modal from '@mui/material/Modal';
import classes from './navbar.module.css'

const style = {
    position: 'absolute',
    top: '64px',
    right: '2px',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ openstatus, close }) {
    const [open, setOpen] = React.useState(false);


    React.useEffect(() => {
        setOpen(openstatus)
    }, [openstatus])

    return (
        <div>
            <Modal
                disableScrollLock={true}
                disableAutoFocus={true}
                hideBackdrop={true}
                open={openstatus}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={`md:top-[64px]  absolute p-5 md:w-[550px]  w-full md:right-[4px] bg-white ${classes.shadow} `}>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5 items-center '>
                            <img className='h-6' src="/icons/google.png" alt="" />
                            <p className='text-xl md:text-2xl font-thin font-sans'>Sign in with google</p>
                        </div>
                        <img className='h-6' onClick={close} src="/icons/close.svg" alt="" />
                    </div>
                    <div className='w-full mt-5 h-[2px] bg-[#707070] opacity-40'></div>
                    <div className='flex mt-10 relative'>
                        <div className='w-[250px] md:w-[370px] flex flex-col gap-10 z-10'>
                            <h2 className='text-2xl md:text-3xl font-[500] font-sans'>Use your Google Account to sign in to VOH.org</h2>
                            <p className='text-lg md:text-2xl w-[200px] md:w-[320px] font-thin font-sans'>No more passwords to remember. Signing in is fast, simple and secure.</p>
                        </div>
                        <img className='h-[80px] md:h-[130px] right-[-20px] bottom-[0px] absolute' src="/key.png" alt="" />
                    </div>
                    <button className='bg-[#3976EA] text-white mt-10 w-full h-10 rounded-[10px]'>Continue</button>
                </div>
            </Modal>
        </div>
    );
}