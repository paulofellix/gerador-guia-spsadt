import { cloneDeep } from 'lodash'
import { DocOptions, DocLine, DocLineType, DocField } from '../../types'

export class DocContentHandler {
  private content: DocLine[] = []

  constructor(private options: DocOptions) {}

  get doc() {
    return this.content
  }

  addLine(line: DocLineType, height: number, marginY = 0) {
    // first line, no need to calculate _y
    if (this.content.length === 0) {
      this.content.push({
        _index: this.content.length + 1,
        _x: this.options.startFieldsX,
        _y: this.options.startY,
        height: height,
        lineType: line,
        fields: [],
      })
      return cloneDeep(this.content[0])
    } else {
      this.content.push({
        _index: this.content.length + 1,
        _x: this.options.startFieldsX,
        // _y receives the last line _y + last line height + gapLines + marginY
        _y:
          this.content[this.content.length - 1]._y +
          this.content[this.content.length - 1].height +
          this.options.gapLines +
          marginY,
        height: height,
        lineType: line,
        fields: [],
      })
      return cloneDeep(this.content[this.content.length - 1])
    }
  }

  addField(line: DocLine, field: DocField) {
    const { _index } = line
    if (!_index) {
      throw new Error('Line not found')
    }
    const originalLine = this.content[_index - 1]
    if (originalLine.fields.length === 0) {
      originalLine.fields.push({
        ...field,
        x: originalLine.lineType === 'custom' ? originalLine._x + field.x : originalLine._x,
        y: originalLine.lineType === 'custom' ? originalLine._y + field.y : originalLine._y,
        height: originalLine.lineType === 'custom' ? field.height : originalLine.height,
        fontSize: field.fontSize ?? this.options.fieldLabelSize,
      })
      return cloneDeep(originalLine.fields[0])
    } else {
      originalLine.fields.push({
        ...field,
        x:
          originalLine.lineType === 'custom'
            ? originalLine._x + field.x
            : originalLine.fields[originalLine.fields.length - 1].x +
              originalLine.fields[originalLine.fields.length - 1].width +
              this.options.gapFields,
        y: originalLine.lineType === 'custom' ? originalLine._y + field.y : originalLine._y,
        height: originalLine.lineType === 'custom' ? field.height : originalLine.height,
        fontSize: field.fontSize ?? this.options.fieldLabelSize,
      })
      return cloneDeep(originalLine.fields[originalLine.fields.length - 1])
    }
  }

  getField(id: string) {
    for (const line of this.content) {
      for (const field of line.fields) {
        if (field.id === id) {
          return field
        }
      }
    }
    return null
  }
}
