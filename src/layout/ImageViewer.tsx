import React from 'react';
import { HiMiniXMark } from "react-icons/hi2";

interface Props {
  img: string;
  onClose: () => void;
}

const ImageViewer = ({ img, onClose }: Props): React.JSX.Element => {
  return (
    <div className='position-fixed w-100 h-100' id='img-viewer'>
      <div className="img-holder text-center position-relative rounded-4">
        <img
          src={img}
          alt='Selected'
          className='rounded-3 object-fit-contain'
        />
        <button
          className='close-btn position-absolute border border-2 border-black rounded-circle text-black'
          onClick={onClose}
          aria-label="Close image viewer">
          <HiMiniXMark size={20} />
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
