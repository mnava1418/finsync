import { isAuthenticated, signUp } from '../authService';

describe('authService', () => {
  describe('isAuthenticated', () => {
    it('should return false', () => {
      // Act
      const result = isAuthenticated();

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('signUp', () => {
    it('should log email and password', () => {
      // Arrange
      const consoleLogSpy = jest.spyOn(console, 'log');
      const email = 'test@example.com';
      const password = 'password123';

      // Act
      signUp(email, password);

      // Assert
      expect(consoleLogSpy).toHaveBeenCalledWith('email', email);
      expect(consoleLogSpy).toHaveBeenCalledWith('password', password);

      // Cleanup
      consoleLogSpy.mockRestore();
    });
  });
});
