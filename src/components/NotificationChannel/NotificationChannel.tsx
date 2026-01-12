import { ChangeEvent } from 'react';

import { RiToggleFill, RiToggleLine } from '@remixicon/react';
import {
  NotificationChannel as NotificationChannelType,
  NotificationCategory,
} from '../../types';
import './styles/NotificationChannel.css';

interface NotificationChannelProps {
  category: NotificationCategory;
  channelValue: boolean;
  channelType: keyof NotificationChannelType;
  onToggle: (
    category: NotificationCategory,
    channelType: keyof NotificationChannelType,
    value: boolean
  ) => void;
}

export const NotificationChannel = ({
  category,
  channelValue,
  channelType,
  onToggle,
}: NotificationChannelProps) => {
  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    onToggle(category, channelType, event.currentTarget.checked);
  };

  return (
    <label className='channel-label'>
      <input
        type='checkbox'
        checked={channelValue}
        onChange={handleToggle}
        style={{ display: 'none' }}
      />
      {channelValue ? (
        <RiToggleFill size={32} color='#4338CA' />
      ) : (
        <RiToggleLine size={32} color='#D1D5DB' />
      )}
    </label>
  );
};
