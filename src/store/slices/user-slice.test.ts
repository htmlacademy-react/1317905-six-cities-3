import { describe, it, expect } from 'vitest';
import userReducer, { setUser, setAuthStatus } from './user-slice';
import { checkAuthAction, loginAction } from '../api-actions';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

describe('user-slice', () => {
  const initialState = {
    user: null,
    authorizationStatus: AuthorizationStatus.Unknown,
  };

  it('should return initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setUser', () => {
    const mockUser = { email: 'test@test.com' } as UserData;
    const newState = userReducer(initialState, setUser(mockUser));
    expect(newState.user).toEqual(mockUser);
  });

  it('should handle setAuthStatus', () => {
    const newState = userReducer(initialState, setAuthStatus(AuthorizationStatus.Auth));
    expect(newState.authorizationStatus).toBe(AuthorizationStatus.Auth);
  });

  describe('checkAuthAction', () => {
    it('should set user and Auth on fulfilled', () => {
      const mockUser = { email: 'test' } as UserData;
      const action = { type: checkAuthAction.fulfilled.type, payload: mockUser };
      const newState = userReducer(initialState, action);
      expect(newState.user).toEqual(mockUser);
      expect(newState.authorizationStatus).toBe(AuthorizationStatus.Auth);
    });

    it('should set NoAuth on rejected', () => {
      const action = { type: checkAuthAction.rejected.type };
      const newState = userReducer(initialState, action);
      expect(newState.user).toBeNull();
      expect(newState.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    });
  });

  describe('loginAction', () => {
    it('should set user and Auth on fulfilled', () => {
      const mockUser = { email: 'test' } as UserData;
      const action = { type: loginAction.fulfilled.type, payload: mockUser };
      const newState = userReducer(initialState, action);
      expect(newState.user).toEqual(mockUser);
      expect(newState.authorizationStatus).toBe(AuthorizationStatus.Auth);
    });

    it('should set NoAuth on rejected', () => {
      const action = { type: loginAction.rejected.type };
      const newState = userReducer(initialState, action);
      expect(newState.user).toBeNull();
      expect(newState.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    });
  });

});
