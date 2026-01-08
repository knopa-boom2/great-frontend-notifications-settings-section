import { useEffect, useState } from 'react';
import './styles/NotificationSettings.css';
import {
  getNotifications,
  updateNotifications,
} from '../../service/notifications.ts';
import {
  NotificationCategory,
  NotificationChannel,
  NotificationPreferences,
  NotificationPreferencesResponse,
} from '../../types';
import { NotificationSettingItem } from '../NotificationSettingItem/NotificationSettingItem.tsx';
import { ToastContainer, toast } from 'react-toastify';
import { ToasterMessage } from '../ToasterMessage/ToasterMessage.tsx';

export const NotificationSettings = () => {
  const [notificationPreferences, setNotificationPreferences] =
    useState<NotificationPreferences | null>(null);

  const loadPreferences = async () => {
    try {
      const notifications: NotificationPreferencesResponse =
        await getNotifications();
      setNotificationPreferences(notifications.preferences);
    } catch (error) {
      console.error('Failed to load preferences:', error);
    }
  };

  useEffect(() => {
    loadPreferences();
  }, []);

  const saveChangesHandler = async () => {
    if (!notificationPreferences) return;

    const updatedData: NotificationPreferencesResponse = {
      preferences: notificationPreferences,
    };

    try {
      const response = await updateNotifications(updatedData);

      if (response?.preferences) {
        setNotificationPreferences(response.preferences);
        toast.success(
          () => (
            <ToasterMessage
              data={{
                title: 'Success',
                text: 'Changes saved successfully',
                isSuccess: true,
              }}
            />
          ),
          {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: true,
          }
        );
      }
    } catch (error) {
      console.error('Failed to save:', error);

      toast.error(
        () => (
          <ToasterMessage
            data={{
              title: 'Success',
              text: 'Changes saved successfully',
              isSuccess: false,
            }}
          />
        ),
        {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
        }
      );
    }
  };

  const updateChannelPreference = (
    category: NotificationCategory,
    channelType: keyof NotificationChannel,
    value: boolean
  ) => {
    setNotificationPreferences((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [category]: {
          ...prev[category],
          [channelType]: value,
        },
      };
    });
  };

  return (
    <div className='notification-settings'>
      <div className='notification-controls'>
        <div className='column-headings'>
          <span>Push</span>
          <span>Email</span>
          <span>SMS</span>
        </div>
        <div className='notifications-list'>
          {notificationPreferences &&
            (
              Object.entries(notificationPreferences) as [
                NotificationCategory,
                NotificationChannel,
              ][]
            ).map(([category, channels]) => (
              <div key={category} className='notification-row'>
                <NotificationSettingItem
                  category={category}
                  channels={channels}
                  onChannelChange={updateChannelPreference}
                />
              </div>
            ))}
        </div>
      </div>
      <div className='save-cta'>
        <button onClick={saveChangesHandler}>Save changes</button>
      </div>
      <ToastContainer />
    </div>
  );
};
