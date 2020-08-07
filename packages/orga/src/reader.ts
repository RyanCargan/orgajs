import { read as _read } from 'text-kit'
import { Point, Position } from 'unist'

export const read = (text: string) => {

  const {
    shift,
    substring,
    linePosition,
    toIndex,
    match,
    location,
  } = _read(text)

  let cursor = { line: 1, column: 1 }

  const isStartOfLine = () => cursor.column === 1

  const getChar = (offset = 0) => {
    return text.charAt(toIndex(cursor) + offset)
  }

  const endOfLine = (ln: number): Point => {
    return location(toIndex(linePosition(ln).end))
  }

  const skipWhitespaces = () : number => {
    const a = eat(/^\s+/)
    return distance(a)
  }

  const now = () => cursor

  const eat = (param: 'char' | 'line' | RegExp | number = 'char') : Position => {
    const start = now()
    if (param === 'char') {
      cursor = shift(start, 1)
    } else if (param === 'line') {
      const lp = linePosition(cursor.line)
      cursor = lp.end
    } else if (typeof param === 'number') {
      cursor = shift(start, param)
    } else {
      const m = param.exec(substring({ start: cursor }))
      if (m) {
        cursor = location(toIndex(cursor) + m.index + m[0].length)
      }
    }

    return {
      start,
      end: cursor,
    }
  }

  const eol = () => endOfLine(cursor.line)

  const EOF = () => {
    return toIndex(now()) >= text.length - 1
  }

  const distance = ({ start, end }: Position) : number => {
    return toIndex(end) - toIndex(start)
  }

  const jump = (point: Point) => {
    cursor = point
  }

  const reader: Reader = {
    isStartOfLine,
    getChar,
    getLine: () => substring({ start: cursor }),
    skipWhitespaces,
    substring,
    now,
    distance,
    EOF,
    eat,
    eol,
    jump,
    match: (pattern: RegExp, position: Position = { start: now(), end: eol() }) => match(pattern, position),
  }

  return reader
}

export interface Reader {
  isStartOfLine: () => boolean;
  getChar: (offset?: number) => string;
  getLine: () => string;
  skipWhitespaces: () => number;
  substring: (position: Position) => string;
  now: () => Point;
  eol: () => Point;
  EOF: () => boolean;
  eat: (param?: 'char' | 'line' | number | RegExp) => Position;
  jump: (point: Point) => void;
  distance: (position: Position) => number;
  match: (pattern: RegExp, position?: Position) => {
    captures: string[],
    position: Position;
  } | undefined;
}
