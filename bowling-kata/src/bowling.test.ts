import { describe, expect, test } from 'vitest'
import { bowling } from './bowling'

describe('bowling', () => {
  test('1', () => {
    expect(bowling(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'])).toBe(300)
  })
  test('2', () => {
    expect(bowling(['9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-'])).toBe(90)
  })
  test('3', () => {
    expect(bowling(['5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/'])).toBe(150)
  })
})
