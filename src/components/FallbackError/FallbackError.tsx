import './styles/FallbackError.css';
import { RiEmotionSadLine } from '@remixicon/react';

export const FallbackError = ({ error }: { error: Error }) => (
  <div className='error-container'>
    <div>
      <RiEmotionSadLine color='#4338CA' size='32px' />
    </div>
    <p className='error-title'>Unexpected error</p>
    <p className='error-text'>{error.message}</p>
  </div>
);
