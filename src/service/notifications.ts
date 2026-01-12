import { NotificationPreferencesResponse } from '../types';

const API_URL =
  'https://www.greatfrontend.com/api/projects/challenges/account/notifications';

export const getNotifications =
  async (): Promise<NotificationPreferencesResponse> => {
    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const responseJson: NotificationPreferencesResponse = await response.json();
    return responseJson;
  };

export const updateNotifications = async ({
  preferences,
}: NotificationPreferencesResponse): Promise<NotificationPreferencesResponse> => {
  const response = await fetch(`${API_URL}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ preferences }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to update: ${response.status} ${response.statusText}. ${errorText}`
    );
  }

  const data: NotificationPreferencesResponse = await response.json();
  return data;
};
