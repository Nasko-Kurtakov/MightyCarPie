import * as ts from "typescript";
import * as Lint from "../index";
export declare class Rule extends Lint.Rules.TypedRule {
    static metadata: Lint.IRuleMetadata;
    static INVALID_TYPES_ERROR: string;
    static SUGGEST_TEMPLATE_LITERALS: string;
    applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): Lint.RuleFailure[];
}
