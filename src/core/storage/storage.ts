import { STORAGE_KEYS } from '../constants';
import { AuthTokens, User } from '../types';

export interface IStorageDriver {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
}

// In-memory fallback driver that works seamlessly across platforms & tests
class MemoryStorageDriver implements IStorageDriver {
  private memory = new Map<string, string>();

  async getItem(key: string): Promise<string | null> {
    return this.memory.get(key) ?? null;
  }

  async setItem(key: string, value: string): Promise<void> {
    this.memory.set(key, value);
  }

  async removeItem(key: string): Promise<void> {
    this.memory.delete(key);
  }

  async clear(): Promise<void> {
    this.memory.clear();
  }
}

export class AppStorage {
  private driver: IStorageDriver;

  constructor(driver?: IStorageDriver) {
    this.driver = driver || new MemoryStorageDriver();
  }

  public setDriver(driver: IStorageDriver) {
    this.driver = driver;
  }

  async get<T = unknown>(key: string): Promise<T | null> {
    try {
      const raw = await this.driver.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async set<T = unknown>(key: string, value: T): Promise<void> {
    try {
      const raw = JSON.stringify(value);
      await this.driver.setItem(key, raw);
    } catch (e) {
      console.warn(`[AppStorage] Failed to set key: ${key}`, e);
    }
  }

  async remove(key: string): Promise<void> {
    try {
      await this.driver.removeItem(key);
    } catch (e) {
      console.warn(`[AppStorage] Failed to remove key: ${key}`, e);
    }
  }

  async clear(): Promise<void> {
    try {
      await this.driver.clear();
    } catch (e) {
      console.warn('[AppStorage] Failed to clear storage', e);
    }
  }

  // Auth Helpers
  async getTokens(): Promise<AuthTokens | null> {
    return this.get<AuthTokens>(STORAGE_KEYS.ACCESS_TOKEN);
  }

  async setTokens(tokens: AuthTokens): Promise<void> {
    await this.set(STORAGE_KEYS.ACCESS_TOKEN, tokens);
  }

  async clearTokens(): Promise<void> {
    await this.remove(STORAGE_KEYS.ACCESS_TOKEN);
    await this.remove(STORAGE_KEYS.REFRESH_TOKEN);
  }

  async getUser(): Promise<User | null> {
    return this.get<User>(STORAGE_KEYS.USER_DATA);
  }

  async setUser(user: User): Promise<void> {
    await this.set(STORAGE_KEYS.USER_DATA, user);
  }

  async clearUser(): Promise<void> {
    await this.remove(STORAGE_KEYS.USER_DATA);
  }

  // Onboarding Helpers
  async getHasCompletedOnboarding(): Promise<boolean> {
    const val = await this.get<boolean>(STORAGE_KEYS.ONBOARDING_COMPLETED);
    return Boolean(val);
  }

  async setHasCompletedOnboarding(completed: boolean): Promise<void> {
    await this.set(STORAGE_KEYS.ONBOARDING_COMPLETED, completed);
  }
}

export const storage = new AppStorage();
