import { describe, expect, test } from 'vitest'
import { bowling } from './bowling'

describe('bowling', () => {
  test('1', () => {
    expect(bowling(['--', '--', '--', '--', '--', '--', '--', '--', '--', '--'])).toBe(0)
  })
  test('2', () => {
    expect(bowling(['9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-', '9-'])).toBe(90)
  })

  test('3', () => {
    expect(bowling(['12', '12', '12', '12', '12', '12', '12', '12', '12', '12'])).toBe(30)
  })

  test('4', () => {
    expect(bowling(['5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '12'])).toBe(8 * 15 + 11 + 3)
  })

  test('5', () => {
    expect(bowling(['5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/', '5/3'])).toBe(9 * 15 + 10 + 3)
  })
})
