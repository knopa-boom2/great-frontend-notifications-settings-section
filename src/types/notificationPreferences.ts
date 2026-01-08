/**
 * Notification channel preferences (email, push, SMS)
 */
export interface NotificationChannel {
  email: boolean;
  push: boolean;
  sms: boolean;
}

/**
 * Available notification categories
 */
export type NotificationCategory =
  | 'comments'
  | 'features'
  | 'friend_requests'
  | 'friend_updates'
  | 'marketing';

/**
 * Notification preferences for all categories
 */
export interface NotificationPreferences {
  comments: NotificationChannel;
  features: NotificationChannel;
  friend_requests: NotificationChannel;
  friend_updates: NotificationChannel;
  marketing: NotificationChannel;
}

/**
 * Root response structure for notification preferences API
 */
export interface NotificationPreferencesResponse {
  preferences: NotificationPreferences;
}

