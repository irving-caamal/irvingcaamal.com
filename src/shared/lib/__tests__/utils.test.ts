import { cn, getInitials, slugify, debounce } from '../utils';

describe('shared/lib/utils', () => {
  describe('cn', () => {
    it('merges class names correctly', () => {
      expect(cn('px-2 py-1', 'bg-red-500')).toBe('px-2 py-1 bg-red-500');
    });

    it('handles conditional classes', () => {
      expect(cn('base-class', false, 'always-class'))
        .toBe('base-class always-class');
    });

    it('merges conflicting Tailwind classes', () => {
      expect(cn('px-2 px-4')).toBe('px-4');
    });

    it('handles empty inputs', () => {
      expect(cn()).toBe('');
    });
  });

  describe('getInitials', () => {
    it('extracts initials from full name', () => {
      expect(getInitials('Irving de Jesús Caamal Alcocer')).toBe('IDJCA');
    });

    it('handles single name', () => {
      expect(getInitials('Irving')).toBe('I');
    });

    it('handles empty string', () => {
      expect(getInitials('')).toBe('');
    });

    it('normalizes extra spaces', () => {
      expect(getInitials('John  Doe')).toBe('JD');
    });

    it('handles lowercase names', () => {
      expect(getInitials('john doe')).toBe('JD');
    });
  });

  describe('slugify', () => {
    it('converts text to URL-friendly slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('removes special characters', () => {
      expect(slugify('React & TypeScript!')).toBe('react-typescript');
    });

    it('handles multiple spaces', () => {
      expect(slugify('Multiple   Spaces  Here')).toBe('multiple-spaces-here');
    });

    it('removes existing hyphens', () => {
      expect(slugify('already-clean')).toBe('alreadyclean');
    });

    it('handles empty string', () => {
      expect(slugify('')).toBe('');
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
      jest.clearAllTimers();
    });

    it('delays function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('cancels previous calls when called multiple times', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('passes arguments to debounced function', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('arg1', 42, { key: 'value' });

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledWith('arg1', 42, { key: 'value' });
    });
  });
});