import { Observable } from 'rxjs';
import { WakoBaseHttpService } from '@wako-app/mobile-sdk';

export class PremiumizeApiService extends WakoBaseHttpService {
  private static apikey;

  static hasApiKey() {
    return !!this.apikey;
  }

  static setApiKey(apikey: string) {
    this.apikey = apikey;
  }

  static getApiBaseUrl() {
    return 'https://www.premiumize.me/api';
  }

  static getHeaders() {
    return {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  }

  static get<T>(url: string, params?: any, cacheTime?: string | number): Observable<T> {
    if (!params) {
      params = {};
    }

    if (!params['apikey']) {
      params['apikey'] = this.apikey;
    }
    return super.get<T>(url, params, cacheTime);
  }

  static post<T>(url: string, body: Object, cacheTime?: string) {
    if (!url.match('apikey')) {
      url += '?apikey=' + this.apikey;
    }

    return super.request<T>(
      {
        method: 'POST',
        url: this.getApiBaseUrl() + url,
        body: body,
        headers: this.getHeaders()
      },
      cacheTime
    );
  }
}
