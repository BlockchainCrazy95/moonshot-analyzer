import { useState, useEffect } from "react";
import ReactModal from 'react-modal';

const DetailModal = (props) => {
    const { isOpen, setOpen, data } = props;
    console.log(data)
    return (
        <>
            <ReactModal
                closeTimeoutMS={500}
                isOpen={isOpen}
                className={'absolute flex min-h-full items-center justify-center py-8 outline-none'}
                overlayClassName={'fixed flex inset-0 justify-center backdrop-blur-sm z-[99] overflow-y-auto'}
            >
                <div className="mx-auto px-4 py-6 bg-[#1b1b1e] border border-[#888] rounded-xl">
                    <div className="min-w-[500px]">
                        Status
                    </div>
                    <div className="w-full">
                        <iframe
                            title="Dexscreener"
                            width={1200}
                            height={640}
                            src={`${data.url}?embed=1&theme=dark&chartResolution=1&drawingToolbars=false&info=1&trades=0&swaps=0`}
                        ></iframe>
                    </div>
                    <div className="w-full">
                        <button
                        className="w-44 block btn bg-gray-500 hover:bg-gray-600 border-none transition text-white outline-none rounded-xl mt-5 mx-auto"
                        onClick={() => setOpen(false)}
                        >
                        Close
                        </button>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export default DetailModal;