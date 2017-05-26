import {InjectionToken} from '@angular/core';
import {environment} from '../environments/environment';
/**
 * Created by martin on 23.03.2017.
 * Configuration Data of the application.
 */

export class AppConfig {
  // URL to Google translate API (optional)
  GOOGLETRANSLATE_API_URL?: string;
  // Your API Key
  GOOGLETRANSLATE_API_KEY?: string;
  BUILDVERSION: string;
  BUILDTIME: string;
}

export const APP_CONFIG_VALUE: AppConfig = {
  // set values here
  'BUILDVERSION': '0.1.0',
  'BUILDTIME': '26.05.2017',
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
