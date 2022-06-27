import { WakoBaseHttpService } from '@wako-app/mobile-sdk';
import { Observable } from 'rxjs';

export class PremiumizeApiService extends WakoBaseHttpService {
  private static apikey;

  static hasApiKey() {
    return !!this.apikey;
  }

  static setApiKey(apikey: string) {
    this.apikey = apikey;
  }

  static override getApiBaseUrl() {
    return 'https://www.premiumize.me/api';
  }

  static override getHeaders() {
    return {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  }

  static override get<T>(url: string, params?: any, cacheTime?: string | number): Observable<T> {
    if (!params) {
      params = {};
    }

    if (!params['apikey']) {
      params['apikey'] = this.apikey;
    }
    return super.get<T>(url, params, cacheTime, 50000);
  }

  static override post<T>(url: string, body: Object, cacheTime?: string) {
    if (!url.match('apikey')) {
      url += '?apikey=' + this.apikey;
    }

    return super.request<T>(
      {
        method: 'POST',
        url: this.getApiBaseUrl() + url,
        body: body,
        headers: this.getHeaders(),
      },
      cacheTime
    );
  }
}
