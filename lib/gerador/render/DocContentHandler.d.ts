import { DocOptions, DocLine, DocLineType, DocField } from '../../types';
export declare class DocContentHandler {
    private options;
    private content;
    constructor(options: DocOptions);
    get doc(): DocLine[];
    addLine(line: DocLineType, height: number, marginY?: number): DocLine;
    addField(line: DocLine, field: DocField): DocField;
    getField(id: string): DocField;
}
