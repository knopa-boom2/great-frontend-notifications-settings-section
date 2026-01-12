import { snakeCaseToText } from '../../utils/snakeCaseToText.ts';
import {
  NotificationCategory,
  NotificationChannel as NotificationChannelType,
} from '../../types';
import { NotificationChannel } from '../NotificationChannel/NotificationChannel.tsx';
import './styles/NotificationSettingItem.css';

interface NotificationSettingItemProps {
  category: NotificationCategory;
  channels: NotificationChannelType;
  onChannelChange: (
    category: NotificationCategory,
    channelType: keyof NotificationChannelType,
    value: boolean
  ) => void;
}

const CHANNEL_ORDER_ARRAY: Array<keyof NotificationChannelType> = [
  'push',
  'email',
  'sms',
];

export const NotificationSettingItem = ({
  category,
  channels,
  onChannelChange,
}: NotificationSettingItemProps) => {
  return (
    <>
      <div className='notification-label'>{snakeCaseToText(category)}</div>
      <div className='notification-channels'>
        {CHANNEL_ORDER_ARRAY.map((channel) => (
          <NotificationChannel
            key={channel}
            category={category}
            channelValue={channels[channel]}
            channelType={channel}
            onToggle={onChannelChange}
          />
        ))}
      </div>
    </>
  );
};
